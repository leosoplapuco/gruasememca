import React, { useEffect, useState } from "react";
import "./customCursor.css";

const CustomCursor = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [hovered, setHovered] = useState(false);

    useEffect(() => {
        const handleMouseMove = (e) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    useEffect(() => {
        const hoverables = document.querySelectorAll(".hover-target");

        const handleMouseEnter = () => setHovered(true);
        const handleMouseLeave = () => setHovered(false);

        hoverables.forEach((el) => {
            el.addEventListener("mouseenter", handleMouseEnter);
            el.addEventListener("mouseleave", handleMouseLeave);
        });

        return () => {
            hoverables.forEach((el) => {
                el.removeEventListener("mouseenter", handleMouseEnter);
                el.removeEventListener("mouseleave", handleMouseLeave);
            });
        };
    }, []);

    return (
        <div className={`custom-cursor ${hovered ? "hovered" : ""}`} style={{ left: `${position.x}px`, top: `${position.y}px`, }}/>
    );
};

export default CustomCursor;