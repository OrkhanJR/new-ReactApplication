import React from "react";
import CounterRedux from "./components/CounterRedux/CounterRedux";

export type InputData = {
  type: string;
  labelText: string;
  name: string;
  pattern: string;
  key: string;
};

// const inputsData: InputData[] = (
//   [
//     {
//       type: "text",
//       labelText: "Name",
//       name: "name",
//       pattern: "\\w{1,4}",
//     },

//     {
//       type: "text",
//       labelText: "Surname",
//       name: "Surname",
//       pattern: "\\w{1,5}",
//     },

//     {
//       type: "text",
//       labelText: "Middle Name",
//       name: "Middle Name",
//       pattern: "\\w{1,6}",
//     },

//     {
//       type: "password",
//       labelText: "password",
//       name: "password",
//       pattern: "\\w{1,7}",
//     },
//   ] as InputData[]
// ).map((x) => {
//   x.key = crypto.randomUUID();
//   return x;
// });
// const handleSubmit = (formData: FormData) => {
//   console.log([...formData]);
// };

const App = () => {
  return (
    <>
      <CounterRedux />
    </>
  );
};

export default App;
