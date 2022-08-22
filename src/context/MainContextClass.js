import React, {Component, createContext} from 'react';

export const MainContextClass = createContext();

class MainContextClassProvider extends Component {
    state = { 
        name: "Salsa",
        avatar: "https://reqres.in/img/faces/7-image.jpg",
     }

    render() { 
        return ( 
            <MainContextClass.Provider value = {{ ...this.state }}>
                {this.props.children}
            </MainContextClass.Provider>
         );
    }
}
 
export default MainContextClassProvider;
