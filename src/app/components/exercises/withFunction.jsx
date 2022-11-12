import React, { useState } from "react";
import CardWrapper from "../common/Card";

const withFunction = (Component) => (props) => {
    const [isAuth, setIsAuth] = useState(localStorage.getItem("Auth"));

    const onLogin = () => {
        localStorage.setItem("Auth", "H");
        setIsAuth(localStorage.getItem("Auth"));
    };
    const onLogOut = () => {
        localStorage.removeItem("Auth");
        setIsAuth("");
    };
    return (
        <CardWrapper>
            <Component
                {...props}
                isAuth={isAuth}
                onLogOut={onLogOut}
                onLogin={onLogin}
            />
        </CardWrapper>
    );
};

export default withFunction;
