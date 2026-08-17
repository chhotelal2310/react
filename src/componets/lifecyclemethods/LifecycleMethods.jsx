/*
In React, lifecycle methods are methods that allow a component to perform actions at
 different stages of its life.
 They are mainly associated with class components. Function components use Hooks such as useEffect instead.

 1. Mounting:Mounting means the component is being created and added to the DOM for the first time.

constructor()===>Initializes state and binds methods
    ↓
render()===>Returns the UI/JSX
    ↓
componentDidMount()===>Returns the UI/JSX

Example:
class User extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Chhotelal"
    };
  }

  componentDidMount() {
    console.log("Component mounted");
  }

  render() {
    return <h1>Hello {this.state.name}</h1>;
  }
}


NOTE: componentDidMount() is commonly used for:
a.API calls
b.Setting up subscriptions
c.Timers
d.DOM operations

2. Updating
Updating happens when the component's props or state changes.
The lifecycle is roughly:

New Props / setState()
        ↓
shouldComponentUpdate()===>Decides whether the component should re-render
        ↓
render()===>Updates the UI
        ↓
getSnapshotBeforeUpdate()===>Gets information from the DOM before it changes
        ↓
componentDidUpdate()===>Runs after the update

Example:
class Counter extends React.Component {
  state = {
    count: 0
  };

  componentDidUpdate(prevProps, prevState) {
    console.log("Component updated");

    if (prevState.count !== this.state.count) {
      console.log("Count changed");
    }
  }

  render() {
    return (
      <button
        onClick={() =>
          this.setState({ count: this.state.count + 1 })
        }
      >
        {this.state.count}
      </button>
    );
  }
}

3. Unmounting

Unmounting means the component is being removed from the DOM.

There is one main lifecycle method:componentWillUnmount()

Example:
class Timer extends React.Component {
  componentDidMount() {
    this.timer = setInterval(() => {
      console.log("Running...");
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
    console.log("Component removed");
  }

  render() {
    return <h1>Timer</h1>;
  }
}

It is commonly used for cleanup:

a.Clear timers
b.Remove event listeners
c.Cancel subscriptions
d.Clean up resources

Complete Lifecycle Flow



                 COMPONENT
                     │
                     ▼
                 MOUNTING
                     │
        constructor() │
                     ▼
                  render()
                     │
                     ▼
            componentDidMount()
                     │
                     ▼
                 UPDATING
                     │
          props/state changes
                     │
                     ▼
       shouldComponentUpdate()
                     │
                     ▼
                  render()
                     │
                     ▼
       getSnapshotBeforeUpdate()
                     │
                     ▼
           componentDidUpdate()
                     │
                     ▼
                UNMOUNTING
                     │
                     ▼
          componentWillUnmount()



React lifecycle methods are methods available mainly in class components that allow us to perform actions during different stages of a component's life. The three main phases are Mounting, Updating, and Unmounting. Common methods include constructor(), render(), componentDidMount(), componentDidUpdate(), and componentWillUnmount(). In modern function components, Hooks such as useEffect are used instead of most class lifecycle methods.

 */

