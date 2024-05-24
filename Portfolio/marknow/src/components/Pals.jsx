import { palsInfo } from "../Utils/data";

const Pals = () => {
  return (
    <>
      <section id="pals">
        <div>
          <div className="arrowsNav">
            <picture>&lt;</picture>
          </div>

          <div className="arrowsNav">
            <picture>&gt;</picture>
          </div>

          <div className="msg">
            {
              palsInfo.map(({ author, quote, ceo }) => {
                return (
                  <div className="palsInfo">
                    <h1>OUR CLIENTS APPROVE</h1>
                    <p>
                      {quote}
                    </p>
                    <h2>
                      {author} <br />
                      <span>CEO OF {ceo}</span>
                    </h2>
                  </div>
                );
              })
            }
          </div>
        </div>

        <div className="palsComp"></div>
      </section>
    </>
  );
}

export default Pals;