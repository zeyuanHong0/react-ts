import { useState } from "react";

function App() {
  // const [str, setStr] = useState("121");
  // const [bool, setBool] = useState(true);
  // const [obj, setObj] = useState({ name: "jack", age: 18, address: "beijing" });
  // const [arr, setArr] = useState();

  // const handleChange = () => {
  //   setStr("1");
  //   setBool(false);
  //   setObj({ name: "jack", age: 18, address: "beijing" });
  //   // setArr(1);
  // };
  type User = {
    name: string;
    age: number;
  };
  const [user, setUser] = useState<User | null>();

  const handleChange = () => {
    setUser({ name: "jack", age: 18 });
    setUser(null);
  };
  return (
    <>
      <div>123 {user?.age}</div>
    </>
  );
}

export default App;
