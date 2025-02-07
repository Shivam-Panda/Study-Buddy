import { Field, Int, ObjectType } from "type-graphql";
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@ObjectType()
@Entity()
export class User extends BaseEntity {
    @Field(() => Int)
    @PrimaryGeneratedColumn()
    id: number;

    @Field(() => String)
    @Column()
    name: string;

    @Field(() => Int)
    @Column("int")
    age: number;

    @Field(() => String)
    @Column({ nullable: true })
    password: string;

    @Field(() => String)
    @Column({ nullable: true })
    email: string;

    @Field(() => [Int])
    @Column("simple-array", { nullable: true })
    sessions: number[];

    @Field(() => [Int])
    @Column("simple-array", { nullable: true })
    events: number[];
}