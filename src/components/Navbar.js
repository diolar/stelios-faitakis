import React from 'react';
import { Link } from 'gatsby'
import Epsilon from './lettersSvg/Epsilon';
import Beta from './lettersSvg/Beta';
import Ni from './lettersSvg/Ni';
import Pattern from './Pattern';
import { pattern1, pattern2, pattern3, pattern4, pattern5 } from '../constants/patterns';

const NavBar = ({ prefix }) => {
  return (
    <div className="container">
      <nav className="nav" role="navigation" aria-label="main-navigation">
        <Link
          to={`${prefix}/work`}
          style={{ order: 2 }}
          className="letter menu-item menu-a"
        >
          <Epsilon id="epsilon" />
          <span className="menu-item__label">work</span>
        </Link>
        <div className="tint tint-a" />
        <Link
          to={`${prefix}/bio`}
          style={{ order: 4 }}
          className="letter menu-item menu-b"
        >
          <Beta id="beta" />
          <span className="menu-item__label">bio</span>
        </Link>
        <div className="tint tint-b" />
        <Link
          to={`${prefix}/news`}
          style={{ order: 6 }}
          className="letter menu-item menu-c">
          <Ni id="ni" />
          <span className="menu-item__label">news</span>
        </Link>
        <div className="tint tint-c" />
        <Link
          to={`${prefix}/contact`}
          style={{ order: 8 }}
          className="letter menu-item menu-d">
          <svg viewBox="0 0 204 474" xmlns="http://www.w3.org/2000/svg">
            <use xlinkHref="#epsilon" />
          </svg>
          <span className="menu-item__label">contact</span>
        </Link>
        <div className="tint tint-d" />

        <div className="a" style={{ order: 1 }}>
          <Pattern id="pattern1" d={pattern1} classes="a" />
        </div>

        <div className="a b" style={{ order: 3 }}>
          <Pattern id="pattern2" d={pattern2}  />
        </div>

        <div className="b c" style={{ order: 5 }}>
          <Pattern id="pattern3" d={pattern3} />
        </div>

        <div className="c d"  style={{ order: 7 }}>
          <Pattern id="pattern4" d={pattern4} />
        </div>

        <div className="d" style={{ order: 9 }}>
          <Pattern id="pattern5" d={pattern5} />
        </div>
      </nav>
    </div>
  );
};

export default NavBar
