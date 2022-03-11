import React, { useState } from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
  MenuUnfoldOutlined,
  SearchOutlined,
  BarsOutlined,
} from '@ant-design/icons';

const { Sider } = Layout;

const SideBar = () => {
  const [collapsed, setCollapsed] = useState(false);

  const toggle = () => {
    setCollapsed(!collapsed);
  };
  return (
    <>
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        onCollapse={toggle}
      >
        <div
          className='logo pr-4'
          onClick={toggle}
          style={{
            color: '#fff ',
            fontSize: 25,
            cursor: 'pointer',
            padding: ' 0 calc(50% - 25px / 2)',
          }}
        >
          <BarsOutlined />
        </div>
        <Menu theme='dark' defaultSelectedKeys={['1']} mode='inline'>
          <Menu.Item key='1' icon={<span style={{ fontSize: 25 }}>+</span>}>
            Create Issue
          </Menu.Item>
          <Menu.Item key='2' icon={<SearchOutlined style={{ fontSize: 20 }} />}>
            Search
          </Menu.Item>
        </Menu>
      </Sider>
    </>
  );
};

export default SideBar;
