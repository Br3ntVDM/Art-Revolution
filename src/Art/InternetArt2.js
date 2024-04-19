import Canvas from "../components/Canvas";
import InternetArt2style from "../styles/InternetArt2style.css";

function CanvasBrick(){
  return(
    <div className="canvas">
      <Canvas
      width={700}
      height={500}
      />

    </div>
  )
}

export default CanvasBrick;