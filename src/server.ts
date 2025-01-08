import express from 'express';
import { postgraphile } from 'postgraphile';
import PgSimplifyInflectorPlugin from '@graphile-contrib/pg-simplify-inflector';


const app = express();

// Middleware to add security headers
app.use((req, res, next) => {
  res.header('X-Frame-Options', 'DENY');
  res.header('X-XSS-Protection', '1; mode=block');
  res.header('X-Content-Type-Options', 'nosniff');
  res.header('Referrer-Policy', 'strict-origin-when-cross-origin');
  next();
});
 
// PostGraphile middleware 
app.use(
  postgraphile(
    process.env.DATABASE_URL || "postgres://drizzle:drizzle123@devdb.catalogshub.com:5432/bestnext?sslmode=disable",
    'public', // schema
    {
      watchPg: process.env.NODE_ENV === "development",
      appendPlugins: [
        PgSimplifyInflectorPlugin,
   
      ],
      skipPlugins: [require('graphile-build').NodePlugin, ],
      simpleCollections: 'both',
      enableCors: true,
      //writeCache: './cache.json',
      //readCache: './cache.json',
      graphiql: true,
      enhanceGraphiql: true,
      graphiqlRoute: "/graphiql",
      exportGqlSchemaPath: "./schema.graphql",
      dynamicJson: true,
      ignoreRBAC: false,
      ignoreIndexes: false,
      setofFunctionsContainNulls: false,
      legacyRelations: "omit" as const,
      retryOnInitFail: true,
      graphileBuildOptions: {
        pgSchemas: ["public"],
        pgOmitListSuffix: true
      },
      extendedErrors: ['hint', 'detail', 'errcode'],
      allowExplain: true,
    }
  )
);
const port = process.env.PORT || 3010;

app.listen(port, () => {
  console.log(`PostGraphile server running on http://localhost:${port}/graphql`);
  if (process.env.NODE_ENV === 'development') {
    console.log(`GraphiQL interface available at http://localhost:${port}/graphiql`);
  }
});
