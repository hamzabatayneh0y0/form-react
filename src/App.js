import "./App.css";
import Form from "./form";
import Header from "./header";
import { createContext, useState } from "react";
import Modal1 from "./modal";
import { Provider } from "react-redux";
import { store } from "./redux/store";
export let Data = createContext();

function App() {
  // let [displayModale, setDisplayModale] = useState(false);
  // let [display, setdisplay] = useState(false);
  return (
    // <Data.Provider
    //   value={{ displayModale, setDisplayModale, display, setdisplay }}
    // >
    <Provider store={store}>
      <div className="App">
        <Header />
        <Form />
        <Modal1 />
      </div>
    </Provider>
    // </Data.Provider>
  );
}

export default App;
