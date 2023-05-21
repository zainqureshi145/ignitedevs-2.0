import { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import MPortfolioCard from './MPortfolioCard';

const TexansCard = () => {
  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    const multiplier = carousel.current.scrollWidth * 1;
    setWidth(multiplier - carousel.current.offsetWidth);
    console.log(multiplier, carousel.current.offsetWidth);
  }, []);
  return (
    <div className="mx-[5%]">
      <motion.div ref={carousel} whileTap={{ cursor: 'grabbing' }} className="flex cursor-grab overflow-hidden">
        <motion.div drag="x" dragConstraints={{ right: 0, left: -width }} className="flex">
          <MPortfolioCard
            highlight="Texans"
            title="Custom Logo Design"
            image="src/assets/project-screenshots/texans/9.png"
          />
          <MPortfolioCard
            highlight="Texans"
            title="Node.JS Rest API"
            image="src/assets/project-screenshots/texans/10.png"
          />
          <MPortfolioCard
            highlight="Texans"
            title="JWT Based Authentication"
            image="src/assets/project-screenshots/texans/11.png"
          />
          <MPortfolioCard
            highlight="Texans"
            title="Digitalized Menu"
            image="src/assets/project-screenshots/texans/12.png"
          />
          <MPortfolioCard highlight="Texans" title="Admin Panel" image="src/assets/project-screenshots/texans/13.png" />
          <MPortfolioCard highlight="Texans" title="Order Form" image="src/assets/project-screenshots/texans/14.png" />
          <MPortfolioCard highlight="Texans" title="Easy to use" image="src/assets/project-screenshots/texans/15.png" />
          <MPortfolioCard
            highlight="Texans"
            title="Smooth animations"
            image="src/assets/project-screenshots/texans/16.png"
          />
          <MPortfolioCard
            highlight="Texans"
            title="Payment Gateway"
            image="src/assets/project-screenshots/texans/17.png"
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default TexansCard;
