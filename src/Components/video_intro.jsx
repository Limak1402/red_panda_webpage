import videoFile from '../Assets/Red_Panda_Stands_up_After_Being_Scared_by_Rock.mp4';

const VideoPlayer = () => {
  return (
    <video autoPlay loop muted controls height="500">
      <source src={videoFile} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};
  
  export default VideoPlayer;
  