-- CreateTable
CREATE TABLE "Filme" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "ano" INTEGER NOT NULL,
    "tituloOriginal" TEXT NOT NULL,
    "titulo" TEXT,
    "sinopse" TEXT,
    "classificacaoIndicativa" INTEGER,
    "avaliacaoIMDB" REAL,
    "capa" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
