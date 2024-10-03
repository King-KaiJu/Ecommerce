'use client';
import { useAppContext } from '@/app/contexts/AppContext';
import Link from 'next/link';
import Image from 'next/image';
import { FaCartShopping } from 'react-icons/fa6';

export default function Navbar() {
  const { cartLength } = useAppContext();
  return (
    <div className='flex justify-between items-center h-24 bg-slate-700 text-white px-10'>
      <Link href={`/`}>
        <Image src={`/imgs/logo-nerd.svg`} width={100} height={100} alt='Logo' />
      </Link>
      <nav>
        <ul className='flex justify-center items-center gap-5'>
          <li>
            <Link href={`/`}>Home</Link>
          </li>
          <li>
            <Link href={`/cart`}>Cart</Link>
          </li>
        </ul>
      </nav>

      <Link href={`/cart`}>
        <div className='relative'>
          <FaCartShopping size={30} />
          {cartLength > 0 && (
            <span className=' absolute top-5 left-5 flex items-center justify-center bg-black text-white rounded-full w-2 h-4 p-4 text-sm'>
              {' '}
              {cartLength}
            </span>
          )}
        </div>
      </Link>
    </div>
  );
}
