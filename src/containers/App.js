import React, { useState, useEffect } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';

function App () {
  /*When using hooks we don't need constructor and the state, because we are creating a function
  useState hook has to replicate the constructor*/
  // constructor( ) {
  //   super()
  //   this.state = {
  //     robots: [],
  //     searchfield: ''
  //   }
  // }
  /*useState will return a piece of state and the function that changes that state */
  const [robots, setRobots] = useState([])
  const [searchfield, setSearchfield] = useState('')
  const [count, setCount] = useState(0) 

  /*
  Inside a function there is no such thing as component did mount
  And we are no longer using the component class or import it. Since we are no longer in a class, re should
  remove ".this" keyword
  */
  // componentDidMount() {
  //   fetch('https://jsonplaceholder.typicode.com/users')
  //     .then(response=> response.json())
  //     .then(users => {this.setState({ robots: users})});
  // }

  /* react runs the useEffect function after every time
  it renders*/
  useEffect(()=> {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response=> response.json())
      .then(users => {setRobots(users)});
      console.log(count)
  },[count]) // only run if count changes.

  /*turning into a variable because this is a function */
  const  onSearchChange = (event) => {
    setSearchfield(event.target.value)
  }
    const filteredRobots = robots.filter(robot =>{
      return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    })
    
    return !robots.length ?
      <h1>Loading</h1> :
      (
        <div className='tc'>
          <h1 className='f1'>RoboFriends</h1>
          <button onClick={()=>setCount(count+1)}>Click Me!</button>
          <SearchBox searchChange={onSearchChange}/>
          <Scroll>
            <CardList robots={filteredRobots} />
          </Scroll>
        </div>
      );
  }


export default App;