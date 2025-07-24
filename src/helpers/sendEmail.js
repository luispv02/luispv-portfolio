
export const sendEmail = async(msgData) => {

     const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
     const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
     const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;

     try {
          emailjs.init({
               publicKey
          });

          const resp = await emailjs.send(serviceId, templateId, msgData)      
          return resp
     } catch (error) {
          throw error
     }
}