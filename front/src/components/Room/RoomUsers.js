import React from 'react';
import { useSelector } from 'react-redux';
import { Label } from 'semantic-ui-react';

const RoomUsers = () => {
  const { roomUsers } = useSelector((state) => state);
  const avatarSrc = 'https://robohash.org/';
  const roomUsersJSX = roomUsers.map((user) => (
    <Label
      as="a"
      image
      key={user.username}
    >
      <img src={avatarSrc + user.id} />
      {user.username}
    </Label>
  ));
  return (
    <div className="container-room-user">
      <h4>Utilisateurs connectés</h4>
      <div className="user-connected">{roomUsersJSX}</div>
    </div>
  );
};

export default RoomUsers;
