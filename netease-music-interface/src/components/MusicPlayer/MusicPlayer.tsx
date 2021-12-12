import clsx from "clsx";
import styles from "./MusicPlayer.module.less";
import avatarImg from "assets/img/avatar.png";
import ReactJkMusicPlayer from "react-jinke-music-player";
import { playSvg } from "./icons/play";
import { pauseSvg } from "./icons/pause";
export interface MusicPlayerProps {}

const MusicPlayer: React.FC<MusicPlayerProps> = () => {
  const audioList = [
    {
      name: "Despacito",
      singer: "Luis Fonsi",
      cover:
        "http://res.cloudinary.com/alick/image/upload/v1502689731/Despacito_uvolhp.jpg",
      musicSrc:
        "http://res.cloudinary.com/alick/video/upload/v1502689683/Luis_Fonsi_-_Despacito_ft._Daddy_Yankee_uyvqw9.mp3",
    },
  ];
  return (
    <ReactJkMusicPlayer
      defaultPosition={{ top: 250, right: 0 }}
      theme="light"
      audioLists={audioList}
      showDownload={false}
      showReload={false}
      autoPlay={false}
      icon={{ play: playSvg, pause: pauseSvg }}
    />
  );
};

export default MusicPlayer;
