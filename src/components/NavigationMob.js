import React from 'react';
import { mobileNavigation } from '../Constants/navigation';
import { NavLink } from 'react-router-dom';

const NavigationMob = () => {
    return (
        <section className='lg:hidden bg-slate-800 fixed bottom-0 w-full h-12 flex items-cente z-50 '>
            <div className='flex w-full items-center justify-between text-white'>
                {
                    mobileNavigation.map((nav,index)=>{
                        return(
                            <NavLink to={nav.href} key={nav.name + "mobilenaviation"} className={({isActive})=>`text-2xl px-4 ${isActive && "text-blue-500"}`}>
                            <div>
                                {nav.icon}
                            </div>
                            </NavLink>
                        )
                    })
                }
            </div>
        </section>
    );
}

export default NavigationMob;
