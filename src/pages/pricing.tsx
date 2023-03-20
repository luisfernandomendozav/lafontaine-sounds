import Head from 'next/head';
import { useEffect } from 'react';
import NavBar from '@/components/NavBar';

export default function Home() {
  useEffect(() =>{
    fetchJhon();
    console.log('Hello world');
  }, []);
const fetchJhon = async () => {
  const res = await fetch('/api/hello');
  const data = await res.json();

  console.log(data);
}

  return (
    <>
      <Head>
        <title>Lafontaine Sounds</title>
        <meta name="description" content="Lafontaine Sounds Web Page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='container mx-auto'>
        <NavBar></NavBar>
        <h1 className='text-3xl text-zinc-400 font-bold underline'>Pricing</h1>
      </main>
    </>
  )
}
