import { useState, useEffect, useRef } from "react";
import Player from "./Player";

const AudioPlayer = () => {
  const songsData = [
    {
      title: "Fur Elise",
      url: "/audio/fur_elise.mp3",
    },
    {
      title: "School of Rock",
      url: "/audio/school_of_rock.mp3",
    },
    {
      title: "Nightmare",
      url: "/audio/nightmare.mp3",
    },
  ];
  const [songs, setSongs] = useState(songsData);
  const [isplaying, setisplaying] = useState(false);
  const [currentSong, setCurrentSong] = useState(songsData[1]);

  const audioElem = useRef();

  useEffect(() => {
    if (isplaying) {
      audioElem.current.play();
    } else {
      audioElem.current.pause();
    }
  }, [isplaying]);

  const onPlaying = () => {
    const duration = audioElem.current.duration;
    const ct = audioElem.current.currentTime;

    setCurrentSong({
      ...currentSong,
      progress: (ct / duration) * 100,
      length: duration,
    });
  };

  return (
    <div className={"w-screen h-[calc(100vh-var(--nav-height))]"}>
      <audio src={currentSong.url} ref={audioElem} onTimeUpdate={onPlaying} />
      <Player
        songs={songs}
        setSongs={setSongs}
        isplaying={isplaying}
        setisplaying={setisplaying}
        audioElem={audioElem}
        currentSong={currentSong}
        setCurrentSong={setCurrentSong}
      />
    </div>
  );
};

export default AudioPlayer;
