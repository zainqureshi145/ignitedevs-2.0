import { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Card from './Card';

const ProductEngineeringDetailsCard = () => {
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
