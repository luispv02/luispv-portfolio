'use client'

import { FaRegUser } from "react-icons/fa"
import { SectionHeader } from "./SectionHeader"
import { Label } from "../ui/label"
import { Input } from "../ui/input"
import { Textarea } from "../ui/textarea"
import { ChangeEvent, SubmitEvent, useState } from "react"
import { Button } from "../ui/button"
import { FiMessageSquare, FiSend } from "react-icons/fi"
import { MdOutlineEmail } from "react-icons/md"
import emailjs from "@emailjs/browser"
import { ContactData, DisplayMsg } from "@/types/contact"

const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;

emailjs.init(publicKey!);

export const Contact = () => {

  const [contactData, setContactData] = useState<ContactData>({
    name: '',
    email: '',
    message: ''
  })
  
  const [displayMsg, setDisplayMsg] = useState<DisplayMsg | null>(null);
  const [loading, setLoading] = useState(false)


  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {name, value} = e.target;

    setContactData((prev) => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async(e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const { name, email, message } = contactData;
    if(!name || !email || !message){
      setDisplayMsg({ok: false, msg: 'Todos los campos son obligatorios'});
      return;
    }

    setLoading(true)
    setDisplayMsg(null);
    await sendMessage(contactData);
  }

  const sendMessage = async(data: ContactData) => {
    try {
      const response = await emailjs.send(serviceId!, templateId!, data);

      if(response.status === 200){
        setContactData({name: '', email: '', message: ''});
        setDisplayMsg({ ok: true, msg: 'Mensaje enviado' })
      }
      
    } catch {
      setDisplayMsg({ ok: false, msg: 'Error al enviar mensaje' })
    } finally {
      setLoading(false);
      setTimeout(() => { setDisplayMsg(null)}, 3000)
    }
  }

  return (
    <div id="contact">
      <SectionHeader title="Contacto"/>

      <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <FaRegUser className="text-blue-500"/>
            <Label htmlFor="name">Nombre</Label>
          </div>
          <Input id="name" name="name" type="text" className="border border-gray-500 focus-visible:ring-0 focus-visible:border-blue/80  shadow-md focus-visible:shadow-blue-500" value={contactData.name} onChange={handleInputChange} disabled={loading} />
        </div>

        <div>
          <div className="flex items-center gap-2 mb-2">
            <MdOutlineEmail className="text-blue-500"/>
            <Label htmlFor="email">Email</Label>
          </div>
          <Input id="email" name="email" type="email" className="border border-gray-500 focus-visible:ring-0 focus-visible:border-blue/80  shadow-md focus-visible:shadow-blue-500" value={contactData.email} onChange={handleInputChange} disabled={loading}/>
        </div>

        <div>
          <div className="flex items-center gap-2 mb-2">
            <FiMessageSquare className="text-blue-500"/>
            <Label htmlFor="message">Mensaje</Label>
          </div>
          <Textarea id="message" name="message" placeholder="Escribe tu mensaje" className="h-40 text-sm md:text-base border border-gray-500 focus-visible:ring-0 focus-visible:border-blue/80  shadow-md focus-visible:shadow-blue-500" value={contactData.message} onChange={handleInputChange} disabled={loading}/>
        </div>

        {
          displayMsg && <p className={`text-xs text-center font-semibold ${displayMsg.ok ? 'text-blue-500' : 'text-red-500' }`}>{ displayMsg.msg }</p>
        }

        <div className="flex justify-center mt-10">
          {
            loading 
            ? <div className="w-8 h-8 border-t-2 p-2 border-blue-500 rounded-full animate-spin"></div>
            : <Button type="submit" className="bg-blue-500 hover:bg-blue-600 transition cursor-pointer" disabled={contactData.name === '' || contactData.email === '' || contactData.message === ''}>
                Enviar mensaje
                <FiSend />
              </Button>
          }
        </div>
      </form>
    </div>
  )
}