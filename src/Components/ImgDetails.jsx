 
import { useParams } from "react-router-dom"
import { projects } from "../data/proyects"
import { useState } from "react"
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
 


export const ImgDetails = () => {
  const id = useParams().id
  const [indexes, setIndexes] = useState(0)
    
    const projectId = projects.filter((project)  => project.id == id )
 

 return (
     <>  
                                                        {/**min-h-screen: hace que el contenedor tenga al menos el alto de la pantalla. */} 
  <div className="flex items-center justify-center  min-h-screen bg-gray-900 px-4">
                                                   {/**aspect-video: asegura que el contenedor mantenga relación 16:9, en cualquier pantalla. */}
    <div className="relative w-full max-w-[900px] aspect-video overflow-hidden rounded-xl shadow-lg">
      {/* Carrusel de imágenes */}
                                                          {/**h-full en el carrusel e imágenes: asegura que el carrusel ocupe todo el contenedor, sin dejar espacios. */}
      <div 
        className="flex transition-transform duration-700 h-full"
        style={{ transform: `translateX(-${indexes * 100}%)` }}
      >
        { projectId[0].images.map((image) => (
          <img
            key={image.id}
            src={image.url}
            alt={image.descripcion}
            //object-cover flex-shrink-0
            className="w-full h-full flex-shrink-0"
          />
        ))}
      </div>

      {/* Botones centrados */}
                        {/**absolute inset-0 + flex items-center: centra verticalmente los botones al tamaño real de la imagen, sin depender de altura fija. */}
      <div className="absolute inset-0 flex items-center justify-between px-4 z-10">
        <button
          onClick={() =>
            setIndexes((indexes - 1 +  projectId[0].images.length) %  projectId[0].images.length)
          }
          className="bg-black/40 text-white p-2 rounded-full hover:bg-black/60 transition"
        >
          <IoIosArrowBack />
        </button>
        <button
          onClick={() => setIndexes((indexes + 1) %  projectId[0].images.length)}
          className="bg-black/40 text-white p-2 rounded-full hover:bg-black/60 transition"
        >
          <IoIosArrowForward />
        </button>
      </div>
    </div>
  </div>
        
  </>  
    
  )
}





 






    