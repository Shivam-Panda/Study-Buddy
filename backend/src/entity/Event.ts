import { Field, Int, ObjectType } from "type-graphql";
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@ObjectType()
@Entity()
export class Event extends BaseEntity {
    @Field(() => Int)
    @PrimaryGeneratedColumn()
    id: number;

    @Field(() => String)
    @Column()
    title: string;

    @Field(() => String)
    @Column()
    description: string;

    @Field(() => Int)
    @Column("int")
    day: number;

    @Field(() => Int)
    @Column("int")
    month: number;

    @Field(() => Int)
    @Column("int")
    year: number;

    @Field(() => String)
    @Column()
    priority: string;
}