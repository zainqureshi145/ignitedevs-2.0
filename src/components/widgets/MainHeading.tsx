import { RoughNotation } from 'react-rough-notation';
import { useStore } from '@nanostores/react';
import { themeStore } from '~/nanostore/themeStore';

const title = 'ignitedevs';
let color = '#004aab';

const checkThemeColor = () => {
  // using nanostore to get value of 'theme' from localstorage
  const $theme = useStore(themeStore);
  if ($theme === 'dark') {
    color = '#004aab';
  } else {
    color = 'pink';
  }
  console.log('Theme: ' + $theme, '-> Highlight Color: ' + color);
};

const MainHeading = () => {
  checkThemeColor();

  return (
    <div className="dark:text-white highlight p-10">
      <div>We are </div>
      <div className="myHeading text-sky-800 p-5 dark:text-white">
        <RoughNotation
          show={true}
          type="highlight"
          color={color}
          animationDuration={7000}
          padding={20}
          //getAnnotationObject={annotate}
        >
          {title}
        </RoughNotation>
      </div>
    </div>
  );
};

export default MainHeading;
