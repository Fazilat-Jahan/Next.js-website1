import Image from "next/image";
import logo from '@/app/images/logo.jpg';
import Link from "next/link";

export default function Page() {
  return (
    <div className=" w-full min-h-screen bg-[url('images/wallpaper.jpg')] bg-contain ">
      <div className="w-full bg-black bg-opacity-50 py-3">
        <nav className="flex flex-wrap justify-between items-center text-white transition duration-300 hover:bg-opacity-80 hover:bg-black px-4 md:px-6">

          <div className="flex items-center space-x-4">
            <Link href="/">
              <Image src={logo} alt="logo" width={100} height={100} className="rounded-full " /> </Link>
          </div>
          <div className="flex space-x-4 mt-2 md:mt-0">
            <Link href="/about">
              <button className="hover:text-yellow-600 cursor-pointer">About Us</button>  </Link>
            <Link href="/gallery">
              <button className="hover:text-yellow-600 cursor-pointer">Collection</button> </Link>
          </div>
        </nav>
      </div>

      <main className="flex flex-col md:flex-row py-6 px-4 md:px-4">

        <section className="flex w-full md:w-1/2 mb-6">
          <div className=" text-white font-serif px-4 py-6 md:text-justify text-justify">
            <h1 className="font-bold text-2xl md:text-3xl text-center">The Wall Art: Inspiring Spaces</h1>
            <p className="text-xl py-10 md:text-2xl">Welcome to our esteemed collection of wall art ideas, where you'll find the finest pieces of art from around the world. Our mission is to provide you with a diverse range of artistic and asthetic styles that can transform any space into a masterpiece.</p>

            <Link href="/about">
              <button className=" py-2 bg-yellow-600 rounded-lg text-black font-bold hover:bg-yellow-500 shadow-lg ">Know More</button>
            </Link>
          </div>
        </section>

        <section className="flex w-full md:w-1/2 px-4 md:space-x-2 flex-row md:flex-row ">

          <div className="flex flex-col space-y-2 w-full md:w-1/2 ">
            <div className="h-full md:h-full">
              <img src="/images/4.jpg" alt="wall art" className="rounded-lg object-cover w-full h-full " />
            </div>
            <div className=" h-full md:h-full">
              <img src="/images/image3.jpg" alt="wall art" className="rounded-lg object-cover w-full h-full " />
            </div>
          </div>

          <div className="flex flex-col px-1 space-y-2 w-full md:w-1/2 ">
            <div className=" h-full md:h-full ">
              <img src="/images/image6.jpg" alt="wall art" className="rounded-lg object-cover w-full h-full " />
            </div>
            <div className="px-1 h-auto md:h-full">
              <Link href="/gallery">
                <button className="px-5 md:py-6 md:px-14 sm:px-6 sm:py-3  bg-yellow-600 rounded-lg text-black font-bold hover:bg-yellow-500 shadow-lg sm:text-base"> More Collection </button>
              </Link> </div>

          </div>
        </section>
      </main>


    </div>
  );
}


