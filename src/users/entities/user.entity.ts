import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity({name : 'users'})
@ObjectType()
export class User {

  @PrimaryGeneratedColumn('uuid')
  @Field(() => ID)
  id: string;

  @Column()
  @Field(()=> String)
  fullName: string;

  @Column({unique: true})
  @Field(()=> String)
  email: string;

  @Column()
  password: string;

  @Column({type: 'text', array: true, default: ['mortal']})
  @Field(()=> [String])
  roles: string[];

  @Column({type: 'boolean', default: true})
  @Field(()=> Boolean)
  isActive: boolean;

  @ManyToOne(()=> User, (user)=>user.lastUpdateBy, {nullable: true})
  @JoinColumn({name: 'lastUpdateBy'})
  @Field(()=> User, {nullable: true})
  lastUpdateBy?: User;
}
