import React, { useState, useEffect } from 'react'
import { Button, Menu, Typography, Avatar, Dropdown, Space } from 'antd';
import { Link, NavLink } from 'react-router-dom'
import {
    HomeOutlined,
    BulbOutlined,
    FundOutlined,
    MenuOutlined,
    ContactsOutlined,
    BellOutlined,
    ZhihuOutlined,
    SettingOutlined,
    DownOutlined,
    SmileOutlined
} from '@ant-design/icons'
import styled from 'styled-components';
import { Nav, Navlink, Bars, NavBtn, NavBtnLink } from './NavbarElements.js'
import '../styles/App.css'



const GridContainer = styled.div`
    display: grid;
    width: 100vw;
    z-index:999;
    height: 95px;
    position: relative;
    background-color: #000000;
    grid-template-columns: 1fr 1fr 1fr;
`

const ButtonContainer = styled.div`
    display: flex;
    margin-top: 8px;  
    justify-content: flex-start;
`

const TitleContainer = styled.div`
    display: flex;
    justify-content: center;

        
    h1 {
        margin-top: 35px;
        font-size: 30px;
        color: white;
        font-family: 'Josefin Sans', sans-serif;    
    }
`

const NavContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-right: 10px;
`


const Navbar = () => {
    const menu = (
        <Menu items={[
            {
                label: <a href="/">Home</a>,
                key: '0',
            }
        ]}
        />
    );

    return (
        <GridContainer>

            <ButtonContainer>
                <ZhihuOutlined style={{
                    fontSize: "55px",
                    boxShadow: "0 0 10px #fff",
                    marginBottom: "15px",
                    marginTop: "5px",
                    marginLeft: "15px",
                    color: "white",
                    zIndex: "999",
                    backdropFilter: "blur(50px)",
                    paddingRight: "5px",
                    cursor: "pointer",
                    borderRadius: "5px"
                }} />

                <SettingOutlined spin style={{
                    fontSize: "65px",
                    marginBottom: "15px",
                    marginTop: "5px",
                    marginLeft: "15px",
                    cursor: "pointer",
                    color: "white",
                    zIndex: "999",
                    paddingRight: "5px",
                }} />
            </ButtonContainer>

            <TitleContainer>
                <h1>COSMATE</h1>
            </TitleContainer>

            <NavContainer>

                <Dropdown
                    overlayClassName="menuOverlay"
                    overlay={menu}
                    trigger={['click']}
                >
                    <a onClick={(e) => e.preventDefault()}>
                        <Space>
                            <MenuOutlined style={{
                                fontSize: "45px",
                                marginTop: "20px",
                                marginRight: "15px",
                                cursor: "pointer",
                                color: "white",
                                zIndex: "999",
                                paddingRight: "5px",
                            }} />
                        </Space>
                    </a>
                </Dropdown>
            </NavContainer>

        </GridContainer>
    );
}

export default Navbar