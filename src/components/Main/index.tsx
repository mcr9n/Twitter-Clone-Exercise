import React from 'react';

import { Container, Header, BackIcon, ProfileInfo, BottomMenu, HomeIcon, SearchIcon, BellIcon, EmailIcon,} from './styles';

import Profilepage from '../ProfilePage'
const Main: React.FC = () => {
  return (
        <Container>
            <Header>
                <button>
                    <BackIcon />
                </button>

                <ProfileInfo>
                    <strong>Guilherme Rodz</strong>
                    <span>612 Tweets</span>
                </ProfileInfo>

            </Header>

            <Profilepage></Profilepage>

            <BottomMenu>
                <HomeIcon className="active"></HomeIcon>
                <SearchIcon></SearchIcon>
                <BellIcon></BellIcon>
                <EmailIcon></EmailIcon>
            </BottomMenu>

        </Container>

  );
}

export default Main;