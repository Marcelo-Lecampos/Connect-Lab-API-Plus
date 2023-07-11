import { MigrationInterface, QueryRunner } from "typeorm";

export class MeasurementEntity1680808732151 implements MigrationInterface {
    name = 'MeasurementEntity1680808732151'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "measurements" ("_id" SERIAL NOT NULL, "createdAt" date NOT NULL DEFAULT now(), "measurement" double precision NOT NULL, "sensor_id" bigint NOT NULL, "sensorId_id" integer, CONSTRAINT "PK_c289d1419a0704effba3bb8c0b6" PRIMARY KEY ("_id"))`);
        await queryRunner.query(`ALTER TABLE "measurements" ADD CONSTRAINT "FK_e4affd13189ab3a030074fd6c4c" FOREIGN KEY ("sensorId_id") REFERENCES "sensors"("_id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "measurements" DROP CONSTRAINT "FK_e4affd13189ab3a030074fd6c4c"`);
        await queryRunner.query(`DROP TABLE "measurements"`);
    }

}
