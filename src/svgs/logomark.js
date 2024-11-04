import "./svg.css";

function Logomark({ showLeft = true, showRight = true }) {
  const width = showLeft && showRight ? 60 : 30;
  const xOffset = !showLeft && showRight ? 30 : 0;
  const viewBoxVal = `${xOffset} 0 ${width} 30`;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox={viewBoxVal} className="logomark-svg">
      {showLeft ? (
        <g className="logoLeft">
          <path
            className="logoFight"
            d="m12.083 7.25 5.834 5.834 1.417-1.417L22.666 15 28.5 9.166 19.334 0l-7.251 7.25Z"
          />
          <path
            className="logoFlight"
            d="m12.083 7.25-1.417-1.416L1.5 15l9.166 9.166 1.417-1.416-1.916-1.916L16.001 15l-5.834-5.834 1.916-1.916Z"
          />
          <path
            className="logoFocus"
            d="m22.666 15-3.332 3.333-1.417-1.417-5.834 5.834L19.334 30l9.166-9.166L22.666 15Z"
          />
          <path className="logoHidden" d="m19.833 15-1.916 1.916L16.001 15l1.916-1.916L19.833 15Z" />
          <path className="logoSelf" d="M17.917 13.084 16.001 15l-5.834-5.834 1.916-1.916 5.834 5.834Z" />
          <path className="logoNear" d="m17.917 16.916-5.834 5.834-1.916-1.916L16.001 15l1.916 1.916Z" />
          <path
            className="logoFar"
            d="M19.334 11.667 22.666 15l-3.332 3.333-1.417-1.417L19.833 15l-1.916-1.916 1.417-1.417Z"
          />
        </g>
      ) : null}
      {showRight ? (
        <g className="logoRight">
          <path
            className="logoSelf"
            d="M47.917 7.25 40.666 0 31.5 9.166 37.334 15l3.332-3.333 1.417 1.417 5.834-5.834Z"
          />
          <path
            className="logoNear"
            d="m47.917 7.25 1.916 1.916L43.999 15l5.834 5.834-1.916 1.916 1.417 1.416L58.5 15l-9.166-9.166-1.417 1.416Z"
          />
          <path
            className="logoFar"
            d="M40.666 18.333 37.334 15 31.5 20.834 40.666 30l7.251-7.25-5.834-5.834-1.417 1.417Z"
          />
          <path className="logoFlight" d="M49.833 9.166 43.999 15l-1.916-1.916 5.834-5.834 1.916 1.916Z" />
          <path
            className="logoFight"
            d="M42.083 13.084 40.167 15l1.916 1.916-1.417 1.417L37.334 15l3.332-3.333 1.417 1.417Z"
          />
          <path className="logoFocus" d="m42.083 13.084 7.75 7.75-1.916 1.916-5.834-5.834L43.999 15l-1.916-1.916Z" />
          <path className="logoPhysical" d="m43.999 15-1.916 1.916L40.167 15l1.916-1.916L43.999 15Z" />
        </g>
      ) : null}
    </svg>
  );
}

export default Logomark;
