import { usePost } from "@/hooks/usePost";
import { useUser } from "@/hooks/useUser";
import BaseLayout from "@/layouts/BaseLayout";
import { useRouter } from "next/router";
import { useState } from "react";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const router = useRouter();
  const {usePostMutation} = usePost();
  const {mutateAsync:createPost} = usePostMutation();

  const handleSubmit = async(e) => {
    e.preventDefault();
    await createPost({
        title,
        body,
    })
    await router.push('/dashboard');
    setTitle("");
    setBody("");
  }

  return (
    <BaseLayout>
      <div className="max-w-md mx-auto mt-6">
        <form onSubmit={handleSubmit} method="POST">
          <div className="mb-6">
            <label
              htmlFor="title"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Title
            </label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder=""
              required=""
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Body
            </label>
            <textarea
              id="message"
              rows={4}
              value={body}
              onChange={(e) => setBody(e.target.value)}
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Type here..."
            />
          </div>
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Create
          </button>
        </form>
      </div>
    </BaseLayout>
  );
};

export default CreatePost;
