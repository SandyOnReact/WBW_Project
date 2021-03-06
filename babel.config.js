module.exports = {
  presets: ["module:metro-react-native-babel-preset"],
  env: {
    production: {},
  },
  plugins: [
    "module:react-native-dotenv",
    [
      "@babel/plugin-proposal-decorators",
      {
        legacy: true,
      },
    ],
    [
      "module-resolver",
      {
          root: ["./app"],
          extensions: [".ts", ".tsx", ".js"],
      },
    ],
    ["@babel/plugin-proposal-optional-catch-binding"],
  ],
}
