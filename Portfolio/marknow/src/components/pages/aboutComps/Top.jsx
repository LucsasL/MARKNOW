import arrowPrev from "../../../icons/back-arrow.svg";
import arrowNext from "../../../icons/front-arrow.svg";

function Top() {
  return (
    <>
      <section id="top">
        <div>
          <div
            className="arrowsNav"
            // onClick={() => scrollMsg("Prev")}
            // onLoad={() => arrOpacity()}
            // style={{ opacity: prevArrOpacity }}
          >
            <picture>
              <img
                src={arrowPrev}
                alt="Previous Testimonial"
                className="PrArrow"
              />
            </picture>
          </div>

          <div
            className="arrowsNav"
            // onClick={() => scrollMsg("Next")}
            // onLoad={() => arrOpacity()}
            // style={{ opacity: nextArrOpacity }}
          >
            <picture>
              <img src={arrowNext} alt="Next Testimonial" className="NeArrow" />
            </picture>
          </div>

          <h1 className="bolder center title">
            Be in the top with the greatest
          </h1>

          <div className="profInfo">
            <div className="profDesc">
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis
                sapiente doloremque quia ducimus nostrum officiis aliquid sed
                nesciunt, nisi necessitatibus corrupti non, alias dignissimos
                magnam. Totam impedit magnam voluptatibus perferendis.
              </p>

              <div className="buttonDiv">
                <button></button>

                <button></button>

                <button></button>

                <button></button>
              </div>
            </div>

            <div className="img-prof"></div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Top;
