// Next Imports
import { NextResponse } from 'next/server'

import { select, create } from 'cirql'

import { userCreateSchema } from '@/surrealdb/migrations/schema/user/userSchema'

import type { User } from '@/surrealdb/migrations/schema/user/userTypes'


import { getDb, initDb } from '@/libs/cirql'

//import type { UserTable } from './users'

type ResponseUser = {
  name: string
  email: string
  password: string
  image: string
  wallet_address: string,
  newUser: boolean
}



const db = await getDb();

export async function POST(req: Request) {
  // Vars
  const { email, password, wallet_address } = await req.json()

  const users = await db.execute({
    query: select().from('user'),
    schema: userCreateSchema
  })

//@ts-ignore

  const selectedUser = users.find(u => u.email === email && u.password === password || u.wallet_address === wallet_address)


  let response: null | User = null



  if (selectedUser) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    //@ts-ignore
    const { password: _, ...filteredUserData } = selectedUser

    // @ts-ignore

    response = {
      ...filteredUserData
    }

    return NextResponse.json(response)
  }
  else {
    const db = await getDb();

    // We return 401 status code and error message if user is not found
  const newUser = await db.execute({
    query: create('user').setAll({
    name: "New User",
    email: email || '',
    password: password || '',
    image: "/images/avatars/1.png",
    wallet_address: wallet_address,
  }),
    schema: userCreateSchema
  })



    return NextResponse.json({
      status:200,
      statusText:"OK",
      data:newUser
    },
     )
  }
}
