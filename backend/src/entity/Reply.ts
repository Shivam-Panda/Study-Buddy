import { Field, Int, ObjectType } from "type-graphql";
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@ObjectType()
@Entity()
export class Reply extends BaseEntity {
    @Field(() => Int)
    @PrimaryGeneratedColumn()
    id: number;

    @Field(() => Int)
    @Column("int")
    creator: number;

    @Field(() => String)
    @Column()
    body: string;

    @Field(() => [Int])
    @Column("simple-array", {
    })
    replies: number[];
}