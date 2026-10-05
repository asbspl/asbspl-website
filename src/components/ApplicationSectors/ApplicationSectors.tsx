import React, { useEffect, useState } from "react";
import "./ApplicationSectors.css";

import application1 from "../../assets/application-img3.png";
import application2 from "../../assets/application-img4.png";
import application3 from "../../assets/application-img5.png";
import application4 from "../../assets/application-img1.png";
import application5 from "../../assets/application-img2.png";
import allproductimg from "../../assets/allproduct-img.png"


interface Sector {
    id: number;
    title: string;
    image: string;
}

const sectors: Sector[] = [
    {
        id: 1,
        title: "STRUCTURE & BLOCK WORK",
        image: application1,
    },
    {
        id: 2,
        title: "Surface Preparation",
        image: application2,
    },
    {
        id: 3,
        title: "TILE & FLOOR FIXING",
        image: application3,
    },
    {
        id: 4,
        title: "WALL PREPARATION",
        image: application4,
    },
    {
        id: 5,
        title: "Bonding Agents",
        image: application5,
    }
];

const ApplicationSectors: React.FC = () => {
    const [itemsPerView, setItemsPerView] = useState(3);

    // Start after cloned slides
    const [currentIndex, setCurrentIndex] = useState(3);

    const [isTransitioning, setIsTransitioning] = useState(true);

    // =========================
    // RESPONSIVE ITEMS
    // =========================
    useEffect(() => {
        const updateItemsPerView = () => {
            let newItemsPerView = 3;

            if (window.innerWidth <= 767) {
                newItemsPerView = 1;
            } else if (window.innerWidth <= 991) {
                newItemsPerView = 2;
            }

            setItemsPerView(newItemsPerView);
            setCurrentIndex(newItemsPerView);
        };

        updateItemsPerView();

        window.addEventListener("resize", updateItemsPerView);

        return () => {
            window.removeEventListener("resize", updateItemsPerView);
        };
    }, []);

    // =========================
    // CREATE CLONED SLIDES
    // =========================

    const clonedBefore = sectors.slice(-itemsPerView);
    const clonedAfter = sectors.slice(0, itemsPerView);

    const sliderItems = [
        ...clonedBefore,
        ...sectors,
        ...clonedAfter,
    ];

    // =========================
    // NEXT SLIDE
    // =========================

    const nextSlide = () => {
        if (!isTransitioning) return;

        setCurrentIndex((prev) => prev + 1);
    };

    // =========================
    // PREVIOUS SLIDE
    // =========================

    const prevSlide = () => {
        if (!isTransitioning) return;

        setCurrentIndex((prev) => prev - 1);
    };

    // =========================
    // AUTO SLIDE
    // =========================

    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 4000);

        return () => {
            clearInterval(interval);
        };
    }, [isTransitioning]);

    // =========================
    // HANDLE INFINITE LOOP
    // =========================

    const handleTransitionEnd = () => {
        // Reached cloned slides at the end
        if (currentIndex >= sectors.length + itemsPerView) {
            setIsTransitioning(false);

            setCurrentIndex(itemsPerView);

            // Enable transition again after position reset
            requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                    setIsTransitioning(true);
                });
            });
        }

        // Reached cloned slides at the beginning
        if (currentIndex < itemsPerView) {
            setIsTransitioning(false);

            setCurrentIndex(sectors.length + currentIndex);

            requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                    setIsTransitioning(true);
                });
            });
        }
    };

    return (
        <><section className="application-sectors-section">
            <div className="container-fluid px-3 px-md-4">

                {/* Heading */}
                <div className="application-heading">
                    <h2>Application sectors</h2>
                </div>

                {/* Slider */}
                <div className="application-slider-wrapper">

                    {/* Previous */}
                    <button
                        type="button"
                        className="slider-arrow slider-arrow-left"
                        onClick={prevSlide}
                        aria-label="Previous slide"
                    >
                        &#8249;
                    </button>

                    {/* Viewport */}
                    <div className="application-slider-viewport">

                        <div
                            className="application-slider-track"
                            onTransitionEnd={handleTransitionEnd}
                            style={{
                                transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
                                transition: isTransitioning
                                    ? "transform 0.7s cubic-bezier(0.22, 1, 0.36, 1)"
                                    : "none",
                            }}
                        >
                            {sliderItems.map((sector, index) => (
                                <div
                                    className="application-slide"
                                    key={`${sector.id}-${index}`}
                                >
                                    <div className="sector-card">

                                        {/* Image */}
                                        <div className="sector-image-wrapper">
                                            <img
                                                src={sector.image}
                                                alt={sector.title}
                                                className="sector-image" />
                                        </div>

                                        {/* Title */}
                                        <div className="sector-title">
                                            <span>{sector.id}.</span>{" "}
                                            {sector.title}
                                        </div>

                                    </div>
                                </div>
                            ))}
                        </div>

                    </div>

                    {/* Next */}
                    <button
                        type="button"
                        className="slider-arrow slider-arrow-right"
                        onClick={nextSlide}
                        aria-label="Next slide"
                    >
                        &#8250;
                    </button>

                </div>
            </div>
            <div>

            </div>
        </section>
            <section className="single-image-section container-fuild">
                <div className="container">
                <img
                    src={allproductimg}
                    alt="Application sector"
                    className="single-section-image"
                />
                </div>
            </section>


        </>
    );
};

export default ApplicationSectors;
