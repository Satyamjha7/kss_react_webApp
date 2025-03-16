import React from 'react';
import './Styles.css';

const Rights = () => {
    return (
        <div className="rights-container">
            <div className="rights-left">
                © 2025 Kosi Seva Sadan. All rights reserved
            </div>
            <div className="rights-right">
                <a href="/copyright">Copyright</a>
                <a href="/privacy-policy">Privacy Policy and Cookie Notice</a>
                <a href="/terms-conditions">Terms and Conditions</a>
            </div>
        </div>
    );
};

export default Rights;
