import { useState } from "react";
import "./App.css";
import Box from "./component/Box";

/*
1. 박스 2개 (타이틀, 사진, 결과)
2. 가위, 바위, 보 버튼
3. 버튼을 클릭하면 클릭한 값이 박스에 보임
4. 컴퓨터는 랜덤한 아이템이 보임
5. 3, 4의 결과를 가지고 승패 보임
6. 승패 결과의 따라 테두리 색이 바뀜 (이김-초록, 짐-빨강, 비김-검정)
*/

const choiceImg = {
  rock: {
    name: "Rock",
    img: "https://cdn-icons.flaticon.com/png/512/1867/premium/1867572.png?token=exp=1650609246~hmac=1bf18e61256c9ba08db86c875be383e3",
  },
  paper: {
    name: "Paper",
    img: "https://cdn-icons.flaticon.com/png/512/3073/premium/3073412.png?token=exp=1650609261~hmac=4d29f12ee2a134e4d5e76ac88fde47a6",
  },
  scissors: {
    name: "Scissors",
    img: "https://cdn-icons-png.flaticon.com/512/2168/2168956.png",
  },
};

function App() {
  const [userSelect, setUserSelect] = useState(null);
  const [computerSelect, setComputerSelect] = useState(null);
  const [result, setResult] = useState("");

  //User Select Moment
  const play = (userChoice) => {
    setUserSelect(choiceImg[userChoice]);

    let computerChoice = randomChoice(); //변수와 함수
    setComputerSelect(computerChoice);

    setResult(judgement(choiceImg[userChoice], computerChoice));
  };

  const judgement = (user, computer) => {
    /*
    user 기준
    user == computer → Tie

    user == "Rock", computer == "Scissors" → Win
    user == "Rock", computer == "Paper" → Lose

    user == "Scissors", computer == "Paper" → Win
    user == "Scissors", computer == "Rock" → Lose

    user == "Paper", computer == "Rock" → Win
    user == "Paper", computer == "Scissors" → Lose
    */

    if (user.name == computer.name) return "Tie";
    else if (user.name == "Rock")
      return computer.name == "Scissors" ? "Win" : "Lose";
    else if (user.name == "Scissors")
      return computer.name == "Paper" ? "Win" : "Lose";
    else if (user.name == "Paper")
      return computer.name == "Rock" ? "Win" : "Lose";
  };

  const randomChoice = () => {
    let itemArray = Object.keys(choiceImg); //객체에서 키값만 뽑아서 배열로 만들어주는 함수
    let randomItem = Math.floor(Math.random() * itemArray.length);

    let final = itemArray[randomItem];
    return choiceImg[final];
  };

  return (
    <div>
      <div className="main">
        <Box className="main" title="You" item={userSelect} result={result} />
        <Box
          className="main"
          title="Computer"
          item={computerSelect}
          result={result}
        />
      </div>

      <div className="main">
        <button className="button" onClick={() => play("scissors")}>
          가위
        </button>
        <button className="button" onClick={() => play("rock")}>
          바위
        </button>
        <button className="button" onClick={() => play("paper")}>
          보
        </button>
      </div>
    </div>
  );
}

export default App;
