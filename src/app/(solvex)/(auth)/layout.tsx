import React from 'react';
import NavbarAuth from './components/NavbarAuth/NavbarAuth';
import Footer from '@/app/components/Footer/Footer';

export interface ILayout {
    children: React.ReactNode
}

export const LayoutAuth: React.FC<ILayout> = ({children}) => {
    return (
        <>
            <div className='flex'>
            <NavbarAuth />
            {children}
            </div>
            <Footer />
        </>
    )
};

export default LayoutAuth;