import React, { useState } from 'react';
import { FaCocktail, FaHiking,FaShuttleVan, FaBeer } from 'react-icons/fa'
import Title from './Title'

const Services = () => {
    const [services, setServices] = useState([
        {
            icon: <FaCocktail />,
            title: "free cocktails",
            info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, corporis!'
        },
        {
            icon: <FaHiking />,
            title: "Endless Hiking",
            info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, corporis!'
        },
        {
            icon: <FaShuttleVan />,
            title: "free shuttle",
            info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, corporis!'
        },
        {
            icon: <FaBeer />,
            title: "strongest beer",
            info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, corporis!'
        }
    ]
    )
  return (
    <section className='services'>
        <Title title="services" />
        <div className='services-center'>
            {
                services.map((item, index) => {
                    return (
                        <article key={index} className="service">
                            <span>{item.icon}</span>
                            <h6>{item.title}</h6>
                            <p>{item.info}</p>
                        </article>
                    )
                })
            }
        </div>
        
    </section>
  )
}

export default Services