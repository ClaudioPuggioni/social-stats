import BigCard from "./BigCard";
import SmallCard from "./SmallCard";
import { useState } from "react";

function UserInterface() {
  let [darkModeOn, setDarkModeOn] = useState(true);

  let accnts = [
    { plat: "facebook", usr: "@nathanf", flwrs: 1987, gainT: 12, gainY: 12, a: { title: "Page Views", major: 87, minor: 3 }, b: { title: "Likes", major: 52, minor: -2 } },
    { plat: "twitter", usr: "@nathanf", flwrs: 1044, gainT: 99, gainY: 0, a: { title: "Retweets", major: 117, minor: 303 }, b: { title: "Likes", major: 507, minor: 553 } },
    { plat: "instagram", usr: "@realnathanf", flwrs: 11000, gainT: 1099, gainY: 0, a: { title: "Likes", major: 5462, minor: 2257 }, b: { title: "Profile Views", major: 52000, minor: 1375 } },
    { plat: "youtube", usr: "Nathan F.", flwrs: 8239, gainT: 144, gainY: 145, a: { title: "Likes", major: 107, minor: -19 }, b: { title: "Total Views", major: 1407, minor: -12 } },
  ];
  return (
    <div id="userInterface">
      <div id="container" className={!darkModeOn ? "light-mode" : null}>
        <div id="header">
          <div id="headerTitle">
            <div id="headerTitleMain">Social Media Dashboard</div>
            <div id="headerTitleSub">Total Followers: 23,004</div>
          </div>
          <div id="titleHR"></div>
          <div id="modeHeader">
            Dark Mode
            <div id="lightSwitch" onClick={() => (darkModeOn ? setDarkModeOn(false) : setDarkModeOn(true))} style={{ background: darkModeOn ? `linear-gradient(90deg, rgba(16, 141, 166, 1) 0%, rgba(10, 235, 174, 1) 100%)` : `hsl(219, 23%, 75%)`, justifyContent: darkModeOn ? "flex-start" : "flex-end" }}>
              <span id="slider"></span>
            </div>
          </div>
        </div>
        <div id="topBody">
          <div className="bigDualDivs" style={{ display: "flex", flexWrap: "wrap" }}>
            <BigCard {...accnts[0]} />
            <BigCard {...accnts[1]} />
          </div>
          <div className="bigDualDivs" style={{ display: "flex", flexWrap: "wrap" }}>
            <BigCard {...accnts[2]} />
            <BigCard {...accnts[3]} />
          </div>
        </div>
        <div id="btmBody">
          <div id="btmBodyHeader">Overview - Today</div>
          <div id="btmBodyBody">
            {accnts.map((obj) => (
              <div className="smallDualDivs" style={{ display: "flex", flexWrap: "wrap" }}>
                <SmallCard plat={obj.plat} a={obj.a} />
                <SmallCard plat={obj.plat} b={obj.b} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserInterface;
