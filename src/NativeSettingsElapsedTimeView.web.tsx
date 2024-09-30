import * as React from 'react';

import { NativeSettingsElapsedTimeViewProps } from './NativeSettingsElapsedTime.types';

export default function NativeSettingsElapsedTimeView(props: NativeSettingsElapsedTimeViewProps) {
  return (
    <div>
      <span>{props.name}</span>
    </div>
  );
}
