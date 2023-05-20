import {useState, useEffect} from 'react';
import Context from './src/state/Context';
import MainScreen from './src/screens/MainScreen';


const App = () => {
  const [drawerState, setDrawerState] = useState({
    isSettingsDrawerOpen: false,
    isDeviceDrawerOpen: false,
  });

  const [btState, setBtState] = useState({
    isBluetoothOn: false,
    connectedDevices: [],
    isLoading: '',
    scannedDevices: [],
  });

  return (
    <Context.Provider
      value={{
        drawerState,
        setDrawerState,
        btState,
        setBtState,
      }}>
      <MainScreen />
    </Context.Provider>
  );
};

export default App;
