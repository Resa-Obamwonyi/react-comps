import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Hello from './Hello'
import Greet from './Greet'
import Button from './Button'
import Form from './Form'
import Display from './Display'

function App() {
  const [text, setText] = useState('');
  const handleChange=(e) => {
    setText(e);
  }
  
  return (
    <div className="App">
      {/* <Hello name='Resa'/>
      <br></br>
      <Greet time= {13} /> */}
      <br></br>
      <Greet time= {14} />
      <br></br>
      <Button color='white' backgroundColor='black'>Sign in</Button>
      <br></br>
      <br></br>
      <Button color='black' backgroundColor='light-grey'> Log in</Button>
      <br></br>
      <br></br>
      <Button color='white' backgroundColor='purple'>Start now</Button>
      <br></br>
      <br></br>
      <Button color='white' backgroundColor='green'>Apply now</Button>
      <Form text={text} handleThings={handleChange}/>
      <Display text={text}/>
    </div>
  );
}

export default App;
