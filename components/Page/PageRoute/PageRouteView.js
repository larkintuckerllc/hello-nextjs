import PropTypes from 'prop-types';
import { Layout, Menu } from 'antd';
import styled from 'styled-components';

const { Header, Content, Footer } = Layout;

// Ant Design Menu component did not work with
// styled-components

const StyledContent = styled(Content)`
  padding: 0px 50px;
`;

const StyledBodyDiv = styled.div`
  background: #fff;
  padding: 24px;
  min-height: 280px;
`;

const StyledFooter = styled(Footer)`
  text-align: center;
`;

const PageRouteView = ({ children, onMenuSelect, pathname }) => (
  <Layout>
    <Header>
      <Menu
        defaultSelectedKeys={[pathname]}
        mode="horizontal"
        onSelect={onMenuSelect}
        theme="dark"
        style={{ lineHeight: '64px' }}
      >
        <Menu.Item key="/">Home</Menu.Item>
        <Menu.Item key="/charta">ChartA</Menu.Item>
        <Menu.Item key="/chartb">ChartB</Menu.Item>
        <Menu.Item key="/lorem">Lorem</Menu.Item>
      </Menu>
    </Header>
    <StyledContent>
      <StyledBodyDiv>
        {children}
      </StyledBodyDiv>
    </StyledContent>
    <StyledFooter>
      Footer
    </StyledFooter>
  </Layout>
);

PageRouteView.propTypes = {
  onMenuSelect: PropTypes.func.isRequired,
  pathname: PropTypes.string.isRequired,
};

export default PageRouteView;
