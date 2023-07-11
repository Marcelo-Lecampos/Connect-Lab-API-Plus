import { MigrationInterface, QueryRunner } from "typeorm";

export class CompanyEntity1680806024230 implements MigrationInterface {
    name = 'CompanyEntity1680806024230'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "companies" ("_id" SERIAL NOT NULL, "company" character varying NOT NULL, "cnpj" character varying NOT NULL, "responsible" character varying NOT NULL, "email" character varying NOT NULL, "phone" character varying NOT NULL, "salt" character varying NOT NULL, "password" character varying NOT NULL, CONSTRAINT "UQ_703760d095b8e399e34950f4960" UNIQUE ("cnpj"), CONSTRAINT "UQ_d0af6f5866201d5cb424767744a" UNIQUE ("email"), CONSTRAINT "PK_aab711ebb185f6611dff1f4f0ee" PRIMARY KEY ("_id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "companies"`);
    }

}
