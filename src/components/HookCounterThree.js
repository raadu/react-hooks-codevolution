import { useState } from "react";

//useState hook dealing with Object as state
const HookCounterThree = () => {
  const [name, setName] = useState({
    firstName: "",
    lastName: "",
  });

  return (
    <form>
      <input
        type="text"
        value={name.firstName}
        //Copy every property of name object with spread (...) operator
        //Then change the field value
        onChange={(e) => setName({ ...name, firstName: e.target.value })}
      />
      <input
        type="text"
        value={name.lastName}
        onChange={(e) => setName({ ...name, lastName: e.target.value })}
      />
      <h2>First name is = {name.firstName}</h2>
      <h2>First name is = {name.lastName}</h2>
      <h2>First name is = {JSON.stringify(name)}</h2>
    </form>
  );
};

export default HookCounterThree;
