import { useEffect, useState } from "react";

const EffectHook = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  // Execute every time the component renders
  // useEffect(() => {
  //     document.title = `You clicked ${count} times`;
  // });

  // ComponentDidUpdate - execute when count value changes
  useEffect(() => {
      console.log("useEffet - updating document");
      
      document.title = `You clicked ${count} times`;
  }, [count]);

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => {
            setName(e.target.value);
        }}
      />
      <button onClick={() => setCount(count + 1)}>Clicked {count} times</button>
    </div>
  );
};

export default EffectHook;
