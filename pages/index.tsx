

import type { NextPage } from 'next';
import { useState } from 'react';
import Audio from '../Components/Audio/Audio';
import SongImage from '../Components/Song/SongImage';
import styles from '../styles/Home.module.css';

type Song = {
  id: number;
  title: string;
  artist: string;
  file: string;
  image: string
}

const SONGS : Song[] = [
  {
    id: 0,
    title: 'Birdseye Blues',
    artist: 'Chris Haugen',
    file: '/songs/Birdseye Blues - Chris Haugen.mp3',
    image: '/covers/1.jpg'
  },
  {
    id: 1,
    title: 'Depth Fuse',
    artist: 'French Fuse',
    file: '/songs/Depth Fuse - French Fuse.mp3',
    image: '/covers/2.jpg'
  },
  {
    id: 2,
    title: 'Duh Fuse',
    artist: 'French Fuse',
    file: '/songs/Duh Fuse - French Fuse.mp3',
    image: '/covers/3.jpg'
  },
]

export const getStaticProps = async() => {
  const allSongs: Song[] = SONGS;

  return {
    props: {
      songs: allSongs
    },
    revalidate: 3600
  }
}

const Home: NextPage<{songs: Song[]}> = ({songs}) => {
  const [trackingPlaying, setTrackingPlaying] = useState(0);
  const [isPlaying,setIsPlaying] = useState(false);
  

  return (
    <div className={styles.container}>
      <div className={styles.songPlaying}>
        <SongImage song={songs[trackingPlaying]} isPlaying={isPlaying}/>
      </div>

      <Audio isPlaying={isPlaying} setIsPlaying={setIsPlaying} songs={songs} trackingPlaying={trackingPlaying} setTrackingPlaying={setTrackingPlaying}/>

    </div>
  )
}

export default Home;
