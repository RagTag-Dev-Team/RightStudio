import Surreal from 'surrealdb'

interface DbConfig {
  url: string
  namespace: string
  database: string
  user: string
  pass: string
}

const connectionString = process.env.NEXT_PUBLIC_SURREALDB_CONNECTION
const database = process.env.NEXT_PUBLIC_SURREALDB_DB
const namespace = process.env.NEXT_PUBLIC_SURREALDB_NS
const user = process.env.NEXT_PUBLIC_SURREALDB_USERNAME
const pass = process.env.NEXT_PUBLIC_SURREALDB_PASSWORD

const DEFAULT_CONFIG: DbConfig = {
  url: `${connectionString}`,
  user: `${user}`,
  pass: `${pass}`,
  namespace: `${namespace}`,
  database: `${database}`
}

export async function getDb(config: DbConfig = DEFAULT_CONFIG): Promise<Surreal | null> {
  if (process.env.SKIP_EXTERNAL_CONNECTIONS === 'true') {
    return null
  }

  const db = new Surreal()

  try {
    // console.log('DB String: ' + config.url)

    await db.connect(config.url)
    await db.use({ namespace: config.namespace, database: config.database })
    await db.signin({
      username: config.user,
      password: config.pass
    })

    return db
  } catch (err) {
    console.error('Failed to connect to SurrealDB:', err instanceof Error ? err.message : String(err))
    console.log('DB String: ' + config.url)
    await db.close()
    throw err
  }
}
