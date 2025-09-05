-- AlterTable
ALTER TABLE "SubNote" ADD COLUMN     "code" TEXT;

-- CreateIndex
CREATE INDEX "idx_note_category_id" ON "Note"("category_id");

-- CreateIndex
CREATE INDEX "idx_note_id_user" ON "Note"("id", "user_id");

-- CreateIndex
CREATE INDEX "idx_note_title" ON "Note"("title");

-- CreateIndex
CREATE INDEX "idx_note_user_archived_pinned" ON "Note"("user_id", "is_archived", "is_pinned");

-- CreateIndex
CREATE INDEX "idx_note_user_created_at" ON "Note"("user_id", "created_at");

-- CreateIndex
CREATE INDEX "idx_noteimage_note_id" ON "NoteImage"("note_id");

-- CreateIndex
CREATE INDEX "idx_notetag_note_id" ON "NoteTag"("note_id");

-- CreateIndex
CREATE INDEX "idx_notetag_tag_id" ON "NoteTag"("tag_id");
