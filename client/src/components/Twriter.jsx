import React from 'react';
import { Typewriter } from 'react-simple-typewriter';

const Twriter = () => {
  return (
    <div className="text-lime-500 ">
      <h1 className="text-5xl md:text-3xl font-bold  text-center">
        <Typewriter
          words={[
            'Don’t just throw it away – sell it, recycle it, reuse it!',
            'From trash to cash – empower your waste to work for you..',
            'Together, let’s build a cleaner, greener future.',
          ]}
          loop={0}  // Set to 0 for infinite loop
          cursor
          cursorStyle=" <"
          typeSpeed={80}
          deleteSpeed={100}
          delaySpeed={1000}
        />
      </h1>
    </div>
  );
};

export default Twriter;
