import { RoughNotation } from 'react-rough-notation';
import { useStore } from '@nanostores/react';
import { themeStore } from '~/nanostore/themeStore';
import { useState } from 'react';

const title = 'ignitedevs';
let color = '#004aab';

const MainHeading = () => {
  // set the state
  const [animationDuration, setAnimationDuration] = useState(5000);
  // read the store value with 'useStore' hook
  const $theme = useStore(themeStore);

  if ($theme === 'dark') {
    color = '#004aab';
    //setAnimationDuration(animationDuration + 1);
  } else {
    color = 'pink';
    //setAnimationDuration(animationDuration + 2);
  }

  console.log('Theme: ' + $theme, '-> Highlight Color: ' + color);

  return (
    <div className="dark:text-white highlight p-10">
      <div>We are </div>
      <div className="text-sky-800 p-5 dark:text-white">
        <RoughNotation type="highlight" show color={color} animationDuration={5000} padding={20}>
          {title}
        </RoughNotation>
      </div>
    </div>
  );
};

export default MainHeading;
