import Link from 'next/link';
import { Icons } from '../Icons';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger
} from '../ui/NavigationMenu';
import { ListItem } from './ListItem';
import Image from 'next/image';

const DesktopNav = () => {
  return (
    <div className='hidden lg:flex gap-x-8 items-center p-4 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl shadow-lg'>
      <Link href='/' className='flex items-center space-x-2'>
        <Image src="/images/logo.png" alt='Logo' className="h-12 w-12 transition-transform duration-200 hover:scale-110"/>
        <span className='hidden font-bold text-white text-lg lg:inline-block transition-colors duration-200 hover:text-yellow-400'>Kedai Om Jhon</span>
        <span className='sr-only'>Home</span>
      </Link>
      <NavigationMenu>
        <NavigationMenuList className='flex items-center space-x-6'>
          <NavigationMenuItem>
            <NavigationMenuTrigger className='text-blue-500'>Lobby</NavigationMenuTrigger>
            <NavigationMenuContent className='bg-white rounded-lg shadow-lg mt-2'>
              <ul className='grid gap-4 p-6 md:w-[400px] lg:w-[500px]'>
                <li className='row-span-3'>
                  <NavigationMenuLink asChild>
                    <Link href='' className='flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-blue-500 to-blue-600 p-6 no-underline outline-none focus:ring-2 ring-yellow-400 transition-all'>
                      <Image src='images/logo.png' alt='Logo' className='h-12 w-12 text-white' />
                      <div className='mt-4 text-xl font-medium text-white'>Kedai Om Jhon</div>
                      <p className='text-sm text-white/80 mt-2'>An open source ecommerce skateshop built with everything new in Next.js</p>
                    </Link>
                  </NavigationMenuLink>
                </li>
                <ListItem href='/products' title='Products'>
                  All the products we have to offer
                </ListItem>
                <ListItem href='/#categories' title='Categories'>
                  See all categories we have
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger className='text-blue-500'>Categories</NavigationMenuTrigger>
            <NavigationMenuContent className='bg-white rounded-lg shadow-lg mt-2'>
              <ul className='grid w-[400px] gap-4 p-6 md:w-[500px] md:grid-cols-2'>
                <ListItem href='/products?category=kebutuhanpokok' title='Kebutuhan Pokok'>
                  Explore the kebutuhan pokok category
                </ListItem>
                <ListItem href='/products?category=perabotan' title='Perabotan'>
                  Explore the perabotan category
                </ListItem>
                <ListItem href='/products?category=makananringan' title='Makanan Ringan'>
                  Explore the makanan ringan category
                </ListItem>
                <ListItem href='/products?category=minuman' title='Minuman'>
                  Explore the minuman category
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <Link
              href="/about"
              className="text-sm font-medium text-blue-500 bg-white rounded-lg shadow-lg block px-4 py-2 transition-all duration-300 hover:bg-opacity-50 hover:bg-blur-md hover:text-black"
            >
              Tentang Kami
            </Link>
          </NavigationMenuItem>


        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};

export default DesktopNav;
