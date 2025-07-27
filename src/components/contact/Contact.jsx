
import { useActionState, useEffect, useState } from 'react';
import { sendEmail } from '../../helpers/sendEmail';


export const Contact = () => {

  const [displayMessage, setDisplayMessage] = useState(null) 
  const [state, formAction, isPending] = useActionState(
    async(previousState, formData) => {
      const name = formData.get('name')
      const title = formData.get('title')
      const message = formData.get('message');

      if(!name || !title || !message){
        return { error: true, message: 'Todos los campos son obligatorios' }
      }
      try {
        await sendEmail({name, title, message})
        return { error: false, message: 'Mensaje enviado correctamente'};
      } catch (error) {
        return { error: true, message: 'Error al enviar el mensaje'}
      }
    },
    { error: null, message: null }
  )

  useEffect(() => {
    if(state?.message){
      setDisplayMessage(state);

      const timer = setTimeout(() => {
        setDisplayMessage(null);
      }, 3000)

      return () => clearTimeout(timer)
    }
  }, [state])
  

  return (
    <div className="contact"  id="contact">

        <div className="contact-content py-10 px-7 bg-white text-black">
            <h2 className="text-center text-3xl pb-6 ">Contacto</h2>

            <form action={formAction} className="contact-content-form flex flex-col gap-6 max-w-lg mx-auto">
                <div className="flex flex-col">
                    <label htmlFor="name" className="mb-1 font-semibold">Nombre</label>
                    <input type="text" id="name" name="name" className="px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="Tu nombre" />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="title" className="mb-1 font-semibold">Asunto</label>
                    <input type="text" id="title" name="title" className="px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="Asunto del mensaje" />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="message" className="mb-1 font-semibold">Mensaje</label>
                    <textarea id="message" name="message" rows="5"  className="px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none" placeholder="Escribe tu mensaje aquí..." />
                </div>
                {
                  displayMessage &&
                  <div className={`text-center py-2 ${displayMessage?.error 
                  ? 'bg-red-100 border-red-400 text-red-700'
                  : 'bg-green-100 border-green-400 text-green-700'
                  }`}>{ displayMessage.message }</div>
                }

                
               
               {
                isPending
                ? 
                <div className="spinner-content">
                  <div className="circle-border">
                    <div className="circle-core"></div>
                  </div>  
                </div>
                :
                <button type="submit" disabled={isPending} className={`bg-blue-600 z-99 text-white font-semibold py-2 px-6 rounded hover:bg-blue-700 transition-colors w-full md:w-auto self-center cursor-pointer ${isPending ? 'opacity-50' : '' }`}>Enviar</button>
               }

                
            </form>
        </div>
    </div>
  );
};