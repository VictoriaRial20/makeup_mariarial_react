import foto1 from '../img/foto1.jpg';
import foto2 from '../img/foto2.jpg';
import foto3 from '../img/foto3.jpg';
import foto4 from '../img/foto4.jpg';
import foto5 from '../img/foto5.jpg';
import foto6 from '../img/foto6.jpg';
//Array de los servicios disponibles 
export const arregloServicios = [ 
    {
        name: "CURSO AUTOMAQUILLAJE",
        img: foto1,
        price: 1200,
        id: 1,
        description: "La duración del curso de Automaquillaje es de 2 clases de 120 minutos cada una.Verán todo lo necesario para una rutina de skincare, piel perfecta, boca impecable, y dos looks de ojos en base a los gustos de la clienta."
    },
    {
        name: "CURSO TÉCNICAS",
        img: foto2,
        price: 1200,
        id: 2,
        description: "La duración del curso de Técnicas es de 1 clase de 120 minutos. Verán todo lo necesario para una aprender como maquillar una novia, destacar los rasgos y lograr lo que su clienta desea."
    },
    {
        name: "CURSO NOVIAS",
        img: foto3,
        price: 1200,
        id: 3,
        description: "La duración del curso de novia es de 1 clase de 120 minutos. Verán todo lo necesario para una aprender como maquillar una novia, destacar los rasgos y lograr lo que su clienta desea."
    },
    {
        name: "MAQUILLAJE SOCIAL",
        img: foto4,
        price: 1200,
        id: 4,
        description: "La duración del maquillaje social es 60 minutos aproximadamente. En domicilio o en nuestro estudio.Para un buen funcionamiento de la agenda somos super puntuales con los horarios."
    },
    {
        name: "MAQUILLAJE NOVIAS",
        img: foto5,
        price: 1200,
        id: 5,
        description: "La duración del maquillaje de novia es 90 minutos aproximadamente. En el caso de que desees la exclusividad de la maquilladora durante tu gran día, no dudes en consultarnos el costo."
    },
    {
        name: "MAQUILLAJE 15",
        img: foto6,
        price: 1200,
        id: 6,
        description: "La duración del maquillaje de 15 años es 90 minutos aproximadamente. En el caso de que desees la exclusividad de la maquilladora durante tu gran día, no dudes en consultarnos el costo."
    },
]
//Creamos una Promesa que resuelve el array de servicios, devuelve el array, si hay un error lo muestra en pantalla
const obtenerServicios = () => { 
    return new Promise((resolve,reject) =>{
        setTimeout(() => {
            resolve(arregloServicios)
            reject (err => console.log(err))
        }, 2000);
    })
}
export default obtenerServicios; 