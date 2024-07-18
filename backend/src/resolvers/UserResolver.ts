import { User } from "../entity/User"
import { Arg, Field, InputType, Mutation, ObjectType, Query, Resolver } from "type-graphql"

@InputType()
class SignupInput {
    @Field()
    name: string;

    @Field()
    email: string;

    @Field()
    password: string;

    @Field()
    age: number;
}

@InputType()
class LoginInput {
    @Field()
    email: string;

    @Field()
    password: string;
}

@ObjectType()
class UserOutputType {
    @Field(() => User, { nullable: true })
    user: User;

    @Field(() => String, { nullable: true })
    error: string;
}

@Resolver()
export class UserResolver {
    @Mutation(() => User!)
    async signup(
        @Arg("input") input: SignupInput
    ) {
        const user = await User.create({
            ...input,
            sessions: [],
            events: []
        }).save();

        if(user === null) {
            return {
                error: "Unable to create user"
            }
        }
        return user;
    }

    @Query(() => UserOutputType!, { nullable: true })
    async login(
        @Arg("input") input: LoginInput
    ) {
        const user = await User.findOne({
            where: {
                ...input
            }
        });

        if(user === null) {
            return {
                error: "User not found"
            };
        }
        return user;
    }

    // Helper
    @Query(() => [User])
    async allUsers() {
        return await User.find({});
    }
}