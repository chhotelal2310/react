import React from "react";
import BookStore from "./componets/BookStore";
import ControllAndUncontrollComponent from "./componets/ControllAndUncontrollComponent";
import ParentAB from "./componets/lifitingStateUP/ParentAB";

const App = () => {
  return (
    <div>
      {/* <BookStore/> */}
      {/*************************** Controll and UnControll Component **************************/}
      {/* <ControllAndUncontrollComponent /> */}

      {/*************************** Lifting State UP *******************************************/}
      <ParentAB />
    </div>
  );
};

export default App;
