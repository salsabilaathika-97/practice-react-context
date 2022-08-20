import React, {Component, createContext} from 'react';

class LayoutContextProvider extends Component {
    state = { 
        nightmode: false,
        day: {
            color: '#000',
            background: 'red'
        },
        night: {
            color: '#fff',
            background: '#000'
        },
     };
     
    render() { 
        return ( 
            <LayoutContextProvider.Provider value = {{ ...this.state }}>
                {this.props.children}
            </LayoutContextProvider.Provider>
         );
    }
}
 
export default LayoutContextProvider;