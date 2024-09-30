import { requireNativeViewManager } from 'expo-modules-core';
import * as React from 'react';

import { NativeSettingsElapsedTimeViewProps } from './NativeSettingsElapsedTime.types';

const NativeView: React.ComponentType<NativeSettingsElapsedTimeViewProps> =
  requireNativeViewManager('NativeSettingsElapsedTime');

export default function NativeSettingsElapsedTimeView(props: NativeSettingsElapsedTimeViewProps) {
  return <NativeView {...props} />;
}
