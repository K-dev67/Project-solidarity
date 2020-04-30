/* eslint-disable camelcase */
import React from 'react';
import { useSelector } from 'react-redux';

// react Moment
import Moment from 'react-moment';

// component semanthic
import { Card, Icon, Image } from 'semantic-ui-react';


// == style
import './styles.scss';

// == img
import avatarImg from './avatar.png';

const CardProfil = () => {
  const user = useSelector((state) => state.user);
  const {
    firstname, lastname, nickname, avatar, email, created_at,
  } = user;
  return (
    <div className="profilUser">
      <Card>
        <Image src={avatarImg} wrapped ui={false} />
        <Card.Content>
          <Card.Header>{nickname}</Card.Header>
          <Card.Meta>
            <span className="date">a rejoint la plateforme il y a <Moment fromNow ago>{created_at}</Moment> </span>
          </Card.Meta>
          <Card.Description>
            {firstname} {lastname} est un musicien vivant à Paris.
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <a>
            <Icon name="user" />
            {email}
          </a>
        </Card.Content>
      </Card>
    </div>
  );
};

export default CardProfil;
