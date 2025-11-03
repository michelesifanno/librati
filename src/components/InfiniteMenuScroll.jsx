import React, { useEffect, useRef } from "react";
import { List, ListItem, ListItemButton, ListItemIcon, ListItemText, Divider } from '@mui/material';

import "../InfiniteMenuScroll.css";

export default function InfiniteMenuScroll() {
    const containerRef = useRef(null);
    const itemsRef = useRef([]);
    const state = useRef({
        velocity: 0,
        scrollY: 0,
        isDragging: false,
        startY: 0,
        lastY: 0,
    });

    const spacing = 220;
    const labels = ["Birre", "Cocktail", "Vini", "Distillati", "Liquori", "Analcolici", "Snacks"]

    useEffect(() => {
        const items = itemsRef.current;
        const totalHeight = items.length * spacing;

        // inizializza posizione
        items.forEach((item, i) => {
            item.dataset.y = i * spacing;
            item.style.transform = `translate(0px, ${i * spacing}px) rotate(-20deg)`;
        });

        const handleWheel = (e) => {
            state.current.velocity -= e.deltaY * 0.25;
        };

        const handleMouseDown = (e) => {
            state.current.isDragging = true;
            state.current.startY = e.clientY;
            containerRef.current.style.cursor = "grabbing";
        };

        const handleMouseUp = () => {
            state.current.isDragging = false;
            containerRef.current.style.cursor = "grab";
        };

        const handleMouseMove = (e) => {
            if (state.current.isDragging) {
                const delta = e.clientY - state.current.lastY;
                if (state.current.lastY) state.current.velocity += delta * 1.2;
                state.current.lastY = e.clientY;
            } else {
                state.current.lastY = 0;
            }
        };

        const handleTouchStart = (e) => {
            state.current.isDragging = true;
            state.current.startY = e.touches[0].clientY;
        };

        const handleTouchEnd = () => (state.current.isDragging = false);

        const handleTouchMove = (e) => {
            if (state.current.isDragging) {
                const delta = e.touches[0].clientY - state.current.startY;
                state.current.velocity += delta * 0.5;
                state.current.startY = e.touches[0].clientY;
            }
        };

        const animate = () => {
            const { velocity } = state.current;
            state.current.scrollY += velocity;
            state.current.velocity *= 0.92;

            items.forEach((item) => {
                let y = parseFloat(item.dataset.y);
                y += velocity;

                if (y > totalHeight) y -= totalHeight;
                if (y < -spacing) y += totalHeight;

                const rotation = -20 - velocity * 0.05;
                item.style.transform = `translate(0px, ${y}px) rotate(${rotation}deg)`;
                item.dataset.y = y;
            });

            requestAnimationFrame(animate);
        };

        animate();

        window.addEventListener("wheel", handleWheel);
        window.addEventListener("mouseup", handleMouseUp);
        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("touchmove", handleTouchMove);
        window.addEventListener("touchend", handleTouchEnd);

        const container = containerRef.current;
        container.addEventListener("mousedown", handleMouseDown);
        container.addEventListener("touchstart", handleTouchStart);

        return () => {
            window.removeEventListener("wheel", handleWheel);
            window.removeEventListener("mouseup", handleMouseUp);
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("touchmove", handleTouchMove);
            window.removeEventListener("touchend", handleTouchEnd);
            container.removeEventListener("mousedown", handleMouseDown);
            container.removeEventListener("touchstart", handleTouchStart);
        };
    }, []);

    return (
        <section className="m-wrapper">
            <div className="menuscroll" ref={containerRef}>
                <ul className="menu--wrapper">
                    {labels.map((label, i) => (
                        <li
                            key={label}
                            className="menu--item"
                            ref={(el) => (itemsRef.current[i] = el)}
                        >
                            <a href="#">{label}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}