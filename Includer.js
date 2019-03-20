import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Image,SafeAreaView,ScrollView} from 'react-native';
import {createBottomTabNavigator,createStackNavigator,createDrawerNavigator,createAppContainer} from 'react-navigation';
import Main from './main'
import Drawer from './Components/Drawer'
import DrawerEn from './Components/DrawerEn'
import HomeEn from './Components/HomeEn'
import SearchEn from './Components/SearchEn'
import CategoryEn from './Components/CategoryEn'
import ItemEn from './Components/Items/ItemEn'
import AccountEn from './Components/AccountEn'
import {  Home,AccountComponent,Search,Account,Category,CategoriesEn} from './Components'
import Item1 from './Components/Items/Item1';
import Cart from './Components/Cart'
import CartEn from './Components/CartEn'
import ListViewEn from './Components/ListViewEn'
import TwoColumnEn from './Components/TwoColumnEn'
import ThreeColumnEn from './Components/ThreeColumnEn'
// import CategoriesEn from './Components/CategoriesEn'
import ListView from './Components/ListView';
import TwoColumn from './Components/TwoColumns'
import ThreeColumn from './Components/ThreeColumn'
import Categories from './Components/Categories'
import Login from './Components/Login'
import LoginEN from './Components/LoginEn'

export default class Index extends Component {

    static navigationOptions = {
      drawerLabel:() => null
    }
  
    state={
      Lang:this.props.navigation.getParam('Lang',"en")
    }
  
    render() {
      return (
          <View style={{flex:1}}>
            {this.state.Lang == "en" ? <NavigatorEn /> : <Navigator />}
          </View>

      );
    }
  }
  
  
  const DrawerNavEN = createDrawerNavigator({
    Home:{
        screen:HomeEn
},
      Account:{
        screen:AccountEn
    },
  Category:{
    screen:CategoryEn
  },
  Search:{
    screen:SearchEn
  },
  Item:{
    screen:ItemEn
  },
  Cart:{
    screen:CartEn
  },
  ListView:{
    screen:ListViewEn
  },
  TwoColumn:{
    screen:TwoColumnEn
  },
  ThreeColumn:{
    screen:ThreeColumnEn
  },
  Categories:{
    screen:CategoriesEn
  },
  Index:{
    screen:Index
},
Login:{
  screen:LoginEN
}
},

{
  contentComponent:DrawerEn,
  contentOptions:{
  activeTintColor:"#42C2BF",
  inactiveTintColor:"black",
  activeBackgroundColor:"rgba(0,0,0,0)",
  inactiveBackgroundColor:"rgba(0,0,0,0)",
  }
})


const DrawerNav = createDrawerNavigator({
  Home:{
    screen:Home
  },
  Category:{
    screen:Category
  },
  Search:{
    screen:Search
  },
  Account:{
    screen:Account
  },
  Item:{
    screen:Item1
  },
  Cart:{
    screen:Cart
  },
  ListView:{
    screen:ListView
  },
  TwoColumn:{
    screen:TwoColumn
  },
  ThreeColumn:{
    screen:ThreeColumn
  },
  Categories:{
    screen:Categories
  },
  Index:{
      screen:Index
  },
  Login:{
    screen:Login
  }
},
{
  contentComponent:Drawer,
  contentOptions:{
  activeTintColor:"#42C2BF",
  inactiveTintColor:"black",
  activeBackgroundColor:"rgba(0,0,0,0)",
  inactiveBackgroundColor:"rgba(0,0,0,0)",
  }
})

const Navigator = createAppContainer(DrawerNav)
const NavigatorEn = createAppContainer(DrawerNavEN)

const styles = StyleSheet.create({
  DrawerView:{
    height:150,
    width:"90%", 
    alignItems:'center', 
    justifyContent: 'center', 
    borderBottomWidth: 2, 
    borderColor: 'white',
    marginBottom: 20,
  },
  DrawerIcon:{
    width:24,
    height:24,
    color:"white"
  }
})