"use client";

import axios from "axios";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";

export default function PostBlog() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const mutation = useMutation({
    mutationFn: async (formdata: { title: string; body: string }) => {
      const response = await axios.post("https://jsonplaceholder.typicode.com/posts",
        formdata
      );
      return response.data;
    },
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    mutation.mutate({ title, body });
  };

  return (
    <div className="p-4 max-w-xl mx-auto bg-white shadow rounded">
      <h1 className="text-2xl font-bold mb-4">Create New Blog Post</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1 font-semibold">Title</label>
          <input
            type="text"
            className="w-full border px-3 py-2 rounded"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>

        <div>
          <label className="block mb-1 font-semibold">Body</label>
          <textarea
            className="w-full border px-3 py-2 rounded"
            value={body}
            onChange={(e) => setBody(e.target.value)}
            required
          />
        </div>

        <button
          type="submit"
          disabled={mutation.isPending}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          {mutation.isPending ? "Posting..." : "Submit"}
        </button>

        {mutation.isError && (
          <p className="text-red-500 mt-2">
            Error: {(mutation.error as Error).message}
          </p>
        )}
        {mutation.isSuccess && (
          <p className="text-green-600 mt-2">
             Post Created with ID: {mutation.data.title}
          </p>
        )}
      </form>
    </div>
  );
}
