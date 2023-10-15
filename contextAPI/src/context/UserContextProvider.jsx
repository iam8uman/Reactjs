import React from 'react';
import PropTypes from 'prop-types'; // Import PropTypes
import UserContext from './UserContext';

const UserContextProvider = ({ children }) => { // Correctly destructure the children prop
  const [user, setUser] = React.useState(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

// Add prop type validation
UserContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};


export default UserContextProvider;
