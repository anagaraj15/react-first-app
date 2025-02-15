import Header from "./Header";
import Footer from "./Footer";
import { useState } from "react";

function App() {

  const [likes,setLikes] = useState(0);

  const LikeBtnFunc = ()=> {
    setLikes(likes + 1);
  }

  const UnLikeBtnFunc = ()=> {
    if(likes > 0) {
      setLikes(likes - 1);
    }
  }

  return (
    <div>
      <Header />
      <div className="countContainer">
        <h2 className="counttxt">Total Likes is {likes}</h2>
        <button className="LikeBtn" onClick={LikeBtnFunc}>Like</button>
        <button className="UnlikeBtn" onClick={UnLikeBtnFunc}>UnLike</button>
      </div>
      <Footer />
    </div>
  )
}

export default App;