import React from 'react';


const defaultContextValue = {
    data: {
        // set your initial data shape here
        testText: 'moose'
    },
    set: () => {},
}

const {Provider, AudioContextConsumer} = React.createContext(defaultContextValue);

class AudioContextProvider extends React.Component {
    constructor() {
        super()
        
        this.setData = this.setData.bind(this)
        this.state = {
            ...defaultContextValue,
            set: this.setData,
        }
    }
    
    setData(newData) {
        this.setState(state => ({
            data: {
                ...state.data,
                ...newData,
            },
        }))
    }
    
    render() {
        return (
            <Provider value={this.state}>{this.props.children}</Provider>
            )
        }
    }
    
    export { AudioContextConsumer as default, AudioContextProvider }
    