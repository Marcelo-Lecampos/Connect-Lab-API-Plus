import { MigrationInterface, QueryRunner } from "typeorm";

export class MudaNomePks1680904073598 implements MigrationInterface {
    name = 'MudaNomePks1680904073598'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "measurements" DROP CONSTRAINT "FK_e4affd13189ab3a030074fd6c4c"`);
        await queryRunner.query(`ALTER TABLE "sensors" DROP CONSTRAINT "FK_3e4089b8e55819b3cf790c3e1eb"`);
        await queryRunner.query(`ALTER TABLE "locations" DROP CONSTRAINT "FK_74770889a4972ac4cce1367df0c"`);
        await queryRunner.query(`ALTER TABLE "companies" RENAME COLUMN "_id" TO "company_id"`);
        await queryRunner.query(`ALTER TABLE "companies" RENAME CONSTRAINT "PK_aab711ebb185f6611dff1f4f0ee" TO "PK_8c008cd5c4c0c20cf1e77f68e8d"`);
        await queryRunner.query(`ALTER SEQUENCE "companies__id_seq" RENAME TO "companies_company_id_seq"`);
        await queryRunner.query(`ALTER TABLE "measurements" DROP CONSTRAINT "PK_c289d1419a0704effba3bb8c0b6"`);
        await queryRunner.query(`ALTER TABLE "measurements" DROP COLUMN "_id"`);
        await queryRunner.query(`ALTER TABLE "measurements" DROP COLUMN "sensor_id"`);
        await queryRunner.query(`ALTER TABLE "measurements" DROP COLUMN "sensorId_id"`);
        await queryRunner.query(`ALTER TABLE "sensors" DROP CONSTRAINT "PK_6be01a0267ff7f9825ba5fa12b0"`);
        await queryRunner.query(`ALTER TABLE "sensors" DROP COLUMN "_id"`);
        await queryRunner.query(`ALTER TABLE "sensors" DROP COLUMN "locationId_id"`);
        await queryRunner.query(`ALTER TABLE "locations" DROP CONSTRAINT "PK_537cf51dbeddd87def07f92ae93"`);
        await queryRunner.query(`ALTER TABLE "locations" DROP COLUMN "_id"`);
        await queryRunner.query(`ALTER TABLE "locations" DROP COLUMN "companyId_id"`);
        await queryRunner.query(`ALTER TABLE "measurements" ADD "measurement_id" SERIAL NOT NULL`);
        await queryRunner.query(`ALTER TABLE "measurements" ADD CONSTRAINT "PK_b7e85435f81f94c27c4cc970c15" PRIMARY KEY ("measurement_id")`);
        await queryRunner.query(`ALTER TABLE "measurements" ADD "sensorsSensorId" integer`);
        await queryRunner.query(`ALTER TABLE "sensors" ADD "sensor_id" SERIAL NOT NULL`);
        await queryRunner.query(`ALTER TABLE "sensors" ADD CONSTRAINT "PK_c91753b089e1874c28c7fd409d2" PRIMARY KEY ("sensor_id")`);
        await queryRunner.query(`ALTER TABLE "locations" ADD "location_id" SERIAL NOT NULL`);
        await queryRunner.query(`ALTER TABLE "locations" ADD CONSTRAINT "PK_582bb9b1865f02814bd7c2c9650" PRIMARY KEY ("location_id")`);
        await queryRunner.query(`ALTER TABLE "sensors" DROP COLUMN "location_id"`);
        await queryRunner.query(`ALTER TABLE "sensors" ADD "location_id" integer`);
        await queryRunner.query(`ALTER TABLE "locations" DROP COLUMN "company_id"`);
        await queryRunner.query(`ALTER TABLE "locations" ADD "company_id" integer`);
        await queryRunner.query(`ALTER TABLE "measurements" ADD CONSTRAINT "FK_b0e2ee9fde5fc32623293f1ac3e" FOREIGN KEY ("sensorsSensorId") REFERENCES "sensors"("sensor_id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "sensors" ADD CONSTRAINT "FK_71a19dd543d855c8bdac83c3629" FOREIGN KEY ("location_id") REFERENCES "locations"("location_id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "locations" ADD CONSTRAINT "FK_4f97374ec57955950cf6ab13326" FOREIGN KEY ("company_id") REFERENCES "companies"("company_id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "locations" DROP CONSTRAINT "FK_4f97374ec57955950cf6ab13326"`);
        await queryRunner.query(`ALTER TABLE "sensors" DROP CONSTRAINT "FK_71a19dd543d855c8bdac83c3629"`);
        await queryRunner.query(`ALTER TABLE "measurements" DROP CONSTRAINT "FK_b0e2ee9fde5fc32623293f1ac3e"`);
        await queryRunner.query(`ALTER TABLE "locations" DROP COLUMN "company_id"`);
        await queryRunner.query(`ALTER TABLE "locations" ADD "company_id" bigint NOT NULL`);
        await queryRunner.query(`ALTER TABLE "sensors" DROP COLUMN "location_id"`);
        await queryRunner.query(`ALTER TABLE "sensors" ADD "location_id" bigint NOT NULL`);
        await queryRunner.query(`ALTER TABLE "locations" DROP CONSTRAINT "PK_582bb9b1865f02814bd7c2c9650"`);
        await queryRunner.query(`ALTER TABLE "locations" DROP COLUMN "location_id"`);
        await queryRunner.query(`ALTER TABLE "sensors" DROP CONSTRAINT "PK_c91753b089e1874c28c7fd409d2"`);
        await queryRunner.query(`ALTER TABLE "sensors" DROP COLUMN "sensor_id"`);
        await queryRunner.query(`ALTER TABLE "measurements" DROP COLUMN "sensorsSensorId"`);
        await queryRunner.query(`ALTER TABLE "measurements" DROP CONSTRAINT "PK_b7e85435f81f94c27c4cc970c15"`);
        await queryRunner.query(`ALTER TABLE "measurements" DROP COLUMN "measurement_id"`);
        await queryRunner.query(`ALTER TABLE "locations" ADD "companyId_id" integer`);
        await queryRunner.query(`ALTER TABLE "locations" ADD "_id" SERIAL NOT NULL`);
        await queryRunner.query(`ALTER TABLE "locations" ADD CONSTRAINT "PK_537cf51dbeddd87def07f92ae93" PRIMARY KEY ("_id")`);
        await queryRunner.query(`ALTER TABLE "sensors" ADD "locationId_id" integer`);
        await queryRunner.query(`ALTER TABLE "sensors" ADD "_id" SERIAL NOT NULL`);
        await queryRunner.query(`ALTER TABLE "sensors" ADD CONSTRAINT "PK_6be01a0267ff7f9825ba5fa12b0" PRIMARY KEY ("_id")`);
        await queryRunner.query(`ALTER TABLE "measurements" ADD "sensorId_id" integer`);
        await queryRunner.query(`ALTER TABLE "measurements" ADD "sensor_id" bigint NOT NULL`);
        await queryRunner.query(`ALTER TABLE "measurements" ADD "_id" SERIAL NOT NULL`);
        await queryRunner.query(`ALTER TABLE "measurements" ADD CONSTRAINT "PK_c289d1419a0704effba3bb8c0b6" PRIMARY KEY ("_id")`);
        await queryRunner.query(`ALTER SEQUENCE "companies_company_id_seq" RENAME TO "companies__id_seq"`);
        await queryRunner.query(`ALTER TABLE "companies" RENAME CONSTRAINT "PK_8c008cd5c4c0c20cf1e77f68e8d" TO "PK_aab711ebb185f6611dff1f4f0ee"`);
        await queryRunner.query(`ALTER TABLE "companies" RENAME COLUMN "company_id" TO "_id"`);
        await queryRunner.query(`ALTER TABLE "locations" ADD CONSTRAINT "FK_74770889a4972ac4cce1367df0c" FOREIGN KEY ("companyId_id") REFERENCES "companies"("_id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "sensors" ADD CONSTRAINT "FK_3e4089b8e55819b3cf790c3e1eb" FOREIGN KEY ("locationId_id") REFERENCES "locations"("_id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "measurements" ADD CONSTRAINT "FK_e4affd13189ab3a030074fd6c4c" FOREIGN KEY ("sensorId_id") REFERENCES "sensors"("_id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
