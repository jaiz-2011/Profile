import { motion } from "framer-motion";

const Experience = () => {
  const careerText = `Delivering high-quality, end-to-end web development services as a dedicated team, focused on building modern, scalable, and high-performance digital solutions. Every project is approached with a strong emphasis on clean architecture, seamless user experience, and responsive design, ensuring products that not only look premium but perform flawlessly across all devices.

With expertise in the latest technologies including React, Vite, JavaScript (ES6+), Tailwind CSS, and API integrations, solutions are crafted to be fast, reliable, and future-ready. The focus remains on precision, efficiency, and long-term scalability — consistently delivering results that align with business goals and exceed client expectations.`
    .replace(/\s+/g, " ")
    .trim();

  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h2 
      whileInView={{opacity: 1, y: 0}}
      initial={{opacity: 0, y: -100}}
      transition={{duration: 0.5}}
      className="my-20 text-center text-5xl font-bold tracking-tight">Experience</motion.h2>

      <div className="flex flex-wrap lg:justify-center">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 0 }}
          transition={{ duration: 1 }}
          className="w-full max-w-3xl px-4 mx-auto"
        >
          <p className="mb-6 text-center text-2xl font-bold text-neutral-300">
            2020 - 2025
          </p>
          <p className="my-2 max-w-xl py-6 text-center text-xl font-normal leading-relaxed tracking-tight text-neutral-300 mx-auto">
            {careerText}
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Experience

