import { Cirql } from 'cirql';





const connectionString = process.env.NEXT_PUBLIC_SURREALDB_CONNECTION
const username = process.env.NEXT_PUBLIC_SURREALDB_USERNAME
const password = process.env.NEXT_PUBLIC_SURREALDB_PASSWORD
const database = process.env.NEXT_PUBLIC_SURREALDB_DB
const namespace = process.env.NEXT_PUBLIC_SURREALDB_NS

const cirql = new Cirql();


export async function initDb(): Promise<Cirql | undefined> {
 // if (cirql) return cirql;



  try {
    // Authenticate using a pair of credentials


    // Use Cirql to connect to SurrealDB

    await cirql.handle.connect(`${connectionString}/rpc`);


 // Uncomment the next line to use SurrealDB
    //   await db.use({ namespace: namespace, database: database });

    // @ts-ignore
 //   await db.signin({username: username, password:password });


    await cirql.handle.signin({
      namespace: namespace,
      database: database,
      username: username,
      password: password,
    });

    console.log("Cirql is Connected to SurrealDB");

// Uncomment the next line to use SurrealDB
    // return db;
    return cirql;

  } catch (err) {
    console.error("Failed to connect to SurrealDB:", err);
    throw err;
  }
}


export async function getDb(): Promise<Cirql | undefined>  {

  return cirql;
}
