import React from "react";

// PROPS
// 2 PARTS
// - GIVEN TO THE COMPONENT -> WHEN YOU ARE DISPLAYING IT ON THE APP
// - USED BY THE COMPONENT -> WHAT IT IS GOING TO WITH THE PROPS
// PROPS/PROPERTIES -> IT IS AN OBJECT -> KEY VALUE PAIRS
// PROPS ARE LIKE PARAMETERS -> PLACEHOLDER FOR THE INFORMATION THEY ARE GOING TO GET 

const RangeSlider = props => {
  const { handleUserRange, userRange } = props;
  // ABOVE NEED TO BE GIVEN TO THE COMPONENT 

  return (
    <form>
      <label htmlFor="user-range">Update results: </label>
      <input type="range" name="user-range" min="0" max="500" step="10" onChange={handleUserRange} value={userRange} />
    </form>
  );
};

export default RangeSlider;
