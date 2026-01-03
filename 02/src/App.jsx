// Import your components
import Header from './components/Header';
import Footer from './components/Footer';
import Greetings from './components/Greetings';
import Status from './components/Status';
import Profile from './components/Profile';
function App() {
  return (
    <div>
      <Header />
      
      <main style={{ minHeight: '80vh' }}>
        <Greetings />
        <br />
        <Profile />
        <Status />
      </main>

      <Footer />
    </div>
  );
}

export default App;