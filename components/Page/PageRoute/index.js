import { PropTypes } from 'prop-types';
import { Component } from 'react';
import PageRouteView from './PageRouteView';

class PageRoute extends Component {
  render() {
    const { children, router: { pathname } } = this.props;
    return (
      <PageRouteView
        onMenuSelect={this.handleMenuSelect}
        pathname={pathname}
      >
        {children}
      </PageRouteView>
    );
  }

  handleMenuSelect = ({ key }) => {
    const { router: { push } } = this.props;
    push(key);
  }
}

PageRoute.propTypes = {
  router: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default PageRoute;
