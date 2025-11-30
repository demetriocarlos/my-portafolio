
import { FaNodeJs, FaReact,  FaFlask} from "react-icons/fa";
import {
  SiExpress,
  SiMongodb,
  SiMongoose,
  SiJsonwebtokens,
  SiReactrouter,
  SiReactquery,
  SiAxios,
  SiTailwindcss,
  SiJest
} from "react-icons/si";

 

import { MdDeviceHub } from 'react-icons/md'
import { FaRegClock } from 'react-icons/fa'

 

export const projects = [

   
    
  {
    id:2,
    title:"Task Master",
    description: "Aplicación web fullstack para la gestión colaborativa de tareas. Permite registro e inicio de sesión, creación de tareas con prioridad, fecha límite y subtareas internas. Los usuarios pueden compartir tareas públicas, comentar, dar likes y asignar tareas completas a otros usuarios. Cuenta con sistema de seguidores, notificaciones en tiempo real, timer de expiración, perfiles con estadísticas, buscador de usuarios y diseño totalmente responsivo.",


    tech:[
      { 
        id:1,
        name: "Node.js",
        icon:  FaNodeJs,  
        color: "#339933",
      },
      {
        id:2,
        name: "Express",
        icon: SiExpress,
        color: "#000000",
      },
      {
        id:3,
        name: "MongoDB",
        icon: SiMongodb,
        color: "#47A248",
      },
      {
        id:4,
        name: "Mongoose",
        icon: SiMongoose,
        color: "#880000",
      },
      {
        id:5,
        name: "JWT",
        icon: SiJsonwebtokens,
        color: "#000000",
      },

      {
        id:1006,
        name: "Socket.io",
        icon:   MdDeviceHub, // Usa iconify u otro que soporte logos
        color: " #222222",
      },

      {
        id: 1007,
        name: "Jest",
        icon:  SiJest ,  
        color: "#C21325",
      },
      {
        id: 1008,
        name: "Supertest",
        icon:  FaFlask,  
        color: "#222222",
      },
      {
        id: 1015,
        name: "node-cron",
        icon:  FaRegClock, // Un icono relacionado si no hay uno específico
        color: "#333333",
      },

      {
        id:6,
        name: "React",
        icon: FaReact,
        color: "#61DAFB",
      },
      {
        id:7,
        name: "React Router",
        icon: SiReactrouter,
        color: "#CA4245",
      },
      {
        id:8,
        name: "React Query",
        icon: SiReactquery,
        color: "#FF4154",
      },
      {
        id:9,
        name: "Axios",
        icon: SiAxios,
        color: "#5A29E4",
      },
      {
        id:10,
        name: "Tailwind CSS",
        icon: SiTailwindcss,
        color: "#06B6D4",
      },
       
    ],
    link:"https://gestion-de-tareas-green.vercel.app/",
    repoBackend:"https://github.com/demetriocarlos/gestion_de_tareas_backend",
    repoFrontend:"https://github.com/demetriocarlos/gestion_de_tareas_frontend",
    img:"/imgTask/task-preview3",
    images:[
      {
        id:1, 
        url:"/imgTask/task-preview1.png",
        descripcion: ""
      },
      {
        id:2, 
        url:"/imgTask/task-preview2.png",
        descripcion: ""
      },
      {
        id:3, 
        url:"/imgTask/task-preview3.png",
        descripcion: ""
      },
      {
        id:4, 
        url:"/imgTask/task-preview4.png",
        descripcion: ""
      },
      {
        id:5, 
        url:"/imgTask/task-preview5.png",
        descripcion: ""
      },
      {
        id:6, 
        url:"/imgTask/task-preview6.png",
        descripcion: ""
      },
      {
        id:7, 
        url:"/imgTask/task-preview7.png",
        descripcion: ""
      },
      {
        id:8, 
        url:"/imgTask/task-preview8.png",
        descripcion: ""
      },
      {
        id:9, 
        url:"/imgTask/task-preview9.png",
        descripcion: ""
      },
      {
        id:10, 
        url:"/imgTask/task-preview10.png",
        descripcion: ""
      },
      {
        id:11, 
        url:"/imgTask/task-preview11.png",
        descripcion: ""
      },
      {
        id:12, 
        url:"/imgTask/task-preview12.png",
        descripcion: ""
      },
      {
        id:13, 
        url:"/imgTask/task-preview13.png",
        descripcion: ""
      },
      {
        id:14, 
        url:"/imgTask/task-preview14.png",
        descripcion: ""
      },
      {
        id:15, 
        url:"/imgTask/task-preview15.png",
        descripcion: ""
      },
      {
        id:16, 
        url:"/imgTask/task-preview16.png",
        descripcion: ""
      },
      {
        id:17, 
        url:"/imgTask/task-preview17.png",
        descripcion: ""
      },
      {
        id:18, 
        url:"/imgTask/task-preview18.png",
        descripcion: ""
      },
      {
        id:19, 
        url:"/imgTask/task-preview19.png",
        descripcion: ""
      },
      {
        id:20, 
        url:"/imgTask/task-preview20.png",
        descripcion: ""
      },
      {
        id:21, 
        url:"/imgTask/task-preview21.png",
        descripcion: ""
      },
      {
        id:22, 
        url:"/imgTask/task-preview22.png",
        descripcion: ""
      },
    ],
    order:2,
    descriptionLong:"hola",
    repositorios:[
      {
        name:"Backend",
        githubUrl:"https://github.com/demetriocarlos/gestion_de_tareas_backend"
      },
      {
        name:"Frontend",
        githubUrl:"https://github.com/demetriocarlos/gestion_de_tareas_frontend",
      }
    ]
  },


    {
      id: 1,
      title: "blog",
      description:"Aplicación web fullstack que permite a los usuarios registrarse, iniciar sesión y crear blogs. Los usuarios pueden ver publicaciones de otros, acceder a una página de detalles para cada blog, dar 'likes' y dejar comentarios. Todo gestionado con autenticación segura y una interfaz moderna.",
      tech:[ 
        { 
          id:1,
          name: "Node.js",
          icon:  FaNodeJs,  
          color: "#339933",
        },
        {
          id:2,
          name: "Express",
          icon: SiExpress,
          color: "#000000",
        },
        {
          id:3,
          name: "MongoDB",
          icon: SiMongodb,
          color: "#47A248",
        },
        {
          id:4,
          name: "Mongoose",
          icon: SiMongoose,
          color: "#880000",
        },
        {
          id:5,
          name: "JWT",
          icon: SiJsonwebtokens,
          color: "#000000",
        },
        {
          id:6,
          name: "React",
          icon: FaReact,
          color: "#61DAFB",
        },
        {
          id:7,
          name: "React Router",
          icon: SiReactrouter,
          color: "#CA4245",
        },
        {
          id:8,
          name: "React Query",
          icon: SiReactquery,
          color: "#FF4154",
        },
        {
          id:9,
          name: "Axios",
          icon: SiAxios,
          color: "#5A29E4",
        },
        {
          id:10,
          name: "Tailwind CSS",
          icon: SiTailwindcss,
          color: "#06B6D4",
        },
         
      ],
      link: "https://my-blog-web-seven.vercel.app/",
      repoBackend:"https://github.com/demetriocarlos/backend-blogWeb",
      repoFrontend:"https://github.com/demetriocarlos/my_blogWeb",
      img:"/imgBlog/blog-preview3 ",
      images:[
        {
          id:1, 
          url:"/imgBlog/blog-preview1.png",
          descripcion: " "
        },

        {
          id:2, 
          url:"/imgBlog/blog-preview2.png",
          descripcion: "hola mundo"
        },
        {
          id:3, 
          url: "/imgBlog/blog-preview3.png",
          descripcion: "hola mundo"
        },
        {
          id:4, 
          url:"/imgBlog/blog-preview4.png",
          descripcion: "hola mundo"
        },
        {
          id:5, 
          url:"/imgBlog/blog-preview5.png",
          descripcion: "hola mundo"
        },
        {
          id:6,
          url:"/imgBlog/blog-preview6.png",
          descripcion: "hola mundo"
        },
        {
          id:7,
          url:"/imgBlog/blog-preview7.png",
          descripcion: "hola mundo"
        },
        {
          id:8,
          url:"/imgBlog/blog-preview8.png",
          descripcion: "hola mundo"
        },
        {
          id:9,
          url:"/imgBlog/blog-preview9.png",
          descripcion: "hola mundo"
        },
        {
          id:10, 
          url:"/imgBlog/blog-preview10.png",
          descripcion: "hola mundo"
        },
      ],
      order:1,
      descriptionLong: "Este proyecto fue creado como parte de un portafolio personal, con el objetivo de practicar autenticación, manejo de estado con React Query y estilización moderna con Tailwind. Permite interacción entre usuarios mediante 'likes' y comentarios anónimos.",

      repositorios:[
        {
          name:"Backend",
          githubUrl:"https://github.com/demetriocarlos/backend-blogWeb"
        },
        {
          name:"Frontend",
          githubUrl:"https://github.com/demetriocarlos/my_blogWeb",
        }
      ]

    },

  ];