import React from 'react';
import Link from 'gatsby-link';

export default class AudioControlsComponent extends React.Component {
    constructor(props){
        super(props);
    }
    
    render(){
        return (
            <div className={'audio-controls'}>
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