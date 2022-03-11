import React from 'react';
import {
  MenuAccount,
  MenuAccountInfo,
  MenuAvatar,
  MenuContainer,
  MenuControl,
  MenuFeature,
} from './Menu.style';
import { IMAGESJIRA } from '@Assets/images';
import { NavLink } from 'react-router-dom';
const { download } = IMAGESJIRA;

const Menu = () => {
  return (
    <>
      <MenuContainer>
        <MenuAccount>
          <MenuAvatar>
            <img src={download} alt='' />
          </MenuAvatar>
          <MenuAccountInfo>
            <p>CyberLearn.vn</p>
            <p>Report bugs</p>
          </MenuAccountInfo>
        </MenuAccount>
        <MenuControl>
          <div>
            <i className='fa fa-credit-card'></i>
            <NavLink
              to='/cyberbugs'
              activeStyle={{ color: 'blue' }}
              exact
              className='nav-link d-inline'
              style={{ color: 'rgba(7, 2, 2, 0.85) ', padding: 0 }}
            >
              <span>Cyber Board</span>
            </NavLink>
          </div>
          <div>
            <i className='fa fa-cog'></i>
            <NavLink
              to='/projectsetting'
              activeStyle={{ color: 'blue' }}
              exact
              className='nav-link d-inline'
              style={{ color: 'rgba(0, 0, 0, 0.85) ', padding: 0 }}
            >
              <span>Project Settings</span>
            </NavLink>
          </div>

          <div>
            <i className='fa fa-cog'></i>
            <NavLink
              to='/projectmanager'
              activeStyle={{ color: 'blue' }}
              exact
              className='nav-link d-inline'
              style={{ color: 'rgba(0, 0, 0, 0.85) ', padding: 0 }}
            >
              <span>Project Manager</span>
            </NavLink>
          </div>
        </MenuControl>
        <MenuFeature>
          <div>
            <i className='fa fa-truck'></i>
            <span>Releases</span>
          </div>
          <div>
            <i className='fa fa-equals'></i>
            <span>Issues and filters</span>
          </div>
          <div>
            <i className='fa fa-paste'></i>
            <span>Pages</span>
          </div>
          <div>
            <i className='fa fa-location-arrow'></i>
            <span>Reports</span>
          </div>
          <div>
            <i className='fa fa-box'></i>
            <span>Components</span>
          </div>
        </MenuFeature>
      </MenuContainer>
    </>
  );
};

export default Menu;
