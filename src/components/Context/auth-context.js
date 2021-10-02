import React,{ useState,useEffect } from 'react'

const AuthContext = React.createContext({
    isLoggedIn: false,
    logout:()=>{},
    login:(email,password)=>{}
});

export const AuthContextProvider = (props) => {
    const[isLoggedIn,setIsLoggedIn] = useState(false);

    useEffect(()=>{
        if(localStorage.getItem('loggedInFlag') === '1'){
          setIsLoggedIn(true);
        }
      },[]);

    const logoutHandler = () => {
        localStorage.removeItem('loggedInFlag');
        setIsLoggedIn(false);
    }
    const loginHandler = () => {
        localStorage.setItem('loggedInFlag', '1');
        setIsLoggedIn(true);
    }
    return(
    <AuthContext.Provider value={{
        isLoggedIn:isLoggedIn,
        logout:logoutHandler,
        login:loginHandler
    }}>{props.children}</AuthContext.Provider>
    );
}
    


export default AuthContext;
