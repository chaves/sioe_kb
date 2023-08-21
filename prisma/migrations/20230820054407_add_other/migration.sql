/*
  Warnings:

  - You are about to drop the column `email` on the `profiles` table. All the data in the column will be lost.

*/
-- CreateEnum
CREATE TYPE "MembershipType" AS ENUM ('Y', 'Y3');

-- DropIndex
DROP INDEX "profiles_email_key";

-- AlterTable
ALTER TABLE "profiles" DROP COLUMN "email";

-- CreateTable
CREATE TABLE "call_disciplines" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "order" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "call_disciplines_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "call_topics" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "order" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "call_topics_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "call_submissions" (
    "id" SERIAL NOT NULL,
    "user_id" UUID NOT NULL,
    "title" VARCHAR(255) NOT NULL,
    "abstract" TEXT NOT NULL,
    "call_discipline_id" INTEGER NOT NULL DEFAULT 0,
    "call_topic_id" INTEGER NOT NULL DEFAULT 0,
    "accepted" BOOLEAN NOT NULL DEFAULT false,
    "notified" BOOLEAN NOT NULL DEFAULT false,
    "canceled" BOOLEAN NOT NULL DEFAULT false,
    "publish" BOOLEAN NOT NULL DEFAULT true,
    "comment" TEXT DEFAULT '',
    "notes" TEXT DEFAULT '',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "call_submissions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "call_authors" (
    "id" SERIAL NOT NULL,
    "first_name" VARCHAR(255) NOT NULL,
    "last_name" VARCHAR(255) NOT NULL,
    "university" VARCHAR(255) NOT NULL,
    "presenter" BOOLEAN NOT NULL DEFAULT false,
    "order" TEXT NOT NULL,
    "call_submission_id" INTEGER NOT NULL,

    CONSTRAINT "call_authors_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "call_files" (
    "id" SERIAL NOT NULL,
    "call_submission_id" INTEGER NOT NULL,
    "file_name" VARCHAR(255) NOT NULL,
    "file_size" INTEGER NOT NULL,

    CONSTRAINT "call_files_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "reviewers" (
    "id" SERIAL NOT NULL,
    "user_id" UUID NOT NULL,
    "pc" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "reviewers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "documents" (
    "id" SERIAL NOT NULL,
    "user_id" UUID NOT NULL,
    "title" VARCHAR(255) NOT NULL,
    "description" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "documents_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "registrations" (
    "id" SERIAL NOT NULL,
    "user_id" UUID NOT NULL,
    "payment_id" INTEGER DEFAULT 0,
    "year" INTEGER NOT NULL,
    "paid" BOOLEAN NOT NULL DEFAULT false,
    "gala" BOOLEAN NOT NULL DEFAULT false,
    "guest_name" VARCHAR(255) NOT NULL DEFAULT '',
    "guest_dietary" VARCHAR(255) NOT NULL DEFAULT '',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "registrations_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "memberships" (
    "id" SERIAL NOT NULL,
    "user_id" UUID NOT NULL,
    "payment_id" INTEGER DEFAULT 0,
    "year_start" INTEGER NOT NULL DEFAULT 0,
    "year_end" INTEGER NOT NULL DEFAULT 0,
    "type" "MembershipType" NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "memberships_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "payments" (
    "id" SERIAL NOT NULL,
    "user_id" UUID NOT NULL,
    "payer_id" TEXT NOT NULL,
    "payer_email" TEXT NOT NULL,
    "amount" TEXT NOT NULL,
    "currency" TEXT NOT NULL,
    "payment_status" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "payments_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "call_submissions_user_id_idx" ON "call_submissions"("user_id");

-- CreateIndex
CREATE INDEX "call_authors_call_submission_id_idx" ON "call_authors"("call_submission_id");

-- CreateIndex
CREATE INDEX "call_files_call_submission_id_idx" ON "call_files"("call_submission_id");

-- CreateIndex
CREATE UNIQUE INDEX "reviewers_user_id_key" ON "reviewers"("user_id");

-- CreateIndex
CREATE INDEX "documents_user_id_idx" ON "documents"("user_id");

-- CreateIndex
CREATE INDEX "registrations_user_id_payment_id_year_idx" ON "registrations"("user_id", "payment_id", "year");

-- CreateIndex
CREATE INDEX "memberships_user_id_payment_id_year_start_year_end_idx" ON "memberships"("user_id", "payment_id", "year_start", "year_end");

-- CreateIndex
CREATE INDEX "payments_user_id_idx" ON "payments"("user_id");

-- AddForeignKey
ALTER TABLE "call_submissions" ADD CONSTRAINT "call_submissions_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "call_submissions" ADD CONSTRAINT "call_submissions_call_discipline_id_fkey" FOREIGN KEY ("call_discipline_id") REFERENCES "call_disciplines"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "call_submissions" ADD CONSTRAINT "call_submissions_call_topic_id_fkey" FOREIGN KEY ("call_topic_id") REFERENCES "call_topics"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "call_authors" ADD CONSTRAINT "call_authors_call_submission_id_fkey" FOREIGN KEY ("call_submission_id") REFERENCES "call_submissions"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "call_files" ADD CONSTRAINT "call_files_call_submission_id_fkey" FOREIGN KEY ("call_submission_id") REFERENCES "call_submissions"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "reviewers" ADD CONSTRAINT "reviewers_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "documents" ADD CONSTRAINT "documents_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "registrations" ADD CONSTRAINT "registrations_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "registrations" ADD CONSTRAINT "registrations_payment_id_fkey" FOREIGN KEY ("payment_id") REFERENCES "payments"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "memberships" ADD CONSTRAINT "memberships_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "memberships" ADD CONSTRAINT "memberships_payment_id_fkey" FOREIGN KEY ("payment_id") REFERENCES "payments"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "payments" ADD CONSTRAINT "payments_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
