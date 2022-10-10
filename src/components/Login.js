import React , {useState , useEffect} from 'react';
import {Link} from "react-router-dom";

//       VALIDATE        //
import { validate } from './validate';

//      CSS  STYLES         //
import styles from "./SignUp.module.css";

//        TOAST         //
import { notify } from "./toast";
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Login = () => {
    const[data , setData] = useState({
        email: "",
        password: "",
    });
    const[errors , setErrors] = useState({});
    const[touched , setTouched] = useState({});

    useEffect(() =>{
        setErrors(validate(data , "login"))        // login haman type daron function validate mibashad
    }, [data])                                     //data ke neveshtim yani harmoghe obj data taghyeer kard bia setError kon

    const changeHandler = event => {
        setData({...data , [event.target.name] : event.target.value})
    }

    const focusHandler = event => {
        setTouched({...touched , [event.target.name] : true})
    }

    const submitHandler = event => {
        event.preventDefault();
        if(!Object.keys(errors).length){
            notify("LOGED IN" , "success")       // ye text bayad befrestim ye type
        }else{
            notify("INVALID DATA !!!" , "error")
            setTouched({
                email: true,
                password: true,
            })
        }
        

    }


    return (
        <div className={styles.container}>
            <form onSubmit={submitHandler} className={styles.formContainer}>
                <h2 className={styles.header}>Sign Up</h2>
                <div className={styles.formfield}>
                    <label>Email</label>
                    <input
                        className={(errors.email && touched.email) ? styles.uncompleted : styles.formInput}
                        type="text" 
                        name="email" 
                        value={data.email} 
                        onChange={changeHandler} 
                        onFocus={focusHandler}
                    />
                    {errors.email && touched.email &&<span>{errors.email}</span>}
                </div>
                <div className={styles.formfield}>
                    <label>Password</label>
                    <input
                        className={(errors.password && touched.password) ? styles.uncompleted : styles.formInput}
                        type="password" 
                        name="password" 
                        value={data.password} 
                        onChange={changeHandler} 
                        onFocus={focusHandler}
                    />
                    {errors.password && touched.password &&<span>{errors.password}</span>}
                </div>
                <div className={styles.fomeButtons}>
                    <Link to="/signup">SignUp</Link>
                    <button type="submit">Login</button>
                </div>
            </form>
            <ToastContainer />
        </div>
    );
};

export default Login;