import React, { useEffect, useRef, useState } from "react";
import CardWrapper from "../../common/Card";
import Divider from "../../common/divider";
import SmallTitle from "../../common/typografy/smallTitle";
const RenderCountExample = () => {
    const renderCount = useRef(0);
    const [, setSomeState] = useState(false);
    const toggleSomeState = () => {
        setSomeState((prevState) => !prevState);
    };

    useEffect(() => {
        renderCount.current++;
    });
    return (
        <CardWrapper>
            <SmallTitle>Подсчет количества рендеров</SmallTitle>
            <Divider />
            <p>Количество рендеров : {renderCount.current}</p>
            <button className="btn btn-primary" onClick={toggleSomeState}>
                Рендер
            </button>
        </CardWrapper>
    );
};

export default RenderCountExample;
