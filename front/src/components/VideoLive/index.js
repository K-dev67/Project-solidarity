import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Jitsi from 'react-jitsi';

const handleAPI = (JitsiMeetAPI) => {
  // JitsiMeetAPI.executeCommand('toggleVideo');
  JitsiMeetAPI.executeCommand('subject', 'Solidarity');
  JitsiMeetAPI.executeCommand('toggleShareScreen');
};


const Video = ({ lesson }) => {
  const userId = useSelector((state) => state.userId);
  const user = useSelector((state) => state.user);
  // == interface config
  let inferfaceConfig = { TOOLBAR_BUTTONS: ['videoquality', 'fullscreen', 'raisehand', 'hangup'] };
  if (userId === lesson.teacher_id) {
    inferfaceConfig = {
      TOOLBAR_BUTTONS: [
        'microphone',
        'camera',
        'closedcaptions',
        'desktop',
        'fullscreen',
        'fodeviceselection',
        'hangup',
        'profile',
        'info',
        // 'chat',
        'recording',
        'livestreaming',
        'etherpad',
        'sharedvideo',
        'settings',
        'raisehand',
        'videoquality',
        'filmstrip',
        'invite',
        'feedback',
        'stats',
        'shortcuts',
        'tileview',
        'videobackgroundblur',
        'download',
        'help',
        'mute-everyone',
        'e2ee',
      ],
    };
  }
  // == room Name
  const roomName = `dlksfjlksdflksjfkljsdlkf${lesson.id}`;

  return (
    <>
      {/* <h2>My First Meeting!</h2> */}
      <Jitsi
        displayName={user.nickname}
        onAPILoad={handleAPI}
        roomName={roomName}
        interfaceConfig={inferfaceConfig}
        containerStyle={{ width: '100%', height: '100%' }}
      />
    </>
  );
};


export default Video;
