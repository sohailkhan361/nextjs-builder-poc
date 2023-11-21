import Image from 'next/image';
import React from 'react';

type NavItem = {
    name: string
};

type NavbarProps = {
    list?: NavItem[];
};

const Navbar: React.FC<NavbarProps> = ({ list = [{ name: 'Home' }] }) => {
    return (
        <div className='flex items-center justify-between p-3 px-5 shadow-sm border-b-[1px]'>
            <Image
                src='/next.svg'
                alt='next'
                width={100}
                height={100}
            />
            <div className='hidden md:flex gap-5 text-lg font-bold'>
                {list.map((item) => (
                    <h2
                        key={item.name}
                        className='hover:bg-blue-500 px-3 cursor-pointer p-2 rounded-full hover:text-white'
                    >
                        {item.name}
                    </h2>
                ))}
            </div>
        </div>
    );
};

export default Navbar;