import React from 'react';


// function Header() {
//
// }

const Header = (props) => {
  return (
    <header className="top">
      <h1>
        Catch
        <span className="ofThe">
          <span className="of">of</span>
          <span className="the">the</span>
        </span>
        Day
      </h1>
      <h3 className="tagline"><span>{props.theTagline}</span></h3>
    </header>
  )
}

export default Header;
