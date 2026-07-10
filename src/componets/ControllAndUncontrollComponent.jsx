/************************** Controll Component **************************/
// import React, { useState } from "react";

// const ControllAndUncontrollComponent = () => {
//   const [username, setUsername] = useState("");

//   const handleUserName = (e) => {
//     setUsername(e.target.value);
//   };

//   return (
//     <div>
//       <input type="text" placeholder="Enter user name..." value={username} onChange={handleUserName} />
//     </div>
//   );
// };

// export default ControllAndUncontrollComponent;


/************************** UnControll Component **************************/
import React, { useRef } from 'react'

const ControllAndUncontrollComponent = () => {

    const inputRef=useRef();
  return (
    <div className='flex flex-col  space-y-4 max-w-2xl'>
        <input ref={inputRef}  className='border'/>
        <button onClick={()=>console.log(inputRef.current.value, "Value is >>>>>>>>>>>>>>>>>>>>.")} className='border cursor-pointer'>
            Cliked Show The Value
        </button>
    </div>
  )
}

export default ControllAndUncontrollComponent