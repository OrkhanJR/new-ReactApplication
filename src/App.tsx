// import { useState } from "react";
// import Form from "./components/Form/Form";
import React from "react";
// import Counter from "./components/Counter/Counter";
// import NoPortalExample from "./components/Modals/NoPortalExample/NoPortalExample";
// import PortalExample from "./components/Modals/PortalExample/PortalExample";
// import styles from  "./App.module.css";

export type InputData = {
  type: string;
  labelText: string;
  name: string;
  pattern: string;
  key: string;
};

const App = () => {
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

  return (
    <>
        <div>Hello world from app</div>
    </>
  );
};

export default App;
