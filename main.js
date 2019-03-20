import * as React from 'react';
import { BottomNavigation, Text } from 'react-native-paper';
import {View} from 'react-native'
import {Footer,FooterTab,Button,Icon} from 'native-base'
import Home  from './Components/Home'

export default class MyComponent extends React.Component {
  render() {
    return (
      <View style={{flex:1}}>
    
        <Footer>
        <FooterTab style={{backgroundColor: "white",}}>
          <Button onPress={() => this.props.navigation.navigate('Home')}>
            <Icon name="home" style={{color:"#42C2BF"}} />
          </Button>
          <Button onPress={() => this.props.navigation.navigate('Search')}>
            <Icon name="th-large" type="FontAwesome" style={{color:"gainsboro"}}/>
          </Button>
          <Button onPress={() => this.props.navigation.navigate('Search')}>
            <Icon active name="search" type="FontAwesome" style={{color:"gainsboro"}} />
          </Button>
          <Button onPress={() => this.props.navigation.navigate('Item1')}>
            <Icon name="cart" style={{color:"gainsboro"}} />
          </Button>
          <Button onPress={() => this.props.navigation.navigate('Account')}>
            <Icon name="user" type="FontAwesome" style={{color:"gainsboro"}} />
          </Button>
        </FooterTab>
      </Footer>
      </View>
    )
  }
}
