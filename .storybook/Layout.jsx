import React from 'react';
import '../lib/tailwind.css';
import '../src/font.css';

const Layout = ({ children }) => {
    return <div className="p5 min-w-[320px] font-muli">{children}</div>;
};

export default Layout;
