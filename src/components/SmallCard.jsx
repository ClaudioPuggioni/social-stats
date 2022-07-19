function SmallCard(props) {
  return (
    <>
      {console.log(props.a ? props.a : props.b)}
      <div className="smallCard">
        <div className="smallTop">
          <div className="smallTopTitle">{props.a ? props.a.title : props.b.title}</div>
          <img className="smallTopImg" src={`/assets/icon-${props.plat}.svg`} alt={`${props.plat}`} />
        </div>
        <div className="smallBot">
          <div className="smallBotInfo">{props.a ? (props.a.major.toString().length > 4 ? `${props.a.major.toString().slice(0, 2)}k` : props.a.major) : props.b.major.toString().length > 4 ? `${props.b.major.toString().slice(0, 2)}k` : props.b.major}</div>
          <div className="smallBotTitle" style={{ color: props.a ? (props.a.minor > 0 ? "hsl(163, 72%, 41%)" : "hsl(356, 69%, 56%)") : props.b.minor > 0 ? "hsl(163, 72%, 41%)" : "hsl(356, 69%, 56%)" }}>
            {props.a ? (props.a.minor > 0 ? `▴${props.a.minor}%` : `▾${props.a.minor * -1}%`) : props.b.minor > 0 ? `▴${props.b.minor}%` : `▾${props.b.minor * -1}%`}
          </div>
        </div>
      </div>
    </>
  );
}

export default SmallCard;
