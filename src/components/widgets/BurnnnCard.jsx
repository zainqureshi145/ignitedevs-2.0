import { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import PortfolioCard from './PortfolioCard';

const BurnnnCard = () => {
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
          <PortfolioCard
            highlight="Burnnn"
            title="Online Fitness Training Platform"
            image="src/assets/project-screenshots/burnnn/landing.png"
          />
          <PortfolioCard
            highlight="Burnnn"
            title="AWS Amplify Auth"
            image="src/assets/project-screenshots/burnnn/logging.png"
          />
          <PortfolioCard
            highlight="Burnnn"
            title="Distraction Free Tutorials"
            image="src/assets/project-screenshots/burnnn/tut.png"
          />
          <PortfolioCard
            highlight="Burnnn"
            title="Stats Dashboard"
            image="src/assets/project-screenshots/burnnn/past.png"
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default BurnnnCard;
