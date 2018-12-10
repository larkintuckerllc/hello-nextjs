import PropTypes from 'prop-types';
import { Layout, Menu } from 'antd';

const { Header, Content, Footer } = Layout;

const PageRouteView = ({ children, onMenuSelect, pathname }) => (
  <Layout>
    <Header>
      <Menu
        defaultSelectedKeys={[pathname]}
        mode="horizontal"
        onSelect={onMenuSelect}
        style={{ lineHeight: '64px' }}
        theme="dark"
      >
        <Menu.Item key="/">Home</Menu.Item>
        <Menu.Item key="/charta">ChartA</Menu.Item>
        <Menu.Item key="/chartb">ChartB</Menu.Item>
        <Menu.Item key="/lorem">Lorem</Menu.Item>
      </Menu>
    </Header>
    <Content style={{ padding: '0px 50px'}}>
      <div style={{
        background: '#fff',
        padding: '24px',
        minHeight: '280px',
      }}>
        {children}
      </div>
    </Content>
    <Footer style={{ textAlign: 'center' }}>
      Footer
    </Footer>
  </Layout>
);

PageRouteView.propTypes = {
  onMenuSelect: PropTypes.func.isRequired,
  pathname: PropTypes.string.isRequired,
};

export default PageRouteView;
