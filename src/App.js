import React from "react";
import "./App.css";

function App() {
  const [count, setCount] = React.useState(1);
  const [data, setData] = React.useState({});
  const [time, setTime] = React.useState("");
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
  const shiureiToraData = [
    {
      id: 1,
      title: "שיעור בטעמי המקרא",
      text: "שיעור שבועי בטעמי המקרא כל יום בשלישי ב 8 בערב בשיעור זה ילמדו התלמדידים לקרוא בתורה ובפרשת שבוע בנוסך ילמדו בתלמידים שירי שבת ומקמים עם החזן מאור סובול",
      image: require("./images/1.jpg"),
    },
    {
      id: 2,
      title: "שיעור בטעמי המקרא",
      text: "שיעור שבועי בטעמי המקרא כל יום בשלישי ב 8 בערב בשיעור זה ילמדו התלמדידים לקרוא בתורה ובפרשת שבוע בנוסך ילמדו בתלמידים שירי שבת ומקמים עם החזן מאור סובול",
      image: require("./images/2.jpg"),
    },
    {
      id: 3,
      title: "שיעור בטעמי המקרא",
      text: "שיעור שבועי בטעמי המקרא כל יום בשלישי ב 8 בערב בשיעור זה ילמדו התלמדידים לקרוא בתורה ובפרשת שבוע בנוסך ילמדו בתלמידים שירי שבת ומקמים עם החזן מאור סובול",
      image: require("./images/3.jpg"),
    },
    {
      id: 4,
      title: "שיעור בטעמי המקרא",
      text: "שיעור שבועי בטעמי המקרא כל יום בשלישי ב 8 בערב בשיעור זה ילמדו התלמדידים לקרוא בתורה ובפרשת שבוע בנוסך ילמדו בתלמידים שירי שבת ומקמים עם החזן מאור סובול",
      image: require("./images/Bar_micva.jpeg"),
    },
  ];
  const dots = [];

  dots.fill("4", 0, 4);

  function handleRightClick() {
    if (count < slides.length) setCount(count + 1);
  }

  function handleLeftClick() {
    if (count > 1) setCount(count - 1);
  }

  function handleDotClick(e) {
    setCount(parseInt(e.target.id));
  }

  React.useEffect(() => {
    fetch("https://www.hebcal.com/shabbat?cfg=json&geonameid=293397&M=on")
      .then((response) => response.json())
      .then((resp) => {
        console.log(resp.items);
        setData(resp);

        const d = new Date(resp.items[1].date);
        setTime({
          hadlaka: `${d.getHours()}:${d.getMinutes()}`,
          havdala: `${d.getHours() + 1}:${d.getMinutes()}`,
        });
      })
      .catch(console.log);
  }, []);

  return (
    <div className="App">
      <header id="header-menu">
        <nav>
          <ul className="header__navbar">
            <li className="header__navbar_item">צור קשר</li>
            <li className="header__navbar_item">  <a className="header__navbar_link" href="#truma">
               תרומה
              </a></li>
            <li className="header__navbar_item">
              <a className="header__navbar_link" href="#shiurei-Tora">
                שיעורי תורה
              </a>
            </li>
            <li className="header__navbar_item">
              <a className="header__navbar_link" href="#zmani-tefila">
                זמני תפילה
              </a>
            </li>
            <li className="header__navbar_item">
              {" "}
              <a className="header__navbar_link" href="#header-menu">
                ראשי
              </a>
            </li>
          </ul>
        </nav>
        <div className="header__title">בית כנסת בית אל הרצל יהוד</div>
        <div className="slideshow-container">
          {slides.map(
            (slide) =>
              slide.id === count && (
                <div
                  key={slide.id}
                  className="mySlides fade"
                  style={slide.style}
                >
                  <div className="numbertext">{slide.numbertext}</div>
                  <img className="header__img" src={slide.src} alt=""></img>
                  <div className="text">{slide.text}</div>
                </div>
              )
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

      <main>
        <section id="zmani-tefila">
          <h2 className="section-title">זמני תפילה</h2>
          <div className="adsBored">
            <div className="parashat-shavoua item3">
              <p>שיעור עם יעקוב ישראל</p>
            </div>

            <div className="parashat-shavoua item2">
              <p> ערבית לשבת : 6:40</p>
              <p>שחרית לשבת : 7:50</p>
              <p>מנחה לשבת : 7:50</p>
              <p>ערבית למצ״ש : 7:50</p>
            </div>
            <div className="parashat-shavoua item1">
              <p> {data.items ? data.items[2].hebrew : "hee"}</p>
              <p>
                {" "}
                {data.items
                  ? data.items[1].hebrew + " : " + time.hadlaka
                  : "hee"}
              </p>
              <p>
                {data.items
                  ? data.items[3].hebrew + " : " + time.havdala
                  : "hee"}
              </p>
              <p>משיב הרוח </p>
            </div>

            <div className="parashat-shavoua item4">
              <p> ערבית לשבת : 6:40</p>
              <p>שחרית לשבת : 7:50</p>
              <p>מנחה לשבת : 7:50</p>
              <p>ערבית למצ״ש : 7:50</p>
            </div>

            <div className="parashat-shavoua item5">
              <p> ערבית : 6:40</p>
              <p>שחרית : 7:50</p>
              <p>מנחה : 7:50</p>
              <p>ערבית : 7:50</p>
            </div>
          </div>
        </section>
        <section className="shiurei-Tora" id="shiurei-Tora">
          <h2 className="section-title">שיעורי תורה</h2>

          {shiureiToraData.map((shiur) => {
            return (
              <div key={shiur.id} className=" shiurei-tora">
                <div className="shiurei-tora__content">
                  <h3 className="shiueri-Tora__title">{shiur.title}</h3>
                  <p className="shiueri-Tora__text">{shiur.text}</p>
                </div>
                <img className="shiueri-Tora__img" src={shiur.image}></img>
              </div>
            );
          })}
        </section>
        <section id="truma" >
        <h2 className="section-title"> תרומה</h2>

<div className="truma" >



  
</div>


        </section>
      </main>
    </div>
  );
}

export default App;
