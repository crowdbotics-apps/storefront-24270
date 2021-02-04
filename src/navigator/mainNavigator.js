import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Maps200521Navigator from '../features/Maps200521/navigator';
import Additem200520Navigator from '../features/Additem200520/navigator';
import Maps200516Navigator from '../features/Maps200516/navigator';
import UserProfile200512Navigator from '../features/UserProfile200512/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Maps200521: { screen: Maps200521Navigator },
Additem200520: { screen: Additem200520Navigator },
Maps200516: { screen: Maps200516Navigator },
UserProfile200512: { screen: UserProfile200512Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
