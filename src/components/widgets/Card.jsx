import { motion } from 'framer-motion';

const Card = ({ highlight, title }) => {
  return (
    <motion.div className="flex flex-col justify-between pt-5 h-56 w-72 lg:h-80 lg:w-96 rounded-lg border dark:border-slate-700 bg-blue-50 dark:bg-slate-800 p-2 m-5">
      <div className="ml-5 h-10 w-32 pt-2 rounded-lg text-center text-white bg-transparent/70">
        <h1 className="font-libre font-bold italic text-lg">{highlight}</h1>
      </div>
      <div className="ml-5 pb-5 text-4xl font-bold">
        <h1>{title}</h1>
      </div>
    </motion.div>
  );
};

export default Card;
