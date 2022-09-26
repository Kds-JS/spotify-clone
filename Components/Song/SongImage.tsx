import Image from 'next/image';
import React from 'react';
import classes from './Song.module.css';

type Song = {
    id: number;
    title: string;
    artist: string;
    file: string;
    image: string
  }

const SongImage = (props: {song: Song, isPlaying: boolean}) => {


    return (
        <>
            <div>
                <Image className={props.isPlaying ? classes.turning : classes.notTurning} src={props.song.image} width={300} height={300} alt="cover" />
            </div>
        </>
    );
};

export default SongImage;