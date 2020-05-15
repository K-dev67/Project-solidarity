-- Deploy solidarite:ImgCatLike0 to pg

BEGIN;

-- XXX Add DDLs here.

ALTER TABLE "category" ADD COLUMN "picture" TEXT;

COMMIT;
