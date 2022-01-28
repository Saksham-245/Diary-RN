import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthNavigator from './navigation/AuthNavigator';
import DiaryNavigator from './navigation/DiaryNavigator';
import {useSelector} from 'react-redux';
import {Provider} from 'react-native-paper';
import {useNetInfo} from '@react-native-community/netinfo';
import AlertCard from './components/AlertCard';

const App = () => {
  const user = useSelector(state => state.auth.user);
  const netInfo = useNetInfo();

  React.useEffect(() => {
    renderUI();
    return () => {
      renderUI();
    };
  }, []);

  const renderUI = () => {
    if (!netInfo.isConnected) {
      return <AlertCard />;
    } else {
      return (
        <NavigationContainer>
          {!user ? <AuthNavigator /> : <DiaryNavigator />}
        </NavigationContainer>
      );
    }
  };

  return <Provider>{renderUI()}</Provider>;
};

export default App;
