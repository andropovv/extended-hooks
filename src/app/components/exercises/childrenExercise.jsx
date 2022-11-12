import React from "react";
import CollapseWrapper from "../common/collapse";
import PropTypes from "prop-types";
const Wrapper = ({ children }) => {
    return React.Children.map(children, (child, index) => {
        const config = {
            ...child.props,
            label: `Компонент списка ${index}`
        };
        return React.cloneElement(child, config, ...children);
    });
};
Wrapper.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
};
const ChildrenExercise = () => {
    return (
        <CollapseWrapper title="Упражнение">
            <p className="mt-3">
                У вас есть компоненты Списка. Вам необходимо к каждому из них
                добавить порядковый номер, относительно того, как они
                располагаются на странице. Вы можете использовать как{" "}
                <code>React.Children.map</code> так и{" "}
                <code>React.Children.toArray</code>
            </p>
            <Wrapper>
                <Component />
                <Component />
                <Component />
            </Wrapper>
        </CollapseWrapper>
    );
};

const Component = ({ label }) => {
    return <div>{label}</div>;
};
Component.propTypes = {
    label: PropTypes.string
};
export default ChildrenExercise;
