"use client";
import React, { useEffect } from "react";
import "./styles.css";

// import images
import Purple from "../../public/assets/purple.jpeg";
import Blue from "../../public/assets/blue.jpg";
import LightBlue from "../../public/assets/lightBlue.jpeg";
import Green from "../../public/assets/green.jpeg";
import Yellow from "../../public/assets/yellow.jpeg";
import Orange from "../../public/assets/orange.jpeg";
import Red from "../../public/assets/red.jpeg";
import Brown from "../../public/assets/brown.jpeg";
import White from "../../public/assets/white.jpeg";

const page = () => {
    useEffect(() => {
        const gallery: any = document.getElementById("gallery");

        window.onmousemove = (e) => {
            const mouseX = e.clientX,
                mouseY = e.clientY;

            const xDecimal = mouseX / window.innerWidth,
                yDecimal = mouseY / window.innerHeight;

            const maxX = gallery.offsetWidth - window.innerWidth,
                maxY = gallery.offsetHeight - window.innerHeight;

            const panX = maxX * xDecimal * -1,
                panY = maxY * yDecimal * -1;

            gallery.animate(
                {
                    transform: `translate(${panX}px, ${panY}px)`,
                },
                {
                    duration: 5000,
                    fill: "forwards",
                    easing: "ease",
                }
            );
        };
    });
    return (
        <div className="">
            <h1 className="fixed top-10 font-extrabold text-transparent text-3xl p-10 bg-clip-text bg-gradient-to-r tracking-wide from-yellow-400 via-blue-400 to-pink-600 text-center left-10 shadow-xl">
                Image Gallery
            </h1>
            <div id="gallery">
                <div className="tile">
                    <img src={Yellow.src} />
                </div>
                <div className="tile">
                    <img src={Blue.src} />
                </div>
                <div className="tile">
                    <img src={Red.src} />
                </div>
                <div className="tile">
                    <img src={Green.src} />
                </div>
                <div className="tile">
                    <img src={Purple.src} />
                </div>
                <div className="tile">
                    <img src={Orange.src} />
                </div>
                <div className="tile">
                    <img src={LightBlue.src} />
                </div>
                <div className="tile">
                    <img src={Brown.src} />
                </div>
                <div className="tile">
                    <img src={White.src} />
                </div>
            </div>
            <h1 className="fixed bottom-2 left-2">
                <a
                    className="text-white underline hover:no-underline transition duration-200 cursor-pointer"
                    href="/"
                >
                    Back
                </a>
            </h1>
        </div>
    );
};

export default page;
