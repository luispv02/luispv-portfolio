import storeImg from '../assets/projects/01.png' 
import tasksImg from '../assets/projects/02.png' 
import weatherImg from '../assets/projects/03.png' 
import heroesImg from '../assets/projects/05.png' 
import diaryImg from '../assets/projects/06.png' 
import managerImg from '../assets/projects/07.png' 

export const projects = [
    {
        imagen: storeImg,
        titulo: 'Online Store',
        github: 'https://github.com/luispv02/online-store-reactjs',
        pagina: 'https://online-store-ten-xi.vercel.app/',
        descripcion: 'Tienda en linea, podremos buscar articulos por categoria o por el tipo de articulo, podremos añadir al carrito y eliminar articulos, podremos cambiar cantidades todo esto actualizando los precios y el total.',
    },
    {
        imagen: tasksImg,
        titulo: 'Administrador de Tareas',
        github: 'https://github.com/luispv02/Todo-App-React',
        pagina: 'https://todo-app-react-ivory.vercel.app/',
        descripcion: 'TodoApp, agregamos tareas y las enlistamos, las podemos marcar como completas y eliminarlas, usamos LocalStorage para guardar y no perderlas.'
    },
    {
        imagen: weatherImg,
        titulo: 'Buscador Clima',
        github: 'https://github.com/luispv02/buscador-clima',
        pagina: 'https://epic-joliot-1078ac.netlify.app',
        descripcion: 'Busca el clima de tu Ciudad por su nombre y el nombre del Pais de dos digitos, usamos la API de openweather para obtener los resultados', 
    },
    {
        imagen: heroesImg,
        titulo: 'Heroes Search',
        github: 'https://github.com/luispv02/heroes-search',
        pagina: 'https://heroes-search.vercel.app/',
        descripcion: 'Buscador de superheroes por su nombre o Id, filtramos heroes que tengan caracteres similares, usamos la API de superheroapi.', 
    },
    {
        imagen: diaryImg,
        titulo: 'My Diary App ',
        github: 'https://github.com/luispv02/My-diary',
        pagina: 'https://my-diary-psi.vercel.app/',
        descripcion: 'Diario personal, podemos registrar usuario o iniciar sesion con google, al estar logeado podemos crear notas personales, editarlas, agregar imagen y eliminarlas. Usamos redux y firebase para autenticacion y db.', 
    },
    {
        imagen: managerImg,
        titulo: 'Administrador de Pacientes',
        github: 'https://github.com/luispv02/Patient-manager',
        pagina: 'https://patient-manager-two.vercel.app/',
        descripcion: 'Pagina para administrar pacientes, podemos agregar pacientes, editarlos y eliminarlos, usamos redux y firebase.', 
    }
]