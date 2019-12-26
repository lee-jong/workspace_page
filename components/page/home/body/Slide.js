//# Library
import React from 'react';

const Slide = ({}) => {
  return (
    <>
      <div className="slide">
        <input type="radio" name="pos" id="pos1" />
        <input type="radio" name="pos" id="pos2" />
        <input type="radio" name="pos" id="pos3" />
        <input type="radio" name="pos" id="pos4" />
        <ul>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
        <p className="pos">
          <label for="pos1"></label>
          <label for="pos2"></label>
          <label for="pos3"></label>
          <label for="pos4"></label>
        </p>
      </div>
    </>
  );
};

export default Slide;
