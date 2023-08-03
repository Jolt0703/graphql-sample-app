import express from "express";
import type { Express, Request, Response } from "express";
import { graphqlHTTP } from "express-graphql";
import schema from "./schema/schema";

const app: Express = express();
const port = 3001;

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

app.get("/", (req: Request, res: Response) => res.send("Hello World!"));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
