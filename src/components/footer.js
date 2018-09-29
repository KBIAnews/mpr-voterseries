import React from 'react';

export default class Footer extends React.Component {
    
    
    render(){
        return (
            <footer style={{backgroundColor: '#444',
            paddingBottom: '10rem'}}>
            <div className="container">
                <div className="logos-row">
                <a href="https://www.kbia.org/">
                        <img src="https://s3.amazonaws.com/media.kbia.org/2018/beyond-ballot-media/KBIA_main_reverse.png" alt="KBIA Logo"/>
                    </a>
                                        <a href="https://www.ksmu.org/">
                        <img src="https://s3.amazonaws.com/media.kbia.org/2018/beyond-ballot-media/logo_fid.png" alt="KSMU Logo"/>
                    </a>
                    <a href="https://www.stlpublicradio.org/">
                        <img src="https://s3.amazonaws.com/media.kbia.org/2018/beyond-ballot-media/STLPR-Primary_W-LG.png" alt="St. Louis Public Radio Logo"/>
                    </a>

                    <a href="https://www.kcur.org/">
                        <img src="https://s3.amazonaws.com/media.kbia.org/2018/beyond-ballot-media/KCUR-Logo-Horizontal-OneColor-Outline_White.png" alt="KCUR Logo"/>
                    </a>
                    
                </div>
            </div>
            </footer>
            )
    }
        
}