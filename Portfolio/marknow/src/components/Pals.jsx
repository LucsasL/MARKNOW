import { useState } from "react";
import { palsInfo } from "../Utils/data";

const Pals = () => {
  const [position, setPosition] = useState(0);
  const [color, setColor] = useState("$secondary");

  const scrollMsg = (arr) => {
    if (arr === "Prev" && position < 0) {
      setPosition(position + 100);
      
    } else if (arr === "Next" && position > -300) {
      setPosition(position - 100);
    }

    changeColor(position);
  }

  const changeColor = (msg) => {
    switch (msg) {
      case -100:
        setColor("$third");
        return;

      case -200:
        setColor("$fourth");
        return;

      case -300:
        setColor("$fifth");
        return;

      default:
        return;
    }
  }
 
  return (
    <>
      <section id="pals">
        <div>
          <div className="arrowsNav" onClick={() => scrollMsg("Prev")}>
            <picture>&lt;</picture>
          </div>

          <div className="arrowsNav" onClick={() => scrollMsg("Next")}>
            <picture>&gt;</picture>
          </div>

          <div
            className="msg"
            style={{
              left: position + "%",
            }}
          >
            {palsInfo.map(({ author, quote, ceo }) => {
              return (
                <div className="palsInfo" key={Math.floor(Math.random()) * 100}>
                  <h1 style={{ color: color }}>OUR CLIENTS APPROVE</h1>
                  <p>{quote}</p>
                  <h2 style={{ color: color }}>
                    {author} <br />
                    <span>CEO OF {ceo}</span>
                  </h2>
                </div>
              );
            })}
          </div>
        </div>

        <div className="palsComp" style={{ background: color }}>
          <div>
            <picture>
              <img src="../src/img/coffee.jpg" alt="Poogle" />
            </picture>
          </div>

          <div>
            <picture>
              <img src="../src/img/coffee.jpg" alt="Faceduck" />
            </picture>
          </div>

          <div>
            <picture>
              <img src="../src/img/coffee.jpg" alt="Rabbit" />
            </picture>
          </div>

          <div>
            <picture>
              <img src="../src/img/coffee.jpg" alt="YouCook" />
            </picture>
          </div>
        </div>
      </section>
    </>
  );
}

export default Pals;