import './style/App.css';
import {useState} from 'react';
import { ColorPicker } from './components/colorPicker';

const App = () => {
  const [color, setColor] = useState(null);
  const [isBlack, setIsBlack] = useState(false)

  return (
    <div style={{background:`${color}`}}className="App">
      {color===null
      ?(<>
          <h1 className='title'>Color Picker!</h1>
          <span className='subtitle'>Choose color below.</span>
        </>)
      :(<h1 style={{color :isBlack? "#fff" : "#000" }}className='title'>{color===null?"Choose color below" : color}</h1>)}
      <ColorPicker color={color} setColor={setColor} setIsBlack={setIsBlack}/>
    </div>
  );
}

export {App};
