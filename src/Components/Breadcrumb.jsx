import React from "react";
import { FaHome, FaChevronRight } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import "./Styles.css";

const Breadcrumb = ({ heading }) => {
    const location = useLocation();
    const pathNames = location.pathname.split("/").filter((x) => x);

    return (
        <div className="breadcrumb-wrapper">
            <h1 className="page-heading">{heading}</h1>
            <nav className="breadcrumb">
                <Link to="/" className="breadcrumb-item">
                    <FaHome className="breadcrumb-icon" /> HOME
                </Link>
                {pathNames.map((name, index) => {
                    const routeTo = `/${pathNames.slice(0, index + 1).join("/")}`;
                    const isLast = index === pathNames.length - 1;
                    return (
                        <span key={index} className="breadcrumb-segment">
                            <FaChevronRight className="breadcrumb-separator" />
                            {isLast ? (
                                <span className="breadcrumb-item active">
                                    {name.toUpperCase()}
                                </span>
                            ) : (
                                <Link to={routeTo} className="breadcrumb-item">
                                    {name.toUpperCase()}
                                </Link>
                            )}
                        </span>
                    );
                })}
            </nav>
        </div>
    );
};

export default Breadcrumb;
