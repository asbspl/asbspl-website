import { useEffect, useRef, useState } from "react";
import {
  HiOutlineOfficeBuilding,
  HiOutlineUsers,
  HiOutlineUserGroup,
} from "react-icons/hi";
import { PiMedal } from "react-icons/pi";
import { MdOutlineRecycling } from "react-icons/md";

import "./CounterSection.css";

interface CounterItem {
  value: number;
  label: string;
  suffix?: string;
  decimals?: number;
  icon: React.ElementType;
}

const counterData: CounterItem[] = [
  {
    value: 140,
    label: "Active Sites", 
    suffix: "+",
    icon: HiOutlineOfficeBuilding,
  },
  {
    value: 620,
    label: "Happy Clients",
    icon: HiOutlineUsers,
  },
  {
    value: 2.4,
    label: "Tons Yearly",
    suffix: "M",
    decimals: 1,
    icon: MdOutlineRecycling,
  },
  {
    value: 210,
    label: "Won Awards",
    icon: PiMedal,
  },
  {
    value: 8760,
    label: "Expert Contractors",
    icon: HiOutlineUserGroup,
  },
];

const CounterSection = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [startAnimation, setStartAnimation] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartAnimation(true);
          observer.unobserve(section);
        }
      },
      {
        threshold: 0.25,
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="counter-section">
      <div className="container">
        <div className="row g-0 counter-wrapper">
          {counterData.map((item, index) => (
            <div
              className="col-6 col-lg counter-column"
              key={index}
            >
              <Counter
                {...item}
                animate={startAnimation}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

interface CounterProps extends CounterItem {
  animate: boolean;
}

const Counter = ({
  value,
  label,
  suffix = "",
  decimals = 0,
  icon: Icon,
  animate,
}: CounterProps) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!animate) return;

    const duration = 2200;
    const startTime = performance.now();

    const animateCounter = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Premium smooth easing
      const easeOut = 1 - Math.pow(1 - progress, 4);

      setCount(value * easeOut);

      if (progress < 1) {
        requestAnimationFrame(animateCounter);
      } else {
        setCount(value);
      }
    };

    requestAnimationFrame(animateCounter);
  }, [animate, value]);

  return (
    <div className="counter-card">

      {/* Decorative background */}
      <div className="counter-glow" />

      {/* Large Icon */}
      <div className="counter-icon-wrapper">
        <Icon className="counter-icon" />
      </div>

      {/* Number */}
      <div className="counter-number">
        {count.toFixed(decimals)}
        <span>{suffix}</span>
      </div>

      {/* Label */}
      <div className="counter-label">
        {label}
      </div>

      {/* Bottom decoration */}
      <div className="counter-line" />

    </div>
  );
};

export default CounterSection;
