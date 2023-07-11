import { MigrationInterface, QueryRunner } from "typeorm";

export class RelacaoSensoresDisponiveisSensoresVinculados1681067071759 implements MigrationInterface {
    name = 'RelacaoSensoresDisponiveisSensoresVinculados1681067071759'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "sensors" ADD "available_sensor_id" integer`);
        await queryRunner.query(`ALTER TABLE "sensors" ADD CONSTRAINT "FK_f64374a35573e39da39e0a79f18" FOREIGN KEY ("available_sensor_id") REFERENCES "available_sensors"("available_sensor_id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "sensors" DROP CONSTRAINT "FK_f64374a35573e39da39e0a79f18"`);
        await queryRunner.query(`ALTER TABLE "sensors" DROP COLUMN "available_sensor_id"`);
    }

}
