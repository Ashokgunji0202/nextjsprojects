"use client"

import type React from "react"
import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { X, Edit, Save, Plus, Loader2 } from "lucide-react"
import { toast } from 'sonner';


interface User {
  id: number
  name: string
  email: string
  username?: string
  branch?: string
  skills: string[]
}

interface UserDataEditorProps {
  user: User
  onUpdateUser: (user: User) => Promise<any>
}

export function UserDataEditor({ user: initialUser, onUpdateUser }: UserDataEditorProps) {
  const [user, setUser] = useState<User>({ ...initialUser })
  const [isEditing, setIsEditing] = useState(false)
  const [isSaving, setIsSaving] = useState(false)
  const [newSkill, setNewSkill] = useState("")
  

  const handleEditToggle = async () => {
    if (isEditing) {
      
      try {
        setIsSaving(true)
        await onUpdateUser(user)
        setIsEditing(false)
      } catch (error) {
        
        console.error("Failed to save user:", error)
      } finally {
        setIsSaving(false)
      }
    } else {
      setIsEditing(true)
    }
  }

  const handleCancel = () => {
    setUser({ ...initialUser }) 
    setIsEditing(false)
    setNewSkill("")
  }

  const handleInputChange = (field: keyof User, value: string) => {
    setUser((prevUser) => ({
      ...prevUser,
      [field]: value,
    }))
  }

  const handleDeleteSkill = (skillToDelete: string) => {
    setUser((prevUser) => ({
      ...prevUser,
      skills: prevUser.skills.filter((skill) => skill !== skillToDelete),
    }))
  }

  const handleAddSkill = () => {
    const trimmedSkill = newSkill.trim()

    if (!trimmedSkill) {
      toast.error("Please enter a skill.");
      return
    }

    
    const skillExists = user.skills.some((skill) => skill.toLowerCase() === trimmedSkill.toLowerCase())

    if (skillExists) {
      toast.error("Skill already exists.");
      return
    }

    setUser((prevUser) => ({
      ...prevUser,
      skills: [...prevUser.skills, trimmedSkill],
    }))

    setNewSkill("")
    toast.success("Skill added successfully!");
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleAddSkill()
    }
  }

  return (
    <Card className="overflow-hidden">
      <CardHeader className="bg-slate-50">
        <CardTitle className="flex items-center justify-between">
          {isEditing ? (
            <Input
              value={user.name}
              onChange={(e) => handleInputChange("name", e.target.value)}
              className="font-semibold text-lg"
              placeholder="Enter name"
            />
          ) : (
            user.name
          )}
          <div className="flex gap-2 ml-2">
            {isEditing && (
              <Button variant="outline" size="sm" onClick={handleCancel} disabled={isSaving}>
                Cancel
              </Button>
            )}
            <Button
              variant={isEditing ? "default" : "outline"}
              size="sm"
              onClick={handleEditToggle}
              disabled={isSaving}
            >
              {isSaving ? (
                <>
                  <Loader2 className="h-4 w-4 mr-1 animate-spin" />
                  Saving...
                </>
              ) : isEditing ? (
                <>
                  <Save className="h-4 w-4 mr-1" />
                  Save
                </>
              ) : (
                <>
                  <Edit className="h-4 w-4 mr-1" />
                  Edit
                </>
              )}
            </Button>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-6">
        <div className="space-y-4">
          {/* Email Field */}
          <div>
            <Label htmlFor={`email-${user.id}`} className="font-medium">
              Email:
            </Label>
            {isEditing ? (
              <Input
                id={`email-${user.id}`}
                type="email"
                value={user.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                placeholder="Enter email"
                className="mt-1"
              />
            ) : (
              <p className="mt-1">{user.email}</p>
            )}
          </div>

          {/* Username Field */}
          <div>
            <Label htmlFor={`username-${user.id}`} className="font-medium">
              Username:
            </Label>
            {isEditing ? (
              <Input
                id={`username-${user.id}`}
                type="text"
                value={user.username || ""}
                onChange={(e) => handleInputChange("username", e.target.value)}
                placeholder="Enter username (optional)"
                className="mt-1"
              />
            ) : (
              <p className="mt-1">{user.username || "Not provided"}</p>
            )}
          </div>

          {/* Branch Field */}
          <div>
            <Label htmlFor={`branch-${user.id}`} className="font-medium">
              Branch:
            </Label>
            {isEditing ? (
              <Input
                id={`branch-${user.id}`}
                type="text"
                value={user.branch || ""}
                onChange={(e) => handleInputChange("branch", e.target.value)}
                placeholder="Enter branch (optional)"
                className="mt-1"
              />
            ) : (
              <p className="mt-1">{user.branch || "Not specified"}</p>
            )}
          </div>

          {/* Skills Section */}
          <div>
            <Label className="font-medium">Skills:</Label>
            <div className="flex flex-wrap gap-2 mt-2 mb-3">
              {user.skills.map((skill) => (
                <Badge key={skill} variant="secondary" className="flex items-center gap-1">
                  {skill}
                  {isEditing && (
                    <button
                      onClick={() => handleDeleteSkill(skill)}
                      className="ml-1 rounded-full hover:bg-slate-300 p-0.5"
                      aria-label={`Remove ${skill} skill`}
                    >
                      <X className="h-3 w-3" />
                    </button>
                  )}
                </Badge>
              ))}
            </div>

            {isEditing && (
              <div className="space-y-2">
                <Label htmlFor={`new-skill-${user.id}`}>Add New Skill</Label>
                <div className="flex gap-2">
                  <Input
                    id={`new-skill-${user.id}`}
                    type="text"
                    placeholder="Enter new skill"
                    value={newSkill}
                    onChange={(e) => setNewSkill(e.target.value)}
                    onKeyPress={handleKeyPress}
                    className="flex-1"
                  />
                  <Button onClick={handleAddSkill} size="sm" disabled={!newSkill.trim()}>
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
