import Image from 'next/image';
import Link from 'next/link';
// import { footerLinks } from '@/constants';

type FooterItem = {
    name: string;
};

type FooterProps = {
    list: FooterItem[]
}

const Footer: React.FC<FooterProps> = ({ list = [{ name: 'Address' }] }) => {
    return (
        <footer className='flex flex-col text-black-100 mt-5 border-t border-gray-100'>
            <div className='flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10'>
                <div className='flex flex-col justify-start items-start gap-6'>
                    <Image
                        src={'/vercel.svg'}
                        alt='vercel'
                        width={118}
                        height={18}
                        className='object-contain'
                        priority={true}
                    />
                    <p className='text-base text-gray-700'>
                        Audible 2023 <br />
                        All rights reserved &copy;
                    </p>
                </div>

                <div className='flex-1 w-full flex md:justify-end flex-wrap max-md:mt-10 gap-20'>
                    {list.map((link) => (
                        <div key={link.name} className='flex flex-col gap-6 text-base min-w-[170px]'>
                            <h3>{link.name}</h3>
                        </div>
                    ))}
                </div>
            </div>


            <div className='flex justify-between items-center flex-wrap mt-10 border-t border-gray-100 sm:px-16 px-6 py-10'>
                <p>@2023 AudibleP41. All Rights Reserved</p>
                <div className='flex-1 flex sm:justify-end justify-center max-sm:mt-4 gap-10'>
                    <Link href={'/'} className='text-gray-500'>
                        Privacy Policy
                    </Link>
                    <Link href={'/'} className='text-gray-500'>
                        Terms of Use
                    </Link>
                </div>
            </div>
        </footer>
    )
}

export default Footer