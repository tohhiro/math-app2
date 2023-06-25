import React, { useContext } from "react";
import { MathContext } from "./components/MathContext";
import { MathContextComponent } from "./components/MathContext";
import Header from "./components/Header/Header";
import Left from "./components/Left/Left";
import Center from "./components/Center/Center";
import Right from "./components/Right/Right";
import classes from "./App.module.scss";

const App: React.FC = () => {
  const ctx = useContext(MathContext);

  return (
    <MathContextComponent>
      <div className={classes.app}>
        <Header />
        <main className={classes.main}>
          <Left />
          <Center />
          <Right />
        </main>
      </div>
    </MathContextComponent>
  );
};

export default App;
