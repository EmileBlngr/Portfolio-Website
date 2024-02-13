import {ReactNode} from 'react';
import React from 'react';
import '../styles/screens/screen.css';
import NavigationTabs from '../components/NavigationTabs.tsx';
import Profile from '../components/Profile.tsx';

interface ScreenProps {
  children: ReactNode;
  route?: string;
}
const Screen = ({children, route}: ScreenProps) => {
  return (
    <div className='globalContainer'>
      <div className='backgroundImage' />
        <div className='webContainer'>
          <div className='mainContentContainer'>
            <NavigationTabs />
            {children}
          </div>
          <div className='profileContainer'>
            <Profile />
          </div>          
        </div>
      </div>
  );
};

export default Screen;