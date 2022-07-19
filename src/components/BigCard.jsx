function BigCard(props) {
  return (
    <>
      <div className="bigCard">
        <div className="bigCardBorder" style={{ background: props.plat === "facebook" ? "hsl(208, 92%, 53%)" : props.plat === "twitter" ? "hsl(203, 89%, 53%)" : props.plat === "instagram" ? "linear-gradient(to right, hsl(37, 97%, 70%), hsl(329, 70%, 58%))" : "hsl(348, 97%, 39%)" }}></div>
        <div className="bigCardHeader">
          <img src={`/assets/icon-${props.plat}.svg`} alt={`${props.plat} icon`} />
          <div className="userName">{props.usr}</div>
        </div>
        <div className="bigCardBody">
          <div className="flwrsBody">{props.flwrs.toString().length > 4 ? `${props.flwrs.toString().slice(0, 2)}k` : props.flwrs}</div>
          <div className="bodyText">Followers</div>
        </div>
        <div className="bigCardFooter" style={{ color: props.gainT > props.gainY ? "hsl(163, 72%, 41%)" : props.gainT < props.gainY ? "hsl(356, 69%, 56%)" : "hsl(163, 72%, 41%)" }}>
          <div className="footerSign" style={{ color: props.gainT > props.gainY ? "hsl(163, 72%, 41%)" : props.gainT < props.gainY ? "hsl(356, 69%, 56%)" : "hsl(163, 72%, 41%)" }}>
            {props.gainT > props.gainY ? "▴" : props.gainT < props.gainY ? "▾" : "▴"}
          </div>
          {props.gainT} Today
        </div>
      </div>
    </>
  );
}

export default BigCard;
