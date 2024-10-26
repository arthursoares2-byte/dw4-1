import { prisma } from '$lib/server/prisma.js';

export async function load() {
    const filmes = await prisma.filme.findMany()
    return { filmes }
}
