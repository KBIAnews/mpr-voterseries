import React from 'react';

const defaultAudioContext = {
    defaultText: "audio context"
}

const AudioContext = React.createContext(defaultAudioContext);

const AudioContextConsumer = AudioContext.Consumer

class AudioContextProvider extends React.Component {

    constructor(props){
        super(props)

        console.log("new provider");

        this.state = {
            testText: "moose",
            buttonClickedCount: 0
        }
    }

    logButtonClicked(){
        this.setState({
            buttonClickedCount: this.state.buttonClickedCount + 1
        })
    }

    render () {
        return (
            <AudioContext.Provider value={{
                state: this.state,
                logButtonClicked: this.logButtonClicked.bind(this)
            }}>
                {this.props.children}
            </AudioContext.Provider>
        )
    }
}

export {AudioContextConsumer, AudioContextProvider}
