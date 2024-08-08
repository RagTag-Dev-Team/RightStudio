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


    await db.use({ namespace: "rgtg", database: "rgtg_db" });
    await db.signin(
      {username: username, password: password});


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
