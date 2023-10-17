
import { Outlet } from 'react-router-dom'
import Sidebar from '../components/Sidebar'


import Resumen from '../components/Resumen'
import useQuiosko from '../hooks/useQuiosko'

export default function Layout(){

   

    return(
        <>
          <div className='grid md:grid-cols-12'>

          <div className=' md:col-span-2'>
              <Sidebar />
          </div>

          <main className=' md:col-span-8 h-screen overflow-y-auto px-4 bg-slate-100'>
          <Outlet />
          </main>

          <div className=' md:col-span-2'>
              <Resumen />
          </div>


          </div>

      

        </>
    )
}