import { Surreal } from "surrealdb.js";

let db: Surreal | undefined;
const connectionString = process.env.NEXT_PUBLIC_SURREALDB_CONNECTION
const username = process.env.NEXT_PUBLIC_SURREALDB_USERNAME
const password = process.env.NEXT_PUBLIC_SURREALDB_PASSWORD
const database = process.env.NEXT_PUBLIC_SURREALDB_DB
const namespace = process.env.NEXT_PUBLIC_SURREALDB_NS

export async function initDb(): Promise<Surreal | undefined> {
  if (db) return db;
  db = new Surreal();

  try {
// Authenticate using a pair of credentials
    await db.connect(`${connectionString}/rpc`);


    await db.use({ namespace: namespace, database: database });

    // @ts-ignore
    await db.signin({username: username, password:password });

    console.log("Connected to SurrealDB");

    return db;
  } catch (err) {
    console.error("Failed to connect to SurrealDB:", err);
    throw err;
  }
}

export async function closeDb(): Promise<void> {
  if (!db) return;
  await db.close();
  db = undefined;
}

export function getDb(): Surreal | undefined {
  return db;
}
