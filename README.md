# SHWBApp
Student health and well being app UA - 
This app is for students at the University of Alabama to provide survey questions about their health and wellbeing, monitor their own progression, and connect them to resources that the university offers. The data collected through this app will give the University a better understanding of their student body, so they can provide a more complete experience.   
# Build
The following applications are required to build the app.
- React Native CLI
- Node, Python2, JDK
- Android Studio

Follow the [Getting Started](https://facebook.github.io/react-native/docs/getting-started) to install those dependencies, it is important to make sure each step done correctly.

Assuming you have Git installed on your computer, clone the repository

In terminal
```
git clone https://github.com/fdbostwick/SHWBApp.git
cd SHWBApp\app\client
```

Next, install all packages
```
npm install
```

Then create your own Keystore file, leave the answers empty except 'yes' for last question
```
cd android\app
keytool -genkey -v -keystore debug.keystore -storepass android -alias androiddebugkey -keypass android -keyalg RSA -keysize 2048 -validity 10000
```

Open Android Studio, Select `Tools-AVD Manager`, create your vitual device and make sure API is `28`

Then right click on the device, select `Cold Boot Now`, wait for home screen show up

In terminal, go back to `client` folder `cd ..\..`

Note: Delete old app in the emulator if it is installed already
```
react-native run-android
```

# Project Structure
```
- android
- ios
- api
    - *.api.js              // Collection of functions call to the server
- screens
    - screen 1
        - index.js          // Screen rendering file, contains internal functions
        - index.style.js    // Screen styling file
    - screen 2
        ...
- App.js                    // App entry point
```
# Achitecture
![Alt text](/res/Architecture.png?raw=true)
# Debugging
## In Emulator

<kbd>CTRL</kbd>+<kbd>M</kbd>: Open menu

<kbd>R</kbd>+<kbd>R</kbd>: Reload

>To debug the JavaScript code in Chrome, select "Debug JS Remotely" from the Developer Menu. This will open a new tab at http://localhost:8081/debugger-ui.

>Select Tools → Developer Tools from the Chrome Menu to open the Developer Tools. You may also access the DevTools >using keyboard shortcuts (⌘⌥I on macOS, Ctrl Shift I on Windows). You may also want to enable Pause On Caught >Exceptions for a better debugging experience.

# Create New Screen
Suppose we want to create a screen called `Home`

Go to `screens` folder, create a new folder `home`

Copy and paste the files from `sample` folder to `home`

Change the name of class inside `index.js`
```javascript
export class HomeScreen extends Component{
    ...
    ...
};
export default HomeScreen;
```

Then open App.js file, add a new import and a navigator entry
```javascript
import LoginScreen from './screens/login/index'
import SampleScreen from './screens/sample/index'
import ProfileScreen from './screens/profile/index'
import HomeScreen from './screens/home/index'

const AppNavigator = createStackNavigator ({
  Login: {screen: LoginScreen},
  Sample: {screen: SampleScreen},
  Profile: {screen: ProfileScreen},
  Home: {screen: HomeScreen}
},
```

Now we need to add a button in login screen for us to access home page

Create a new TouchableOpacity which is button in `login\index.js`
```javascript
<View style={styles.mainContainer}>
    ...
    <TouchableOpacity
        style={[styles.buttonContainer, styles.loginButton]}
        onPress={() => this.props.navigation.navigate('Profile')}>
        <Text style={styles.loginButtonText}>Profile Page</Text>
    </TouchableOpacity>
    <TouchableOpacity
        style={[styles.buttonContainer, styles.loginButton]}
        onPress={() => this.props.navigation.navigate('Home')}>
        <Text style={styles.loginButtonText}>Home Page</Text>
    </TouchableOpacity>
</View>
```

You may need to recompile the project
```
react-native run-android
```

A new screen is created!

In order to create the top bar in any screen: 
```
import Header from '../header/topBar'
```

Then inside your render function place this line at top:
```
<Header navigation={this.props.navigation}/>
```

In order to create the bottom bar in any screen: 
```
import Footer from '../header/bottomBar'
```

Then inside your render function place this line at bottom:
```
<Footer navigation={this.props.navigation}/>
```
# Troubleshooting 
 