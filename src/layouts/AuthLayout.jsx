

import { Outlet } from 'react-router-dom'

export default function AuthLayout(){
    return(
        <div
          className='
          items-center
          grid
          md:grid-cols-2
          gap-10
          mx-auto
          container
          max-w-5xl
          min-h-screen'>
            <div
            className='w-full'>
                
                <img
                src="../img/logo.svg"
                alt="logo_img"
                />

            </div>
            <div
            className='w-full'>
            <Outlet
            />
            </div>
          </div>
    )
}