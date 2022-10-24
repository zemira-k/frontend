import React from "react";
import "./App.css";

function App() {
  const [count, setCount] = React.useState(1);
  const slides = [
    {
      id: 1,
      numbertext: "1 / 4",
      src: require("./images/1.jpg"),
      text: "Caption Text",
    },
    {
      id: 2,
      numbertext: "2 / 4",
      src: require("./images/2.jpg"),
      text: "Caption Text",
    },
    {
      id: 3,
      numbertext: "3 / 4",
      src: require("./images/3.jpg"),
      text: "Caption Text",
    },
    {
      id: 4,
      numbertext: "4 / 4",
      src: require("./images/4.jpg"),
      text: "Caption Text",
    },
  ];

  function handleRightClick() {
    if (count < slides.length) setCount(count + 1);
  }

  function handleLeftClick() {
    if (count > 1) setCount(count - 1);
  }

  function handleDotClick(e) {
    setCount(parseInt(e.target.id));
  }

  return (
    <div className="App">
      <header>
        <nav>
          <ul>
            <li>ראשי</li>
            <li>זמני תפילה</li>
            <li>שיעורי תורה</li>
            <li>צור קשר</li>
            <li>תרומה/תשלום</li>
          </ul>
        </nav>
        {/* <!-- Slideshow container --> */}
        <div className="slideshow-container">
          {/* <!-- Full-width images with number and caption text --> */}
          {slides.map(
            (slide) =>
              slide.id === count && (
                <div
                  key={slide.id}
                  className="mySlides fade"
                  style={slide.style}
                >
                  <div className="numbertext">{slide.numbertext}</div>
                  <img src={slide.src} alt="" style={{ width: "100%" }}></img>
                  <div className="text">{slide.text}</div>
                </div>
              ),
          )}

          {/* <!-- Next and previous buttons --> */}
          <button className="prev" onClick={handleLeftClick}>
            &#10094;
          </button>
          <button className="next" onClick={handleRightClick}>
            &#10095;
          </button>
        </div>
        <br />

        {/* <!-- The dots/circles --> */}
        <div style={{ textAlign: "center" }}>
          <span
            className={count === 1 ? "dot active" : "dot"}
            id="1"
            onClick={handleDotClick}
          ></span>
          <span
            className={count === 2 ? "dot active" : "dot"}
            id="2"
            onClick={handleDotClick}
          ></span>
          <span
            className={count === 3 ? "dot active" : "dot"}
            id="3"
            onClick={handleDotClick}
          ></span>
          <span
            className={count === 4 ? "dot active" : "dot"}
            id="4"
            onClick={handleDotClick}
          ></span>
        </div>
      </header>
    </div>
  );
}

export default App;
