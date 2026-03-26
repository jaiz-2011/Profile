import { PROJECTS } from "../Constants"
import { motion } from "framer-motion"

const Project = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
     <motion.h2 
     whileInView={{opacity: 1, y: 0}}
     initial={{opacity: 0, y: -100}}
     transition={{duration: 0.5}}
     className="my-20 text-center text-5xl font-bold tracking-tight">Projects</motion.h2>
     <div className="">{PROJECTS.map((project, index) =>(
        <div key={index} className="mb-16 flex flex-wrap lg:justify-center">
            <motion.div 
            whileInView={{opacity: 1, x: 0}}
            initial={{opacity: 0, x: -100}}
            transition={{duration: 1}}
            className="flex w-full justify-center lg:w-1/4">
            <img src={project.image} width={150} height={150} alt={project.title} className="mb-6 rounded" />
            </motion.div>
            <motion.div 
            whileInView={{opacity: 1, x: 0}}
            initial={{opacity: 0, x: 100}}
            transition={{duration: 1}}
            className="w-full max-w-xl lg:w-3/4">
            <a
              href={project.url}
              target="_blank"
              rel="noreferrer"
              className="mb-2 inline-block text-xl font-bold hover:underline"
            >
              {project.title}
            </a>
            <p className="mb-4 text-lg leading-relaxed text-neutral-300">{project.description}</p>
            <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="inline-flex items-center rounded-full bg-neutral-800/70 px-2 py-1 text-lg font-semibold text-purple-200 ring-1 ring-neutral-700/80 whitespace-nowrap"
                >
                  {tech}
                </span>
              ))}
            </div>
            </motion.div>
        </div>
     ))}
     </div>
    </div>
  )
}

export default Project

