import { useDispatch, useSelector } from 'react-redux';
import authSelectors from 'redux/auth/authSelectors';
import avatar from '../../image/avatar_default.jpg';
import { logOut } from 'redux/auth/authOperations';

import { UserMenuWrapper, AvatarImage, StyledButton } from './UserMenuStyled';

const UserMenu = () => {
  const dispatch = useDispatch();

  const name = useSelector(authSelectors.selectUserName);
  return (
    <UserMenuWrapper>
      <AvatarImage src={avatar} alt="avatar" />
      <p>Hello, {name}</p>
      <StyledButton type="button" onClick={() => dispatch(logOut())}>
        Logout
      </StyledButton>
    </UserMenuWrapper>
  );
};

export default UserMenu;
