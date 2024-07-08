import { useState } from "react";
import MySpinner from "../MySpinner";
import Studies from "./Studies";

const StudiesPage = () => {
  const [spinner, setSpinner] = useState(false);
  const TimeOut = () => {
    spinner === false
      ? setTimeout(() => {
          setSpinner(true);
        }, 2400)
      : null;
  };
  TimeOut();
  return (
    <>
      {spinner === true ? (
        <Studies />
      ) : (
        <div id="hero" className="w-100 d-flex justify-content-center">
          <MySpinner />
        </div>
      )}
    </>
  );
};
export default StudiesPage;
