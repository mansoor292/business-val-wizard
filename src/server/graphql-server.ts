// @ts-nocheck 
import express from 'express';
import { postgraphile } from 'postgraphile';
import cors from 'cors';
import { Pool } from 'pg';
import PgSimplifyInflectorPlugin from "@graphile-contrib/pg-simplify-inflector";

const app = express();

// Enable CORS
app.use(cors());

// Database configuration from drizzle config
const dbConfig = {
  host: 'devdb.catalogshub.com',
  port: 5432,
  user: 'drizzle',
  password: 'drizzle123',
  database: 'business_val_wizard'
};

console.log('Attempting to connect to database with config:', {
  ...dbConfig,
  password: '[REDACTED]'
});

// Create a PostgreSQL connection pool
const pool = new Pool(dbConfig);

// Test database connection
pool.connect((err, client, release) => {
  if (err) {
    console.error('Error connecting to the database:', err.message);
    return;
  }
  console.log('Successfully connected to database');
  release();
});

// PostGraphile options
const postgraphileOptions = {
  watchPg: process.env.NODE_ENV === "development",
  appendPlugins: [
    PgSimplifyInflectorPlugin
  ],
  skipPlugins: [require('graphile-build').NodePlugin, ],
  simpleCollections: 'both',
  enableCors: true,
  //writeCache: './cache.json',
  //readCache: './cache.json',
  graphiql: true,
  enhanceGraphiql: true,
  graphiqlRoute: "/",
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
};

// Mount PostGraphile
const middleware = postgraphile(
  pool,
  "public",
  postgraphileOptions
);

// Add error handling middleware
app.use((err: any, _req: any, res: any, next: any) => {
  console.error('Error:', err);
  res.status(500).json({
    error: err.message,
    details: process.env.NODE_ENV === 'development' ? err.stack : undefined
  });
});

// Mount PostGraphile middleware
app.use(middleware);

const PORT = process.env.GRAPHQL_PORT || 4000;

app.listen(PORT, () => {
  console.log(`PostGraphile server running on http://localhost:${PORT}/graphql`);
  console.log(`GraphiQL interface available at http://localhost:${PORT}/`);
});
