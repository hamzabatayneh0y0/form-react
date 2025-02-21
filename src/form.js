import {
  memo,
  useContext,
  useEffect,
  useMemo,
  useReducer,
  useState,
} from "react";
import { Data } from "./App";
import { useDispatch, useSelector } from "react-redux";
function Form() {
  let form = useSelector((state) => state.form);
  let dispatch = useDispatch();
  let displayModale = useSelector((state) => state.displayModale);
  // let reducer = (state, action) => {
  //   return { ...state, [action.type]: action.value };
  // };
  //data of form
  // let [form, dispatch] = useReducer(reducer, {
  //   name: "",
  //   phone: "",
  //   age: "",
  //   employee: false,
  //   salary: "less than 500$",
  // });

  //useContext
  // let { setDisplayModale, display, setdisplay } = useContext(Data);
  function handlesubmit() {
    if (!form.phone.match(/^(?:\+962|0)[7-9][0-9]{8}$/gi))
      // setDisplayModale(true);
      dispatch({ type: "error", value: true });
    else {
      if (form.age < 20 || form.age >= 30)
        dispatch({ type: "error", value: true });
      else {
        dispatch({ type: "error", value: false });
      }
    }
  }

  return (
    <form
      noValidate
      onSubmit={(e) => {
        e.preventDefault();
        dispatch({ type: "display", value: true });
        handlesubmit();
      }}
    >
      <label>name :</label>
      <input
        type={"text"}
        value={form.name}
        onChange={(e) => {
          dispatch({ type: "name", value: e.target.value });
        }}
      />
      <label>phone number :</label>
      <input
        type={"tel"}
        value={form.phone}
        onChange={(e) => {
          dispatch({ type: "phone", value: e.target.value });
        }}
      />
      <label>age :</label>
      <input
        min={20}
        max={30}
        type={"number"}
        value={form.age}
        onChange={(e) => {
          dispatch({ type: "age", value: e.target.value });
        }}
      />
      <label>are you employee :</label>
      <input
        type={"checkbox"}
        checked={form.employee}
        onChange={(e) => {
          dispatch({ type: "employee", value: e.target.checked });
        }}
      />
      <label>salary :</label>
      <select
        value={form.salary}
        onChange={(e) => {
          dispatch({ type: "salary", value: e.target.value });
        }}
      >
        <option>less than 500$</option>
        <option>between 500$ and 2000$</option>
        <option>more than 2000$</option>
      </select>

      <input
        type="submit"
        value={"submit"}
        disabled={
          !useMemo(() => {
            return Object.values(form).every((el) => {
              if (typeof el == "string") return el.trim() !== "";
              else return true;
            });
          }, [form]) || displayModale
        }
      />
    </form>
  );
}
export default memo(Form);
