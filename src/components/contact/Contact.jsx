import whatsapp from '../../assets/images/whatsapp.png';
import gmail from '../../assets/images/gmail.png';
import linkedin from '../../assets/images/linkedin.png';
import github from '../../assets/images/github.png';


export const Contact = () => {
  return (
    <div className="contact"  id="contact">
        <div className="contact-content py-10 px-7 bg-white text-black">
            <h2 className="text-center text-3xl pb-6 ">Contacto</h2>

            <div className="contact-content-icons flex justify-center gap-8">

                <a href="https://wa.me/527841109307" target="_blank"  rel="noopener noreferrer">
                  <img src={whatsapp} alt="whatsapp" className='w-10 lg:w-12'/>
                </a>

                <a href="mailto:luispv.1002@gmail.com" target="_blank"  rel="noopener noreferrer">
                  <img src={gmail} alt="gmail" className='w-10 lg:w-12'/>
                </a>

                <a href="https://www.linkedin.com/in/luis-fernando-p%C3%A9rez-varajas-b6539818b/" target="_blank"  rel="noopener noreferrer">
                  <img src={linkedin} alt="linkedin" className='w-10 lg:w-12'/>
                </a>

                <a href="https://github.com/luispv02" target="_blank"  rel="noopener noreferrer">
                  <img src={github} alt="github" className='w-10 lg:w-12'/>
                </a>

            </div>

        </div>
    </div>
  );
};