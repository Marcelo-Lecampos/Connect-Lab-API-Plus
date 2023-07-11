import { MigrationInterface, QueryRunner } from "typeorm";

export class DefaultFalseLinkSensor1682276489804 implements MigrationInterface {
    name = 'DefaultFalseLinkSensor1682276489804'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "measurements" DROP CONSTRAINT "FK_b0e2ee9fde5fc32623293f1ac3e"`);
        await queryRunner.query(`ALTER TABLE "measurements" DROP COLUMN "sensorsSensorId"`);
        await queryRunner.query(`ALTER TABLE "sensors" ALTER COLUMN "active" SET DEFAULT false`);
        await queryRunner.query(`ALTER TABLE "sensors" ALTER COLUMN "active" SET DEFAULT false`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "sensors" ALTER COLUMN "active" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "sensors" ALTER COLUMN "active" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "measurements" ADD "sensorsSensorId" integer`);
        await queryRunner.query(`ALTER TABLE "measurements" ADD CONSTRAINT "FK_b0e2ee9fde5fc32623293f1ac3e" FOREIGN KEY ("sensorsSensorId") REFERENCES "sensors"("sensor_id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
