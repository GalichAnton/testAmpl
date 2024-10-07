import { useState} from 'react'
import './App.css'
import * as amplitude from '@amplitude/analytics-browser';

amplitude.init('2082ab2a4b7ab2b8cdd162f713b2798', {"autocapture":true});
function App() {
   const [count, setCount] = useState(0);
   amplitude.setUserId('test@user')

    return (
        <div>
           TEST
            <button onClick={() =>setCount(prevState => prevState++)}>Click me</button>
            <span>{count}</span>
        </div>
    );
}

export default App
