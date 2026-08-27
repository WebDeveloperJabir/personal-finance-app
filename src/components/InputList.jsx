import React from "react";

export default function InputList({ toggleFunction, imgSrc, altText, inputTitle, imgClassname, divClassname, mapArray, listClassname, listFunction, width }) {
  return (
    <div className='select-input' style={{ width: width}}>
      <div className='title' onClick={toggleFunction}>
        {inputTitle} <img src={imgSrc} alt={altText} className={imgClassname} />
      </div>
      <div className={`lists ${divClassname}`} style={{ width: width}}>
        {mapArray.map((item, index) => (
          <p key={index} onClick={() => listFunction(item)} className={listClassname === item ? "active" : ""}>
            {item}
          </p>
        ))}
      </div>
    </div>
  );
}
