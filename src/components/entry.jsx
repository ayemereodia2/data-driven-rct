export default function Entry(props) {
  console.log(props);
  return (
    <article className="main-top-container">
      <div className="main-entry-container">
        <div className="img-container">
          <img
            src={ props.entry.img.src }
            alt= { props.entry.img.alt}
          />
        </div>
        <div className="sub-entry-container">
          <div className="top-location-nav">
            <img src="src/assets/location.png" alt=" location logo" />
            <p>{ props.entry.country }</p>
            <a href={ props.entry.googleMapsLink }>View on Google Maps</a>
          </div>
          <h1>{ props.entry.title }</h1>
          <p className="entry-date">{ props.entry.dates }</p>
          <p className="entry-description">
            {props.entry.text}
          </p>
        </div>
      </div>
      <div className="line-divider"></div>
    </article>
  );
}
