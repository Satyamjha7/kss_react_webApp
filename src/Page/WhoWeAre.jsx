import React from "react";
import { motion } from "framer-motion";
import "../Page/WhoWeAre.css"; // Ensure you create this file


const WhoWeAre = () => {
    return (
        <div className="who-we-are-container">
            <motion.div
                className="who-header"
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                <h1>Empowering Communities: Our Journey of Hope and Impact</h1>
            </motion.div>

            {/* Content Section */}
            <motion.div
                className="who-content"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
            >
                <p>
                    <strong>Kosi Seva Sadan (KSS)</strong> is a distinguished not-for-profit organization
                    founded in 1981, inspired by the vision of the esteemed activist and
                    freedom fighter, <strong>late Shri Jay Prakash Narayan</strong>. Guided by the
                    support of <strong>late Shri Prem Bhai</strong> from the Sarvodaya Movement, KSS thrived
                    under his dynamic leadership, initiating need-based programs for the
                    holistic development of impoverished communities.
                </p>
                <p>
                    KSS is <strong>registered under the Society Registration Act</strong>, and it also holds
                    <strong>FCRA Act registration</strong>, along with compliance under <strong>Sections 12(A) and
                        80(G) of the Income Tax Act</strong>.
                </p>
            </motion.div>

            {/* Geographical Reach Section */}
            <motion.div
                className="who-reach"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
            >
                <h2>Geographical Reach</h2>
                <p>
                    Kosi Seva Sadan (KSS) operates in three blocks of Saharsha district in
                    North Bihar, focusing on empowering marginalized communities.
                </p>

                <div className="location-cards">
                    {/* Mahishi */}
                    <motion.div
                        className="location-card"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                    >
                        <h3>Mahishi</h3>
                        <p>
                            KSS has a strong presence in Mahishi, implementing programs to
                            uplift the local communities.
                        </p>
                    </motion.div>

                    {/* Nauhatta */}
                    <motion.div
                        className="location-card"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                    >
                        <h3>Nauhatta</h3>
                        <p>
                            KSS works to address local challenges and implement projects that
                            promote sustainable development.
                        </p>
                    </motion.div>

                    {/* SatarKataiya */}
                    <motion.div
                        className="location-card"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                    >
                        <h3>SatarKataiya</h3>
                        <p>
                            By extending its reach here, KSS uplifts socio-economic conditions
                            and fosters positive change.
                        </p>
                    </motion.div>
                </div>
            </motion.div>
        </div>
    );
};

export default WhoWeAre;
