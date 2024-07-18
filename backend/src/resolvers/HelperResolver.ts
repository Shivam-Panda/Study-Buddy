import { Card } from '../entity/Card';
import { Classroom } from '../entity/Classroom';
import { Event } from '../entity/Event';
import { Forum } from '../entity/Forum';
import { Reply } from '../entity/Reply';
import { Session } from '../entity/Session';
import { User } from '../entity/User';
import { Resolver, Mutation } from "type-graphql"

@Resolver()
export class HelperResolver {
    @Mutation(() => Boolean)
    async deleteAll() {
        await Card.delete({});
        await Classroom.delete({});
        await Event.delete({});
        await Forum.delete({});
        await Reply.delete({});
        await Session.delete({});
        await User.delete({});
        return true;
    }
}