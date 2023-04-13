import { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Card from './Card';

const ProductEngineeringDetailsCard = () => {
  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);
  return (
    <div className="mx-[10%]">
      <motion.div ref={carousel} whileTap={{ cursor: 'grabbing' }} className="flex cursor-grab">
        <motion.div drag="x" dragConstraints={{ right: 0, left: -width }} className="flex max-w-8xl">
          <Card highlight="Technology" title="Modern Content Management" />
          <Card highlight="Technology" title="Business Application Development" />
          <Card highlight="Technology" title="Modern E-Commerce" />
          <Card highlight="Technology" title="Mobile Development" />
          <Card highlight="Technology" title="Cloud Engineering" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ProductEngineeringDetailsCard;
