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
        <div className="bg-[url('../../public/lafontaine.jpeg')] w-full h-auto bg-cover bg-center bg-no-repeat">
        <h1 className='grid h-screen place-items-center text-5xl text-gray-400 font-bold'>Lafontaine Sounds</h1>
        </div>
      </main>
    </>
  )
}
