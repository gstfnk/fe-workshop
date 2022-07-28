import * as React from 'react';
import * as ReactDOM from 'react-dom';
import initAboutMe from './about-me';
import {Repos} from "./github/react-component";

initAboutMe();

declare global {
    namespace JSX {
        interface IntrinsicElements {
            'about-me': { me: string }
        }
    }
}

const USER = 'gstfnk';
ReactDOM.render(
    <>
        <about-me me={USER}/>
        <Repos user={USER}/>
    </>,
    document.getElementById('app')
);