import React, { useEffect, useRef, useState } from "react";
import CardWrapper from "../../common/Card";
import Divider from "../../common/divider";
import SmallTitle from "../../common/typografy/smallTitle";
const PrevStateExample = () => {
    const prevState = useRef("");
    const [someState, setSomeState] = useState("false");
    const toggleSomeState = () => {
        setSomeState((state) => (state === "false" ? "true" : "false"));
    };

    useEffect(() => {
        prevState.current = someState;
    }, [someState]);
    return (
        <CardWrapper>
            <SmallTitle>Предыдущее состояние</SmallTitle>
            <Divider />
            <p>Предыдущее состояние {prevState.current}</p>
            <p>Текущее состояние {someState}</p>
            <button className="btn btn-primary" onClick={toggleSomeState}>
                Рендер
            </button>
        </CardWrapper>
    );
};

export default PrevStateExample;
