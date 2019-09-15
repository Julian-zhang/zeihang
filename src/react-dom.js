function render(element, parentNode) {
    if (typeof element === 'string' || typeof element === 'number') return parentNode.appendChild(document.createTextNode(element));
    let type, props;
    type = element.type;
    props = element.props;
    if (type.isReactComponent) {
        let returnedElement = new type(props).render();
        type = returnedElement.type;
        props = returnedElement.props;
    }
    if (typeof type === 'function') {
        let returnedElement = type(props);
        type = returnedElement.type;
        props = returnedElement.props;
    } 
    let domElement = document.createElement(type);
    for (let key in props) {
        if (key === 'className') {
            domElement.className = props.className
        } else if (key === 'style') {
            let style = props.style;
            for (let attr in style) {
                domElement.style[attr] = style[attr];
            }
        } else if (key === 'children') {
            let children = Array.isArray(props.children) ? props.children : [props.children];
            children.forEach(child => {
                render(child, domElement);
            });
        } else {
            domElement.setAttribute(key, props[key])
        }
    }
    parentNode.appendChild(domElement);
}
export default { render }