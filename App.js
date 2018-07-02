import React, {Component} from 'react';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import { StyleSheet, Text, View, Button} from 'react-native';
// import { FBLogin, FBLoginManager } from 'react-native-facebook-login';
import FBLogin, FBLoginManager } from 'react-native-facebook-login';

console.log(FBLoginManager);

class Test extends React.Component {

  static navigationOptions = {
    title: 'Home',
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('Aa')}
        />
        <FBLogin style={{ marginBottom: 10, }}/>
      </View>
    );
  }
}

class Test2 extends React.Component {

  static navigationOptions = {
    title: 'TEST',
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>

      </View>
    );
  }
}

// const App = createStackNavigator({
//   Home: { screen: Test },
//   Aa: { screen: Test2 }
// });
import Ionicons from 'react-native-vector-icons/Ionicons';

const App = createBottomTabNavigator(
  {
    Home: Test,
    Aa: Test2
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Home') {
          iconName = `ios-information-circle${focused ? '' : '-outline'}`;
        } else if (routeName === 'Aa') {
          iconName = `ios-options${focused ? '' : '-outline'}`;
        }

        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
        return <Ionicons name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    },
  }
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
