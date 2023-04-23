import { AuthContext } from '@/contexts/AuthContext'
import { Inter } from 'next/font/google'
import { useRouter } from 'next/router';
import { useContext, useEffect } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const {isAuthenticated} = useContext(AuthContext);
  const router = useRouter();
  console.log('index page : is authed', isAuthenticated);
  useEffect(() => {
    console.log('effect ran');
    if(isAuthenticated) {
      router.push('/dashboard');
    }
  },[])

  return (
      <div>
        <h2>Home page</h2>
      </div>
  )
}
