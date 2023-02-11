-- CreateTable
CREATE TABLE "Usario" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "email" TEXT NOT NULL,
    "senha" TEXT NOT NULL,
    "nome" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Despesas" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "descricao" TEXT NOT NULL,
    "data" TEXT NOT NULL,
    "valor" REAL NOT NULL,
    "authorId" INTEGER NOT NULL,
    CONSTRAINT "Despesas_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "Usario" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Usario_email_key" ON "Usario"("email");
