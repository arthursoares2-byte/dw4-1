# SvelteKit

Everything you need to build a Svelte project, powered by [`create-svelte`](https://github.com/sveltejs/kit/tree/main/packages/create-svelte).

## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```bash
# create a new project in my-app
pnpm dlx sv create my-app
```

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
pnpm run dev

# or start the server and open the app in a new browser tab
pnpm run dev -- --open
```

## Building

To create a production version of your app:

```bash
pnpm run build
```

You can preview the production build with `pnpm run preview`.

> To deploy your app, you may need to install an [adapter](https://svelte.dev/docs/kit/adapters) for your target environment.

# Prisma

More information in our documentation:
https://www.prisma.io/docs/getting-started/quickstart

1. install the Prisma CLI as a development dependency in the project:

        pnpm install prisma -D

2. Set up Prisma ORM with SQLite database:

        pnpm exec prisma init --datasource-provider sqlite

3. Set the `DATABASE_URL` in the `.env` file to point to your existing database.

4. Create your schema in `schema.prisma`:

        model Filme {
                id                       Int @id @default(autoincrement())
                ano                      Int
                tituloOriginal           String
                titulo                   String?
                sinopse                  String?
                classificacaoIndicativa  Int?
                avaliacaoIMDB            Float?
                capa                     String?
                createdAt                DateTime @default(now())
                updatedAt                DateTime @updatedAt
        }

5. Migrate your schema:

        pnpm exec prisma migrate dev

## Prisma seeding

More information in our documentation:
https://www.prisma.io/docs/orm/prisma-migrate/workflows/seeding#seeding-your-database-with-typescript-or-javascript

1. Create a new file named `seed.js` in the `/prisma` folder.

2. In the `seed.js` file, import Prisma Client, initialize it and create some records:

```js
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    const resultado = await prisma.filme.createMany({
        data: [
            {
                ano: 2003,
                tituloOriginal: 'The Lord of the Rings: The Return of the King',
                titulo: 'O Senhor dos Anéis: O Retorno do Rei',
                sinopse: 'Gandalf e Aragorn lideram o Mundo dos Homens contra o exército de Sauron para desviar o olhar de Frodo e Sam quando eles se aproximam á Montanha da Perdição com o Um Anel.',
                classificacaoIndicativa: 14,
                avaliacaoIMDB: 9,
                capa: 'https://m.media-amazon.com/images/M/MV5BNzZiOTI4MWItZGMxZC00NjZkLWJlOWUtMDY5YzE1NzhiNGRhXkEyXkFqcGdeQXVyODc0OTEyNDU@._V1_.jpg'
            },
            {
                ano: 1966,
                tituloOriginal: 'Il buono, il brutto, il cattivo',
                titulo: 'Três Homens em Conflito',
                sinopse: 'Um impostor se junta com dois homens para encontrar fortuna num remoto cemitério.',
                classificacaoIndicativa: 14,
                avaliacaoIMDB: 8.8,
                capa: 'https://m.media-amazon.com/images/M/MV5BNzE2MDJkNTktMzVkYS00ZWFlLWIzOWYtYzRhYjcyYzBmM2MwXkEyXkFqcGdeQXVyMTAyOTE2ODg0._V1_.jpg'
            }
        ]
    });
    console.log(resultado);
}

main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });
```

3. Add the `prisma.seed` to your `package.json` file:

        , "prisma": {
            "seed": "node prisma/seed.js"
        }

4. Seed the database:

        pnpm exec prisma db seed

## Explore the data in Prisma Studio

Prisma ORM comes with a built-in GUI to view and edit the data in your database. You can open it using the following command:

    pnpm exec prisma studio
