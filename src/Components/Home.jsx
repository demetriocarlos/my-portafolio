
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Github , } from 'lucide-react';
 

export const Home = () => {
  return (
    
    <div className="flex flex-col items-center justify-center min-h-screen px-4 bg-gray-900">
      <motion.div
        initial={{opacity:0, y:50}}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
         
        <h2 className="text-4xl md:text-5xl font-bold text-gray-100">
          Hola, mi nombre es <span className="text-indigo-400">Demetrio</span>
        </h2>
        <h3 className="text-xl md:text-2x1 mt-4 text-gray-300">
          Soy desarrollador <span className="text-green-400">Fullstack</span>
        </h3>
        <p className="mt-6 text-gray-400 max-w-xl mx-auto">
          Apasionado por crear aplicaciones web modernas, funcionales y escalables.
          Trabajo con tecnologías como React, Node.js, Express y más.
        </p>
        <a
          href="https://github.com/tuUsuario"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center mt-6 bg-gray-700 text-white px-5 py-2 rounded hover:bg-gray-600 transition"
        >
          
          <Github className="w-5 h-5 mr-2"/>
          GitHub
        </a>

         
      </motion.div>

    </div>
  )
}



