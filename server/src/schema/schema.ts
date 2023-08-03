import { GraphQLObjectType, GraphQLSchema, GraphQLString } from "graphql";
import { books } from "../data/mock";

const BookType = new GraphQLObjectType({
  name: "Book",
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    genre: { type: GraphQLString },
  }),
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    book: {
      type: BookType,
      args: { id: { type: GraphQLString } },
      resolve(parent: any, args: any) {
        return books.find((book) => book.id === args.id);
      },
    },
  },
});

export default new GraphQLSchema({
  query: RootQuery,
});
