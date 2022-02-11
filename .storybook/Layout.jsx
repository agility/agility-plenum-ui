import React from 'react';
import '!style-loader!css-loader!postcss-loader!../src/tailwind.css';

const Layout = ({ children }) => {
  return (
    <div className="px-20 py-10">
      {children}
    </div>
  )
}

export default Layout;