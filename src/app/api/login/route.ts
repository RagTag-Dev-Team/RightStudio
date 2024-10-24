import { NextResponse } from 'next/server'


import { jsonify } from 'surrealdb'


import { getDb } from '@/libs/surreal'

interface User {
  id: string
  name: string
  email: string
  password: string
  image: string
  wallet_address: string
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
    console.log()

    const result: User[] = await db.query(`SELECT * FROM User WHERE wallet_address = '${wallet_address}'`)

    //@ts-ignore
    userRecord = jsonify(...result[0])

  } catch (error) {
    console.error('Error querying user:', error)
  }

  if (!userRecord) {
    console.log('User does not exist.')

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
    console.log('User found in database')

    return NextResponse.json({
      status: 200,
      statusText: 'OK',
      userRecord: userRecord
    })
  }
}
