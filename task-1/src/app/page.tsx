"use client"
import { UserCard } from "@/components/user-card";
import { UserDataEditor } from "@/components/user-data-edit";
import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "sonner";

interface User {
  id: number
  name: string
  email: string
  username?: string
  branch?: string
  skills: string[]
}

export default function Home() {
  const [users, setUsers] = useState<User[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  

  useEffect(() => {
    fetchUsers()
  }, [])

  const fetchUsers = async () => {
    try {
      setLoading(true)
      const response = await axios.get("/api/users")
      if (response.status !== 200) {
        throw new Error("Failed to fetch users")
      }
      const data = response.data
      setUsers(data)
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred")
      toast.error(err instanceof Error ? err.message : "An error occurred")
    } finally {
      setLoading(false)
    }
  }

  const updateUser = async (updatedUser: User) => {
    try {
      const response = await axios.put("/api/users", updatedUser, {
        headers: {
          "Content-Type": "application/json",
        },
      })

      setUsers((prevUsers) => prevUsers.map((user) => (user.id === updatedUser.id ? updatedUser : user)))

      toast.success("User updated successfully")

      return response.data
    } catch (error) {
      toast.error("Failed to update user")
      throw error
    }
  }

  if (loading) {
    return (
      <div className="container mx-auto py-10">
        <div className="text-center">Loading users...</div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="container mx-auto py-10">
        <div className="text-center text-red-500">Error: {error}</div>
        <div className="text-center mt-4">
          <button onClick={fetchUsers} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            Retry
          </button>
        </div>
      </div>
    )
  }

  

  return (
    <div className="p-6">
      <h1>Home page controller</h1>
      <div className="container mx-auto py-10">
        <h1 className="lg:text-3xl md:text-2xl text-xl font-bold mb-6">User Details</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {users.map((user) => (
          <UserDataEditor key={user.id} user={user} onUpdateUser={updateUser} />
        ))}
      </div>
      </div>
    </div>
  );

}
