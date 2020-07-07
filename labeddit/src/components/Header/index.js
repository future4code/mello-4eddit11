import React from 'react';
import {
  Layout,
  Row,
  Col,
  Space,
  Typography,
  Menu,
  Dropdown,
  Button,
  Input,
} from 'antd';
import {
  RedditCircleFilled,
  DownOutlined,
  FundFilled,
  EditFilled,
} from '@ant-design/icons';

import 'antd/dist/antd.css';

function Header() {
  const { Header } = Layout;
  const { Title } = Typography;
  const { Text } = Typography;
  const { Search } = Input;

  const navMenu = (
    <Menu>
      <Menu.Item key='0'>Filter</Menu.Item>
      <Menu.Item key='1'>Feed</Menu.Item>
      <Menu.Item key='3'>Communities</Menu.Item>
    </Menu>
  );

  const profileMenu = (
    <Menu>
      <Menu.Item key='0'>Profile</Menu.Item>
      <Menu.Item key='1'>Settings</Menu.Item>
      <Menu.Item key='3'>Log Out</Menu.Item>
    </Menu>
  );

  return (
    <Header>
      <Row gutter={16}>
        <Col span={2} className='gutter-row'>
          <Space align='center'>
            <Title level={4} style={{ color: '#FF4500', cursor: 'pointer' }}>
              Labeddit
            </Title>
          </Space>
        </Col>

        <Col
          span={4}
          className='gutter-row'
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Dropdown overlay={navMenu} trigger={['click']}>
            <Button
              style={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              Home <DownOutlined />
            </Button>
          </Dropdown>
        </Col>

        <Col span={8} className='gutter-row' style={{ display: 'flex' }}>
          <Search
            placeholder='Search'
            onSearch={(value) => console.log(value)}
            enterButton
            style={{
              display: 'flex',
              alignItems: 'center',
            }}
          />
        </Col>

        <Col span={6} className='gutter-row'>
          <Space
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Button type='text' style={{ color: '#fafafa' }}>
              Popular
            </Button>
            <Button type='text' style={{ color: '#fafafa' }}>
              All
            </Button>
            <Button type='text' style={{ color: '#fafafa' }}>
              Create Post
            </Button>
          </Space>
        </Col>

        <Col
          span={4}
          className='gutter-row'
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Dropdown overlay={profileMenu} trigger={['click']}>
            <Button
              style={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <span>Username</span> <DownOutlined />
            </Button>
          </Dropdown>
        </Col>
      </Row>
    </Header>
  );
}

export default Header;
