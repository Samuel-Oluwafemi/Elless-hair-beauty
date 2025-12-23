import { Navbar } from "./components/Navbar";
import { Background } from "./components/Background";
import { Services } from "./services/Services";
import { Packages } from "./packages/packages";
function App() {
  return (
    <html className="scroll-smooth">
    <div className="min-h-screen bg-white text-white">
      <Navbar />
      <Background />
      <Services />
      <Packages />
    </div>
    </html>
  );
}

export default App;
