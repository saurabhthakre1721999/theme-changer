import { useState } from "react";

const Progress = () => {
  const [progressValue, setProgressValue] = useState(40);
  return (
    <>
      <progress
        min="1"
        max="100"
        value={progressValue}
        className="w-100"
        style={{ height: "40px" }}
      />
    </>
  );
};
export default Progress;
