import { UserCard } from "@/components/user-card";


const data = [{
  id: 1,
  name: "Ashok",
  email: "ashok@123",
  username: "ashok",
  branch: "EEE",
  skills: ["html", "css", "js", "react", "nodejs"],
},
{
  id: 2,
  name: "Basha",
  email: "Basha@123",
  username: "basha",
  branch: "EEE",
  skills: ["html", "css", "js", "react", "nodejs"]
},
{
  id: 3,
  name: "vitiesh",
  email: "vitiesh@123",
  username: "vitiesh",
  branch: "EEE",
  skills: ["html", "css", "js", "react", "nodejs"]

}
]

export default function Home() {

  return (
    <div className="p-6">
      <h1>Home page controller</h1>
      <div className="container mx-auto py-10">
        <h1 className="lg:text-3xl md:text-2xl text-xl font-bold mb-6">User Details</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </div>
      </div>
    </div>
  );

}
