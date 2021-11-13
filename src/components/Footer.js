import React from 'react';

export default function Footer() {
    let copyright = "Copyright © " + new Date().getFullYear();
    return <>
        <footer>
            {copyright}
        </footer>
    </>
}