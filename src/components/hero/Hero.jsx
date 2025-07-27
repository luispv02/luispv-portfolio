
import { motion } from 'framer-motion'
import Typewriter from 'typewriter-effect';
import image from '../../assets/images/launching.svg'
import { BackgroundAnimate } from './BackgroundAnimate';

export const Hero = () => {

    const iconVariants = {
        hidden: {y: -10},
        show: {
            y: 0,
            transition: {
            repeat: Infinity,
            repeatType: 'reverse',
            duration: 1
            }
        }
    }

    const imageVariants = {
        hidden: {scale: 1, y: -10},
        show: {
        scale: 1.1,
        y: 0,
            transition: {
                repeat: Infinity,
                repeatType: 'reverse',
                duration: 1
            }
        }
    }

    return (
        <div className="hero text-center pt-30 text-white h-screen bg-linear-to-t from-slate-950 to-gray-950" id="hero">
            <motion.h2
                initial={{y: '-100vh'}}
                animate={{y: 0}}
                transition={{
                    duration: 1,
                    ease: 'backOut'
                }}
                className="text-2xl md:text-4xl"
            >Luis Fernando Pérez Varajas</motion.h2>

            <motion.div
                initial={{y: '-150vh'}}
                animate={{y: 0}}
                transition={{
                    duration: 1,
                    ease: 'backOut',
                }}
                className="mt-3 text-xl md:text-3xl"
            >Desarrollador Web Front End

                <Typewriter 
                    options={{
                        strings: ['Html5', 'Css3', 'Bootstrap', 'Tailwind', 'Sass', 'Responsive Desing', 'JavaScript', 'Vue3', 'Pinia', 'Quasar', 'ReactJs', 'Redux', 'Firebase', 'NodeJs'],
                        autoStart: true,
                        loop: true,
                        delay: 50,
                        deleteSpeed: 60,
                    }}
                />

            </motion.div>  

            <a href='/CV_Luis_Fernando.pdf' target="_blank" className="cv-btn">
                Ver CV
            </a> 

            <motion.img 
                src={ image }
                alt='start image'
                variants={imageVariants}
                initial='hidden'
                animate='show'
                className="w-1/2 m-auto mt-20 md:w-1/4 md:mt-15 xl:w-72"
            />

            <div className="hero-arrow-down absolute left-0 right-0 bottom-1/12">
                <a href='#about'>
                <motion.i 
                    className="fas fa-arrow-alt-circle-down text-white text-3xl"
                    variants={iconVariants}
                    initial='hidden'
                    animate='show'
                ></motion.i>
                </a>
            </div>

            <BackgroundAnimate />
        </div>
    );
};