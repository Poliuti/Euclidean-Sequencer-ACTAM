import { useState } from "react";
import myLPFilter from "./../../../Default/filter";

const CutOffSlider = () => {
  const [cutoff, setCutoff] = useState(20000);

    

    return ( <div className="slider-base cutoff-slider">
        <input
        type="range"
        min="0"
        step="10"
        max="20000"
        defaultValue="20000"
        required
        onChange={(e) => {
          myLPFilter.frequency.value = e.target.valueAsNumber;
          setCutoff(myLPFilter.frequency.value);
        }}
        id="cutoff"
      />
      <label htmlFor="cutoff">CUTOFF: {Math.round(cutoff)} Hz</label>
    </div>
  );
};

export default CutOffSlider;
