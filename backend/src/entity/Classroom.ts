
import { Field, Int, ObjectType } from "type-graphql";
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@ObjectType()
@Entity()
export class Classroom extends BaseEntity {
    @Field(() => Int)
    @PrimaryGeneratedColumn()
    id: number;

    @Field(() => String)
    @Column()
    name: string;

    @Field(() => Int)
    @Column("int")
    teacher: number;

    @Field(() => [Int])
    @Column("simple-array", {
    })
    students: number[];

    @Field(() => [Int])
    @Column("simple-array", {
    })
    sets: number[];

    @Field(() => [Int])
    @Column("simple-array", {
    })
    forums: number[];

    @Field(() => [Int])
    @Column("simple-array", {})
    events: number[];
}