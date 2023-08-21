
-- CreateEnum
CREATE TYPE "Role" AS ENUM ('ADMIN', 'BOARD', 'PC', 'USER');

-- CreateTable
CREATE TABLE "profiles" (
    "id" SERIAL NOT NULL,
    "user_id" UUID NOT NULL,
    "role" "Role" NOT NULL DEFAULT 'USER',
    "email" TEXT NOT NULL,
    "first_name" VARCHAR(255) NOT NULL DEFAULT '',
    "last_name" VARCHAR(255) NOT NULL DEFAULT '',
    "university" VARCHAR(255) NOT NULL DEFAULT '',
    "picture" VARCHAR(255) NOT NULL DEFAULT '',
    "badge_name" VARCHAR(255) NOT NULL DEFAULT '',
    "badge_affiliation" VARCHAR(255) NOT NULL DEFAULT '',
    "special_food" VARCHAR(255) NOT NULL DEFAULT '',
    "special_other" VARCHAR(255) NOT NULL DEFAULT '',
    "homepage" VARCHAR(255) NOT NULL DEFAULT '',
    "photo" VARCHAR(255) NOT NULL DEFAULT '',
    "bio" TEXT NOT NULL DEFAULT '',
    "publications" TEXT NOT NULL DEFAULT '',
    "country_code" VARCHAR(6),
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "profiles_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "countries" (
    "code" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "countries_pkey" PRIMARY KEY ("code")
);

-- CreateIndex
CREATE UNIQUE INDEX "profiles_email_key" ON "profiles"("email");

-- CreateIndex
CREATE INDEX "profiles_role_last_name_idx" ON "profiles"("role", "last_name");

-- CreateIndex
CREATE UNIQUE INDEX "countries_code_key" ON "countries"("code");

-- AddForeignKey
ALTER TABLE "profiles" ADD CONSTRAINT "profiles_country_code_fkey" FOREIGN KEY ("country_code") REFERENCES "countries"("code") ON DELETE SET NULL ON UPDATE CASCADE;
