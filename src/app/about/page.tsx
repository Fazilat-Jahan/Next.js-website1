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
                <Image src={logo} alt="logo" width={100} height={100}  className="rounded-full "/> </Link>
            </div>
            <div className="flex space-x-4 mt-2 md:mt-0">
              <Link href="/about">
                <button className="hover:text-yellow-600 cursor-pointer">About Us</button>  </Link>
              <Link href="/gallery">
                <button className="hover:text-yellow-600 cursor-pointer">Collection</button> </Link>
            </div>
          </nav>
        </div>
  
            <main className="flex justify-between py-2 px-6">
                <section className="flex justify-between items-start space-y-2">
                    <div className=" text-white font-serif px-6 py-10 text-justify text-opacity-100">
                        <h1 className="font-bold text-3xl md:text-5xl text-center">The Wall Art: Inspiring Spaces</h1>
                        <p className="text-2xl py-10 md:text-2xl">Welcome to The Wall Art! We’re passionate about bringing creativity and inspiration into your spaces through our curated collection of wall decor ideas. Here, you’ll find a delightful variety of aesthetic and artistic pieces, including stunning 3D designs that truly transform any room into a masterpiece.

                            Whether you’re drawn to tranquil landscapes that bring a sense of calm or vibrant abstracts that spark your imagination, our selection caters to every taste. We believe that art should resonate with you, making your home, office, or resort feel uniquely yours.

                            Join us on this journey to discover art that not only beautifies your walls but also tells your story. We’re dedicated to helping you find that perfect piece that makes your space feel warm and inviting—because every wall has a tale to tell!  <Link href="/gallery">
                                <button className="mx-5 my-1 px-2 py-1 bg-yellow-600 rounded-lg text-black font-bold hover:bg-yellow-500 shadow-lg ">See Art</button>
                            </Link></p>
                    </div>
                </section>
            </main>
        </div>
    );
}
