import React from 'react';

// Context Consumers
import {AudioContextConsumer} from './audio-context'

// Components
import AudioPlaybackMenuComponent from './audio-menu'

export default class AudioControlsComponent extends React.Component {
    // constructor(props){
    //     super(props);
    // }
    
    render(){
        return (
            <div className={'audio-controls'}
            style={{
                float: 'right'
            }}>
                
                <AudioContextConsumer>
                {(context) => (
                    <React.Fragment>
                    {context.state.audioPlaybackMenuShouldShow && (
                        <AudioPlaybackMenuComponent />
                    )}
                    </React.Fragment>
                )}
                </AudioContextConsumer>

                </div>
                );
            }
        }