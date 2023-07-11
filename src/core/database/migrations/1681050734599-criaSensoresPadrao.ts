import { MigrationInterface, QueryRunner } from "typeorm";

export class CriaSensoresPadrao1681050734599 implements MigrationInterface {
    name = 'CriaSensoresPadrao1681050734599'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "available_sensors" ("available_sensor_id" SERIAL NOT NULL, "name" character varying NOT NULL, "type" character varying NOT NULL, "minRange" integer NOT NULL, "maxRange" integer NOT NULL, "barcode" character varying NOT NULL, "batch" character varying NOT NULL, CONSTRAINT "PK_06f9235f0584aac7bd070ebec05" PRIMARY KEY ("available_sensor_id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "available_sensors"`);
    }

}
