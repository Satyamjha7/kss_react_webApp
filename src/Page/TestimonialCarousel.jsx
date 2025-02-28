import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import './TestimonialCarousel.css';

const testimonials = [
    {
        image: 'https://images.unsplash.com/photo-1609902726285-00668009f004?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTc3M3wwfDF8c2VhcmNofDQzfHxoYXBweXxlbnwwfHx8fDE2MTU4OTMxMDU&ixlib=rb-1.2.1&q=80&w=2000',
        quote: 'KSS changed my life by providing educational support. I am now pursuing my dreams.',
        name: 'Aman Verma',
        role: 'Beneficiary'
    },
    {
        image: 'https://t3.ftcdn.net/jpg/10/49/90/22/360_F_1049902232_gixcpODmGt5a1RQAqnkZPXZZ7mK9JiOb.jpg',
        quote: 'Volunteering with KSS has been a fulfilling experience. I have grown as a person.',
        name: 'Neha Singh',
        role: 'Volunteer'
    },
    {
        image: 'https://www.hubspot.com/hs-fs/hubfs/Testimonial-lead-gen-1.webp?width=595&name=Testimonial-lead-gen-1.webp',
        quote: 'I trust KSS for their transparency and impact. My donations are making a difference.',
        name: 'Rohit Mehta',
        role: 'Donor'
    }
];

const TestimonialCarousel = () => {
    const [current, setCurrent] = useState(0);
    const length = testimonials.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    };

    useEffect(() => {
        const interval = setInterval(nextSlide, 5000); // Auto slide every 5 seconds
        return () => clearInterval(interval);
    }, [current]);

    return (
        <div className='carousel-container'>
            <div className='carousel-wrapper' style={{ transform: `translateX(-${current * 100}%)` }}>
                {testimonials.map((item, index) => (
                    <div className='carousel-slide' key={index}>
                        <img src={item.image} alt={item.name} className='testimonial-image' />
                        <p className='quote'>" {item.quote} "</p>
                        <h3 className='name'>{item.name}</h3>
                        <p className='role'>{item.role}</p>
                    </div>
                ))}
            </div>
            <button onClick={prevSlide} className='nav-button left'>
                <ChevronLeft size={32} />
            </button>
            <button onClick={nextSlide} className='nav-button right'>
                <ChevronRight size={32} />
            </button>
        </div>
    );
};

export default TestimonialCarousel;
