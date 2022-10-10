import './App.css';
import SignUp from "./components/SignUp";
import Login from './components/Login';
// import {Route , Redirect , Switch} from "react-router-dom"; روتر دام ورژن5
import {Route , Routes , Navigate} from "react-router-dom";


function App() {
  return (
    <div className="App">
      {/* <Switch>
        <Route path="/login" component={Login}/>
        <Route path="/signup" component={SignUp}/>     روتر دام ورژن5
        <Redirect from="/" to="/SignUp"/>
      </Switch> */}
      <Routes>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/" element={<Navigate to="/signup"/>}/>
      </Routes>
    </div>
  );
}

export default App;
