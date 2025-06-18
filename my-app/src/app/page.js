
import { Icons } from "@/components/icon";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Layers, Zap } from "lucide-react";
import Link from "next/link";


export default function LandingPage() {
  return (
    <main className="w-full">
      <section className="w-full flex justify-center h-[50vh] sm:h-[70vh]">
        <div className="flex flex-col justify-center items-center gap-5 text-center">
          <div>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">Manage your content with Easy</h1>
            <p className="text-gray-400 max-w-[700px] mx-auto" >Streamline your content workflow. publish with confidence</p>
          </div>
          <div className="flex gap-3">
            <Link href={"/sign-in"}>
              <Button variant={"default"} className="bg-gray-200">Try Now !</Button>
            </Link>
            <Button variant={"outline"}>Try Now !</Button>
          </div>
        </div>

      </section>
      <section className="min-h-screen sm:min-h-[50vh] bg-gray-600/10 w-full flex justify-center items-center h-screen px-4">

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-4">
          <span className="flex flex-col items-center gap-2">
            <Icons.BlogCustomIcon className="w-20 h-20 text-white" />
            <h3 className="text-xl font-bold"> Intuitive  Editor</h3>
            <p className="text-gray-400 w-[70%]  text-center"> Create and edit content with User friendly4interface</p>
          </span>
          <span className="flex flex-col items-center gap-2">
            <Layers size={50} />
            <h3 className="text-xl font-bold"> Flexiable Tools</h3>
            <p className="text-gray-400 w-[70%] text-center">Create and edit content with User friendly4interface</p>
          </span>
          <span className="flex flex-col items-center gap-2">
            <Zap size={50} />
            <h3 className="text-xl font-bold"> Blazing Fast</h3>
            <p className="text-gray-400 w-[70%] text-center">Create and edit content with User friendly4interface</p>
          </span>
        </div>

      </section>
      <section className="w-full flex flex-col justify-center items-start h-[60vh] sm:h-[50vh] ">
        <div className="max-w-[50%] mx-auto space-y-3">
          <h3 className="text-3xl font-bold">Ready to TransForm your content journey</h3>
        <p className="text-gray-400 text-sm">
          Join thousands of content creators  like you who are already using Easy
        </p>
        <div className="flex  gap-3">
          <Input className="bg-zinc-800 focus:outline-none rounded w-[400px]" type="email" placeholder="Enter your email" />
          <Button variant={"outline"} >Submit</Button>
        </div>
        </div>

      </section>
    </main>
  );

}
