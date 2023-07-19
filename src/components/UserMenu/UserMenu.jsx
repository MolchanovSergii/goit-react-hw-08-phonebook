import { useDispatch, useSelector } from 'react-redux';
import { UserMenuWrapper, AvatarImage } from './UserMenuStyled';
import authSelectors from 'redux/auth/authSelectors';
import avatar from '../../image/avatar_default.jpg';
import { logOut } from 'redux/auth/authOperations';

const UserMenu = () => {
  const dispatch = useDispatch();

  const name = useSelector(authSelectors.selectUserName);
  return (
    <UserMenuWrapper>
      <AvatarImage src={avatar} alt="avatar" />
      <p>Hello, {name}</p>
      <button type="button" onClick={() => dispatch(logOut())}>
        Logout
      </button>
    </UserMenuWrapper>
  );
};

export default UserMenu;
