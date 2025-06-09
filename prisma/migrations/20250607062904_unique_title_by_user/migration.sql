/*
  Warnings:

  - A unique constraint covering the columns `[title,user_id]` on the table `Note` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[title,note_id]` on the table `SubNote` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Note_title_user_id_key" ON "Note"("title", "user_id");

-- CreateIndex
CREATE UNIQUE INDEX "SubNote_title_note_id_key" ON "SubNote"("title", "note_id");
