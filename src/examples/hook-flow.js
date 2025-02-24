// Hook flow
// https://github.com/donavon/hook-flow
// http://localhost:3000/isolated/examples/hook-flow.js

import * as React from 'react';

function Child() {
  debugger;
  console.log('%c    Child: render start', 'color: MediumSpringGreen');

  const [count, setCount] = React.useState(() => {
    debugger;
    console.log('%c    Child: useState(() => 0)', 'color: tomato');
    return 0;
  });

  React.useEffect(() => {
    debugger;
    console.log('%c    Child: useEffect(() => {})', 'color: LightCoral');
    return () => {
      debugger;
      console.log(
        '%c    Child: useEffect(() => {}) cleanup 🧹',
        'color: LightCoral',
      );
    };
  });

  React.useEffect(() => {
    debugger;
    console.log(
      '%c    Child: useEffect(() => {}, [])',
      'color: MediumTurquoise',
    );
    return () => {
      debugger;
      console.log(
        '%c    Child: useEffect(() => {}, []) cleanup 🧹',
        'color: MediumTurquoise',
      );
    };
  }, []);

  React.useEffect(() => {
    debugger;
    console.log('%c    Child: useEffect(() => {}, [count])', 'color: HotPink');
    return () => {
      debugger;
      console.log(
        '%c    Child: useEffect(() => {}, [count]) cleanup 🧹',
        'color: HotPink',
      );
    };
  }, [count]);

  const element = (
    <button onClick={() => setCount((previousCount) => previousCount + 1)}>
      {count}
    </button>
  );

  console.log('%c    Child: render end', 'color: MediumSpringGreen');

  return element;
}

function App() {
  debugger;
  console.log('%cApp: render start', 'color: MediumSpringGreen');

  const [showChild, setShowChild] = React.useState(() => {
    debugger;
    console.log('%cApp: useState(() => false)', 'color: tomato');
    return false;
  });

  React.useEffect(() => {
    debugger;
    console.log('%cApp: useEffect(() => {})', 'color: LightCoral');
    return () => {
      debugger;
      console.log('%cApp: useEffect(() => {}) cleanup 🧹', 'color: LightCoral');
    };
  });

  React.useEffect(() => {
    debugger;
    console.log('%cApp: useEffect(() => {}, [])', 'color: MediumTurquoise');
    return () => {
      debugger;
      console.log(
        '%cApp: useEffect(() => {}, []) cleanup 🧹',
        'color: MediumTurquoise',
      );
    };
  }, []);

  React.useEffect(() => {
    debugger;
    console.log('%cApp: useEffect(() => {}, [showChild])', 'color: HotPink');
    return () => {
      debugger;
      console.log(
        '%cApp: useEffect(() => {}, [showChild]) cleanup 🧹',
        'color: HotPink',
      );
    };
  }, [showChild]);

  const element = (
    <>
      <label>
        <input
          type="checkbox"
          checked={showChild}
          onChange={(e) => setShowChild(e.target.checked)}
        />{' '}
        show child
      </label>
      <div
        style={{
          padding: 10,
          margin: 10,
          height: 50,
          width: 50,
          border: 'solid',
        }}
      >
        {showChild ? <Child /> : null}
      </div>
    </>
  );

  console.log('%cApp: render end', 'color: MediumSpringGreen');

  return element;
}

export default App;
