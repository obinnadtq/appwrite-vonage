'use client';

import { getAccount, deleteSession } from '@/appwrite';
import React, {useEffect} from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    (async() => {
      try{
        await getAccount();
      }
      catch(e){
        console.log(e);
        router.push('/login');
      }
    })()
  }, [])

  const logout = async () => {
    try {
      await deleteSession();
      router.push('/login');
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div style={{ textAlign: "center"}}>
      <h1>Welcome</h1>
      <button onClick={logout}>Logout</button>
    </div>

  )
}
