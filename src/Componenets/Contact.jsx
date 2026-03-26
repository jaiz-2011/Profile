import { CONTACT } from "../Constants"
import { motion } from "framer-motion"

const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-20">
      <motion.h2 
      whileInView={{opacity: 1, y: 0}}
      initial={{opacity: 0, y: -100}}
      transition={{duration: 0.5}}
      className="my-10 text-center text-5xl font-bold tracking-tight">Get in Touch</motion.h2>
      <div className="text-center tracking-tighter"></div>
      <motion.p 
      whileInView={{opacity: 1, x: 0}}
      initial={{opacity: 0, x: -100}}
      transition={{duration: 1}}
      className="my-4 text-lg text-neutral-300">{CONTACT.address}</motion.p>
      <motion.a
      whileInView={{opacity: 1, x: 0}}
      initial={{opacity: 0, x: 100}}
      transition={{duration: 0.5}}
      className="my-4 block text-lg text-neutral-300 border-b border-transparent hover:border-neutral-700"
      href={`tel:${String(CONTACT.phoneNo).replace(/\s+/g, "")}`}
    >
        {CONTACT.phoneNo}
      </motion.a>
      <a
        className="border-b text-lg text-neutral-300"
        href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(CONTACT.email)}`}
        target="_blank"
        rel="noreferrer"
      >
        {CONTACT.email}
      </a>
    </div>
  )
}

export default Contact
