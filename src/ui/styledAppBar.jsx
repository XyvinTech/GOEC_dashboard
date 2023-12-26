import React, { useState } from 'react'
import styled from 'styled-components';
import { ReactComponent as NotificationIcon } from '../assets/icons/new.svg'

const AppbarContainer = styled.nav`
background: #1C1D22;
display: flex;
justify-content: flex-end;
align-items: center;
padding: 20px 30px;
gap: 10px;
`;

const AppList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
`;

const AppItem = styled.li`
  margin-right: 16px;
`;

const AppLink = styled.a`
  text-decoration: none;
  color: #fff;
  font-weight: bold;

  &:hover {
    text-decoration: underline;
  }
`;

const Brand = styled.div`
  font-size: 1.5rem;
  color: #fff;
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
`;

// const NotificationIcon = styled.span`
//   font-size: 1.2rem;
//   color: #fff;
//   margin-right: 8px;
//   cursor: pointer;
// `;

const Username = styled.span`
  color: #828282;
  font-weight: bold;
  margin-right: 8px;
  margin-left:20px;
`;

const Avatar = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
`;

const NotificationIconContainer = styled.div`
  position: relative;
`;
const NotificationList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  position: absolute;
  top: 100%;
  right: 0;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 1;
  display: ${props => (props.visible ? 'block' : 'none')};
`;

const NotificationItem = styled.li`
  padding: 8px;
  border-bottom: 1px solid #ddd;
`;
const NotificationCount = styled.span`
  position: absolute;
  top: -8px;
  right: -8px;
  background-color: #EB5757;
  color: #fff;
  font-size: 0.8rem;
  padding: 4px 8px;
  border-radius: 50%;
`;

const StyledAppBar = ({ username, avatarSrc, notifications }) => {
  const imagePath = `/usericons/${avatarSrc}`;

  const [showNotificationList, setShowNotificationList] = useState(false);

  const toggleNotificationList = () => {
    setShowNotificationList(!showNotificationList);
  };

  const notificationCount = notifications.length;

  return (
    <AppbarContainer>
      <UserInfo>
        <NotificationIconContainer>
          <NotificationIcon onClick={toggleNotificationList}/>
          {notificationCount > 0 && <NotificationCount>{notificationCount}</NotificationCount>}
        </NotificationIconContainer>
        <Username>{username}</Username>
        <Avatar src={imagePath} alt="User Avatar" />
        <NotificationList visible={showNotificationList}>
          {notifications.map((notification, index) => (
            <NotificationItem key={index}>{notification}</NotificationItem>
          ))}
        </NotificationList>
      </UserInfo>
    </AppbarContainer>
  )
}

export default StyledAppBar
