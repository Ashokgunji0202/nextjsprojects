"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { X } from "lucide-react"

interface User {
  id: number
  name: string
  email: string
  username?: string
  branch?: string
  skills: string[]
}

interface UserCardProps {
  user: User
}

export function UserCard({ user: initialUser }: UserCardProps) {
  const [user, setUser] = useState<User>({ ...initialUser })

  const handleDeleteSkill = (skillToDelete: string) => {
    setUser((prevUser) => ({
      ...prevUser,
      skills: prevUser.skills.filter((skill) => skill !== skillToDelete),
    }))
  }

  return (
    
    <Card className="overflow-hidden">
      <CardHeader className="bg-slate-50">
        <CardTitle>{user.name}</CardTitle>
      </CardHeader>
      <CardContent className="pt-6">
        <div className="space-y-2">
        
          {user.username && (
            <p>
              <span className="font-medium">Username:</span> {user.username}
            </p>
          )}
          <p>
            <span className="font-medium">Email:</span> {user.email}
          </p>
        
          {user.branch && (
            <p>
              <span className="font-medium">Branch:</span> {user.branch}
            </p>
          )}
          <div className="mt-4">
            <h4 className="font-medium mb-2">Skills:</h4>
            <div className="flex flex-wrap gap-2">
              {user.skills.map((skill) => (
                <Badge key={skill} variant="secondary" className="flex items-center gap-1 bg-blue-100 ">
                  {skill}
                  <button
                    onClick={() => handleDeleteSkill(skill)}
                    className="ml-1 rounded-full hover:bg-slate-300 p-0.5"
                    aria-label={`Remove ${skill} skill`}
                  >
                    <X className="h-3 w-3" />
                  </button>
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
