import Video from 'next-video';
import MaasaiVideo from "/videos/Maasai-Video.mp4";
import Notflix from 'player.style/notflix/react';

  export default function ArchiveVideo() {
    return <Video src={MaasaiVideo} style={{width: 'calc(800px * 9/16)', height: '800px', margin: 'auto', padding: '20px'}}/>;
  }