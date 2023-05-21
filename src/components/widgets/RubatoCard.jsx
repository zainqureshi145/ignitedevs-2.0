import { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import PortfolioCard from './PortfolioCard';

const RubatoCard = () => {
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
            highlight="Rubato"
            title="Admin Panel"
            image="src/assets/project-screenshots/rubato/rubato-band.png"
          />
          <PortfolioCard
            highlight="Rubato"
            title="Localized Bookings Page"
            image="src/assets/project-screenshots/rubato/rubato-booking.png"
          />
          <PortfolioCard
            highlight="Rubato"
            title="Users Dashboard"
            image="src/assets/project-screenshots/rubato/rubato-user.png"
          />
          <PortfolioCard
            highlight="Rubato"
            title="Dynamic Auth"
            image="src/assets/project-screenshots/rubato/rubato-admin.png"
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default RubatoCard;
