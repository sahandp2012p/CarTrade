import React from 'react';

function ListItem(props) {
    return (
        <li><img src="/imgs/check.png" alt="" /><div>{props.children}</div></li>
    );
}

export default ListItem;