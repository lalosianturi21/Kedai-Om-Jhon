'use client';

import { Menu } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/Accordion';
import { Button } from '@/components/ui/Button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/Sheet';

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className='flex lg:hidden'>
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button variant='ghost' size='icon'>
            <Menu className='w-6 h-6 text-muted-foreground transition-transform duration-200 hover:scale-110' />
            <span className='sr-only'>Toggle Menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side='left' className='bg-white shadow-lg'>
          <div className='px-4 py-6 flex flex-col gap-6'>
            <Link
              href='/'
              className='flex items-center gap-3 text-primary-foreground hover:text-primary transition-colors duration-200'
              onClick={() => setIsOpen(false)}
            >
              <img
                src='/images/logo.png'
                alt='Logo'
                className='h-10 w-10 rounded-full transition-transform duration-200 hover:scale-110'
              />
              <span className='text-black font-semibold'>Kedai Om Jhon</span>
            </Link>

            <div className='text-base'>
              <Accordion
                type='multiple'
                defaultValue={['item-1', 'item-2', 'item-3']}
                className='w-full'
              >
                <AccordionItem value='item-1'>
                  <Link
                    href='/dashboard/orders'
                    className='text-base font-medium hover:text-primary transition-colors duration-200'
                    onClick={() => setIsOpen(false)}
                  >
                    Dashboard
                  </Link>
                </AccordionItem>

                <AccordionItem value='item-2'>
                  <AccordionTrigger className='font-semibold text-black'>Lobby</AccordionTrigger>
                  <AccordionContent>
                    <div className='flex flex-col gap-y-3 text-muted-foreground'>
                      <Link
                        onClick={() => setIsOpen(false)}
                        href='/products'
                        className='hover:text-primary transition-colors duration-200'
                      >
                        Products
                      </Link>
                      <Link
                        onClick={() => setIsOpen(false)}
                        href='/#categories'
                        className='hover:text-primary transition-colors duration-200'
                      >
                        Categories
                      </Link>
                    
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value='item-3'>
                  <AccordionTrigger className='font-semibold text-black'>Categories</AccordionTrigger>
                  <AccordionContent>
                    <div className='flex flex-col gap-y-3 text-muted-foreground'>
                      <Link
                        onClick={() => setIsOpen(false)}
                        href='/products?category=kebutuhanpokok'
                        className='hover:text-primary transition-colors duration-200'
                      >
                        Kebutuhan Pokok
                      </Link>
                      <Link
                        onClick={() => setIsOpen(false)}
                        href='/products?category=perabotan'
                        className='hover:text-primary transition-colors duration-200'
                      >
                        Perabotan
                      </Link>
                      <Link
                        onClick={() => setIsOpen(false)}
                        href='/products?category=makananringan'
                        className='hover:text-primary transition-colors duration-200'
                      >
                        Makanan Ringan
                      </Link>
                      <Link
                        onClick={() => setIsOpen(false)}
                        href='/products?category=minuman'
                        className='hover:text-primary transition-colors duration-200'
                      >
                        Minuman
                      </Link>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileNav;