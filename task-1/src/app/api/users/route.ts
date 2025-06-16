import { type NextRequest, NextResponse } from "next/server"
import { promises as fs } from "fs"
import path from "path"

interface User {
  id: number
  name: string
  email: string
  username?: string
  branch?: string
  skills: string[]
}

export async function GET() {
  try {
    const filePath = path.join(process.cwd(), "public", "users.json")
    const fileContents = await fs.readFile(filePath, "utf8")
    const users = JSON.parse(fileContents)

    return NextResponse.json(users)
  } catch (error) {
    console.error("Error reading users file:", error)
    return NextResponse.json({ error: "Failed to read users" }, { status: 500 })
  }
}

export async function PUT(request: NextRequest) {
  try {
    const updatedUser: User = await request.json()
    const filePath = path.join(process.cwd(), "public", "users.json")

    
    const fileContents = await fs.readFile(filePath, "utf8")
    const users: User[] = JSON.parse(fileContents)

    
    const userIndex = users.findIndex((user) => user.id === updatedUser.id)
    if (userIndex === -1) {
      return NextResponse.json({ error: "User not found" }, { status: 404 })
    }

    users[userIndex] = updatedUser

 
    await fs.writeFile(filePath, JSON.stringify(users, null, 2))

    return NextResponse.json({ message: "User updated successfully", user: updatedUser })
  } catch (error) {
    console.error("Error updating user:", error)
    return NextResponse.json({ error: "Failed to update user" }, { status: 500 })
  }
}
