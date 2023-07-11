import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { LocationEntity } from 'src/locations/entities/location.entity';

@Entity({ name: 'companies' })
export class CompanyEntity {
  @PrimaryGeneratedColumn()
  company_id: number;

  @Column({ type: 'varchar', nullable: false })
  company: string;

  @Column({ type: 'varchar', nullable: false, unique: true })
  cnpj: string;

  @Column({ type: 'varchar', nullable: false })
  responsible: string;

  @Column({ type: 'varchar', nullable: false, unique: true })
  email: string;

  @Column({ type: 'varchar', nullable: false })
  phone: string;

  @Column({ type: 'varchar', nullable: false })
  salt: string;

  @Column({ type: 'varchar', nullable: false })
  password: string;

  @OneToMany(() => LocationEntity, (location) => location.company)
  location: LocationEntity[];

  async checkPassword(password: string): Promise<boolean> {
    const hash = await bcrypt.hash(password, this.salt);
    return hash === this.password;
  }
}
