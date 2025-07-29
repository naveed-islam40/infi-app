const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require("nativewind/metro");

const config = getDefaultConfig(__dirname);

// Remove `.svg` from assetExts and add to sourceExts
config.resolver.assetExts = config.resolver.assetExts.filter(ext => ext !== "svg");
config.resolver.sourceExts.push("svg");

// Set SVG transformer
config.transformer.babelTransformerPath = require.resolve("react-native-svg-transformer");

// Apply NativeWind plugin
module.exports = withNativeWind(config, { input: './global.css' });
