import { Navbar } from "./components/Navbar";
import { Background } from "./components/Background";
import { Services } from "./services/Services";
function App() {
  return (
    <div className="min-h-screen bg-white text-white">
      <Navbar />
      <Background />
      <Services />
    </div>
  );
}

export default App;
