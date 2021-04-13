import React from 'react';
import {Link} from 'react-router-dom'
import { Menu } from './styled';
import { Email, Chat, Todo, Calendar,Logomarca } from '../../../Icons';
import MenuItem from '../MenuItem';

const MenuVertical = () => {
  return (
    <Menu>
      <Link to="/">
        <img src={Logomarca} alt="logomarca" />
      </Link>

      <select name="" id="">
        <option value="cliente">Área do Cliente</option>
      </select>

      <div className="areaMenuItems">
        <p>APPS</p>
        <MenuItem title="Email" link="/email">
          <Email />
        </MenuItem>
        <MenuItem title="Conversar" link="/chat">
          <Chat />
        </MenuItem>
        <MenuItem title="Todo" link="/todo">
          <Todo />
        </MenuItem>
        <MenuItem title="Calendário" link="/calendar">
          <Calendar />
        </MenuItem>
      </div>
    </Menu>
  );
};

export default MenuVertical;
