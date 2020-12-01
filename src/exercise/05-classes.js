// useRef and useEffect: DOM interaction
// 💯 (alternate) migrate from classes
// http://localhost:3000/isolated/exercise/05-classes.js

import React, { useEffect, useRef } from 'react';
import VanillaTilt from 'vanilla-tilt';

function Tilt({ children }) {
  const tiltRef = useRef();
  useEffect(() => {
    const { current: tiltNode } = tiltRef;
    const opts = {
      max: 25,
      speed: 400,
      glare: true,
      'max-glare': 0.5,
    };
    VanillaTilt.init(tiltNode, opts);
    return () => tiltNode.vanillaTilt.destroy();
  }, []);

  return (
    <div ref={tiltRef} className="tilt-root">
      <div className="tilt-child">{children}</div>
    </div>
  );
}
function App() {
  return (
    <Tilt>
      <div className="totally-centered">vanilla-tilt.js</div>
    </Tilt>
  );
}

export default App;
