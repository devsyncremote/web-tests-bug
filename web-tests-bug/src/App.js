import {Store} from "./components/Store";
import {Compactor} from "./components/Compactor";
import {Modals} from "./components/Modals";
import {Init} from "./components/Init";
import {Navigator} from "./components/Navigator";

function App() {
  return (
    <Store>
      <Compactor>
        <Modals>
          <Init>
            <Navigator />
          </Init>
        </Modals>
      </Compactor>
    </Store>
  );
}

export default App;
