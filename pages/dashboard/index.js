import { AuthContext } from "@/contexts/AuthContext";
import { useRouter } from "next/router";
import { useContext, useEffect } from "react";
import BaseLayout from "@/layouts/BaseLayout";
import { usePost } from "@/hooks/usePost";

const Dashboard = () => {
  const { isAuthenticated } = useContext(AuthContext);
  const router = useRouter();
  const { useGetPost } = usePost();
  const { data, isError, isFetched } = useGetPost();

  useEffect(() => {
    if (isAuthenticated === false) {
      router.push("/auth/sign-in");
    }
    console.log("is authenticated", isAuthenticated);
  }, []);
  console.log(data, isError);
  return (
    <div className="max-w-md mx-auto mt-12 space-y-8">
      {!isError && isFetched && data.map((post) => {
        return (
          
            <a
              href="#"
              className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
              key={post.id}
            >
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {post.title}
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                {post.body}
              </p>
            </a>
          
        );
      })}
    </div>
  );
};

export default Dashboard;
