import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import friends from "./friends.json";
import "./App.css";
import Score from "./components/Score";

class App extends Component {
  //setting this.state.friends to the friends json array
  state = {
    friends,
    clickedFriends: [],
    score: 0,
    topScore: 0
  };

  //shuffle friend cards
  shuffle = id => {
    let clickedFriends = this.state.clickedFriends;
    //clicked a friend who is in the array
    if (clickedFriends.includes(id)) {
      this.setState({
        clickedFriends: [],
        score: 0,
        topScore: this.setState.score,
        status: "You've Lost! Try Again :)"
      });
      return;
    
    }
    else {
      clickedFriends.push(id);
    }
    if (this.state.score >= this.state.topScore) {
      this.newTopScore();
    }

  
    this.setState({
      friends,
      clickedFriends,
      score: clickedFriends.length,
      topScore: this.state.topScore,
      status: ""
    });

    for (let i = friends.length - 1; i > 0; i--) {
      let t = Math.floor(Math.random() * (i + 1));
      [friends[i], friends[t]] = [friends[t], friends[i]];

    }
  }

  newTopScore = () => {
    this.setState((newState) => ({
      topScore: newState.score
    }))
  }

  render() {
    return (
      <div className="app">
        < Score
          total={this.state.score}
          topScore={this.state.topScore}
          status={this.state.status}
        />
        <h1 className="title"> Clicky </h1>
        <Wrapper>
          {this.state.friends.map(friend => (
            <FriendCard
              shuffle={this.shuffle}
              id={friend.id}
              key={friend.id}
              image={friend.image}
            />
          ))}
        </Wrapper>
      </div>
    );
  }
}

export default App;
