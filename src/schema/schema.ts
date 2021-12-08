import { buildSchema } from "graphql";

export const schema = buildSchema(`
    type User {
        id: ID
        username: String
        age: Int
        post: [Contributor]
    }
    
    type Contributor {
        id: ID
        title: String
        content: String
    }

    input UserInput {
        id: ID
        username: String!
        age: Int!
        post: [ContributorInput]
    }
    
    input ContributorInput {
        id: ID
        title: String!
        content: String!
    }

    type Query {
        getAllUsers: [User]
        getUser(id: ID): User 
    }

    type Mutations {
        createUser(input: UserInput): User
    }
`)
