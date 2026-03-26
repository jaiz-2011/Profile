import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

const Navbar = () => {
  return <nav className= "mb-20 flex items-start sm:items-center justify-between py-6">
    <div className="flex flex-shrink-0 items-center">
        <span className="mx-2 text-5xl font-semibold tracking-tight bg-gradient-to-r from-pink-300 via-slate-400 to-purple-500 bg-clip-text text-transparent">
          Ja
        </span>
    </div>
    <div className="mt-2 flex items-center gap-5 text-2xl sm:mt-0 sm:text-3xl text-neutral-300">
      <a className="flex h-10 w-10 shrink-0 items-center justify-center leading-none sm:h-12 sm:w-12" href="https://www.linkedin.com/in/jairajameria/"><FaLinkedin className="block" /></a>
      <a className="flex h-10 w-10 shrink-0 items-center justify-center leading-none sm:h-12 sm:w-12" href="https://github.com/jaiz-2011"><FaGithub className="block" /></a>
      <a className="flex h-10 w-10 shrink-0 items-center justify-center leading-none sm:h-12 sm:w-12" href="https://x.com/JairajAmeria"><FaSquareXTwitter className="block" /></a>
      <a className="flex h-10 w-10 shrink-0 items-center justify-center leading-none sm:h-12 sm:w-12" href="https://www.instagram.com/jaizzy2011/"><FaInstagram className="block" /></a>
    </div>
  </nav>
}

export default Navbar
