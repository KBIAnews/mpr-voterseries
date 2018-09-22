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
            buttonClickedCount: 0,
            audioPlaybackMenuShouldShow: false
        }
    }

    logButtonClicked(){
        this.setState({
            buttonClickedCount: this.state.buttonClickedCount + 1
        })
    }

    requestAudioPlaybackMenu(){
        this.setState({
            audioPlaybackMenuShouldShow: true
        });
    }  
    
    requestCloseAudioPlaybackMenu(){
        this.setState({
            audioPlaybackMenuShouldShow: false
        });
    }

    demandStopAudioPlayback(){

    }

    requestStopAudioPlayback(){
        this.demandStopAudioPlayback();
    }

    render () {
        return (
            <AudioContext.Provider value={{
                state: this.state,
                logButtonClicked: this.logButtonClicked.bind(this),
                requestAudioPlaybackMenu: this.requestAudioPlaybackMenu.bind(this),
                requestCloseAudioPlaybackMenu: this.requestCloseAudioPlaybackMenu.bind(this),
                requestStopAudioPlayback: this.requestStopAudioPlayback.bind(this),
                demandStopAudioPlayback: this.demandStopAudioPlayback.bind(this)
            }}>
                {this.props.children}
            </AudioContext.Provider>
        )
    }
}

export {AudioContextConsumer, AudioContextProvider}
