import React from 'react';
import ReactDOM from 'react-dom/client';
import {List} from "./List/List";
import {ListProvider} from "./List/ListProvider";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ListProvider>
        <List/>
    </ListProvider>
);

