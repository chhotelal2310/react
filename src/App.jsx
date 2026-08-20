import React from "react";
// import BookStore from "./componets/BookStore";
// import ControllAndUncontrollComponent from "./componets/ControllAndUncontrollComponent";
// import ParentAB from "./componets/lifitingStateUP/ParentAB";
// import NewComponent from "./componets/hoc/HOC";
// import UserWithLoading from "./componets/hoc/HOC";
// import Employee from "./componets/propsvaiidations/PropsValidation";
// import Box from "./componets/childrenProps/ChildrenProps";
import ReactVersion from "./componets/reactversionatruntime/ReactVersion";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "./componets/routing/Home";
import About from "./componets/routing/About";
import Contact from "./componets/routing/Contact";
import SVGasComponent from "./componets/SVGasComponent/SVGasComponent";
import UseStateHook from "../src/componets/hooks/UseStateHook";
import UseEffectHook from "./componets/hooks/UseEffectHook";
import UseCallbackHook from "./componets/hooks/UseCallbackHook";
import UseMemoHook from "./componets/hooks/UseMemoHook";
import UserRefHook from "./componets/hooks/UserRefHook";
import UseLayoutEffect from "./componets/hooks/UseLayoutEffect";
import ThemeContext from "./componets/hooks/context/ThemeContext";
import ThemeApp from "./componets/hooks/context/ThemeContext";
import Dashboard from "./componets/hooks/context/Dashboard";
import { CounterProvider } from "./componets/hooks/context/counterwithreducer/CounterProvider";
import Counter from "./componets/hooks/context/counterwithreducer/Counter";
// import CounterProvider, { CounterContext } from "./componets/hooks/context/CounterProvider";
// import Counter from "./componets/hooks/context/Counter";

const App = () => {
  return (
    <>
      {/* <BookStore/> */}
      {/*************************** Controll and UnControll Component **************************/}
      {/* <ControllAndUncontrollComponent /> */}

      {/*************************** Lifting State UP *******************************************/}
      {/* <ParentAB /> */}

      {/*************************** Higher Order Component *************************************/}
      {/* <NewComponent /> */}
      {/* <UserWithLoading loading={true} users={[{ id: 1, name: "Rahul" }]} /> */}

      {/********************************** Children Props ***************************************/}
      {/* <Box>Hello Children Props</Box> */}
      {/* <Box>
        <p>Profile</p>
        <p>Rahul Kumar</p>
      </Box> */}

      {/********************************** Props Validations ***************************************/}
      {/* <Employee name="Rahul" age={25} salary={50000} isActive={true} /> */}

      {/********************************** Checking React Version at run time **********************/}
      {/* <ReactVersion /> */}

      {/**********************************  Routing  ************************************************/}
      {/* <BrowserRouter>
        <nav className=" space-x-4">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter> */}

      {/* <SVGasComponent /> */}

      {/* ************************************* Hooks ******************************************************/}
      {/* <UseStateHook /> */}
      {/* <UseEffectHook /> */}
      {/* <UseMemoHook /> */}
      {/* <UseCallbackHook/> */}
      {/* <UserRefHook/> */}
      {/* <UseLayoutEffect/> */}

      {/********************************************Context*****************************************************/}
      {/* <ThemeApp>
        <Dashboard />
      </ThemeApp> */}
      {/* Without Reducer Counter*/}
      {/* <CounterProvider>
        <Counter />
      </CounterProvider> */}
      {/* With Reducer Counter*/}
      <CounterProvider>
        <Counter />
      </CounterProvider>
    </>
  );
};

export default App;
