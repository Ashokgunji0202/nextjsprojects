import { Button } from "@/components/ui/button";

import Image from "next/image";
import Link from "next/link";


const blogConfig=[
    {
        "id":1,
        "title":"React vs Next js",
        "excerpt":"Next js is the Ultimate framework for React",
        "image":"/thumbnails/react-v-next.png",
        "url":"/blogs-dreams"
    },
    {
        "id":2,
        "title":"Dreams to be a Remote Developer ",
        "excerpt":"Get job as a remote developer",
        "image":"/thumbnails/dreams.png",
        "url":"/blogs-dreams"
    },
    {
        "id":3,
        "title":"Become a Backend Developer",
        "excerpt":"How to become a backend developer in2025",
        "image":"/thumbnails/become-backend-dev.png",
        "url":"/blogs-dreams"
    }
]
export default function Blogs() {
    return (
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-8">
            {blogConfig.map((blog,index)=>
                <BlogCard key={blog.id} title={blog.title} excerpt={blog.excerpt} image={blog.image}url={blog.url} />
            )}
        </section>
    );
}


const BlogCard=({title,excerpt,image,url})=>{
    return(
        <div className="flex flex-col bg-gray-600/20 rounded-lg p-2 gap-1 hover:scale-105 transition-all duration-300">
            <Image className="w-full" src={image} alt={title} width={300} height={500} />
            <h2 className="text-xl font-bold text-gray-200">{title}</h2>
            <p className="text-gray-600 text-sm">{excerpt}</p>
            <Link className="bg-zinc-600/70 hover:bg-zinc-600/50 text-gray-200 text-xs py-2 px-4 rounded-lg w-fit" href={`blog${url}`}>Read more</Link>
        </div>
    )

    
}