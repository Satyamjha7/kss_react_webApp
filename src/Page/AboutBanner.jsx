import React from 'react';
import './AboutBanner.css';
import { motion } from 'framer-motion';
import bannerImage from '../assets/women-back.jpg';

const AboutBanner = () => {
    return (
        <motion.div
            className="about-banner"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
        >


            <motion.div
                className="about-banner-content"
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                viewport={{ once: true }}
            >
                <h1>Who We Are</h1>
                <p>
                Kosi Seva Sadan is a grassroots non-profit organization dedicated to uplifting underprivileged communities in the Kosi region. We work to empower women, promote education, improve healthcare access, and support sustainable rural development. Guided by the principles of service, inclusivity, and social justice, our mission is to create lasting, positive change for those who need it most.
                </p>
            </motion.div>

            <motion.div
                className="about-banner-image"
                initial={{ x: 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                viewport={{ once: true }}
            >
                <img src={bannerImage} alt="Smiling Girl" />
            </motion.div>
        </motion.div>
    );
};

export default AboutBanner;
