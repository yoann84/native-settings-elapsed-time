import { NativeModulesProxy, EventEmitter, Subscription } from 'expo-modules-core';

// Import the native module. On web, it will be resolved to NativeSettingsElapsedTime.web.ts
// and on native platforms to NativeSettingsElapsedTime.ts
import NativeSettingsElapsedTimeModule from './NativeSettingsElapsedTimeModule';
import NativeSettingsElapsedTimeView from './NativeSettingsElapsedTimeView';
import { ChangeEventPayload, NativeSettingsElapsedTimeViewProps } from './NativeSettingsElapsedTime.types';

// Get the native constant value.
export const PI = NativeSettingsElapsedTimeModule.PI;

export function hello(): string {
  return NativeSettingsElapsedTimeModule.hello();
}

export async function setValueAsync(value: string) {
  return await NativeSettingsElapsedTimeModule.setValueAsync(value);
}

const emitter = new EventEmitter(NativeSettingsElapsedTimeModule ?? NativeModulesProxy.NativeSettingsElapsedTime);

export function addChangeListener(listener: (event: ChangeEventPayload) => void): Subscription {
  return emitter.addListener<ChangeEventPayload>('onChange', listener);
}

export { NativeSettingsElapsedTimeView, NativeSettingsElapsedTimeViewProps, ChangeEventPayload };
