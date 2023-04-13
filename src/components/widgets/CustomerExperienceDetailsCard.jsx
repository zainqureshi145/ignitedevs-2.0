import { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Card from './Card';

const CustomerExperienceDetailsCard = () => {
  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);
  return (
    <div className="mx-[10%]">
      <motion.div ref={carousel} whileTap={{ cursor: 'grabbing' }} className="flex cursor-grab">
        <motion.div drag="x" dragConstraints={{ right: 0, left: -width }} className="flex max-w-8xl">
          <Card highlight="Design" title="Brand Strategy" />
          <Card highlight="Design" title="Customer Experience Design" />
          <Card highlight="Design" title="User Experience Design" />
          <Card highlight="Design" title="User Interface Design" />
          <Card highlight="Design" title="Digital Branding" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default CustomerExperienceDetailsCard;
