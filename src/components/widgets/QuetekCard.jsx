import { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import PortfolioCard from './PortfolioCard';

const QuetekCard = () => {
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
            highlight="Quetek"
            title="Lean Landing Page"
            image="src/assets/project-screenshots/queteksolutions/landing.png"
          />
          <PortfolioCard
            highlight="Quetek"
            title="Lottie Animations"
            image="src/assets/project-screenshots/queteksolutions/training.png"
          />
          <PortfolioCard
            highlight="Quetek"
            title="Hero Section"
            image="src/assets/project-screenshots/queteksolutions/development.png"
          />
          <PortfolioCard
            highlight="Quetek"
            title="Contact Forms with Spam Filters"
            image="src/assets/project-screenshots/queteksolutions/contact.png"
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default QuetekCard;
