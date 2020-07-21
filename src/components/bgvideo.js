import React from 'react';
import videoSource from 'https://youtu.be/LWjq0ibMpYI';
import classes from './BackgroundVideo.module.css';

const BackgroundVideo = () => {
    return (
        <div className={classes.Container} >
            <video autoplay="autoplay" loop="loop" muted className={classes.Video} >
                <source src={videoSource} type="video/mp4">
                    Your browser does not support the video tag.
                </source>
            </video>
            <div className={Content}>
                <div className={classes.SubContent} >
                    <h1>App Dev Group</h1>
                    <p>Give us a call and tell us what you want!</p>
                    <p>We'll make it happen.</p>
                    <button type="button" ref="./contact" className="btn btn-outline-dark">reach out</button>
                </div>
            </div>
        </div>
    )
}

export default BackgroundVideo;