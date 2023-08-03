サーバー起動方法

```
npm install -g ts-node
npm i
npm run dev
```

ブラウザで http://localhost:3001/graphql にアクセスするとgraphiqlが起動する

リクエスト例

```
{
  book(id: "2") {
    id
    name
    genre
  }
}
```

[express-graphql](https://github.com/graphql/express-graphql)

```ts
import { graphqlHTTP } from "express-graphql" // ES6
var { graphqlHTTP } = require("express-graphql") // CommonJS
```

```ts
graphqlHTTP({
  schema: GraphQLSchema,
  graphiql?: ?boolean,
  rootValue?: ?any,
  context?: ?any,
  pretty?: ?boolean,
  formatError?: ?Function,
  validationRules?: ?Array<any>,
}): Middleware
```
