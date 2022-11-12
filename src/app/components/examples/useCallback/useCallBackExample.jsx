import React, { useCallback, useEffect, useRef, useState } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";

const UseCallBackExample = () => {
    const [data, setData] = useState({});
    const withoutCallback = useRef(0);
    const withCallback = useRef(0);
    const handleChange = ({ target }) => {
        setData((prevState) => ({ ...prevState, [target.name]: target.value }));
    };
    const validateWithoutCallback = (data) => {
        console.log(data);
    };
    const validateWithCallback = useCallback((data) => {
        console.log(data);
    }, []);
    useEffect(() => {
        validateWithCallback(data);
        validateWithoutCallback(data);
    }, [data]);
    useEffect(() => {
        withCallback.current++;
    }, [validateWithCallback]);
    useEffect(() => {
        withoutCallback.current++;
    }, [validateWithoutCallback]);
    return (
        <CardWrapper>
            <SmallTitle>Example</SmallTitle>
            <p>render without Callback {withoutCallback.current}</p>
            <p>render with Callback {withCallback.current}</p>
            <label htmlFor="email" className="form-label">
                Email
            </label>
            <input
                onChange={handleChange}
                id="email"
                className="form-control"
                name="email"
                value={data.email || ""}
            />
        </CardWrapper>
    );
};

export default UseCallBackExample;
