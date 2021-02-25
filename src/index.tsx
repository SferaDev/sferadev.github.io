import ReactDOM from "react-dom";
import { App } from "./pages";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
