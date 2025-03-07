'use client';
import Link from 'next/link';

export default function Hero() {
  return (
    <div>
      <header className="fixed top-0 left-0 w-full bg-black/50 text-white py-4 px-6 flex justify-between items-center z-50">
        <h2 className="text-xl font-bold">Benjamin Boule</h2>
        <nav>
          <ul className="flex space-x-6">
            <li><Link href="#about"><span className="cursor-pointer">About</span></Link></li>
            <li><Link href="#resume"><span className="cursor-pointer">Resume</span></Link></li>
            <li><Link href="#portfolio"><span className="cursor-pointer">Portfolio</span></Link></li>
            <li><Link href="#contact"><span className="cursor-pointer">Contact</span></Link></li>
          </ul>
        </nav>
      </header>

      <div className="relative h-screen flex flex-col items-center justify-center text-white text-center bg-cover bg-center" style={{ backgroundImage: "url('/landscape.png')" }}>
        <div className="bg-black/50 p-6 rounded-lg">
          <h1 className="text-5xl font-bold">I&apos;m Benjamin Boule.</h1>
          <p className="mt-4 text-lg">
          I&apos;m a Maryland-based <span className="font-bold">DevOps/Kubernetes Engineer</span>, currently working at <span className="font-bold">Techsecom</span>.
          </p>
          <p className="mt-4 text-lg">
            In my free time, you can catch me automating infrastructure, optimizing cloud deployments, or exploring new DevOps technologies.
          </p>
          <div className="flex justify-center space-x-4 mt-6">
            <a href="#" className="bg-orange-500 text-white px-6 py-2 rounded-lg">Resume</a>
            <a href="#" className="border-2 border-white px-6 py-2 rounded-lg">Contact</a>
          </div>
        </div>
      </div>
    </div>
  );
}