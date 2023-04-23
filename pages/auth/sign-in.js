import BaseLayout from "@/layouts/BaseLayout";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import { useUser } from "@/hooks/useUser";
import { AuthContext } from "@/contexts/AuthContext";

const SignIn = () => {
  const router = useRouter();
  const [userEmail, setUserEmail] = useState("");
  const [userPsw, setUserPsw] = useState("");
  const [error, setError] = useState(false);

  const { useUserSignInMutation } = useUser();
  const { mutateAsync: signInUserAsync, isError } = useUserSignInMutation();

  const {signIn} = useContext(AuthContext);

  const handleSubmit = async (e) => {

    e.preventDefault();
    try {
      await signInUserAsync({
        email: userEmail,
        password: userPsw,
      },{
        onSuccess: async () => {
          await router.push("/dashboard");
          signIn({
            email: userEmail,
            password: userPsw,
          })
          setUserEmail("");
          setUserPsw("");
        }
      });
  
      console.log(isError);
    } catch (error) {
      
    }
 
  };

  useEffect(() => {
    router.prefetch("/dashboard");
    console.log("prefetched dashboard!");
  }, []);

  return (
    <BaseLayout>
      <div className="max-w-md mx-auto mt-8">
        {isError && <div className="text-2xl text-red-600">Email or password is wrong.</div>}
        <form onSubmit={handleSubmit} method="POST">
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Your email
            </label>
            <input
              type="email"
              id="email"
              value={userEmail}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Your email here"
              onChange={(e) => setUserEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Your password
            </label>
            <input
              type="password"
              id="password"
              value={userPsw}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              onChange={(e) => setUserPsw(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Sign In
          </button>
        </form>
      </div>
    </BaseLayout>
  );
};

export default SignIn;
