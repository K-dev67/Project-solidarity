import React from 'react';
import { useSelector } from 'react-redux';

// component semanthic
import { Card, Icon, Image } from 'semantic-ui-react'


// == style
import './styles.scss';

const CardProfil = () => {
    const user = useSelector((state) => state.user);
    const { firstname, lastname, nickname, avatar, email, created_at } = user
    return (
<div className="profilUser">

  <Card>
    <Image src='/images/avatar/large/matthew.png' wrapped ui={false} />
    <Card.Content>
    <Card.Header>{nickname}</Card.Header>
      <Card.Meta>
    <span className='date'>a rejoint la plateforme le {created_at}</span>
      </Card.Meta>
      <Card.Description>
        {firstname} {lastname} est un musicien vivant à Paris.
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='user' />
        {email}
      </a>
    </Card.Content>
  </Card>

</div>
    );
};

export default CardProfil;