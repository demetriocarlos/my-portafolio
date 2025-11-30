 
import { useState } from 'react'
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Maximize } from 'lucide-react';
import { Link } from 'react-router-dom';

export const SlideShowProject = ({project}) => {
    const [index, setIndex] = useState(0 )
  return (
    <> 
      <div 
          className="flex transition-transform duration-700 h-full"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
            {
            project.images.map((image)  => (
                <img        
                key={image.id}
                src={image.url} 
                alt=""
                className=" w-full h-full object-cover  flex-shrink-0   " 
                />
            ))}
      </div>

      <div className="absolute bottom-4 right-4 z-20">
        <Link to={`/imgDetails/${project.id}`}>
          <Maximize color="white" className="bg-gray-700 bg-opacity-40 p-1 rounded-md " />
        </Link>
      </div>



      <button 
        onClick={() => setIndex(prev => {
          const newIndexes = [...prev];
          newIndexes[project.id] = (newIndexes[project.id] -1 + project.images.length ) % project.images.length;                       
          return newIndexes
        })}                      
        className="bg-opacity-40 absolute top-1/2 left-4 transform -translate-y-1/2  bg-gray-700 text-white px-2 py-1  rounded-md z-20"
      >
        <IoIosArrowBack />       
      </button>


      <button
        onClick={() => setIndex((index + 1) % project.images.length)}
        className="  bg-gray-700 bg-opacity-40     absolute top-1/2 right-4 transform -translate-y-1/2  text-white px-2 py-1  rounded-md z-20"
      >
        <IoIosArrowForward />
      </button>
    </>
  )
}
