import { useState } from "react";
import MySpinner from "../MySpinner";

const CVPage = () => {
  const [spinner, setSpinner] = useState(false);
  const TimeOut = () => {
    spinner === false
      ? setTimeout(() => {
          setSpinner(true);
        }, 2400)
      : null;
  };
  TimeOut();
  const pdfPath = "/CV - Marco Pugliese.pdf";
  return (
    <>
      {spinner === true ? (
        <div className="px-5 mx-5">
          <iframe
            src={pdfPath}
            width="100%"
            height="1190px"
            title="Resume PDF"
          ></iframe>
        </div>
      ) : (
        <div id="hero" className="w-100 d-flex justify-content-center">
          <MySpinner />
        </div>
      )}
    </>
  );
};

export default CVPage;
