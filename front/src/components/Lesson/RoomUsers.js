import React from 'react';
import { useSelector } from 'react-redux';

const RoomUsers = () => {
  const { roomUsers } = useSelector((state) => state);
  const roomUsersJSX = roomUsers.map((user) => (
    <div>{user.username}</div>
  ));
  return (
    <div>{roomUsersJSX}</div>
  );
};

export default RoomUsers;
