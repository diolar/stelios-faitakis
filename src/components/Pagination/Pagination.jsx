import React from 'react';
import {Link} from 'gatsby';
import './style.scss';
import Icon from '../Icon';
import { longArrow } from '../../constants/svg';

const Arrow = (props) => (
  <div {...props}>
    <Icon {...longArrow} responsive />
  </div>
);

const Pagination = ({ prev, next, children }) => (
  <div className="pagination">
    <div className="pagination__prev">
      {prev ? (
        <Link to={prev.to} title={prev.title}>
          <Arrow className="icon"/>
        </Link>
      ) : (
        <Arrow className="icon disabled" />
      )}
    </div>
    <div className="pagination__letter">
      {children}
    </div>
    <div className="pagination__next">
      {next ? (
        <Link to={next.to}  title={next.title}>
          <Arrow className="icon" />
        </Link>
      ) : (
        <Arrow className="icon disabled" />
      )}
    </div>
  </div>
);

export default Pagination;

