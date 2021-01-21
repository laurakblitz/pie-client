import {useState} from "react";
import Navbar from './Components/Navbar/Navbar';
import Auth from './Components/Auth/Auth';
import "./App.css";
import Pies from './Components/Pies/Pies';

function App() {  
  // let name = "";
  // let nameFunction = (newName) => {
  //   name=NewName;
  // }
  // const [NAME of variable, function to update value of NAME of variable] = useState(initial value);
  const [name, setName] = useState([]);
  const [token, setToken] = useState(undefined);

  let [first, second, third] = ['Fellowship of the Ring', 'Two Towers', 'Return of the King'];
  console.log(first, second, third)

  const viewConductor = () => {
    return token === undefined ? <Auth updateToken={updateToken} /> : <Pies token={token} />
    // return token != undefined ? <Pies /> : <Auth /> ==> "reversed" checks for not undefined
    // return token ? <Pies /> : <Auth /> ==> checks for a truthy value
  }

  // This function takes in a token parameter and assigns that newToken to be the new value of 'token'
  const updateToken = (newToken) => {
    setToken(newToken);
  }

  return (
    <div className="App">

      <Navbar />
      {/* <Auth />
      <Pies /> */}
      {viewConductor()}
    </div>
  );
}

export default App;