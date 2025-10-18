function pingPongTracker() {
  let time = 0;

  return {
    timeSpentPlaying: function () {
      return time;
    },
    playOneGame: function () {
      time += 15;
      /**
       * also use 5, 25, 100 to test them out
       * 
       */
      return "Game played";
    },
    myLevel: function () {
      if (time < 30) return "I need to improve my game";
      if (time <= 100) return "You need to improve your game";
      return "Wow, I have wasted a lot of time";
    }
  };
}


const myGame = pingPongTracker();
console.log(myGame.playOneGame());
console.log(myGame.playOneGame());
console.log(myGame.timeSpentPlaying());
console.log(myGame.myLevel());


