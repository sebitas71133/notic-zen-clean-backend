-- AlterTable
ALTER TABLE "SubNote" ADD COLUMN     "is_archived" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "is_pinned" BOOLEAN NOT NULL DEFAULT false;
