import 'react-native-gesture-handler';

import RootNavigator from './src/navigation';
import * as Sentry from '@sentry/react-native';

Sentry.init({
  dsn: 'https://4d6703e5b50ef294ad1c460df124ece8@o4506258631950336.ingest.sentry.io/4506258635948032',
});

const App = () => {
  return <RootNavigator />;
};

export default App;
