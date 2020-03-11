import React, { Component } from 'react';
import './App.css';
import Windowinfo from './Windowinfo'
import Animation from './Animation'
class App extends Component {
  constructor(props){
    super(props)
    
  }
  componentDidMount(){
    
  }

  

  render(){
    return (
    <div className="App" style={{display:'flex', justifyContent:'center', flexDirection:'center', flexDirection:"column", alignItems:'center' }}>
      <Windowinfo />
      <Animation width={400} height={400}/>
      {/* {ad another listener mouse position so when you move your mouse it shows x and y coordinates} */}
    </div>
   );
  }
}

export default App;
