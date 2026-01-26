import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { Authcontext } from "./AuthContext";
import { auth } from "../Firebase/Firebase.init";
import { useEffect, useState } from "react";

const googleprovaider = new GoogleAuthProvider()

const Authprovaider = ({children})=>{


    const [user,setuser] = useState(null);
    
    const [loading,setloading] = useState(true);


    const createuser = (email,password)=>{
        setloading(true)
        return createUserWithEmailAndPassword(auth,email,password)
       
    } 

    const singinuser = (email,password)=>{
        setloading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    const signinwithgoogle = ()=>{
        setloading(true)
        return signInWithPopup(auth,googleprovaider) 
    }

    const signout = ()=>{
        setloading(true)
        return signOut(auth)
    }

    useEffect (()=>{
        const unsubscribe = onAuthStateChanged(auth,(currentuser)=>{
            setuser(currentuser)
            setloading(false)
        })
        return ()=>{
            unsubscribe()
        }   
     },[])

    const authinfo = {
        createuser,
        singinuser,
        signinwithgoogle,
        signout,
        user,
        loading,
    }
    return (
       <Authcontext value={authinfo}>
        {children}
        </Authcontext>
    )
}

export default Authprovaider;