import React, { useState } from "react";
import styles from "./menuModelCompStyle.module.scss"

// icons
import MenuIcon from '../../assets/menuIcon.svg';
import SettingIcon from '../../assets/icons/settings-02-stroke-rounded.svg';

// MUI
// import * as React from 'react';
import { Dropdown } from '@mui/base/Dropdown';
import { Menu } from '@mui/base/Menu';
import { MenuButton as BaseMenuButton } from '@mui/base/MenuButton';
import { MenuItem as BaseMenuItem, menuItemClasses } from '@mui/base/MenuItem';
import { styled } from '@mui/system';
import PropTypes from 'prop-types';
import { handleLogout } from "../../services/authService";

const MenuModelComp = () => {

    // * Model code ///////////////////////////////////////////////////////////////////////////////
    const createHandleMenuClick = (menuItem) => {
        return () => {
            console.log(`Clicked on ${menuItem}`);
        };
    };



    function MenuSection({ children, label }) {
        return (
            <MenuSectionRoot role="group">
                <MenuSectionLabel>{label}</MenuSectionLabel>
                <ul>{children}</ul>
            </MenuSectionRoot>
        );
    }

    MenuSection.propTypes = {
        children: PropTypes.node,
        label: PropTypes.string.isRequired,
    };

    const blue = {
        50: '#F0F7FF',
        100: '#C2E0FF',
        200: '#99CCF3',
        300: '#66B2FF',
        400: '#3399FF',
        500: '#007FFF',
        600: '#0072E6',
        700: '#0059B3',
        800: '#004C99',
        900: '#003A75',
    };

    const grey = {
        50: '#F3F6F9',
        100: '#E5EAF2',
        200: '#DAE2ED',
        300: '#C7D0DD',
        400: '#B0B8C4',
        500: '#9DA8B7',
        600: '#6B7A90',
        700: '#434D5B',
        800: '#303740',
        900: '#1C2025',
    };

    const Listbox = styled('ul')(
        ({ theme }) => `
        font-family: 'IBM Plex Sans', sans-serif;
        font-size: 0.875rem;
        box-sizing: border-box;
        padding: 6px;
        margin: 12px 0;
        min-width: 200px;
        border-radius: 12px;
        overflow: auto;
        outline: 0;
        background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
        border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
        color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
        box-shadow: 0px 4px 6px ${theme.palette.mode === 'dark' ? 'rgba(0,0,0, 0.50)' : 'rgba(0,0,0, 0.05)'
            };
        z-index: 1;
        `,
    );

    const MenuItem = styled(BaseMenuItem)(
        ({ theme }) => `
        list-style: none;
        padding: 8px;
        border-radius: 8px;
        cursor: default;
        user-select: none;
      
        &:last-of-type {
          border-bottom: none;
        }
      
        &:focus {
        //   outline: 3px solid ${theme.palette.mode === 'dark' ? blue[600] : blue[200]};
          background-color: ${theme.palette.mode === 'dark' ? grey[800] : grey[100]};
          color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
        }
      
        &.${menuItemClasses.disabled} {
          color: ${theme.palette.mode === 'dark' ? grey[700] : grey[400]};
        }
        `,
    );

    const MenuButton = styled(BaseMenuButton)(
        ({ theme }) => `
        font-family: 'IBM Plex Sans', sans-serif;
        font-weight: 600;
        font-size: 0.875rem;
        line-height: 1.5;
        padding: 8px 16px;
        border-radius: 8px;
        color: white;
        transition: all 150ms ease;
        cursor: pointer;
        background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
        border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
        color: ${theme.palette.mode === 'dark' ? grey[200] : grey[900]};
        box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
      
        &:hover {
          background: ${theme.palette.mode === 'dark' ? grey[800] : '#FF5C37'};
          border-color: ${theme.palette.mode === 'dark' ? grey[600] : grey[300]};
        }
      
        &:active {
          background: ${theme.palette.mode === 'dark' ? grey[700] : grey[100]};
        }
      
        &:focus-visible {
          box-shadow: 0 0 0 4px ${theme.palette.mode === 'dark' ? blue[300] : blue[200]};
          outline: none;
        }
        `,
    );

    const MenuSectionRoot = styled('li')`
  list-style: none;

  & > ul {
    padding-left: 1em;
  }
`;

    const MenuSectionLabel = styled('span')`
  display: block;
  padding: 10px 0 5px 10px;
  font-size: 0.75em;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05rem;
  color: ${grey[600]};
`;

    // end of modal code

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const logout = () => {
        handleLogout(email, password)
        console.log("pressed")
    }

    return (
        <div>
            <Dropdown>
                {/* <MenuButton>My account</MenuButton> */}
                <MenuButton onClick={createHandleMenuClick} className={styles.menuButton}>
                    <img src={MenuIcon} alt="" />
                </MenuButton>
                <Menu slots={{ listbox: Listbox }}>
                    <div className={styles.menuTitleCon}>
                        <h1>menu</h1>
                        <img src={SettingIcon} alt="" />
                    </div>
                    <div className={styles.divider}></div>
                    <div className={styles.menuUserCon}>
                        <h3>username</h3>
                        <div style={{ backgroundColor: "#000", borderRadius: '32px', width: '32px', height: '32px' }}></div>
                    </div>
                    <MenuSection label="User">
                        <MenuItem onClick={createHandleMenuClick('Profile')}>Profile</MenuItem>
                        <MenuItem onClick={createHandleMenuClick('Profile')}>Settings</MenuItem>
                        <MenuItem onClick={createHandleMenuClick('Profile')}>Post</MenuItem>
                    </MenuSection>
                    <MenuSection label="Danger zone">
                        <MenuItem onClick={logout}>Log out</MenuItem>
                    </MenuSection>
                </Menu>
            </Dropdown>

        </div>
    )
}
export default MenuModelComp