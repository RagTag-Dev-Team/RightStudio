import { Surreal } from "surrealdb";


let db: Surreal | undefined;

const connectionString = process.env.NEXT_PUBLIC_SURREALDB_CONNECTION
const database = process.env.NEXT_PUBLIC_SURREALDB_DB
const namespace = process.env.NEXT_PUBLIC_SURREALDB_NS

export async function initDb(): Promise<Surreal | undefined> {
  if (db) return db;

  db = new Surreal();

  try {
    await db.connect(`${connectionString}/rpc`);
    await db.use({ namespace: `${namespace}`, database: `${database}` });

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
