import { User } from "../entity/User";
import { Arg, Field, InputType, Int, Mutation, Query, Resolver } from "type-graphql";

@InputType()
class UserInputType {
    @Field()
    name: string;

    @Field(() => Int)
    age: number;
}

@Resolver()
export class HelloWorldResolver {
    @Query(() => String)
    hello() {
        return "Hello"
    }

    @Mutation(() => User)
    async createUser(
        @Arg("input", () => UserInputType) input: UserInputType
    ) {
        return await User.create({
            age: input.age,
            name: input.name
        }).save()
    };

    @Query(() => [User])
    async allUsers() {
        return await User.find();
    }
}