import { MigrationInterface, QueryRunner } from "typeorm";

export class createTables1676725305762 implements MigrationInterface {
    name = 'createTables1676725305762'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "users" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, "img" character varying NOT NULL, "tel" character varying NOT NULL, "city" character varying NOT NULL, "isAdm" boolean NOT NULL, "isAthlete" boolean NOT NULL, "athlete" character varying, "created_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "publis" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "text" character varying NOT NULL, "img" text NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "userId" uuid, CONSTRAINT "PK_3ef14af85c6ee4c10daeb976cf5" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "publis" ADD CONSTRAINT "FK_da003f193e3db147bf091027528" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "publis" DROP CONSTRAINT "FK_da003f193e3db147bf091027528"`);
        await queryRunner.query(`DROP TABLE "publis"`);
        await queryRunner.query(`DROP TABLE "users"`);
    }

}
