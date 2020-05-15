-- Deploy solidarite:ImgCatLike0 to pg

BEGIN;

-- XXX Add DDLs here.

ALTER TABLE "category" ADD COLUMN "picture" TEXT;
UPDATE "category" SET "picture" = '../../assets/img/category/Physique.png' WHERE "id" = 16;
UPDATE "category" SET "picture" = '../../assets/img/category/Maths.png' WHERE "id" = 4;
UPDATE "category" SET "picture" = '../../assets/img/category/Marketing.png' WHERE "id" = 18;
UPDATE "category" SET "picture" = '../../assets/img/category/Informatique.png' WHERE "id" = 17;
UPDATE "category" SET "picture" = '../../assets/img/category/Geographie.png' WHERE "id" = 19;

COMMIT;
