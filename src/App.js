import configureStore from "./store/configureStore";
import Bugs from "./components/Bugs";
import { Provider } from "react-redux";
import "./App.css";
import BugsHook from "./components/BugsHook";

function App() {
	const store = configureStore();
	return (
		<Provider store={store}>
			<div className="App">
				<Bugs />
				<BugsHook />
			</div>
		</Provider>
	);
}

export default App;
