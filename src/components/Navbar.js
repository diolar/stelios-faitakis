import React from 'react';
import { Link } from 'gatsby'
import Epsilon from './lettersSvg/Epsilon';
import Beta from './lettersSvg/Beta';
import Ni from './lettersSvg/Ni';
import Pattern from './Pattern';
import { pattern1, pattern2, pattern3, pattern4, pattern5 } from '../constants/patterns';

const NavBar = ({ prefix }) => {
  return (
    <nav className="menu mobile-menu-experiment-beta" role="navigation" aria-label="main-navigation">
      <Link
        to={`${prefix}/work`}
        style={{ order: 2 }}
        className="menu__item letter menu-a"
      >
        <div>
          <Epsilon id="epsilon" />
        </div>
        <span className="menu__label">
          {prefix ? 'Work' : 'Εργο'}
        </span>
      </Link>
      <div className="tint tint-a" />
      <Link
        to={`${prefix}/bio`}
        style={{ order: 4 }}
        className="menu__item letter  menu-b"
      >
        <div>
          <Beta id="beta" />
        </div>
        <span className="menu__label">
           {prefix ? 'Bio' : 'Βίος'}
        </span>
      </Link>
      <div className="tint tint-b" />
      <Link
        to={`${prefix}/news`}
        style={{ order: 6 }}
        className="menu__item letter menu-c">
        <div>
          <Ni id="ni" />
        </div>
        <span className="menu__label">
           {prefix ? 'News' : 'Νέα'}
        </span>
      </Link>
      <div className="tint tint-c" />
      <Link
        to={`${prefix}/contact`}
        style={{ order: 8 }}
        className="menu__item letter menu-d">
        <div>
          <svg viewBox="0 0 204 474" xmlns="http://www.w3.org/2000/svg">
            <use xlinkHref="#epsilon" />
          </svg>
        </div>
        <span className="menu__label">
           {prefix ? 'Contact' : 'Επαφή'}
        </span>
      </Link>
      <div className="tint tint-d" />

      <div className="menu__pattern a" style={{ order: 1 }}>
        <Pattern id="pattern1" d={pattern1} classes="a" />
      </div>

      <div className="menu__pattern a b" style={{ order: 3 }}>
        <Pattern id="pattern2" d={pattern2}  />
      </div>

      <div className="menu__pattern b c" style={{ order: 5 }}>
        <Pattern id="pattern3" d={pattern3} />
      </div>

      <div className="menu__pattern c d"  style={{ order: 7 }}>
        <Pattern id="pattern4" d={pattern4} />
      </div>

      <div className="menu__pattern d" style={{ order: 9 }}>
        <Pattern id="pattern5" d={pattern5} />
      </div>
    </nav>
  );
};

export default NavBar
