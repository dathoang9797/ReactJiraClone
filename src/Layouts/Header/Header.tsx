import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <nav className='navbar navbar-expand-md navbar-dark bg-dark mb-4'>
        <a className='navbar-brand' href='#a'>
          CyberSoft
        </a>

        <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#collapsibleNavId' aria-controls='collapsibleNavId' aria-expanded='false' aria-label='Toggle navigation'>
          <span className='navbar-toggler-icon' />
        </button>
        <div className='collapse navbar-collapse' id='collapsibleNavId'>
          <ul className='navbar-nav mr-auto w-100 justify-content-between'>
            <li className='nav-item '>
              <NavLink to='/' activeStyle={{ color: 'red' }} exact className='nav-link'>
                Home
              </NavLink>
            </li>
            <li className='nav-item '>
              <NavLink to='/about' activeStyle={{ color: 'red' }} exact className='nav-link'>
                About
              </NavLink>
            </li>
            <li className='nav-item '>
              <NavLink to='/contact' activeStyle={{ color: 'red' }} exact className='nav-link'>
                Contact
              </NavLink>
            </li>
            <li className='nav-item '>
              <NavLink to='/detail' activeStyle={{ color: 'red' }} exact className='nav-link'>
                Detail
              </NavLink>
            </li>
            <li className='nav-item '>
              <NavLink to='/profile' activeStyle={{ color: 'red' }} exact className='nav-link'>
                Profile
              </NavLink>
            </li>

            <li className='nav-item '>
              <NavLink to='/cyberbugs' activeStyle={{ color: 'red' }} exact className='nav-link'>
                CyberBugs
              </NavLink>
            </li>
            <li className='nav-item '>
              <NavLink to='/projectsetting' activeStyle={{ color: 'red' }} exact className='nav-link'>
                ProjectSetting
              </NavLink>
            </li>
            <div className='d-flex'>
              <li className='nav-item '>
                <NavLink to='/signup' activeStyle={{ color: 'red' }} exact className='nav-link'>
                  SignUp
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink to='/login' activeStyle={{ color: 'red' }} exact className='nav-link'>
                  Login
                </NavLink>
              </li>
            </div>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default React.memo(Header);
