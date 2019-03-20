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
import {  Home,AccountComponent,Search,Account,Category,} from './Components'
import Item1 from './Components/Items/Item1';
import Cart from './Components/Cart'
import CartEn from './Components/CartEn'
import ListViewEn from './Components/ListViewEn'
import TwoColumnEn from './Components/ListViewEn'
import ThreeColumnEn from './Components/ThreeColumnEn'
import CategoriesEn from './Components/CategoriesEn'
import ListView from './Components/ListView';
import TwoColumn from './Components/TwoColumns'
import ThreeColumn from './Components/ThreeColumn'
import Categories from './Components/Categories'
import Index from './Includer';

export default class App extends React.Component {

  render() {
    return (
      <Stacker />
      );
  }
}

const DrawerNav = createStackNavigator({
  Home:{
    screen:Index
  }
},
{
  headerMode:"none"
}
)

const Stacker = createAppContainer(DrawerNav)