
import React, { Component } from 'react';
import { View, Text, ScrollView, TouchableOpacity,Switch,Image,StyleSheet } from 'react-native';
import {Icon,Footer,FooterTab,Button} from 'native-base';
import Logo from './Images/logo.png';
import AR from './I18N/AR'
import EN from './I18N/EN'
import I18n from 'react-native-i18n'


export default class AccountComponentEn extends Component {

  static navigationOptions = {
    drawerLabel:()=>null
  }
  state={
    switch1:false,
    switch2:false,
    Wishlist:0,
    MyOrder:0,
  }

  SwitchClick1 = () => {
    this.setState({
      switch1:!this.state.switch1
    })
    this.props.navigation.navigate('Index',{Lang:"en"})
  }

  SwitchClick2 = () => {
    this.setState({
      switch2:!this.state.switch2
    })
  }

  render() {

    I18n.fallbacks=true;
    I18n.locale="AR"
    I18n.translations={
      AR,
      EN
    }

    return (
         <View style={{flex:1,width:"100%"}}>
        {/* Header */}
        <View style={style.Header}>
          <View style={{
            alignItems:"flex-start",
            margin:10,
            flexGrow: 1,
          }}>
            <TouchableOpacity>
              <Icon name="align-left" type="FontAwesome" />
            </TouchableOpacity>
          </View>
          <View style={{
            alignItems:"flex-start",
            margin:10,
            flexGrow: 1,
            justifyContent: 'center',
          }}>
            <TouchableOpacity>
              <Image source={Logo} style={{height:40,width:110}} />
            </TouchableOpacity>
          </View>
        </View>
        {/* Header ends here */}
        <ScrollView>
            <View style={{width:"100%",alignItems:"center",backgroundColor: "white",}}>
              <View style={{flexDirection:"row",width:'90%',height:130,alignItems:"center",backgroundColor: "white",}}>
                  <View style={{marginLeft:10,width:80,}}>
                     <Image style={{width:80,height:80,}} source={{uri :'https://img.icons8.com/color/96/000000/user.png'}} />
                  </View>
                  <View style={{marginLeft:10,width:"60%",height:100,justifyContent: 'center',}}>
                     <Text style={{color:"black",fontSize:30,fontWeight:"bold"}}>
                        {I18n.t("Guest")}
                     </Text>
                     <Text style={{fontSize:12,marginTop:20}}
                     onPress={()=>this.props.navigation.navigate("Login")}
                     >
                        {I18n.t("Login")}
                     </Text>
                  </View>
               </View>
            </View>
            <TouchableOpacity 
            onPress={()=>this.props.navigation.navigate('Cart')}
            style={{width:"100%",alignItems:"center",marginTop:10, height:60,borderBottomWidth: 0.7,borderColor: "silver",backgroundColor: "white",}}>
              <View style={{width:"90%",height:60,justifyContent: 'center',flexDirection: 'row'}}>
                <View style={{flexGrow:1,alignItems:"flex-start",justifyContent: 'center'}}>
                  <Text style={{fontSize:17}}>Cart ({this.state.Wishlist})</Text>
                </View>
                <View style={{flexGrow:1,alignItems:"flex-end",justifyContent: 'center',}}>
                  <Icon name="keyboard-arrow-right" type="MaterialIcons" style={{fontSize: 20,}} />
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={{width:"100%",alignItems:"center", height:60,borderBottomWidth: 0.7,borderColor: "silver",backgroundColor: "white",}}>
              <View style={{width:"90%",height:60,justifyContent: 'center',flexDirection: 'row'}}>
                <View style={{flexGrow:1,alignItems:"flex-start",justifyContent: 'center'}}>
                  <Text style={{fontSize:17}}>{I18n.t("MyOrder")}{`(${this.state.MyOrder})`} </Text>
                </View>
                <View style={{flexGrow:1,alignItems:"flex-end",justifyContent: 'center',}}>
                  <Icon name="keyboard-arrow-right" type="MaterialIcons" style={{fontSize: 20,}} />
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={{width:"100%",alignItems:"center", height:60,borderBottomWidth: 0.7,borderColor: "silver",backgroundColor: "white",}}>
              <View style={{width:"90%",height:60,justifyContent: 'center',flexDirection: 'row'}}>
                <View style={{flexGrow:1,alignItems:"flex-start",justifyContent: 'center'}}>
                  <Text style={{fontSize:17}}>{I18n.t("Chat_List")}</Text>
                </View>
                <View style={{flexGrow:1,alignItems:"flex-end",justifyContent: 'center',}}>
                  <Icon name="keyboard-arrow-right" type="MaterialIcons" style={{fontSize: 20,}} />
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={{width:"100%",alignItems:"center", height:60,borderBottomWidth: 0.7,borderColor: "silver",backgroundColor: "white",}}>
              <View style={{width:"90%",height:60,justifyContent: 'center',flexDirection: 'row'}}>
                <View style={{flexGrow:1,alignItems:"flex-start",justifyContent: 'center'}}>
                  <Text style={{fontSize:17}}>{I18n.t("Language")} EN/AR</Text>
                </View>
                <View style={{flexGrow:1,alignItems:"flex-end",justifyContent: 'center',}}>
                <Switch value={this.state.switch1} onValueChange={this.SwitchClick1}/>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={{width:"100%",alignItems:"center", height:60,borderBottomWidth: 0.7,borderColor: "silver",backgroundColor: "white",}}>
              <View style={{width:"90%",height:60,justifyContent: 'center',flexDirection: 'row'}}>
                <View style={{flexGrow:1,alignItems:"flex-start",justifyContent: 'center'}}>
                  <Text style={{fontSize:17}}>{I18n.t("Contact_us")}</Text>
                </View>
                <View style={{flexGrow:1,alignItems:"flex-end",justifyContent: 'center',}}>
                  <Icon name="keyboard-arrow-right" type="MaterialIcons" style={{fontSize: 20,}} />
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={{width:"100%",alignItems:"center", height:60,borderBottomWidth: 0.7,borderColor: "silver",backgroundColor: "white",}}>
              <View style={{width:"90%",height:60,justifyContent: 'center',flexDirection: 'row'}}>
                <View style={{flexGrow:1,alignItems:"flex-start",justifyContent: 'center'}}>
                  <Text style={{fontSize:17}}>{I18n.t("private_Policies")}</Text>
                </View>
                <View style={{flexGrow:1,alignItems:"flex-end",justifyContent: 'center',}}>
                  <Icon name="keyboard-arrow-right" type="MaterialIcons" style={{fontSize: 20,}} />
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={{width:"100%",alignItems:"center", height:60,borderBottomWidth: 0.7,borderColor: "silver",backgroundColor: "white",}}>
              <View style={{width:"90%",height:60,justifyContent: 'center',flexDirection: 'row'}}>
                <View style={{flexGrow:1,alignItems:"flex-start",justifyContent: 'center'}}>
                  <Text style={{fontSize:17}}>{I18n.t("Terms_and_condition")}</Text>
                </View>
                <View style={{flexGrow:1,alignItems:"flex-end",justifyContent: 'center',}}>
                  <Icon name="keyboard-arrow-right" type="MaterialIcons" style={{fontSize: 20,}} />
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={{width:"100%",alignItems:"center", height:60,borderBottomWidth: 0.7,borderColor: "silver",backgroundColor: "white",}}>
              <View style={{width:"90%",height:60,justifyContent: 'center',flexDirection: 'row'}}>
                <View style={{flexGrow:1,alignItems:"flex-start",justifyContent: 'center'}}>
                  <Text style={{fontSize:17}}>{I18n.t("About_us")}</Text>
                </View>
                <View style={{flexGrow:1,alignItems:"flex-end",justifyContent: 'center',}}>
                  <Icon name="keyboard-arrow-right" type="MaterialIcons" style={{fontSize: 20,}} />
                </View>
              </View>
            </TouchableOpacity>
        </ScrollView>
        <View>
        <Footer>

  <FooterTab style={{backgroundColor: "white",}}>
    <Button onPress={() => this.props.navigation.navigate('Home')}>
      <Icon name="home"  style={{color:"gainsboro"}}/>
    </Button>
    <Button onPress={() => this.props.navigation.navigate('Category')}>
      <Icon name="th-large" type="FontAwesome" style={{color:"gainsboro"}}/>
    </Button>
    <Button onPress={() => this.props.navigation.navigate('Search')}>
      <Icon active name="search" type="FontAwesome" style={{color:"gainsboro"}} />
    </Button>
    <Button onPress={() => this.props.navigation.navigate('Account')}>
      <Icon name="user" type="FontAwesome" style={{color:"#42C2BF"}} />
    </Button>
  </FooterTab>
</Footer>
</View>
    
      </View>
    );
  }
}

const style = StyleSheet.create({
  Header:{
    width:"100%",
    height:50,
    backgroundColor: 'white',
    flexDirection: 'row',
  }
})