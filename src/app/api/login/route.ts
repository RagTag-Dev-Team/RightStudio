import { NextResponse } from 'next/server'


import { jsonify } from 'surrealdb'


import { getDb } from '@/libs/surreal'


interface User {
  id: string;
  name: string;
  email: string;
  password: string;
  image: string;
  wallet_address: string;
}
let userRecord: any

export async function POST(req: Request) {
  // Vars
  const { email, password, wallet_address } = await req.json()
  const db = await getDb()

  if (!db) {
    console.error('Database not initialized')

    return
  }



  try {

    const users = await db.select<User>("User");

    console.log("All users:", jsonify(users));
    userRecord = users.find((user: User) => user.wallet_address === wallet_address)

  } catch (error) {
    console.error('Error querying user:', error)
  }


  if (!userRecord) {
    return NextResponse.json({
      status: 200,
      statusText: 'OK',
      userRecord: {
          newUser: true,
          wallet_address: wallet_address,
          email: email,
          password: password
        }

    })
  } else {
    return NextResponse.json({
      status: 200,
      statusText: 'OK',
      userRecord: userRecord
    })
  }
}
