import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
    const resultado = await prisma.filme.createMany({
        data: [
            {
                "ano": 2003,
                "tituloOriginal": "The Lord of the Rings: The Return of the King",
                "titulo": "O Senhor dos Anéis: O Retorno do Rei",
                "sinopse": "Gandalf e Aragorn lideram o Mundo dos Homens contra o exército de Sauron para desviar o olhar de Frodo e Sam quando eles se aproximam á Montanha da Perdição com o Um Anel.",
                "classificacaoIndicativa": 14,
                "avaliacaoIMDB": 9,
                "capa": "https://m.media-amazon.com/images/M/MV5BNzZiOTI4MWItZGMxZC00NjZkLWJlOWUtMDY5YzE1NzhiNGRhXkEyXkFqcGdeQXVyODc0OTEyNDU@._V1_.jpg"
            },
            {
                "ano": 1966,
                "tituloOriginal": "Il buono, il brutto, il cattivo",
                "titulo": "Três Homens em Conflito",
                "sinopse": "Um impostor se junta com dois homens para encontrar fortuna num remoto cemitério.",
                "classificacaoIndicativa": 14,
                "avaliacaoIMDB": 8.8,
                "capa": "https://m.media-amazon.com/images/M/MV5BNzE2MDJkNTktMzVkYS00ZWFlLWIzOWYtYzRhYjcyYzBmM2MwXkEyXkFqcGdeQXVyMTAyOTE2ODg0._V1_.jpg"
            },
        ]
    })
    console.log(resultado)
}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })