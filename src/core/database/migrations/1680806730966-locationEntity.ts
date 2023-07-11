import { MigrationInterface, QueryRunner } from "typeorm";

export class LocationEntity1680806730966 implements MigrationInterface {
    name = 'LocationEntity1680806730966'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "locations" ("_id" SERIAL NOT NULL, "fieldName" character varying NOT NULL, "latitude" character varying NOT NULL, "longitude" character varying NOT NULL, "company_id" bigint NOT NULL, "companyId_id" integer, CONSTRAINT "PK_537cf51dbeddd87def07f92ae93" PRIMARY KEY ("_id"))`);
        await queryRunner.query(`ALTER TABLE "locations" ADD CONSTRAINT "FK_74770889a4972ac4cce1367df0c" FOREIGN KEY ("companyId_id") REFERENCES "companies"("_id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "locations" DROP CONSTRAINT "FK_74770889a4972ac4cce1367df0c"`);
        await queryRunner.query(`DROP TABLE "locations"`);
    }

}
