import React , {useState , useEffect} from 'react';
import {Link} from "react-router-dom";

//       VALIDATE        //
import { validate } from './validate';

//      CSS  STYLES         //
import styles from "./SignUp.module.css";

//        TOAST         //
import { notify } from "./toast"
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const SignUp = () => {
    const[data , setData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        isAccepted : false
    });
    const[errors , setErrors] = useState({});    //obj ke az function validate miad bayad dar yekja zakhire shavad ke yek state baray an misazim
    const[touched , setTouched] = useState({});

    useEffect(() =>{                            
        setErrors(validate(data , "signup"))    // signUp yani type ke dar validate dadim v data dar inja yani function validate obj data ra etebarsanji konad
    }, [data])                                  //data ke neveshtim yani harmoghe obj data taghyeer kard bia setError kon

    const changeHandler = event =>{             // chon isAccepted yek checkbox v true false barmigardone nemitonim begim .value balke .checked v baray baghiye migim .value
        if(event.target.name === "isAccepted"){
            setData({...data , [event.target.name] : event.target.checked})
        }else{
            setData({...data , [event.target.name] : event.target.value})
        }
    }

    const focusHandler = event =>{
        setTouched({...touched , [event.target.name] : true}) //ba in khat migim k bro bar asase name har kodom ke entekhab shodeh bod ro setToched ro true bezar yani rosh onFucuse kardim yani fh onfucus ma yek value midahim v meghdaresh true dar obj jeloy useState touched
    }

    const submitHandler = event =>{          
        event.preventDefault();                   // jelogiri az reload shodan safhe
        if(!Object.keys(errors).length){         // age bkhaym length yek obj ro begirim bayad tabdilesh konim b array ba kode Object v be vasile code keys maghadir dakhel obj ra migirim
            notify("SIGNED UP" , "success")
        }else{                                    
            notify("INVALID DATA !!!" , "error")
            setTouched({                        // ba in kar setToched hame ro true mikonim ke dar zamane submit agar error dashtim neshhon bede yani haman kari ke ba setTouched dar aval kar az an jelogiri mikardim 
                name: true,
                email: true,
                password: true,
                confirmPassword: true,
                isAccepted : true
            })
        }
        

    }



    return (
        <div className={styles.container}>
            <form onSubmit={submitHandler} className={styles.formContainer}>
                <h2 className={styles.header}>Sign Up</h2>
                <div className={styles.formfield}>
                    <label>Name</label>
                    <input
                        className={(errors.name && touched.name) ? styles.uncompleted : styles.formInput}
                        type="text" 
                        name="name"     // name ke midahim baray changeHandler mibashad yedone change neveshtim baray hame ba name hay motafavet 
                        value={data.name} 
                        onChange={changeHandler} 
                        onFocus={focusHandler}
                    />
                    {/* bayad dotashon true beshan ta error ro neshon bede */}
                    {errors.name && touched.name &&<span>{errors.name}</span>}       
                </div>
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
                <div className={styles.formfield}>
                    <label>Confirm Password</label>
                    <input
                        className={(errors.confirmPassword && touched.confirmPassword) ? styles.uncompleted : styles.formInput}
                        type="password" 
                        name="confirmPassword" 
                        value={data.confirmPassword} 
                        onChange={changeHandler} 
                        onFocus={focusHandler}
                    />
                    {errors.confirmPassword && touched.confirmPassword &&<span>{errors.confirmPassword}</span>}
                </div>
                <div className={styles.formfield}>
                    <div className={styles.checkBoxContainer}>
                        <label>Accept the terms and policy</label>
                        <input
                            type="checkbox" 
                            name="isAccepted" 
                            value={data.isAccepted} 
                            onChange={changeHandler} 
                            onFocus={focusHandler}
                        />
                    </div>
                    {errors.isAccepted && touched.isAccepted &&<span>{errors.isAccepted}</span>}
                </div>
                <div className={styles.fomeButtons}>
                    <Link to="/login">Login</Link>
                    <button type="submit">Sign Up</button>
                </div>
            </form>
            <ToastContainer />
        </div>
    );
};

export default SignUp;