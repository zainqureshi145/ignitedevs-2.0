import { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import MPortfolioCard from './MPortfolioCard';

const EnterInnCard = () => {
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
            highlight="EnterInn"
            title="Positive Self Affirmations"
            image="src/assets/project-screenshots/enterinn/3.png"
          />
          <MPortfolioCard
            highlight="EnterInn"
            title="Inro Page"
            image="src/assets/project-screenshots/enterinn/5.png"
          />
          <MPortfolioCard
            highlight="EnterInn"
            title="Flutter State Management"
            image="src/assets/project-screenshots/enterinn/6.png"
          />
          <MPortfolioCard
            highlight="EnterInn"
            title="Sqlite Database"
            image="src/assets/project-screenshots/enterinn/7.png"
          />
          <MPortfolioCard
            highlight="EnterInn"
            title="Gesture Detection"
            image="src/assets/project-screenshots/enterinn/8.png"
          />
          <MPortfolioCard
            highlight="EnterInn"
            title="Powerful Rive Animations"
            image="src/assets/project-screenshots/enterinn/9.png"
          />
          <MPortfolioCard
            highlight="EnterInn"
            title="60 FPS Smooth Experience"
            image="src/assets/project-screenshots/enterinn/10.png"
          />
          <MPortfolioCard
            highlight="EnterInn"
            title="Third Party Packages"
            image="src/assets/project-screenshots/enterinn/11.png"
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default EnterInnCard;
