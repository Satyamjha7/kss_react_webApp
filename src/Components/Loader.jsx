import "./Styles.css";
import logoWhite from "/images/logo-png.png";

export default function KSSLoader() {
    return (
        <div className="loader-container">
            <img src={logoWhite} alt="KSS Logo" className="logo" />
            <div className="dot-slider">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    );
}