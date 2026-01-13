import Comp from "./components/Comp";
import Counter from "./components/Counter";
import Inputt from "./components/Inputt";
import LikeButton from "./components/Liked";
import TweetBox from "./components/Limit";
import Parent from "./components/Parent";
import PasswordInput from "./components/Password";
import Spoiler from "./components/Spoiler";

function App() {
  return (
    <>
    <div style={{ padding: "30px", fontFamily: "Arial" }}>
      <h1>React Practice Dashboard</h1>
      
      <h2>Topic 1: Component</h2>
      <Comp/>
      <LikeButton/>
      <Spoiler/>
      <PasswordInput/>
      <TweetBox/>
      <hr />

      <h2>Topic 2: State (Counter)</h2>
      <Counter/>
      <hr />

      <h2>Topic 3: Forms</h2>
      <Inputt />
      <hr />

      <h2>Topic 4: Data Flow</h2>
      <Parent />
    </div>
    </>
  );
}

export default App;