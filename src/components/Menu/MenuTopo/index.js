import React from 'react';
import { AreaMenu } from './styled';
import MenuItem from '../MenuItem';
import {
  Todo,
  Chat,
  Email,
  Calendar,
  Star,
  Notifications,
  Search,
  Avatar,
} from '../../../Icons';

const MenuTopo = ({ name, status }) => {
  return (
    <AreaMenu>
      <div className="leftSide">
        <MenuItem link="/todo">
          <Todo />
        </MenuItem>
        <MenuItem link="/chat">
          <Chat />
        </MenuItem>
        <MenuItem link="/email">
          <Email />
        </MenuItem>
        <MenuItem link="/calendar">
          <Calendar size={18} />
        </MenuItem>
        <MenuItem link="/classification">
          <Star className="star" />
        </MenuItem>
      </div>

      <div className="rightSide">
        <MenuItem link="/notifications">
          <Notifications />
        </MenuItem>
        <MenuItem link="/search">
          <Search />
        </MenuItem>

        <div className="userAreaInfo">
          <div className="userInfo">
            <p className="userName">{name}</p>
            <p className="userStatus">{status}</p>
          </div>
          <div className="userAvatar">
            <img src={Avatar} alt={`avatar${name}`} />
          </div>
        </div>
      </div>
    </AreaMenu>
  );
};

export default MenuTopo;
