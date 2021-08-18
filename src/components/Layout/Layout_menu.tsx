import React, {useEffect, useState} from 'react'
import Sound from 'react-sound';
import { Box } from '@/UI/Boxes/Box'
import Snow from '@/components/Miscellaneous/Snow'
import Logo from '@/components/Miscellaneous/Logo'
import {useMusicManagerDispatch, useMusicManagerState, MENU_THEME, STOP_ALL_MUSIC} from "@/context/music"

export default function LayoutMenu({
  children,
  logo,
}: {
  children: React.ReactNode
  logo?: boolean
}) {

  const musicManagerState = useMusicManagerState();
  const musicManagerDispatch = useMusicManagerDispatch();

  const [musicState, setMusicState] = useState<string>("loading"); // loading | playing | stopped

  useEffect(() =>{
    musicManagerDispatch({
      type: MENU_THEME
    })
  }, [])

  const handleLoadingSong = () =>{
    setMusicState("loading")
  }

  const handlePlayingSong = () =>{
    setMusicState("playing")
  }

  const handleStoppedSong = () =>{
    setMusicState("stopped")
    musicManagerDispatch({
      type: STOP_ALL_MUSIC
    })
  }


  return (
    <>
    {musicManagerState && musicManagerState.play && (
      <Sound
        url={musicManagerState.src}
        playStatus={musicManagerState.play ? "PLAYING" : "STOPPED"}
        onLoading={handleLoadingSong}
        onPlaying={handlePlayingSong}
        autoLoad={true}
        loop={true}
      />
    )}
    <Box
      position="fixed"
      w="100%"
      h="100%"
      backgroundSrc="/public/images/menu/bg_big.jpg"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
    >
      <Box
        zIndex={10}
        overflow="hidden"
        disp="flex"
        fd="column"
        jc="center"
        ai="center"
        margin="0 auto"
        w="450px"
        h="100%"
      >
        {logo ? <Logo /> : null}
        {children}

      </Box>
      <Snow />

    </Box>
    </>
  )
}
