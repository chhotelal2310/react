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
import Hook1 from "./componets/hooks/UseStateHook";

const App = () => {
  return (
    <div>
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
      {/* 1.UseState */}
      <Hook1 />
    </div>
  );
};

export default App;
