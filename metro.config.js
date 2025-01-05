import { getDefaultConfig } from 'expo/metro-config';
import { withNativeWind } from 'nativewind/metro';
// eslint-disable-next-line no-undef
const config = getDefaultConfig(__dirname);

export default withNativeWind(config, {
  input: './global.css',
  inlineRem: 16,
});
