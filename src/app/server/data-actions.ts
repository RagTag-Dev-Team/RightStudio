import { getDb } from '@/libs/surreal'

// Initialize SurrealDB connection
const db = await getDb()

// Connection configuration

// Generic CRUD Operations
export async function create<T>(table: string, data: Partial<T>): Promise<T> {
  try {
    const created = await db.create(table, data)

    return created as T
  } catch (error) {
    console.error(`Error creating record in ${table}:`, error)
    throw error
  }
}

export async function getById<T>(table: string, id: string): Promise<T | null> {
  try {
    const record = await db.select(`${table}:${id}`)

    return record as T
  } catch (error) {
    console.error(`Error fetching record from ${table}:`, error)
    throw error
  }
}

export async function getAll<T>(table: string): Promise<T[]> {
  try {
    const records = await db.select(table)

    return records as T[]
  } catch (error) {
    console.error(`Error fetching all records from ${table}:`, error)
    throw error
  }
}

export async function update<T>(table: string, id: string, data: Partial<T>): Promise<T> {
  try {
    const updated = await db.merge(`${table}:${id}`, data)

    return updated as T
  } catch (error) {
    console.error(`Error updating record in ${table}:`, error)
    throw error
  }
}

export async function remove(table: string, id: string): Promise<boolean> {
  try {
    await db.delete(`${table}:${id}`)

    return true
  } catch (error) {
    console.error(`Error deleting record from ${table}:`, error)
    throw error
  }
}

// Utility Functions
export async function query<T>(sql: string, vars?: Record<string, any>): Promise<T> {
  try {
    const result = await db.query(sql, vars)

    return result as T
  } catch (error) {
    console.error('Error executing query:', error)
    throw error
  }
}

export async function findByField<T>(table: string, field: string, value: any): Promise<T[]> {
  try {
    const result = await db.query(`SELECT * FROM ${table} WHERE ${field} = $value`, { value })

    return result as T[]
  } catch (error) {
    console.error(`Error finding records in ${table} by ${field}:`, error)
    throw error
  }
}

export async function countRecords(table: string): Promise<number> {
  try {
    const result = await db.query(`SELECT count() FROM ${table}`)

    return (result[0] as any).count
  } catch (error) {
    console.error(`Error counting records in ${table}:`, error)
    throw error
  }
}

export async function paginate<T>(
  table: string,
  page: number = 1,
  limit: number = 10
): Promise<{ data: T[]; total: number; pages: number }> {
  try {
    const start = (page - 1) * limit

    const [data, countResult] = await Promise.all([
      db.query(`SELECT * FROM ${table} LIMIT $limit START $start`, {
        limit,
        start
      }),
      db.query(`SELECT count() FROM ${table}`)
    ])

    const total = (countResult[0] as any).count
    const pages = Math.ceil(total / limit)

    return {
      data: data as T[],
      total,
      pages
    }
  } catch (error) {
    console.error(`Error paginating records in ${table}:`, error)
    throw error
  }
}

export async function getLatestTracks<T>(limit: number = 10): Promise<T[]> {
  try {
    const result = await db.query(
      `
      SELECT * FROM media
      ORDER BY uploadedAt DESC
      LIMIT $limit
    `,
      { limit }
    )

    return result as T[]
  } catch (error) {
    console.error('Error fetching latest tracks:', error)
    throw error
  }
}
