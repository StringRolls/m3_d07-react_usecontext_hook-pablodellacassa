import React, { createContext, useState } from 'react';

const RoleContext = createContext();

function ThemeProviderWrapper(props) {
  const [role, setRole] = useState('user');

  const changeRole = (_id) => {
    User.findbyId(_id)
    .then(user=>{
      if (user.role === 'admin') { 
        setRole('admin');
      } else {
        setRole('user');
      };
    })
  }  

  // This is a HOC and must not render HTML per se.
  // It only returns its children with added functionality
  return (
    <RoleContext.Provider value={{ role, changeRole }}>
      {props.children}
    </RoleContext.Provider>
  )
}

export { RoleContext, RoleProviderWrapper };

