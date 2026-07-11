/*********************************************** use **********************************/
/**************************************************************************************/
/**************************************************************************************/
const User = ({ users }) => {
  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
};

const withLoading = (Component) => {
  return function ({ loading, ...props }) {
    if (loading) {
      return <h2>Loading...</h2>;
    }
    return <Component {...props} />;
  };
};

const UserWithLoading = withLoading(User);

export default UserWithLoading;

// Use:==>
<UserWithLoading loading={true} users={[{ id: 1, name: "Rahul" }]} />;



/************************************* Example-1****************************************************/
/***************** Basic Component ********************/
// const Welcome = () => {
//   return <h2>Welcome User</h2>;
// };

// /******************* HOC Component *******************/
// const withMessage = (Component) => {
//   return function EnhancedComponent() {
//     return (
//       <>
//         <h2>Hello From HOC</h2>
//         <Component />
//       </>
//     );
//   };
// };

// const NewComponent = withMessage(Welcome);

// export default NewComponent;

/************************************* Example-2 ***************************************************/
// const User = ({ users }) => {
//   return (
//     <ul>
//       {users.map((user) => (
//         <li key={user.id}>{user.name}</li>
//       ))}
//     </ul>
//   );
// };

// const withLoading = (Component) => {
//   return function ({ loading, ...props }) {
//     if (loading) {
//       return <h2>Loading...</h2>;
//     }
//     return <Component {...props} />;
//   };
// };

// const UserWithLoading = withLoading(User);

// export default UserWithLoading;


