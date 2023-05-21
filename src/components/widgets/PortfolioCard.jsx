import { motion } from 'framer-motion';

const PortfolioCard = ({ highlight, title, image }) => {
  return (
    <motion.div className="flex flex-col justify-between pt-5 h-96 w-72 lg:h-[640px] lg:w-[800px] rounded-lg border dark:border-slate-700 bg-blue-50 dark:bg-slate-800 p-2 m-5">
      <div className="ml-5 h-10 w-32 pt-2 rounded-lg text-center text-white bg-transparent/70">
        <h1 className="font-libre font-bold italic text-lg">{highlight}</h1>
      </div>
      <div className="flex flex-col justify-center">
        <img className="rounded-lg w-72 lg:h-[400px] lg:w-auto" draggable="false" src={image} alt={image} />
      </div>
      <div className="ml-5 pb-5 text-xl lg:text-4xl font-bold text-center">
        <h1>{title}</h1>
      </div>
    </motion.div>
  );
};

export default PortfolioCard;
