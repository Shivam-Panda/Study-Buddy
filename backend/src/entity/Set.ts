import { Field, Int, ObjectType } from "type-graphql";
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@ObjectType()
@Entity()
export class Set extends BaseEntity {
    @Field(() => Int)
    @PrimaryGeneratedColumn()
    id: number;

    @Field(() => Int)
    @Column("int")
    creator: number;

    @Field(() => String)
    @Column()
    date: string;

    @Field(() => [Int])
    @Column("simple-array", {
    })
    cards: number[];
}