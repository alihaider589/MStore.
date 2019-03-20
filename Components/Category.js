import React, { Component } from 'react';
import {View } from 'react-native'
import { Container, Header, Tab, Tabs, TabHeading, Icon, Text ,Footer,FooterTab,Button} from 'native-base';
import Categories from './Categories';
import Vendor from './Vendor';

export default class Category extends Component {
  static navigationOptions={
    drawerLabel:null
  }
  render() {
    return (
      <View style={{flex:1}}>

      <Container>

        <Tabs tabBarActiveTextColor="rgb(0,0,0)">
          <Tab
          
          activeTextStyle={{color: 'black', fontWeight: 'bold'}}
          heading={
            <TabHeading style={{backgroundColor: 'white'}} >
              <Text style={{color:'rgb(68, 69, 70)'}}>Categories</Text>
              </TabHeading>
            } >
            <Categories 
            
            catnav={()=>this.props.navigation.navigate('ListView')}
            
          homenav={()=>this.props.navigation.navigate('TwoColumn')}

clothnav={()=>this.props.navigation.navigate("ThreeColumn")}
electronav={()=>this.props.navigation.navigate("ListView")}
          
          
          />

          </Tab>
          <Tab
            heading={ 
              <TabHeading  style={{backgroundColor: 'white'}}>
              <Text style={{color:'rgb(68, 69, 70)'}}>Vendors</Text>
              </TabHeading>
            }>
            <Vendor />
          </Tab>
        </Tabs>
      </Container>
      <View>
    
    <Footer>
    <FooterTab style={{backgroundColor: "white",}}>
      <Button onPress={() => this.props.navigation.navigate('Home')}>
        <Icon name="home" style={{color:"gainsboro"}}  />
      </Button>
      <Button onPress={() => this.props.navigation.navigate('Category')}>
        <Icon name="th-large" type="FontAwesome" style={{color:"#42C2BF"}}/>
      </Button>
      <Button onPress={() => this.props.navigation.navigate('Search')}>
        <Icon active name="search" type="FontAwesome" style={{color:"gainsboro"}} />
      </Button>
      <Button onPress={() => this.props.navigation.navigate('Account')}>
        <Icon name="user" type="FontAwesome" style={{color:"gainsboro"}} />
      </Button>
    </FooterTab>
  </Footer>
  </View>
            </View>
    );
  }
}


<Tabs tabBarUnderlineStyle={{borderBottomWidth:2}}>
    <Tab
     heading="Popular"
      tabStyle={{backgroundColor: 'red'}} 
      textStyle={{color: '#fff'}} 
      activeTabStyle={{backgroundColor: 'red'}} 
      activeTextStyle={{color: '#fff', fontWeight: 'normal'}}
      >
        // tab content
    </Tab>
    <Tab heading="Popular" tabStyle={{backgroundColor: 'red'}} textStyle={{color: '#fff'}} activeTabStyle={{backgroundColor: 'red'}} activeTextStyle={{color: '#fff', fontWeight: 'normal'}}>
        // tab content
    </Tab>
</Tabs>