import * as express from 'express';
import { graphqlHTTP } from 'express-graphql';
import * as cors from 'cors';
import { schema } from './schema/schema';
import { articles, contributors } from './db/store';
const users = [{id: 1, username: 'Mike', age: 34}]


const app = express();
app.use(cors());

const root = {
    getAllUsers: () => {
    return users;
},
    getUser: ({ id }) => {
        return contributors.find(user => user.id === id)
    }
}

app.use('/graphql', graphqlHTTP({ schema: schema, graphiql: true, rootValue: root }));

app.listen(3000, () => console.log('Server has started on 3000 port'))