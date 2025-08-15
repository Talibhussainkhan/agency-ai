import assets from '../assets/assets'
import Title from './Title'
import ServiceCard from './ServiceCard'
import { motion } from 'motion/react'

const Services = () => {

    const serviceData = [
        {
            title : 'Advertising',
            decs : 'We turn bold ideas into powerful digital solutions that connect, engage...',
            icon : assets.ads_icon
        },
        {
            title : 'Content marketing',
            decs : 'We help you execute your plan and deliver results.',
            icon : assets.marketing_icon
        },
        {
            title : 'Content writing',
            decs : 'We help you create a marketing strategy that drives results.',
            icon : assets.content_icon
        },
        {
            title : 'Social media',
            decs : 'We help you build a strong social media presence and engage with your audience.',
            icon : assets.social_icon 
        },
    ]

  return (
    <motion.div 
    initial= 'hidden'
    whileInView= 'visible'
    viewport={{ once : true }}
    transition={{ staggerChildren : 0.2 }}
    id='services' className='relative flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40  pt-30 text-gray-700 dark:text-white'>
        <img src={assets.bgImage2} className='absolute -top-110 -left-70 -z-1 dark:hidden' />
        <Title title='How can we help?' desc='From strategy to execution, we craft digital solutions that move your business forward.' />

        <div className='flex flex-col md:grid grid-cols-2'>
            { serviceData.map((service, index)=>(
                <ServiceCard service={service} index={index} key={index} />
            )) }
        </div>
    </motion.div>
  )
}

export default Services