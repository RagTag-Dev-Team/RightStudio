// Next Imports
import { NextResponse } from 'next/server'

import { Surreal } from 'surrealdb.js'


import type { UserTable } from './users'

type ResponseUser = Omit<UserTable, 'password'>

// Mock data for demo purpose
import { users } from './users'

import { getUserRepository} from "@/surrealdb/migrations/client";


export async function POST(req: Request) {
  // Vars

  const db = new Surreal()
  await db.connect(`${process.env.NEXT_PUBLIC_SURREALDB_CONNECTION}`, {
    auth: { user: `${process.env.NEXT_PUBLIC_SURREALDB_USERNAME}`, pass: `${process.env.NEXT_PUBLIC_SURREALDB_PASSWORD}` },
  })
  await db.use({
    ns: `${process.env.NEXT_PUBLIC_SURREALDB_NS}`,
    db: `${process.env.NEXT_PUBLIC_SURREALDB_DB}`,
  })
  const rep = getUserRepository(db)
  const dbusers = await rep.getAllUsers();

  console.log('dbusers', dbusers);
  const { email, password } = await req.json()
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
