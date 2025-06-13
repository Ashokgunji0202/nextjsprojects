"use client";

import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";

export default function Tanstack() {
  const { slug } = useParams();

  const { data, isLoading, error } = useQuery({
    queryKey: ["post", slug],
    queryFn: async () => {
      const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`);
      if (!res.ok) throw new Error("Failed to fetch post");
      return res.json();
    },
    enabled: !!slug, 
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {(error as Error).message}</p>;

  return (
    <div>
      <h1>Post Title: {data?.title}</h1>
      <p>{data?.body}</p>
    </div>
  );
}
