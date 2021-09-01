import { useState } from "react";

const SwingSubdivisionSlider = ({ transport }) => {
  const [swingSubd, setSwingSubd] = useState("8");
  return (
    <div className="swing-subd-slider">
      <input
        type="range"
        //defaultValue= {`1/${transport.swingSubdivision}`}
        defaultValue="8"
        min="4"
        max="32"
        step="4"
        id="swing-subd-slid"
        onChange={(e) => {
            transport.swingSubdivision = `${parseInt(e.target.valueAsNumber)}n`;
          setSwingSubd(parseInt(e.target.valueAsNumber));

          console.log(transport.swingSubdivision);
        }}
      />
      <label htmlFor="swing-subd-slid">Swing Subdivision: {`1/${swingSubd}`} </label>
    </div>
  );
};

export default SwingSubdivisionSlider;
