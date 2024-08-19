import { useState } from "react";

// type Props = {
//   className: string;
// };

interface Props {
  className: string;
  children: React.ReactNode;
}

const Button = (props: Props) => {
  console.log("🚀 ~ Button ~ props:", props);
  const { className, children } = props;
  return (
    <div>
      <button>{children}</button>
    </div>
  );
};

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
      <Button className={"blue"}>
        <div>按钮</div>
      </Button>
    </>
  );
}

export default App;
