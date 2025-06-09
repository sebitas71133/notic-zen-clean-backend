-- CreateTable
CREATE TABLE "SubNote" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "note_id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "SubNote_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SubNoteTag" (
    "sub_note_id" TEXT NOT NULL,
    "tag_id" TEXT NOT NULL,

    CONSTRAINT "SubNoteTag_pkey" PRIMARY KEY ("sub_note_id","tag_id")
);

-- CreateTable
CREATE TABLE "SubNoteImage" (
    "id" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "sub_note_id" TEXT NOT NULL,

    CONSTRAINT "SubNoteImage_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "SubNote" ADD CONSTRAINT "SubNote_note_id_fkey" FOREIGN KEY ("note_id") REFERENCES "Note"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SubNoteTag" ADD CONSTRAINT "SubNoteTag_sub_note_id_fkey" FOREIGN KEY ("sub_note_id") REFERENCES "SubNote"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SubNoteTag" ADD CONSTRAINT "SubNoteTag_tag_id_fkey" FOREIGN KEY ("tag_id") REFERENCES "Tag"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SubNoteImage" ADD CONSTRAINT "SubNoteImage_sub_note_id_fkey" FOREIGN KEY ("sub_note_id") REFERENCES "SubNote"("id") ON DELETE CASCADE ON UPDATE CASCADE;
