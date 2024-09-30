import NativeSettingsElapsedTimeModule from "./NativeSettingsElapsedTimeModule";

export function getElapsedTimeMillis(): string {
  return NativeSettingsElapsedTimeModule.getElapsedTimeMillis();
}
