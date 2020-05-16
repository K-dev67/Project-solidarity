-- Deploy solidarite:ImgCatLike0 to pg

BEGIN;

-- XXX Add DDLs here.

ALTER TABLE "category" ADD COLUMN "picture" TEXT;
UPDATE "category" SET "picture" = 'Physique' WHERE "id" = 16;
UPDATE "category" SET "picture" = 'Maths' WHERE "id" = 4;
UPDATE "category" SET "picture" = 'Marketing' WHERE "id" = 18;
UPDATE "category" SET "picture" = 'Informatique' WHERE "id" = 17;
UPDATE "category" SET "picture" = 'Geographie' WHERE "id" = 19;

COMMIT;
