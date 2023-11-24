import {View, Button, Text, SafeAreaView} from 'react-native';
import React from 'react';

import {LocaleHelper} from '../../helpers';
import * as Sentry from '@sentry/react-native';

export default function UrduScreen() {
  LocaleHelper.locale = 'ur';
  return (
    <SafeAreaView>
      <Text>Urdu</Text>
      <Text>{LocaleHelper.t('howru')}</Text>
      <Button
        title="Try!"
        onPress={() => {
          Sentry.captureException(new Error('First error'));
        }}
      />
    </SafeAreaView>
  );
}
