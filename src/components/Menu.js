import React from 'react'
import { Menu } from 'antd';
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';


const MenuContainer = styled.div`
    display: flex;
`

const MenuComponent = () => {
  return (
    <MenuContainer>
        <Menu mode="vertical" defaultSelectedKeys={['mail']}>
            <Menu.Item key="mail" icon={<MailOutlined />}>
            Navigation One
            </Menu.Item>
            <Menu.SubMenu key="SubMenu" title="Navigation Two - Submenu" icon={<SettingOutlined />}>
            <Menu.Item key="two" icon={<AppstoreOutlined />}>
                Navigation Two
            </Menu.Item>
            <Menu.Item key="three" icon={<AppstoreOutlined />}>
                Navigation Three
            </Menu.Item>
            <Menu.ItemGroup title="Item Group">
                <Menu.Item key="four" icon={<AppstoreOutlined />}>
                Navigation Four
                </Menu.Item>
                <Menu.Item key="five" icon={<AppstoreOutlined />}>
                Navigation Five
                </Menu.Item>
            </Menu.ItemGroup>
            </Menu.SubMenu>
        </Menu>
    </MenuContainer>
  )
}

export default MenuComponent;