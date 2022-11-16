import React from "react";
import "./App.css";
import { PopupEdit } from "./PopupEdit.js";
import { PopupShiuriTora } from "./PopupShiuriTora.js";
import { FaEdit } from "react-icons/fa";
import { Slides } from "./Slides";
function App() {
  const [data, setData] = React.useState();
  const [shabatTime, setShabatTime] = React.useState("");
  const [dayTime, setDayTime] = React.useState("");
  const [popupEdit, setPopupEdit] = React.useState(false);
  const [popupShiuriTora, setPopupShiuriTora] = React.useState(false);

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

  const openPopup = () => {
    setPopupEdit(false);
    setPopupShiuriTora(true);
  };
  const openPopupEdit = () => {
    setPopupEdit(true);
    setPopupShiuriTora(false);
  };

  const closePopup = () => {
    setPopupEdit(false);
    setPopupShiuriTora(false);
  };

  
  React.useEffect(() => {
    fetch("https://www.hebcal.com/zmanim?cfg=json&geonameid=293397")
      .then((response) => response.json())
      .then((res)=>{
        const d = new Date(res.times.sunrise);  
        const endD = new Date(res.times.sunset);  
        //add 0 to time  when its show 7:9 to => 07:08 
        const netzTime =  `0${d.getHours()}:${d.getMinutes() > 9?d.getMinutes() :`0${d.getMinutes()}`}`
        const shkiaTime =  `${endD.getHours()}:${endD.getMinutes() > 9?endD.getMinutes() :`0${endD.getMinutes()}`}`   
        setDayTime({
          sunriseTime:netzTime,
          sunsetTime:shkiaTime
        })  

      }).catch(console.log)
    })




  React.useEffect(() => {
    fetch("https://www.hebcal.com/shabbat?cfg=json&geonameid=293397&M=on")
      .then((response) => response.json())
      .then((resp) => {
        const filtered = resp.items.filter((item) => {
          return (
            item.category === "candles" ||
            item.category === "parashat" ||
            item.category === "havdalah"
          );
        });
        const d = new Date(filtered[0].date);
        const h = new Date(filtered[2].date);

        setShabatTime({
          hadlaka: `${d.getHours()}:${d.getMinutes()}`,
          havdala: `${h.getHours()}:${h.getMinutes()}`,
        });
        setData(filtered);        
      })
      .catch(console.log);      
  }, []);

  return (
    <div className="App">
      <PopupEdit openPopup={popupEdit} closePopupfunc={closePopup} />
      <PopupShiuriTora
        openPopup={popupShiuriTora}
        closePopupfunc={closePopup}
      />
      <header id="header-menu">
        <nav>
          <ul className="header__navbar">
            <li className="header__navbar_item">צור קשר</li>
            <li className="header__navbar_item">
              {" "}
              <a className="header__navbar_link" href="#truma">
                תרומה
              </a>
            </li>
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
        <Slides />
      </header>

      <main>
        <section id="zmani-tefila">
          <h2 className="section-title">זמני תפילה</h2>
          <div className="content__section-title">
          <h3 className="section-title">נץ החמה:   {dayTime.sunriseTime} 🌄</h3>
          <h3 className="section-title">שקיעת החמה:   {dayTime.sunsetTime} 🌇</h3>
          </div>
          <div className="adsBored">
            <div className="parashat-shavoua item1">
              <p>שיעור עם רב ניב</p>
              <p>שיעור הלכות עם יניב</p>
              <p>שיעור עם יעקוב ישראל</p>
              <p>שיעור עם יעקוב ישראל</p>
              <p>שיעור עם יעקוב ישראל</p>
            </div>

            <div className="parashat-shavoua item2">
              <p> ערבית לשבת : 6:40</p>
              <p>שחרית לשבת : 7:50</p>
              <p>מנחה לשבת : 7:50</p>
              <p>ערבית למצ״ש : 7:50</p>
            </div>
            <div className="parashat-shavoua item3">
            <div className="parsha-content">
              <p> {data ? data[1].hebrew : ""}</p>
              <p> {data ? data[0].hebrew + " : " + shabatTime.hadlaka : ""}</p>
              <p>{data ? data[2].hebrew + " : " + shabatTime.havdala : ""}</p>
              <p>משיב הרוח </p>
            </div>
            <img className="parashat-img" src="https://chabadraanana.com/wp-content/uploads/2020/08/%D7%A0%D7%99%D7%A8%D7%95%D7%AA-%D7%A9%D7%91%D7%AA.png"/>
            </div>
            <div className="parashat-shavoua item4">
              <p> ערבית לשבת : 6:40</p>
              <p>שחרית לשבת : 7:50</p>
              <p>מנחה לשבת : 7:50</p>
              <p>ערבית למצ״ש : 7:50</p>
            </div>

            <div className="parashat-shavoua item5">
            <div>
              <p> ערבית : 6:40</p>
              <p>שחרית : 7:50</p>
              <p>מנחה : 7:50</p>
              <p>ערבית : 7:50</p>
              </div>
              <img className="parashat-img" src={require("./images/pngwing.com (4).png")}/>

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
                  <button onClick={openPopup}>לצפיה בשיעורים קודמים</button>
                  <button className="shiueri-Tora__btn" onClick={openPopupEdit}>
                    <FaEdit />
                  </button>
                </div>
                <img
                  className="shiueri-Tora__img"
                  src={shiur.image}
                  alt="shiueri Tora"
                ></img>
              </div>
            );
          })}
        </section>
        <section id="truma">
          <h2 className="section-title"> תרומה</h2>

          <div className="truma"></div>
        </section>
      </main>
    </div>
  );
}

export default App;
