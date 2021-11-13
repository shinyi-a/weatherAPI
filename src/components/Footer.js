import React from 'react';

export default function Footer() {
    return <>
        <footer>
            {document.write("Copyright &copy; " + new Date().getFullYear())}
        </footer>
    </>
}