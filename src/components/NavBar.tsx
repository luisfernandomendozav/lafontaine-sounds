import { Alert, Navbar } from 'flowbite-react';

export default function NavBar() {
    return (
        <Navbar
  fluid={true}
  rounded={false}
  className="bg-zinc-800"
>
  <Navbar.Brand
    to="/navbars"
  >
    <img
      src="https://flowbite.com/docs/images/logo.svg"
      className="mr-3 h-6 sm:h-9"
      alt="Flowbite Logo"
    />
    <span className="self-center whitespace-nowrap text-xl font-semibold text-gray-400">
      Lafontaine Sounds
    </span>
  </Navbar.Brand>
  <Navbar.Toggle />
  <Navbar.Collapse>
    <Navbar.Link
      href="/"
      className='text-white'
    >
      Home
    </Navbar.Link>
    <Navbar.Link
      className='text-white'
      href="/about"
    >
      Biografia
    </Navbar.Link>
    <Navbar.Link 
      href="/catalogo"
      className='text-white'
      >
      Catalogo
    </Navbar.Link>
    <Navbar.Link 
      href="/pricing"
      className='text-white'
      >
      Servicios
    </Navbar.Link>
    <Navbar.Link 
      href="/contact"
      className='text-white'
      >
      Contacto
    </Navbar.Link>
  </Navbar.Collapse>
</Navbar>
    )
}
