import React, { useState, useRef } from 'react'
import {
    Menu,
    Typography,
    Avatar,
    Button,
    Dropdown,
    Space,
    Select,
    Divider,
    Input
} from 'antd';
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
    SmileOutlined,
    PlusCircleFilled,
    PlusCircleOutlined,
    VideoCameraAddOutlined,
    PlusOutlined
} from '@ant-design/icons'
import styled from 'styled-components';
import { Nav, Navlink, Bars, NavBtn, NavBtnLink } from './NavbarElements.js'
import '../styles/App.css'
const { Option } = Select;



const GridContainer = styled.div`
    display: grid;
    width: 100vw;
    z-index:999;
    position: fixed;
    height: 95px;
    position: relative;
    background-color: #000000;
    grid-template-columns: 1fr 1fr 100px;
`

const ButtonContainer = styled.div`
    display: flex;
    margin-top: 8px;  
    // width: 450px;
    height: 100%;
    justify-content: flex-start;
    align-items: center;

    h2 {
        margin-left: 10px;
        color: red;
    }
`

const TitleContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    margin-left: 20px;
    margin-top: 5px;

        
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

const SelectContainer = styled.div`
    display: flex;
    justify-content: center;
    height: 50px;
    margin-top: 25px;
    margin-right: 25%;
    background-color: white;
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
                <PlusCircleOutlined style={{
                    fontSize: "45px",
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

                <h2>Create</h2>

                <VideoCameraAddOutlined style={{
                    fontSize: "45px",
                    marginBottom: "15px",
                    marginTop: "5px",
                    marginLeft: "15px",
                    cursor: "pointer",
                    color: "white",
                    zIndex: "999",
                    paddingRight: "5px",
                }} />

                <h2>Live</h2>

            </ButtonContainer>

            <TitleContainer>
                <h1>COSMATE</h1>
            </TitleContainer>

            {/* <SelectContainer>
                <Select selectable="true">
                    <Option value="lucy">lucy</Option>
                    <Option value="Stacey">Test</Option>
                    <Option value="Jen">Test</Option>
                    <Option value="Luna">Test</Option>
                    <Option value="Rachel">Test</Option>
                </Select>


            </SelectContainer> */}

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