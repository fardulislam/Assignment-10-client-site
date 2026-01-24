import React, { useContext } from 'react';
import { Authcontext } from '../Context/AuthContext';
import { Navigate, useLocation } from 'react-router';
import Loading from './Loading';

const Priviteroute = ({children}) => {
    const {user,loading}=useContext(Authcontext)

    const location = useLocation()

    if(loading){
        return <Loading></Loading>
    }

    if(!user){
        return <Navigate to={'/login'} state={{from:location}} replace></Navigate>
    }

    return children;
};

export default Priviteroute;