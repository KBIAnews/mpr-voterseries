import React from 'react';  
import Img from 'gatsby-image';

import {debounce} from 'lodash';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeadphones,faNewspaper } from '@fortawesome/free-solid-svg-icons';

// Context Consumers
import {AudioContextConsumer} from './audio/audio-context'

export default class FullBanner extends React.Component {
    constructor(props){
        super(props);
        
        // ya gotta do what ya gotta do
        // set state early so this won't break on initial compile
        this.state = {
            scrollFactor: 0, // How much of a windowHeight a person has scrolled down
            targetDimensions: {
                width: '2000',
                height: '1000'
            }
        };
    }


    scrollPositionToStyleModifier(n){
        return ((-1/((7*n)+1))+1);
    }
    
    
    componentDidMount(){
        this.updateTargetDimensions();

        this.setState({
            mountedResizeListenerFunction: debounce(this.updateTargetDimensions.bind(this),100),
            mountedScrollListenerFunction: debounce(this.updateScrollFactor.bind(this),100)
        })
        
        window.addEventListener("resize", this.mountedResizeListenerFunction);
        window.addEventListener("scroll", this.mountedScrollListenerFunction);
    }
    
    componentWillUnmount(){
        window.removeEventListener("resize", this.mountedResizeListenerFunction);
        window.removeEventListener("scroll", this.mountedScrollListenerFunction);
    }
    
    updateTargetDimensions(){
        console.log("update target dimensions");
        this.setState({
            scrollFactor: (window.scrollY/window.innerHeight),
            targetDimensions: {
                width: window.innerWidth,
                height: window.innerHeight
            }
        });
    }

    updateScrollFactor(){
        console.log("update scroll factor");
        this.setState({
            scrollFactor: (window.scrollY/window.innerHeight)
        });
    }
    
    render(){
        return (
            <div
            style={{
                position: 'relative',
                height: `${this.state.targetDimensions.height}px`,
                width: `${this.state.targetDimensions.width}px`
            }}
            className={'full-banner'}>
            <div className="glasspane"
                style={{
                    position: 'absolute',
                    left: '0px',
                    top: '0px',
                    width: '100%',
                    height: '100%',
                    transition: 'all 0.1s ease-in-out 0s',
                    backgroundColor: `rgba(0,0,0,${(0)*(this.scrollPositionToStyleModifier(this.state.scrollFactor))})`
                }}
            
            ></div>
            <div className="floating-copy abs-words">
            <div 
            className="textcontent"
            style={{
                paddingTop: `${30 * this.state.scrollFactor}px`
            }}>
            <div className={"orange-bar"}>
            <h1>Beyond the Ballot</h1>
            </div>
            <div className="containable">
            <div
            className={"white-field"}>
            <p>Find out what Missouri voters are really looking for in the November midterm election.</p>
            
            
            <p className={"button-row"}>
            
            <AudioContextConsumer>
                {(context) => (
                    <React.Fragment>
                        <button
                        className={'primary'}
                        onClick={context.requestAudioPlaybackMenu}>
                            <FontAwesomeIcon icon={faHeadphones} 
                            style={{
                                marginRight: '0.5rem'
                            }}/> 
                            Start Listening
                        </button>
                    </React.Fragment>
                )}
            </AudioContextConsumer>
            <button
                    className={'primary'}
                    >
                        <FontAwesomeIcon icon={faNewspaper} 
                        style={{
                            marginRight: '0.5rem'
                        }}/> 
                        Read Stories
                    </button>

            </p>


            </div>
            </div>

                
            </div>
            </div>
            <Img 
            style={{
                flexShrink: 0,
                width: `${this.state.targetDimensions.width}px`,
                height: `${this.state.targetDimensions.height}px`,
                zIndex: -1
                // bottom: '0px',
            }}
            imgStyle={{
                objectFit: 'cover',
                transition: 'all 0.1s ease-in-out 0s',
                // filter: `blur(${2*this.scrollPositionToStyleModifier(this.state.scrollFactor)}px)`
            }}
            sizes={this.props.gatsImage.sizes} 
            className={"banner-image"}
            />
            </div>
            );
        }
    }