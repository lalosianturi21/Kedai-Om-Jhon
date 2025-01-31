import React from "react";
import Image from 'next/image';

const About = () => {
  return (
    <div className="container mx-auto p-6 flex flex-col md:flex-row items-center justify-center gap-8 pt-20" style={{ marginBottom: '120px' }}>
      {/* Gambar */}
      <div className="md:w-1/2 w-full flex justify-center">
        <Image
          src="/images/hero1.jpg"
          alt="Tentang Kami"
          className="rounded-2xl shadow-lg w-full md:max-w-md"
        />
      </div>
      
      {/* Konten */}
      <div className="md:w-1/2 w-full text-center md:text-left">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Tentang Kami</h1>
        <p className="text-lg text-gray-600 leading-relaxed">
          Kami adalah perusahaan ecommerce yang menyediakan berbagai produk berkualitas
          dan berkomitmen untuk memberikan pengalaman belanja yang menyenangkan.
          <span className="block mt-2 font-semibold text-gray-700">
            Di Kedai Om Jhon, kepuasan pelanggan adalah prioritas utama kami.
          </span>
        </p>
        <p className="text-lg text-gray-600 mt-4 leading-relaxed">
          Tujuan kami adalah untuk terus berkembang dan memberikan lebih banyak pilihan
          produk yang bermanfaat bagi pelanggan kami. Kami percaya bahwa produk kami dapat
          membawa perubahan positif bagi kehidupan Anda.
        </p>
      </div>
    </div>
  );
};

export default About;