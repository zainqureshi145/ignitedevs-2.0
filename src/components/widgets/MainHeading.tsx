import { RoughNotation } from 'react-rough-notation';
import { useStore } from '@nanostores/react';
import { themeStore } from '~/nanostore/themeStore';

let color = '#004aab';

const checkThemeColor = () => {
  // using nanostore to get value of 'theme' from localstorage
  const $theme = useStore(themeStore);
  if ($theme === 'dark') {
    color = '#004aab';
  } else {
    color = 'rgb(31 41 55)';
  }
  console.log('Theme: ' + $theme, '-> Highlight Color: ' + color);
};

const MainHeading = ({ title, headingH1, headingP }) => {
  checkThemeColor();

  return (
    <div className="dark:text-white text-5xl md:text-7xl">
      <h1 className="mb-5">
        {headingH1}
        <p>{headingP}</p>
      </h1>
      <div className="text-sky-800 font-libre italic p-5 dark:text-white">
        <RoughNotation
          show={true}
          type="box"
          color={color}
          animationDuration={7000}
          padding={15}
          strokeWidth={5}
          //getAnnotationObject={annotate}
        >
          {title}
        </RoughNotation>
      </div>
    </div>
  );
};

export default MainHeading;
