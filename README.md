# SensiApp

## Installation
1. Clone the project using `git clone https://github.com/Leleka14/SensiApp.git`
2. Install dependencies using `yarn`.
3. Run `cd ios && pod install && cd ..` to install Pods.
4. Use `yarn run ios` to run the app on IOS.
5. Use `yarn run android` to run the app on Android.

### Note

If you are using Mac on M1 you might need to add `arm64` to excluded architectures! 
1. Build Settings -> Build Active Architecture Only -> Debug -> Yes
2. Add "arm64" in "Excluded Architectures" in build settings of both project and pods project,
