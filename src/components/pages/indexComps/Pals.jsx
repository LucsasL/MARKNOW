// Importing Hooks
import { useState, useEffect, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

// Importing Data
import { palsInfo } from "../../../Utils/data";

// Importing Images
import arrowPrev from "../../../icons/back-arrow.svg";
import arrowNext from "../../../icons/front-arrow.svg";
import faceDuck from "../../../img/faceduckLogo.png";
import poogle from "../../../img/poogle.webp";
import rabbit from "../../../img/rabbit.webp";
import youDude from "../../../img/YouDude.png";

const Pals = () => { 
  // States
  const [position, setPosition] = useState(0);
  const [scrollPalObj, setScrollPalObj] = useState({
    color: "#EF6F6C",
    position: 0,
    pal: 0
  });
  
  // const [prevArrOpacity, setPrevArrOpacity] = useState(1);
  // const [nextArrOpacity, setNextArrOpacity] = useState(1);
  
  // Refs
  const palsLogo = useRef([]);
  const palsTitle = useRef(null);
  const palsCompCont = useRef(null);

  useGSAP(() => {
    gsap.to(".PrArrow", {
      x: -5,
    });

    gsap.to(".NeArrow", {
      x: 5,
    });
  });

  useEffect(() => {
    palsTitle.current.style.color = scrollPalObj.color;
    palsCompCont.current.style.background = scrollPalObj.color;
  });

  const scrollMsg = (arr) => {
    palsLogo.current.forEach(c => {
      c.classList.remove("palsCont");
    });
    console.log(palsLogo.current);

    if (arr === "Prev" && position < 0) {
      setPosition(position + 100);
    } else if (arr === "Next" && position > -300) {
      setPosition(position - 100);
    }

    if (arr === "Next") {
      switch (position - 100) {
        case 0:
          setScrollPalObj({
              ...scrollPalObj,
            color: "#EF6F6C"
          });
          // palsLogo.current[0].classList.add("palsCont");
          return;
  
        case -100:
          setScrollPalObj({
              ...scrollPalObj,
            color: "#5AD2F4"
          });
          // palsLogo.current[1].classList.add("palsCont");
          return;
          
          case -200:
          setScrollPalObj({
              ...scrollPalObj,
            color: "#7FB685"
          });
          // palsLogo.current[2].classList.add("palsCont");
          return;
          
          case -300:
          setScrollPalObj({
              ...scrollPalObj,
            color: "#F9C976"
          });
          // palsLogo.current[3].classList.add("palsCont");
          return;
  
        default:
          return;
      }
    }

    switch (position + 100) {
      case 0:
        setScrollPalObj({
            ...scrollPalObj,
          color: "#EF6F6C"
        });
        return;

      case -100:
        setScrollPalObj({
          ...scrollPalObj,
          color: "#5AD2F4"
        });
        return;
        
      case -200:
        setScrollPalObj({
          ...scrollPalObj,
          color: "#7FB685"
        });
        return;

      case -300:
        setScrollPalObj({
          ...scrollPalObj,
          color: "#F9C976"
        });
        return;

      default:
        return;
    }
  };

  // const arrOpacity = () => {
  //   if (position === 0) {
  //     console.log(position);
  //     setPrevArrOpacity(0.3);
  //   } else {
  //     console.log(position);
  //     setPrevArrOpacity(1);
  //   }
    
  //   if (position === -300) {
  //     console.log(position);
  //     setNextArrOpacity(0.3);
  //   } else {
  //     console.log(position);
  //     setNextArrOpacity(1);
  //   }
  // };

  return (
    <>
      <section id="pals">
        <div>
          <div
            className="arrowsNav"
            onClick={() => scrollMsg("Prev")}
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
            onClick={() => scrollMsg("Next")}
            // onLoad={() => arrOpacity()}
            // style={{ opacity: nextArrOpacity }}
          >
            <picture>
              <img src={arrowNext} alt="Next Testimonial" className="NeArrow" />
            </picture>
          </div>

          <h1 style={{ color: scrollPalObj.color }} ref={palsTitle}>OUR CLIENTS APPROVE</h1>

          <div
            className="msg"
            style={{
              left: position + "%",
            }}
          >
            {
              palsInfo.map(({ author, quote, ceo }, index) => {
                return (
                  <div className="palsInfo" key={index} style={{ position: "relative", left: `${0}%` }}>
                    <p>{quote}</p>
                    <h2 style={{ color: scrollPalObj.color }}>
                      {author} <br />
                      <span>CEO OF {ceo}</span>
                    </h2>
                  </div>
                );
              })
            }
          </div>
        </div>

        <div className="palsComp" style={{ background: scrollPalObj.color }} ref={palsCompCont}>
          <div className="palsCont" ref={palsLogo.current[0]}>
            <picture>
              <img src={poogle} alt="Poogle" />
            </picture>
          </div>

          <div ref={palsLogo.current[1]}>
            <picture>
              <img src={faceDuck} alt="Faceduck" />
            </picture>
          </div>

          <div ref={palsLogo.current[2]}>
            <picture>
              <img src={rabbit} alt="Rabbit" />
            </picture>
          </div>

          <div ref={palsLogo.current[3]}>
            <picture>
              <img src={youDude} alt="YouCook" />
            </picture>
          </div>
        </div>
      </section>
    </>
  );
};

export default Pals;
