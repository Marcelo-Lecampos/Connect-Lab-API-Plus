import { MigrationInterface, QueryRunner } from "typeorm";

export class AjusteRelacoesMigrations1681221710789 implements MigrationInterface {
    name = 'AjusteRelacoesMigrations1681221710789'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "measurements" DROP CONSTRAINT "FK_b0e2ee9fde5fc32623293f1ac3e"`);
        await queryRunner.query(`ALTER TABLE "sensors" DROP CONSTRAINT "FK_71a19dd543d855c8bdac83c3629"`);
        await queryRunner.query(`ALTER TABLE "sensors" DROP CONSTRAINT "FK_f64374a35573e39da39e0a79f18"`);
        await queryRunner.query(`ALTER TABLE "locations" DROP CONSTRAINT "FK_4f97374ec57955950cf6ab13326"`);
        await queryRunner.query(`ALTER TABLE "measurements" RENAME COLUMN "sensorsSensorId" TO "sensor_id"`);
        await queryRunner.query(`ALTER TABLE "measurements" RENAME COLUMN "sensor_id" TO "sensorsSensorId"`);
        await queryRunner.query(`ALTER TABLE "measurements" DROP COLUMN "sensorsSensorId"`);
        await queryRunner.query(`ALTER TABLE "measurements" ADD "sensor_id" integer`);
        await queryRunner.query(`ALTER TABLE "measurements" ADD "sensorsSensorId" integer`);
        await queryRunner.query(`ALTER TABLE "measurements" ADD CONSTRAINT "FK_997ec0bfa6b87fbe4e3a8305d49" FOREIGN KEY ("sensor_id") REFERENCES "sensors"("sensor_id") ON DELETE SET NULL ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "sensors" ADD CONSTRAINT "FK_71a19dd543d855c8bdac83c3629" FOREIGN KEY ("location_id") REFERENCES "locations"("location_id") ON DELETE SET NULL ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "sensors" ADD CONSTRAINT "FK_f64374a35573e39da39e0a79f18" FOREIGN KEY ("available_sensor_id") REFERENCES "available_sensors"("available_sensor_id") ON DELETE SET NULL ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "locations" ADD CONSTRAINT "FK_4f97374ec57955950cf6ab13326" FOREIGN KEY ("company_id") REFERENCES "companies"("company_id") ON DELETE SET NULL ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "measurements" ADD CONSTRAINT "FK_b0e2ee9fde5fc32623293f1ac3e" FOREIGN KEY ("sensorsSensorId") REFERENCES "sensors"("sensor_id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "measurements" DROP CONSTRAINT "FK_b0e2ee9fde5fc32623293f1ac3e"`);
        await queryRunner.query(`ALTER TABLE "locations" DROP CONSTRAINT "FK_4f97374ec57955950cf6ab13326"`);
        await queryRunner.query(`ALTER TABLE "sensors" DROP CONSTRAINT "FK_f64374a35573e39da39e0a79f18"`);
        await queryRunner.query(`ALTER TABLE "sensors" DROP CONSTRAINT "FK_71a19dd543d855c8bdac83c3629"`);
        await queryRunner.query(`ALTER TABLE "measurements" DROP CONSTRAINT "FK_997ec0bfa6b87fbe4e3a8305d49"`);
        await queryRunner.query(`ALTER TABLE "measurements" DROP COLUMN "sensorsSensorId"`);
        await queryRunner.query(`ALTER TABLE "measurements" DROP COLUMN "sensor_id"`);
        await queryRunner.query(`ALTER TABLE "measurements" ADD "sensorsSensorId" integer`);
        await queryRunner.query(`ALTER TABLE "measurements" RENAME COLUMN "sensorsSensorId" TO "sensor_id"`);
        await queryRunner.query(`ALTER TABLE "measurements" RENAME COLUMN "sensor_id" TO "sensorsSensorId"`);
        await queryRunner.query(`ALTER TABLE "locations" ADD CONSTRAINT "FK_4f97374ec57955950cf6ab13326" FOREIGN KEY ("company_id") REFERENCES "companies"("company_id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "sensors" ADD CONSTRAINT "FK_f64374a35573e39da39e0a79f18" FOREIGN KEY ("available_sensor_id") REFERENCES "available_sensors"("available_sensor_id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "sensors" ADD CONSTRAINT "FK_71a19dd543d855c8bdac83c3629" FOREIGN KEY ("location_id") REFERENCES "locations"("location_id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "measurements" ADD CONSTRAINT "FK_b0e2ee9fde5fc32623293f1ac3e" FOREIGN KEY ("sensorsSensorId") REFERENCES "sensors"("sensor_id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
