import { NextPage } from 'next'
import { signIn, signOut, useSession } from 'next-auth/react'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../../../styles/spotify.module.css'
import stylesHero from '../../../styles/musicHeroSection.module.css'
import Lottie from 'react-lottie'
import Rive from "@rive-app/react-canvas"
import animationData from '../../../assets/music-animation-lottie.json'
import { useRive } from '@rive-app/react-canvas';
import MusicHeroSection from '../../../components/SpotifyHero/musicHeroSection'

import MusicIndex from './musicIndex'

function Simple() {
  const { rive, RiveComponent } = useRive({
    src: '/login_screen_character.riv',
    autoplay: false,
  });

  return (
    <RiveComponent
      onMouseEnter={() => rive && rive.play()}
      onMouseLeave={() => rive && rive.pause()}
    />
  );
}

const SpotifyMusic = () => {
  const session = useSession()

  const defaultOptionsLottie = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  return (
    <div id={stylesHero.root}>
      <Head>
        <title>Play Spotify Music in AR</title>
      </Head>

      <MusicHeroSection />
        {/* <Lottie 
        options={defaultOptionsLottie}
          height={400}
          width={400}
        /> */}
        <h1 className={styles.title}>
          Welcome,{' '}
          {session.status === 'authenticated'
            ? session.data.user?.name || 'friend'
            : 'stranger'}
          !
        </h1>
      
        <div className={stylesHero.overlay}>

        <p className={stylesHero.p}>
          {session.status === 'authenticated' ? (
            <button
              className={stylesHero.button}
              type="button"
              onClick={() => signOut()}
            >
              Sign out {session.data.user?.email}
            </button>
          ) : (
            <button
              className={stylesHero.button}
              type="button"
              style={{ '--accent-color': '#1DB954' }}
              onClick={() => {
                signIn('spotify', { callbackUrl: 'http://localhost:3000/spotify' });
                console.log('clicked');
              }}
              disabled={session.status === 'loading'}
            >
              Sign in with Spotify
            </button>
          )}
        </p>

      </div>
      {/* <MusicIndex /> */}
    </div>
  )
}

export default SpotifyMusic
