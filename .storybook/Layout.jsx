import React from 'react';
import '../src/tailwind.css';
import '../src/font.css';

const Layout = ({ children }) => {
  return (
    <div className="px-20 py-10 min-w-[400px] font-muli">
      {children}
    </div>
  )
}

export default Layout;