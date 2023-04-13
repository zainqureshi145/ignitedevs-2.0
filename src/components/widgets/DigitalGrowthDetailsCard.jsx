import { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Card from './Card';

const DigitalGrowthDetailsCard = () => {
  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);
  return (
    <div className="mx-[10%] mb-[20%]">
      <motion.div ref={carousel} whileTap={{ cursor: 'grabbing' }} className="flex cursor-grab">
        <motion.div drag="x" dragConstraints={{ right: 0, left: -width }} className="flex max-w-8xl">
          <Card highlight="Marketing" title="Digital Marketing Strategy" />
          <Card highlight="Marketing" title="Data-driven Marketing" />
          <Card highlight="Marketing" title="Performance Marketing" />
          <Card highlight="Marketing" title="Search Engine marketing" />
          <Card highlight="Marketing" title="Content Marketing" />
          <Card highlight="Marketing" title="Analytics + Monitoring" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default DigitalGrowthDetailsCard;
