'use client'

import 'swiper/css'
import 'swiper/css/pagination'

import Image from 'next/image'
import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper/modules'

import { buttonVariants } from '@/components/ui/Button'
import { cn } from '@/lib/utils'

const slides = [
  {
    title: 'Selamat Datang di Kedai Om Jhon',
    subtitle: 'Tempat terpercaya untuk kebutuhan makanan ringan, kebutuhan pokok, dan perabotan rumah tangga.',
    image: '/images/hero1.jpg', // Ganti dengan gambar yang sesuai
  },
  {
    title: 'Makanan Ringan Berkualitas',
    subtitle: 'Nikmati berbagai pilihan makanan ringan favorit dengan harga terjangkau.',
    image: '/images/hero2.jpg', // Ganti dengan gambar yang sesuai
  },
  {
    title: 'Kebutuhan Pokok & Perabotan Rumah Tangga',
    subtitle: 'Sediakan berbagai kebutuhan pokok dan perabotan rumah tangga untuk kenyamanan Anda.',
    image: '/images/hero3.jpg', // Ganti dengan gambar yang sesuai
  },
]

const Hero = () => {
  return (
    <section className="relative w-full h-[80vh] overflow-hidden">
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop
        className="w-full h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="relative w-full h-[80vh] bg-cover bg-center transition-all duration-500 ease-in-out"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="absolute inset-0 bg-black opacity-40"></div>
              <div className="relative z-10 flex flex-col items-center justify-center text-center h-full px-6">
                <h1 className="font-extrabold text-4xl sm:text-6xl lg:text-7xl text-white leading-tight drop-shadow-lg max-w-3xl">
                  {slide.title}
                </h1>
                <h2 className="max-w-2xl leading-normal text-gray-300 text-lg sm:text-xl mt-4">
                  {slide.subtitle}
                </h2>
                <div className="flex flex-wrap items-center gap-6 mt-6">
                  <a
                    href="/products"
                    className={cn(
                      buttonVariants(),
                      "bg-blue-500 hover:bg-blue-600 text-white transition-all duration-300 py-3 px-8 text-lg rounded-full shadow-lg transform hover:scale-105"
                    )}
                  >
                    Belanja Sekarang
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

export default Hero
