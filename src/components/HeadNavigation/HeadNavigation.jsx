import { Navigation, Link } from './HeadNavigationStyled';

const HeadNavigation = () => {
  return (
    <Navigation>
      <Link to="/">Home</Link>
      <Link to="/contacts">Contacts</Link>
    </Navigation>
  );
};

export default HeadNavigation;
