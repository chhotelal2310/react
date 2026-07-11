/************************************ Full Example-1 *****************************/
/*

Component-1
const Box = (Props) => {
  return <h1>{Props.children}</h1>;
};
export default Box;

Compoment-2
function App() {
  return <Box>Hello React</Box>; // Internally===><Box children="Hello React" />
}

*/

/************************************ Full Example-2 *****************************/
/*

Component-1
function Card({ children }) {
  return <div>{children}</div>;
}

Component-2
function App() {
  return (
    <Card>
      <h2>Profile</h2>
      <p>Rahul Kumar</p>
    </Card>
  );
}

Internally===> <Card children={[<h2>Profile</h2>, <p>Rahul Kumar</p>]} />; Note: React Internaly Work on that array and render it.

*/

/**********************************************************************************/
/**********************************************************************************/
/**********************************************************************************/
// const Box = (Props) => {
//   return <h1>{Props.children}</h1>;
// };

// export default Box;

// const Box = (props) => {
//   return (
//     <div>
//       {props.children?.map((item, index) => (
//         <div key={index}>
//           <div className="flex space-x-1">
//             <span>Child {index + 1}:</span> <span>{item}</span>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Box;
