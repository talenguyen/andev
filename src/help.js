module.exports = `
  Usage:
    $ andev --help

    Options:
      --deeplink, d     Open deep-link
      --clear, c        Clear cache
      --uninstall, u    Uninstall 
      --install, i      Find and install APK in directory 
      --text, t         Send text to device

    Example:
      $ andev --d https://google.com
      $ andev --c com.android.chrome
      $ andev --uninstall com.android.chrome
      $ andev --install app/buid/output
      $ andev --text "Hello world"
      
`;
