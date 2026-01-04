import Header from './components/Header';
import Footer from './components/Footer';
import Greetings from './components/Greetings';
import Status from './components/Status';
import Profile from './components/Profile';
import Counter from './props&state/Counter';
import Message from './props&state/Message';
import ListAdder from './props&state/Mutable';
import Grandparent from './props&state/Drill';
import Room from './props&state/State';
import LikeButton from './props&state/Like';
function App() {
  return (
    <>
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>Day 2 Final Challenge</h2>
      
      {/* Starting at 0 */}
      <LikeButton startCount={0} />
      
      <br /><br />
      
      {/* Starting at 100 */}
      <LikeButton startCount={100} />
    </div>
    </>
    // <>
    // <Counter/>
    // <Message name="john"/>
    // <Message name="alice"/>
    // <ListAdder/>
    // <Grandparent/>
    // <Room/>
    // </>
    // <div>
    //   <Header />
      
    //   <main style={{ minHeight: '80vh' }}>
    //     <Greetings />
    //     <br />
    //     <Profile />
    //     <Status />
    //   </main>

    //   <Footer />
    // </div>
  );
}

export default App;