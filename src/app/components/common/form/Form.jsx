import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { validator } from "../../../utils/validator";

const FormComponent = ({
    children,
    validatorConfig,
    onSubmit,
    defaultData
}) => {
    const [data, setData] = useState(defaultData || {});
    const [errors, setErrors] = useState({});

    const handleChange = (target) => {
        setData((prevState) => ({
            ...prevState,
            [target.name]: target.value
        }));
    };

    useEffect(() => {
        if (Object.keys(data).length > 0) {
            validate();
        }
    }, [data]);

    const validate = () => {
        const errors = validator(data, validatorConfig);
        setErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const isValid = validate();
        if (!isValid) return;
        onSubmit(data);
    };
    const isValid = Object.keys(errors).length === 0;

    const ClonedElements = React.Children.map(children, (child) => {
        if (!child.props.name)
            throw new Error(
                "Name property is required for filed component",
                child
            );
        let config = {};
        const childType = typeof child.type;
        if (childType === "function") {
            config = {
                ...child.props,
                onChange: handleChange,
                value: data[child.props.name] || "",
                error: errors[child.props.name]
            };
        }
        if (childType === "string") {
            if (childType === "button") {
                if (
                    child.props.type === "submit" ||
                    child.props.type === undefined
                ) {
                    config = { ...child.props, disabled: !isValid };
                }
            }
        }
        return React.cloneElement(child, config);
    });

    return <form onSubmit={handleSubmit}>{ClonedElements}</form>;
};

FormComponent.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]),
    onSubmit: PropTypes.func,
    validatorConfig: PropTypes.object,
    defaultData: PropTypes.object
};

export default FormComponent;
