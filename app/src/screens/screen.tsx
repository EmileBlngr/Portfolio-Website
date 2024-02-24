import {ReactNode} from 'react';
import React from 'react';
import '../styles/screens/screen.css';
import NavigationTabs from '../components/NavigationTabs.tsx';
import Profile from '../components/Profile.tsx';
type LanguageChangeHandler = (selectedLocale: string) => void;
interface ScreenProps {
  children: ReactNode;
  route?: string;
  onLanguageChange: LanguageChangeHandler;
}
const Screen = ({children, route, onLanguageChange}: ScreenProps) => {
  return (
    <div className='globalContainer'>
      <div className='backgroundImage' />
        <div className='webContainer'>
          <div className='mainContentContainer'>
            <NavigationTabs onLanguageChange={onLanguageChange}/>
            <div className='onlyContentContainer'>
              {children}
            </div> 
          </div>
          <div className='profileContainer'>
            <Profile />
          </div>          
        </div>
      </div>
  );
};

export default Screen;