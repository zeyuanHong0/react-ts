import { useEffect, useRef, useState } from "react";

// type Props = {
//   className: string;
// };

interface Props {
  className: string;
  children: React.ReactNode;
  onGetMsg?: (msg: string) => void;
}

const Button = (props: Props) => {
  console.log("🚀 ~ Button ~ props:", props);
  const { className, children, onGetMsg } = props;
  const handleClick = () => {
    onGetMsg?.("hello world");
  };
  return (
    <div>
      <button onClick={handleClick}>{children}</button>
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

  const domRef = useRef<HTMLInputElement>(null);
  const intervalRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    domRef.current?.focus();
  }, []);

  intervalRef.current = setInterval(() => {
    console.log("hello world");
    return () => clearInterval(intervalRef.current);
  }, 1000);

  const handleChange = () => {
    setUser({ name: "jack", age: 18 });
    setUser(null);
  };

  const getMsg = (msg: string) => {
    console.log("🚀 ~ getMsg ~ msg:", msg);
  };
  return (
    <>
      <div>123 {user?.age}</div>
      <input type="text" ref={domRef} />
      <Button className={"blue"} onGetMsg={getMsg}>
        <div>按钮</div>
      </Button>
    </>
  );
}

export default App;
