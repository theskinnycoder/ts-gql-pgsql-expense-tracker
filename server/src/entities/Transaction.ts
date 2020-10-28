import { Field, ID, Int, ObjectType } from 'type-graphql';
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity({ name: 'Transaction' })
export default class Transaction extends BaseEntity {
  @Field(() => ID!)
  @PrimaryGeneratedColumn('uuid', { name: 'ID' })
  id!: number;

  @Field({ nullable: false })
  @Column()
  text!: string;

  @Field(() => Int, { defaultValue: 0 })
  @Column('int')
  amount!: number;
}
