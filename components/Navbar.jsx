import React from 'react'
import Link from 'next/link'
import Logo from './Logo'
import ThemeToggleButton from './ThemeToggleButton'
import { IoLogoGithub } from 'react-icons/io5'

const Navbar = () => {
  return (
    <nav className="fixed p-2 w-full backdrop-blur-md z-10">
      <div className="flex justify-evenly">
        <div className="inline-flex items-center mr-6">
          <Logo />
        </div>
        <Link href="/projects" className="inline-flex items-center mr-6 hover:underline">
          Projects
        </Link>
        <Link href="/posts" className="inline-flex items-center mr-6 hover:underline">
          Posts
        </Link>
        <Link
          href="https://github.com/Daniel-Slattery"
          passHref
          className="inline-flex items-center gap-4 pl-2 mr-6 hover:underline"
        >
          <IoLogoGithub />
          Source
        </Link>
        <ThemeToggleButton />
      </div>
    </nav>
  )
}

export default Navbar
