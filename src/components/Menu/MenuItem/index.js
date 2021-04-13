import React from 'react';
import { LinkArea } from './styled';
import { useHistory, useLocation } from 'react-router-dom';

const MenuItem = ({ link, title, children }) => {
  const history = useHistory();
  const location = useLocation();

  let isActive = location.pathname === link;

  const handleLinkClick = (e) => {
    e.preventDefault();
    history.push(link);
  };

  return (
    <LinkArea active={isActive} href={link} onClick={handleLinkClick}>
      <div className="linkIcon">
        <div className="icon">{children}</div>
        <div className="text">{title}</div>
      </div>
    </LinkArea>
  );
};

export default MenuItem;
