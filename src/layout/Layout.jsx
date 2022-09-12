import { Outlet, Link, useLocation } from "react-router-dom"

const Layout = () => {

  const location = useLocation()
  const urlActual = location.pathname

  return (
    <div className="md:flex md:min-h-screen"> 
      <div className="md:w-1/4 bg-blue-900 px-5 py-10">
      <h2 className="text-4xl font-black text-center text-white">CRM - Clientes</h2>
        
      <nav className="mt-10">
        <Link 
        className={`${urlActual === '/clientes' ? 'text-blue-300' : 'text-white '} text-2xl block mt-2 hover:text-blue-300`}
        to="/clientes">
        Clientes</Link>
        <Link 
        className={`${urlActual === '/clientes/nuevo' ? 'text-blue-300' : 'text-white '} text-2xl block mt-2 hover:text-blue-300`}
        to="/clientes/nuevo">
        Nuevo Cliente</Link>
      </nav>
      </div>

      <div className="md:w-3/4 p-10 md:h-screen overflow-scroll bg-gray-200">
        
    <Outlet/>
      </div>
    </div>
  )
}

export default Layout


//<div className="md:flex md:min-h-screen"> Dice que en un tamaño medio va a aplicar flexbox, y en el tamaño minimo de pantalla va ser toda la altura que tengamos.
//con react-router no se usa más el en el nav el "<a>" ni el "<href=''>". se reemplaza "<Link>" por "<a>" y el "<to=''>" como el "<href=''>"