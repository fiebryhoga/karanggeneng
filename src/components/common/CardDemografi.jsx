import React, { useEffect, useState, useRef } from "react";

const CardDemografi = ({ icon: Icon, title, value }) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            animateCount();
            setHasAnimated(true);
          }
        });
      },
      { threshold: 0.5 } // muncul minimal 50% di viewport
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [hasAnimated]);

  const animateCount = () => {
    const duration = 1500;
    const frameDuration = 1000 / 60;
    const totalFrames = Math.round(duration / frameDuration);
    let frame = 0;

    const counter = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      const currentCount = Math.round(value * progress);

      setCount(currentCount);

      if (frame === totalFrames) {
        clearInterval(counter);
        setCount(value);
      }
    }, frameDuration);
  };

  return (
    <div
      ref={ref}
      className="flex flex-row border border-blue-800/20 shadow shadow-blue-800/20 w-full rounded-md overflow-hidden"
    >
      <div className="flex justify-center items-center border-r border-r-blue-800/20 py-3 px-4 md:py-4 md:px-6 bg-blue-800/10">
        <Icon className="text-blue-800 text-xl md:text-4xl lg:text-5xl" />
      </div>
      <div className="flex flex-col md:gap-2 justify-center items-center py-2 w-full">
        <h4 className=" text-xs md:text-sm font-medium text-blue-800 text-center">
          {title}
        </h4>
        <p className="tracking-wide text-xl md:text-4xl font-bold text-black text-center">
          {count}
        </p>
      </div>
    </div>
  );
};

export default CardDemografi;
