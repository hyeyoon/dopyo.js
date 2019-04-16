module.exports = {
  "moduleFileExtensions": ["js"],
  "moduleDirectories": ["node_modules", "bower_components"],
  "moduleNameMapper": {
    "\\.(css|scss)$": "identity-obj-proxy"
  },
  "transform": {
    "^.+\\.js$": "babel-jest",
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/fileTransformer.js"
  }
}
