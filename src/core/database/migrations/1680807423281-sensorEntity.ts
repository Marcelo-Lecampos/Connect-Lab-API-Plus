import { MigrationInterface, QueryRunner } from "typeorm";

export class SensorEntity1680807423281 implements MigrationInterface {
    name = 'SensorEntity1680807423281'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "sensors" ("_id" SERIAL NOT NULL, "name" character varying NOT NULL, "createdAt" date NOT NULL DEFAULT now(), "macAddress" character varying NOT NULL, "active" boolean NOT NULL, "location_id" bigint NOT NULL, "locationId_id" integer, CONSTRAINT "UQ_3497d34f4c33b0a6f2c4906de41" UNIQUE ("macAddress"), CONSTRAINT "PK_6be01a0267ff7f9825ba5fa12b0" PRIMARY KEY ("_id"))`);
        await queryRunner.query(`ALTER TABLE "sensors" ADD CONSTRAINT "FK_3e4089b8e55819b3cf790c3e1eb" FOREIGN KEY ("locationId_id") REFERENCES "locations"("_id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "sensors" DROP CONSTRAINT "FK_3e4089b8e55819b3cf790c3e1eb"`);
        await queryRunner.query(`DROP TABLE "sensors"`);
    }

}
