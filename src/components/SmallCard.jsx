function SmallCard(props) {
  return (
    <>
      {/* {console.log(props)} */}
      {console.log(props.a ? props.a : props.b)}
      <div className="smallCard">
        <div className="smallTop">
          <div className="smallTopTitle">{props.a ? props.a.title : props.b.title}</div>
          <img src={`/assets/icon-${props.plat}.svg`} alt={`${props.plat}`} />
        </div>
        <div className="smallBot">
          <div className="smallBotInfo">{props.a ? props.a.title : props.b.title}</div>
          <div className="smallTopTitle">{props.a ? props.a.title : props.b.title}</div>
        </div>
      </div>
    </>
  );
}

export default SmallCard;
