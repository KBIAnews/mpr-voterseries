import React from 'react';

const defaultAudioContext = {
    testText: 'moose'
}

const AudioContext = React.createContext(defaultAudioContext);

const AudioContextConsumer = AudioContext.Consumer

class AudioContextProvider extends React.Component {

    render () {
        return (
            <AudioContext.Provider value={defaultAudioContext}>
                {this.props.children}
            </AudioContext.Provider>
        )
    }
}

export {AudioContextConsumer, AudioContextProvider}
