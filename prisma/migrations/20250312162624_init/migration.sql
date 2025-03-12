-- CreateTable
CREATE TABLE "_referencia" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "referencia" TEXT,
    "valor" TEXT
);

-- CreateTable
CREATE TABLE "cnae" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "codigo" TEXT,
    "descricao" TEXT
);

-- CreateTable
CREATE TABLE "empresas" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "cnpj_basico" TEXT,
    "razao_social" TEXT,
    "natureza_juridica" TEXT,
    "qualificacao_responsavel" TEXT,
    "porte_empresa" TEXT,
    "ente_federativo_responsavel" TEXT,
    "capital_social" REAL
);

-- CreateTable
CREATE TABLE "estabelecimento" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "cnpj_basico" TEXT,
    "matriz_filial" TEXT,
    "nome_fantasia" TEXT,
    "situacao_cadastral" TEXT,
    "data_situacao_cadastral" TEXT,
    "motivo_situacao_cadastral" TEXT,
    "nome_cidade_exterior" TEXT,
    "pais" TEXT,
    "data_inicio_atividades" TEXT,
    "cnae_fiscal" TEXT,
    "cnae_fiscal_secundaria" TEXT,
    "tipo_logradouro" TEXT,
    "logradouro" TEXT,
    "numero" TEXT,
    "complemento" TEXT,
    "bairro" TEXT,
    "cep" TEXT,
    "uf" TEXT,
    "municipio" TEXT,
    "ddd1" TEXT,
    "telefone1" TEXT,
    "ddd2" TEXT,
    "telefone2" TEXT,
    "ddd_fax" TEXT,
    "fax" TEXT,
    "correio_eletronico" TEXT,
    "situacao_especial" TEXT,
    "data_situacao_especial" TEXT,
    "cnpj" TEXT
);

-- CreateTable
CREATE TABLE "motivo" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "codigo" TEXT,
    "descricao" TEXT
);

-- CreateTable
CREATE TABLE "municipio" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "codigo" TEXT,
    "descricao" TEXT
);

-- CreateTable
CREATE TABLE "natureza_juridica" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "codigo" TEXT,
    "descricao" TEXT
);

-- CreateTable
CREATE TABLE "pais" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "codigo" TEXT,
    "descricao" TEXT
);

-- CreateTable
CREATE TABLE "qualificacao_socio" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "codigo" TEXT,
    "descricao" TEXT
);

-- CreateTable
CREATE TABLE "simples" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "cnpj_basico" TEXT,
    "opcao_simples" TEXT,
    "data_opcao_simples" TEXT,
    "data_exclusao_simples" TEXT,
    "opcao_mei" TEXT,
    "data_opcao_mei" TEXT,
    "data_exclusao_mei" TEXT
);

-- CreateTable
CREATE TABLE "socios" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "cnpj" TEXT,
    "cnpj_basico" TEXT,
    "identificador_de_socio" TEXT,
    "nome_socio" TEXT,
    "cnpj_cpf_socio" TEXT,
    "qualificacao_socio" TEXT,
    "data_entrada_sociedade" TEXT,
    "pais" TEXT,
    "representante_legal" TEXT,
    "nome_representante" TEXT,
    "qualificacao_representante_legal" TEXT,
    "faixa_etaria" TEXT
);

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "Company" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "cnpj" TEXT NOT NULL,
    "address" TEXT,
    "phone" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateIndex
CREATE INDEX "idx_cnae" ON "cnae"("codigo");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Company_cnpj_key" ON "Company"("cnpj");
