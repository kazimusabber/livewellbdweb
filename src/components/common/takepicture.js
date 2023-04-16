import React, { useState } from 'react'
import Webcam from 'react-webcam'
import Image from 'react-bootstrap/Image'
const WebcamComponent = () => <Webcam />
const videoConstraints = {
  width: 200,
  height: 200,
  facingMode: 'user',
}
export default function Picture(){
  const [picture, setPicture] = useState('')
  const [takephoto, setTakephoto] = useState(false)
  const webcamRef = React.useRef(null)
  const capture = React.useCallback(() => {
    const pictureSrc = webcamRef.current.getScreenshot()
    setPicture(pictureSrc)
  })

  return (
    <div>
      <div>
        {takephoto == true ? (
          <Webcam
            audio={false}
            height={200}
            ref={webcamRef}
            width={200}
            screenshotFormat="image/jpeg"
            border={"2px solid black"}
            videoConstraints={videoConstraints}
          />
        ) : (
          <img src={picture ? picture : "/logo512.png"} className="thumbnail" style={{margin:"4px"}} alt="nothing" height="120px" width="120px"/>
        )}
      </div>
      <div>

        {takephoto == false ? (

          <button
            onClick={(e) => {
              e.preventDefault()
              setPicture()
              setTakephoto(true)
            }}
            className="btn btn-primary"
          ><i className="fas fa-camera"> </i>  Take a photo
            
          </button>
        ) : (
          <button
            onClick={(e) => {
              e.preventDefault()
              capture()
              setTakephoto(false)
            }}
            className="btn btn-danger"
          >
            Capture
          </button>
        )}
      </div>
    </div>
  )
}
