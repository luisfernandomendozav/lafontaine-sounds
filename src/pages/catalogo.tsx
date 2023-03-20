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
        <h1 className='grid place-items-center text-5xl text-gray-400 font-bold pb-40'>Catalogo</h1>
        <div className='flex items-center justify-center pb-10'>
          <iframe src="https://open.spotify.com/embed/album/2OwgwjhbGN8bBr9v2Kr8sT?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
        </div>
        <p className='text-2xl text-zinc-400'><a href="https://open.spotify.com/album/2OwgwjhbGN8bBr9v2Kr8sT?si=3NivTqEqRZ29Rhobk4_KOQ+&nd=1">Dashing Mariachis (Original Video Soundtrack)</a>.</p>
        <div className='flex items-center justify-center p-10 pt-40'>
          <iframe src="https://player.vimeo.com/video/256455946?h=578bb68f96" width="640" height="360" frameBorder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
        </div>
        <p className='text-2xl text-zinc-400'><a href="https://vimeo.com/256455946">Intervalos - Un d&iacute;a en la Biblioteca Vasconcelos</a> from <a href="https://vimeo.com/timelapsemexico">Timelapse Mexico</a> on <a href="https://vimeo.com">Vimeo</a>.</p>
        <div className='flex items-center justify-center pb-10 pt-40'>
          <iframe src="https://player.vimeo.com/video/256427858?h=8360cf6939" width="640" height="360" frameBorder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
        </div>
        <p className='text-2xl text-zinc-400'><a href="https://vimeo.com/256427858">Hermes Infraestructura - V&iacute;deo Corporativo</a> from <a href="https://vimeo.com/timelapsemexico">Timelapse Mexico</a> on <a href="https://vimeo.com">Vimeo</a>.</p>
        <div className='flex items-center justify-center pb-10 pt-40'>
          <iframe width="640" height="360" src="https://www.youtube.com/embed/qNqB3fSKRSM" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
        <p className='text-2xl text-zinc-400'><a href="https://www.youtube.com/watch?v=qNqB3fSKRSM">Dashing Mariachis: Gameplay Trailer (v1.0)</a>.</p>
        <div className='flex items-center justify-center pb-10 pt-40'>
          <iframe width="640" height="360" src="https://www.youtube.com/embed/WfjKqaPwY1c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
        <p className='text-2xl text-zinc-400'><a href="https://www.youtube.com/watch?v=WfjKqaPwY1c">Dashing Mariachis: Gameplay Trailer (v2.0)</a>.</p>
        <div className='flex items-center justify-center pb-10 pt-40'>
          <iframe src="https://player.vimeo.com/video/123660399?h=28af89548f" width="640" height="360" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
        </div>
        <p className='text-2xl text-zinc-400'><a href="https://vimeo.com/123660399">Transportes Pitic</a> from <a href="https://vimeo.com/videobalazo">video balazo</a> on <a href="https://vimeo.com">Vimeo</a>.</p>
        <div className='flex items-center justify-center pb-10 pt-40'>
          <iframe src="https://player.vimeo.com/video/130993760?h=06dbe49994" width="640" height="360" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
        </div>
        <p className='text-2xl text-zinc-400'><a href="https://vimeo.com/130993760">Universidad de la Sierra</a> from <a href="https://vimeo.com/unisierra">Universidad de la Sierra</a> on <a href="https://vimeo.com">Vimeo</a>.</p>
        <div className='flex items-center justify-center pb-10 pt-40'>
          <iframe width="640" height="360" src="https://www.youtube.com/embed/Gk2gol90oT4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
        <p className='text-2xl text-zinc-400'><a href="https://www.youtube.com/watch?v=Gk2gol90oT4">Zaby Milbath Main Theme</a>.</p>
        <div className='flex items-center justify-center pb-10 pt-40'>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/6dOkDy8o_ck" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
        <p className='text-2xl text-zinc-400'><a href="https://www.youtube.com/watch?v=6dOkDy8o_ck">【 Leren de Dramoin BGM 】Main Theme</a>.</p>
        <div className='flex items-center justify-center pb-10 pt-40'>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/bu-pwC3ddM0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
        <p className='text-2xl text-zinc-400 pb-40'><a href="https://www.youtube.com/watch?v=bu-pwC3ddM0">【DEBUT OFICIAL】Guini Floph ha llegado!</a>.</p>
      </main>
    </>
  )
}
