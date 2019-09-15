import React from './react';
import reactDom from './react-dom';
reactDom.render(React.createElement('h1', {
    className: 'saber',
    style: {
        color: 'red',
        fontSize: '20px'
    }
}, 'hello', React.createElement('span', null, 'World')), document.getElementById('root'));
