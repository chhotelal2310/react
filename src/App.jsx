import React from "react";
import BookStore from "./componets/BookStore";
import ControllAndUncontrollComponent from "./componets/ControllAndUncontrollComponent";
// import ParentAB from "./componets/lifitingStateUP/ParentAB";
import NewComponent from "./componets/hoc/HOC";
import UserWithLoading from "./componets/hoc/HOC";
import Employee from "./componets/propsvaiidations/PropsValidation";
// import Box from "./componets/childrenProps/ChildrenProps";

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
      <Employee name="Rahul" age={25} salary={50000} isActive={true} />
    </div>
  );
};

export default App;
