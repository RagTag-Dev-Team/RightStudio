// Next Imports
import { NextResponse } from 'next/server'
import { Surreal } from 'surrealdb.js'
import { getUserRepository } from '@/surrealdb/migrations/client/user/getUserRepository'
import { initDb } from '@/libs/surreal'
import type { UserTable } from './users'

type ResponseUser = Omit<UserTable, 'password'>


// Mock data for demo purpose
import { users } from './users'
const connectionString = process.env.NEXT_PUBLIC_SURREALDB_CONNECTION
const username = process.env.NEXT_PUBLIC_SURREALDB_USERNAME
const password = process.env.NEXT_PUBLIC_SURREALDB_PASSWORD
const database = process.env.NEXT_PUBLIC_SURREALDB_DB
const namespace = process.env.NEXT_PUBLIC_SURREALDB_NS

export async function POST(req: Request) {
  // Vars
  const { email, password } = await req.json()

  // Connect to SurrealDB
  const db = await initDb()


  const rep = getUserRepository(db);



 const userList = await rep.getAllUsers()

  console.log(userList);

  const user = users.find(u => u.email === email && u.password === password)
  let response: null | ResponseUser = null

  if (user) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password: _, ...filteredUserData } = user

    response = {
      ...filteredUserData
    }

    return NextResponse.json(response)
  } else {
    // We return 401 status code and error message if user is not found
    return NextResponse.json(
      {
        // We create object here to separate each error message for each field in case of multiple errors
        message: ['Email or Password is invalid']
      },
      {
        status: 401,
        statusText: 'Unauthorized Access'
      }
    )
  }
}
