import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { Data } from "./App";
import { useDispatch, useSelector } from "react-redux";

export default function Modal() {
  // let { displayModale } = useContext(Data);
  // let { display, setdisplay } = useContext(Data);
  let error = useSelector((state) => state.error);
  let displayModale = useSelector((state) => state.displayModale);
  let dispatch = useDispatch();
  return (
    <div className={`modal ${displayModale ? "modal-appear" : ""}`}>
      <FontAwesomeIcon
        icon={faX}
        className="icon"
        onClick={(e) => {
          // setdisplay(false);
          dispatch({ type: "display", value: false });
        }}
      ></FontAwesomeIcon>
      <p className="error" style={{ color: `${!error ? "green" : "red"}` }}>
        {!error ? "sucess" : "error"}
      </p>
    </div>
  );
}
