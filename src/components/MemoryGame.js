import React, { useEffect, useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../styles.css";
import ReactCardFlip from "react-card-flip";

const MemoryGame = () => {
  const [cardFlip, setCardFlip] = useState(false);
  const [matches, setMatches] = useState(false);
  const [count, setCount] = useState(0);
  const [gameIdNew, setGameIdNew] = useState([{ gameId: "" }]);
  const [timeLeft, setTimeLeft] = useState(10);

  const cardData = [
    { id: 1, value: "🐶", gameId: "1" },
    { id: 2, value: "🐱", gameId: "2" },
    { id: 3, value: "🐭", gameId: "3" },
    { id: 4, value: "🐹", gameId: "4" },
    { id: 5, value: "🐰", gameId: "5" },
    { id: 6, value: "🦊", gameId: "6" },
    { id: 7, value: "🐻", gameId: "7" },
    { id: 8, value: "🐼", gameId: "8" },
    { id: 9, value: "🐶", gameId: "1" },
    { id: 10, value: "🐱", gameId: "2" },
    { id: 11, value: "🐭", gameId: "2" },
    { id: 12, value: "🐹", gameId: "2" },
    { id: 13, value: "🐰", gameId: "2" },
    { id: 14, value: "🦊", gameId: "2" },
    { id: 15, value: "🐻", gameId: "2" },
    { id: 16, value: "🐼", gameId: "2" },
  ];

  useEffect(() => {
    if (timeLeft > 0 && cardData.length - 1) {
      const timerId = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timerId);
    }
  }, [timeLeft]);

  const handleCard = (value, id, gameId) => {
    setCardFlip((prev) => ({ cardFlip: !prev.cardFlip }));
    setCount(count + 1);
    let newGameId = [{ ...gameId }];
    newGameId.gameId = gameId;
    setGameIdNew(newGameId);
    handleGame();
  };
  const handleGame = () => {
    // console.log("gameId", gameId);
    console.log("game", gameIdNew);
  };

  return (
    <div>
      <div>
        <div className="timer">
          <h2 className="memory-game-head">Memory Card Game</h2>
          <p className="memory-game-timer">{timeLeft} S</p>
        </div>

        <ReactCardFlip isFlipped={cardFlip} flipDirection="vertical">
          <Row className="p-5">
            {cardData.map((cards, index) => (
              <Col md={3} className="pb-2" key={index}>
                <div className="card memory-card-col" onClick={handleCard}>
                  {cards.id}
                </div>
              </Col>
            ))}
          </Row>
          <Row className="p-5">
            {cardData.map((cards, index) => (
              <Col md={3} className="pb-2" key={index}>
                <div
                  className="card memory-card-col"
                  onClick={() =>
                    handleCard(cards.value, cards.id, cards.gameId)
                  }
                >
                  {cards.value}
                </div>
              </Col>
            ))}
          </Row>
        </ReactCardFlip>
      </div>
    </div>
  );
};

export default MemoryGame;
