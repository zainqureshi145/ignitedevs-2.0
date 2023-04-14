import { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Card from './Card';

const DigitalGrowthDetailsCard = () => {
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
          <Card highlight="Marketing" title="Digital Marketing Strategy" />
          <Card highlight="Marketing" title="Data-driven Marketing" />
          <Card highlight="Marketing" title="Performance Marketing" />
          <Card highlight="Marketing" title="Search Engine Marketing" />
          <Card highlight="Marketing" title="Content Marketing" />
          <Card highlight="Marketing" title="Analytics + Monitoring" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default DigitalGrowthDetailsCard;
