import React from 'react';
import Link from 'gatsby-link';

// Context Consumers
import {AudioContextConsumer} from './audio/audio-context'

export default class AudioPlaybackMenuComponent extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div className={'audio-playback-menu'}>
                <AudioContextConsumer>
                {(context) => (
                    <button
                    className={'primary'}
                    onClick={context.requestCloseAudioPlaybackMenu}>
                    Close
                    </button>
                )}
                </AudioContextConsumer>
            </div>
        );
    }
}