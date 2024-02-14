import { useEffect, useRef, useState } from "react";

export function TimerDemo() {
  const [progress, setProgress] = useState("d-none");
  const [image, setImage] = useState("d-none");
  const [button, setButton] = useState("d-block");
  const [progressValue, setProgressValue] = useState(0);
  const [status, setStatus] = useState("");
  String;
  let loading = useRef(null);
  let count = useRef(0);

  function LoadingProgress() {
    count.current = count.current + 1;
    setProgressValue(count.current);
    if (count.current == 100) {
      setProgress("d-none");
      setImage("d-block");
    }
  }

  function handleLoadClick() {
    loading.current = setInterval(LoadingProgress, 100);
    setButton("d-none");
    setProgress("d-block");
  }

  function handlePauseClick() {
    clearInterval(loading.current);
    setStatus("-Paused");
  }
  function handlePlayClick() {
    loading.current = setInterval(LoadingProgress, 100);
    setStatus("");
  }

  return (
    <div
      className="container-fluid d-flex justify-content-center align-items-center"
      style={{ height: "100vh" }}
    >
      <div className="w-25 text-center">
        <div className={button}>
          <button onClick={handleLoadClick} className="btn btn-primary">
            Load Image
          </button>
        </div>
        <div className={progress}>
          <progress
            min="1"
            max="100"
            value={progressValue}
            className="w-100"
            style={{ height: "40px" }}
          />
          <p>
            {" "}
            {progressValue} % Completed {status}{" "}
          </p>
          <div>
            <button
              onClick={handlePlayClick}
              className="bi bi-play btn btn-success me-2"
            >
              start
            </button>
            <button
              onClick={handlePauseClick}
              className="bi bi-pause btn btn-warning"
            ></button>
          </div>
        </div>
        <div className={image}>
          <img src="women-fashion.jpg" width="300" height="300" />
        </div>
      </div>
    </div>
  );
}
