import BigCard from "./BigCard";
import SmallCard from "./SmallCard";

function UserInterface() {
  let accnts = [
    { plat: "facebook", usr: "@nathanf", flwrs: 1987, gainT: 12, gainY: 12, a: { title: "Page Views", pageViews: 87, pageViewsD: 3 }, b: { title: "Likes", likes: 52, likesD: -2 } },
    { plat: "twitter", usr: "@nathanf", flwrs: 1044, gainT: 99, gainY: 0, a: { title: "Likes", likes: 5462, likesD: 2257 }, b: { title: "Profile Views", profileViews: 52000, profileViewsD: 1375 } },
    { plat: "instagram", usr: "@realnathanf", flwrs: 11000, gainT: 1099, gainY: 0, a: { title: "Retweets", retweets: 117, retweetsD: 303 }, b: { title: "Likes", likes: 507, likesD: 553 } },
    { plat: "youtube", usr: "Nathan F.", flwrs: 8239, gainT: 144, gainY: 145, a: { title: "Likes", likes: 107, likesD: -19 }, b: { title: "Total Views", totalViews: 1407, totalViewsD: -12 } },
    // [username, totalFollowers, gainedToday, gainedYesterday]
  ];
  return (
    <>
      <div id="container">
        <div id="header">
          <div id="headerTitle">
            <div id="headerTitleMain">Social Media Dashboard</div>
            <div id="headerTitleSub">Total Followers: 23,004</div>
          </div>
          <div id="titleHR"></div>
          <div id="modeHeader">
            Dark Mode
            <div id="lightSwitch">
              <label htmlFor="modeSwitch">
                <input type="checkbox" />
                <span id="slider"></span>
              </label>
            </div>
          </div>
        </div>
        <div id="topBody">
          {accnts.map((obj) => (
            <BigCard {...obj} />
          ))}
        </div>
        <div id="btmBody">
          <div id="btmBodyHeader">Overview - Today</div>
          <div id="btmBodyBody">
            {accnts.map((obj) => (
              <>
                <SmallCard plat={obj.plat} a={obj.a} />
                <SmallCard plat={obj.plat} b={obj.b} />
              </>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default UserInterface;
