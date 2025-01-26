import { IsNotEmpty } from 'class-validator';
import { BrandEntity } from 'src/brand/entities/brand.entity';
import { CustomBaseEntity } from 'src/common/common-entities/custom-base.enity';
import { Column, Entity, JoinTable, ManyToMany } from 'typeorm';

@Entity('categories')
export class CategoryEntity extends CustomBaseEntity {
  @Column({ type: 'varchar', length: '50' })
  @IsNotEmpty()
  name: string;

  @ManyToMany(() => BrandEntity, (brand) => brand.categories)
  brands: BrandEntity[];
}
