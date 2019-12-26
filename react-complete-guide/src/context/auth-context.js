import React from 'react';

// can be passed around components to share between them like services in angular
const authContext = React.createContext({
    authenticated: false,
    login: () => { }
});

export default authContext;
