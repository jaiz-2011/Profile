import aboutImg from "../assets/abtme.png";
import {ABOUT_TEXT} from "../Constants";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className='border-b border-neutral-900 pb-4'>
        <h1 className='my-20 text-center text-5xl'>About 
            <span className="text-neutral-500"> Me</span>
        </h1>
        <div className="flex flex-wrap items-center">
            <div className="flex w-full justify-center lg:w-1/2 lg:justify-end lg:pr-6 lg:pl-8">
               <motion.div 
               whileInView={{ opacity: 1, x: 0}}
               initial={{ opacity: 0, x: -100}}
               transition={{ duration: 0.5}}
               className="flex w-full max-w-sm items-center justify-center">
                <div className="relative w-full overflow-hidden rounded-2xl">
                  <img className="w-full object-contain" src={aboutImg} alt="About" />
                  <div
                    className="pointer-events-none absolute inset-0"
                    style={{
                      background:
                        "radial-gradient(140% 120% at 50% 45%, rgba(0,0,0,0) 60%, rgba(0,0,0,0.04) 100%)",
                    }}
                  />
                </div>
               </motion.div>
            </div>
            <div className="flex w-full justify-center lg:w-1/2 lg:justify-start lg:pl-6 lg:pr-8">
                <motion.div 
                whileInView={{ opacity: 1, x: 0}}
                initial={{ opacity: 0, x: 100}}
                transition={{ duration: 0.5}}
                className="flex w-full max-w-xl items-center">
                    <p className="w-full py-6 text-xl font-normal leading-relaxed tracking-tight text-neutral-300 lg:py-0">{ABOUT_TEXT}</p>
                </motion.div>
               </div>
        </div>
    </div>
  )
}

export default About
