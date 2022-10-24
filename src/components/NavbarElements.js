import { FaBars } from 'react-icons/fa';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
    // background: rgb(0,212,255);
    // background: linear-gradient(180deg, rgba(0,212,255,1) 0%, rgba(255,255,255,0.8749671743697479) 67%);
    display: flex;
`;

export const Navlink = styled(Link)`
    color: black;
    z-index: 999;
    position: absolute;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    &.active {
        color: #000000;
    }
`;

export const Bars = styled(FaBars)`
    display: none;
    color: #808080;
    @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
}
`;

export const NavMenu = styled.div`
    display: flex;
    align-items: center;
    margin-right: -24px;
    margin-right: 24px;
    width: 100vw;
    z-index:999;
    white-space: nowrap;
    @media screen and (max-width: 768px) {
    display: none;
}
`;

export const NavBtn = styled.nav`
    display: flex;
    align-items: center;
    margin-right: 24px;
    justify-content: flex-end;
    width: 40vw;
    @media screen and (max-width: 768px) {
    display: none;
    }
`;

export const NavBtnLink = styled(Link)`
    border-radius: 4px;
    width: 15vw;
    height: 30px;
    background: #808080;
    padding: 10px 22px;
    color: #000000;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    margin-left: 24px;
    &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #808080;
}
`;