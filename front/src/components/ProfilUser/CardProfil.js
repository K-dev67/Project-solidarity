/* eslint-disable camelcase */
import React from 'react';
import { useSelector } from 'react-redux';

// react Moment
import Moment from 'react-moment';
import 'moment/locale/fr';

// component
import {
  Card, Icon, Image, Button,
} from 'semantic-ui-react';
import UpdateUserModal from './UpdateUserModal';
import UpdatePasswordModal from './UpdatePasswordModal';
import UpdateMailModal from './UpdateMailModal';

// component semanthic


// == style
import './styles.scss';

const CardProfil = () => {
  const user = useSelector((state) => state.user);
  const {
    avatar, email, created_at,
  } = user;
  const {
    firstname,
    lastname,
    username,
  } = useSelector((state) => state);
  // const avataree = `https://robohash.org/${nickname}`;
  return (
    <div className="profilUser">
      <Card>
        <Image src={avatar} wrapped ui={false} />
        <Card.Content>
          <UpdateUserModal />
          <UpdatePasswordModal />
          <Card.Header>{username}</Card.Header>
          <Card.Meta>
            <span className="date">a rejoint la plateforme il y a <Moment locale="fr" fromNow ago>{created_at}</Moment> </span>
          </Card.Meta>
          <Card.Description>
            {firstname} {lastname} est un musicien vivant à Paris.
          </Card.Description>
        </Card.Content>
        <Card.Content extra>

          <Icon name="user" />
          {email}
          <a>
            <UpdateMailModal />
          </a>
        </Card.Content>
      </Card>
    </div>
  );
};

export default CardProfil;
