class Component {
    static isReactComponent = true;
    constructor(props) {
        this.props = props;
    }
}
function reactElement(type, props) {
    const element = {type, props}
    return element
}
function createElement(type, config = {}, children) {
    let props = {};
    for (let key in config) {
        props[key] = config[key]
    }
    const childrenLength = arguments.length - 2;
    if (childrenLength === 1) {
        props.children = children;
    } else if (childrenLength > 1) {
        props.children = Array.from(arguments).slice(2);
    }
    return reactElement(type, props)
}
export default { createElement, Component }