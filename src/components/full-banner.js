import React from 'react';
import Link from 'gatsby-link';
import Img from 'gatsby-image';

export default class FullBanner extends React.Component {
    constructor(props){
        super(props);

        // ya gotta do what ya gotta do
        // set state early so this won't break on initial compile
        this.state = {
            targetDimensions: {
                width: '100',
                height: '100'
            }
        };
    }


    componentDidMount(){
        this.updateTargetDimensions();

        window.addEventListener("resize", this.updateTargetDimensions.bind(this));
    }

    componentWillUnmount(){
        window.removeEventListener("resize", this.updateTargetDimensions.bind(this));
    }

    updateTargetDimensions(){
        this.setState({
            targetDimensions: {
                width: window.innerWidth,
                height: window.innerHeight
            }
        });
    }

    render(){
        return (
            <div
            style={{
                height: `${this.state.targetDimensions.height}px`,
                width: `${this.state.targetDimensions.width}px`
            }}
            className={'full-banner'}>
                <Img 
                style={{
                    flexShrink: 0,
                    width: `${this.state.targetDimensions.width}px`,
                    height: `${this.state.targetDimensions.height}px`
                    // bottom: '0px',
                }}
                imgStyle={{
                    objectFit: 'cover'
                }}
                sizes={this.props.gatsImage.sizes} 
                className={"banner-image"}
                />
            </div>
        );
    }
}