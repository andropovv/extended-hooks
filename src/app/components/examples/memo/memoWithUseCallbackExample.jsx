import React from "react";
import PropTypes from "prop-types";
import { useEffect } from "react";
import { useState } from "react";
import { useCallback } from "react";
const LogOutButton = ({ onLogOut }) => {
    useEffect(() => {
        console.log("render button");
    });

    return (
        <button className="btn btn-primary" onClick={onLogOut}>
            Log Out
        </button>
    );
};
function areEqual(prevState, nextState) {
    if (prevState.onLogOut !== nextState.onLogOut) return false;
    return true;
}
const MemoizedLogOutButton = React.memo(LogOutButton, areEqual);

LogOutButton.propTypes = {
    onLogOut: PropTypes.func
};
const MemoWithUseCallbackExample = (props) => {
    const [state, setState] = useState(false);
    const handleLogOut = useCallback(() => {
        localStorage.removeItem("auth");
    }, []);

    return (
        <>
            <button
                className="btn btn-primary"
                onClick={() => setState(!state)}
            >
                Rerender
            </button>
            <MemoizedLogOutButton onLogOut={handleLogOut} />
        </>
    );
};

export default MemoWithUseCallbackExample;
