import React, { useState } from "react";

const Simple = (props) => {
  const [sampleCode, setSampleCode] = useState("");
  const onSampleChangeHandler = (event) => {
    setSampleCode(event.target.value);
    props.viewSample(sampleCode);
  };
  return (
    <div>
      <input type="text" value={sampleCode} onChange={onSampleChangeHandler} />
    </div>
  );
};

export default Simple;
