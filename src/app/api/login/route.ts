// Next Imports
import { NextResponse } from 'next/server'

import type { Surreal } from 'surrealdb.js'



import { getUserRepository } from '@/surrealdb/migrations/client/user/getUserRepository'
import { initDb } from '@/libs/surreal'

//import type { UserTable } from './users'

type ResponseUser = {
  id: number
  name: string
  email: string
  password: string
  image: string
  wallet_address: string
}

let db: Surreal | undefined;



// Mock data for demo purpose
// import { users } from './users'


export async function POST(req: Request) {
  // Vars
  const { email, password, wallet_address } = await req.json()

  // Connect to SurrealDB
 db = await initDb()


  // @ts-ignore
  const rep = getUserRepository(db);



 const users = await rep.getAllUsers()

//@ts-ignore

  const user = users.find(u => u.email === email && u.password === password || u.wallet_address === wallet_address)

  console.log('UserResult',users);


 // const user = users.find(u => u.email === email && u.password === password)

  let response: null | ResponseUser = null

  if (user) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    //@ts-ignore
    const { password: _, ...filteredUserData } = user

    // @ts-ignore

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
