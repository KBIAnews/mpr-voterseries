import React from 'react';
import Link from 'gatsby-link';
import Img from 'gatsby-image';

import {debounce} from 'lodash';

export default class FullBanner extends React.Component {
    constructor(props){
        super(props);
        
        // ya gotta do what ya gotta do
        // set state early so this won't break on initial compile
        this.state = {
            scrollFactor: 0, // How much of a windowHeight a person has scrolled down
            targetDimensions: {
                width: '100',
                height: '100'
            }
        };
    }
    
    
    componentDidMount(){
        this.updateTargetDimensions();
        
        window.addEventListener("resize", debounce(this.updateTargetDimensions.bind(this)));
        window.addEventListener("scroll", debounce(this.updateScrollFactor.bind(this)));
    }
    
    componentWillUnmount(){
        window.removeEventListener("resize", debounce(this.updateTargetDimensions.bind(this)));
        window.removeEventListener("scroll", debounce(this.updateScrollFactor.bind(this)));
    }
    
    updateTargetDimensions(){
        this.setState({
            scrollFactor: (window.scrollY/window.innerHeight),
            targetDimensions: {
                width: window.innerWidth,
                height: window.innerHeight
            }
        });
    }

    updateScrollFactor(){
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
                    backgroundColor: `rgba(0,0,0,${(0.2)*(1-this.state.scrollFactor)})`
                }}
            
            ></div>
            <div className="floating-copy abs-words">
            <h1>Beyond the Ballot</h1>
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
                filter: `blur(${5*(1-this.state.scrollFactor)}px)`
            }}
            sizes={this.props.gatsImage.sizes} 
            className={"banner-image"}
            />
            </div>
            );
        }
    }