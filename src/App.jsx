import { Navbar } from "./components/Navbar";
import { Background } from "./components/Background";
function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <Background/>
    </div>
  );
}

export default App;
