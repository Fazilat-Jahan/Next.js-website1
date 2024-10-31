"use client";
import { useState } from "react";

import Image from "next/image";
import logo from '@/app/images/logo.jpg';
import Link from "next/link";

export default function Page() {
    const images = [
        '/images/7.jpg',
        '/images/1.jpg',
        '/images/2.jpg',
        '/images/3.jpg',
        '/images/4.jpg',
        '/images/5.jpg',
        '/images/6.jpg',
        '/images/8.jpg',
        '/images/9.jpg',
        '/images/10.jpg',
        '/images/image1.jpg',
        '/images/image2.jpg',
        '/images/image3.jpg',
        '/images/image4.jpg',
        '/images/image5.jpg',
        '/images/image6.jpg',
        '/images/image7.jpg',
        '/images/image8.jpg',
        '/images/image9.jpg',
        '/images/image10.jpg',
        '/images/image11.jpg',
        '/images/image12.jpg',
        '/images/image13.jpg',
        '/images/image14.jpg',
    ];

    const [selectedImage, setselectedImage] = useState<string | null>(null);

    // handdling clickable image
    const handleImageClick = (src: string): void => {
        setselectedImage(src);
    };

    //close the model
    const handleCloseClick = (): void => {
        setselectedImage(null);
    };

    return (
        <div className=" w-full h-fit bg-[url('images/wallpaper.jpg')] ">
            <div className="w-full bg-black bg-opacity-50 py-3">
                <nav className="flex justify-between items-center text-white transition duration-300 hover:bg-opacity-80 hover:bg-black px-4 md:px-6">

                    <div className="flex items-center space-x-2">
                        <Link href="/">
                        <Image src={logo} alt="logo" width={100} height={100} className="rounded-full" /> </Link>
                    </div>

                    <div className="hidden md:flex flex-grow px-2 py-2 justify-center">
                        <h1 className="font-bold  text-white font-serif text-3xl">The Wall Art: Inspiring Spaces</h1>
                    </div>

                    <div className="flex space-x-4">
                        <Link href="/about">
                            <button className="hover:text-yellow-600 cursor-pointer">About Us</button>  </Link>
                        <Link href="/gallery">
                            <button className="hover:text-yellow-600 cursor-pointer">Collection</button> </Link>
                    </div>
                </nav>
            </div>

            <div className="px-2 py-2 lg:hidden sm:hidden md:hidden">
                <h1 className="font-bold text-2xl px-2 text-white font-serif text-center">The Wall Art: Inspiring Spaces</h1>
            </div>

            <main className="flex py-10 px-6">

                <div className="columns-3 sm:columns-3 md:columns-3 lg:columns-4 gap-4 space-y-4">

                    {
                        images.map((src, index) => (
                            <div key={index} className="break-inside-avoid">
                                <img src={src} alt={`wall art ${index + 1}`} className="w-full h-full shadow-lg rounded-lg object-cover cursor-pointer" onClick={() => handleImageClick(src)} />
                            </div>
                        )
                        )
                    }

                </div>

            </main>

            {
                selectedImage && (
                    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
                        <div className="relative">
                            <button onClick={handleCloseClick} className="absolute top-0 right-0 p-2 text-white text-2xl"> &times; </button>
                            <img src={selectedImage} alt="wall art" className="max-h-full max-w-full" />
                        </div>

                    </div>
                )
            }



        </div>
    );
}


