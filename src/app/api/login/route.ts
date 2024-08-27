// Next Imports
import { NextResponse } from 'next/server'

import type { Surreal } from 'surrealdb.js'



import { getUserRepository } from '@/surrealdb/migrations/client/user/getUserRepository'
import { initDb } from '@/libs/surreal'

//import type { UserTable } from './users'

type ResponseUser = {
  name: string
  email: string
  password: string
  image: string
  wallet_address: string,
  newUser: boolean
}

let db: Surreal | undefined;



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
  }
  else {
    // We return 401 status code and error message if user is not found


      if(!email || !password ){
        const responseUser: ResponseUser = {
          name: 'Unknown User',
          email: '',
          password: '',
          image: '/images/avatars/1.png',
          wallet_address: wallet_address,
          newUser: true
        };

        return NextResponse.json(responseUser)

      }
      else {
        const responseUser: ResponseUser = {
          name: 'Unknown User',
          email: email,
          password: password,
          image: '/images/avatars/1.png',
          wallet_address: wallet_address,
          newUser: true
        };

        return NextResponse.json(responseUser)
      }


  }
}
