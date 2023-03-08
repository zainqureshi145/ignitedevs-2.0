import { RoughNotation } from 'react-rough-notation';

const title = 'ignitedevs';
const color = '#004aab';

const MainHeading = () => {
  return (
    <div className="dark:text-white highlight p-10">
      <div>We are </div>
      <div className="text-orange-400 p-5">
        <RoughNotation type="highlight" show color={color} animationDuration={5000} padding={20}>
          {title}
        </RoughNotation>
      </div>
    </div>
  );
};

export default MainHeading;
