import React, { Component } from 'react';
import { View, Text, TouchableOpacity,Image,BackHandler } from 'react-native';
import { Container, Header, Content, Footer, FooterTab, Button, Icon,Drawer } from 'native-base';
import I18n from 'react-native-i18n'
import EN from './I18N/EN'
import AR from './I18N/AR'

export default class Cart extends Component {

  state = {
    iconBackground:"white",
    iconBorder:"#42C2BF",
    iconColor:"#42C2BF",
    counter:1,
    ActualPrice:176.00,
    DaynamicPrice:176.00,
  }

  
  _didFocusSubscription;
  _willBlurSubscription;
  
  constructor(props) {
    super(props);
    this._didFocusSubscription = props.navigation.addListener('didFocus', payload =>
      BackHandler.addEventListener('hardwareBackPress', this.onBackButtonPressAndroid)
    );
  }

  componentDidMount() {
    this._willBlurSubscription = this.props.navigation.addListener('willBlur', payload =>
      BackHandler.removeEventListener('hardwareBackPress', this.onBackButtonPressAndroid)
    );
  }

  onBackButtonPressAndroid = () => {
    this.props.navigation.navigate('Home')
    this.props.navigation.closeDrawer()
    return true
    }

  componentWillUnmount() {
    this._didFocusSubscription && this._didFocusSubscription.remove();
    this._willBlurSubscription && this._willBlurSubscription.remove();
  }


  CounterIncrementer = () => {
     this.setState({
        counter:this.state.counter < 10 ? this.state.counter + 1 : this.state.counter,
        DaynamicPrice:this.state.counter < 10 ? this.state.DaynamicPrice + this.state.ActualPrice : this.state.DaynamicPrice
     })
  }

  CounterDecrementer = () => {
   this.setState({
      counter:this.state.counter > 1 ? this.state.counter - 1 : this.state.counter,
      DaynamicPrice:this.state.counter > 1 ? this.state.DaynamicPrice - this.state.ActualPrice : this.state.DaynamicPrice
   })
}

  render() {

   I18n.fallbacks=true;
   I18n.locale="EN"
   I18n.translations={
     AR,
     EN
   }

    return (
      <View style={{flex:1,backgroundColor:"white",}}>
      {/* Delivery icons */}
        <View style={{marginTop:30,width:"100%",alignItems: 'center',}}>
          <View style={{width:"80%",flexDirection:"row",alignItems:"center",justifyContent: 'center',marginTop:10}}>
             <TouchableOpacity>
                <View style={{flexDirection:'row',backgroundColor:"white",width:40,height:40,borderRadius:50,alignItems: 'center',justifyContent: 'center',borderWidth:0.7,borderColor:"silver"}}>
                    <View style={{backgroundColor:this.state.iconBackground,width:30,height:30,borderRadius:50,alignItems: 'center',justifyContent: 'center',borderWidth:2,borderColor: this.state.iconBorder,}}>
                       <Icon name="cart" style={{fontSize: 15,color:this.state.iconColor}} />
                    </View>  
                </View> 
             </TouchableOpacity>
             <View style={{backfaceVisibility:'visible',backgroundColor: 'white',width:60,height:15,borderTopWidth:1,borderBottomWidth:1,borderColor:"silver",marginLeft:-2,marginRight:-2}}>
             </View>
             <TouchableOpacity>
                <View style={{flexDirection:'row',backgroundColor:"white",width:40,height:40,borderRadius:50,alignItems: 'center',justifyContent: 'center',borderWidth:0.7,borderColor:"silver"}}>
                    <View style={{backgroundColor:"silver",width:30,height:30,borderRadius:50,alignItems: 'center',justifyContent: 'center',borderWidth:2,borderColor:"silver",}}>
                       <Icon name="location-on" type="MaterialIcons" style={{fontSize: 15,color:"white"}} />
                    </View>  
                </View> 
             </TouchableOpacity>
             <View style={{backgroundColor: 'white',width:60,height:15,borderTopWidth:1,borderBottomWidth:1,borderColor:"silver",marginLeft:-2,marginRight:-2}}>
             </View>
             <TouchableOpacity>
                <View style={{flexDirection:'row',backgroundColor:"white",width:40,height:40,borderRadius:50,alignItems: 'center',justifyContent: 'center',borderWidth:0.7,borderColor:"silver"}}>
                    <View style={{backgroundColor:"silver",width:30,height:30,borderRadius:50,alignItems: 'center',justifyContent: 'center',borderWidth:2,borderColor:"silver",}}>
                    </View>  
                </View> 
             </TouchableOpacity>
             <View style={{backgroundColor: 'white',width:60,height:15,borderTopWidth:1,borderBottomWidth:1,borderColor:"silver",marginLeft:-2,marginRight:-2}}>
             </View>
             <TouchableOpacity>
                <View style={{flexDirection:'row',backgroundColor:"white",width:40,height:40,borderRadius:50,alignItems: 'center',justifyContent: 'center',borderWidth:0.7,borderColor:"silver"}}>
                    <View style={{backgroundColor:"silver",width:30,height:30,borderRadius:50,alignItems: 'center',justifyContent: 'center',borderWidth:2,borderColor: "silver",}}>
                       <Icon name="flag" style={{fontSize: 15,color:"white"}} />
                    </View>  
                </View> 
             </TouchableOpacity>
          </View>
        </View>

        {/* Delivery Product */}
        <View 
        style={{alignItems:'center',width:"100%",height:150}}>
           <View
            style={{width:"95%",margin:10,marginTop:30,flexDirection:"row"}}>
              <View
               style={{flexGrow:1,alignItems:"flex-start"}}>
                 <Text 
                 style={{fontSize:20,color:"black"}}>{I18n.t("Total_Price")}:</Text>
              </View>
              <View
               style={{flexGrow:1,alignItems:"flex-end",justifyContent:"center"}}>
                  <Text style={{color:"#42C2BF",fontSize:15}}>${this.state.DaynamicPrice}</Text>
              </View>
           </View>
           <View
            style={{flexDirection:"row",width:'100%',borderBottomWidth:0.5,borderTopWidth:0.5,borderColor:"silver",height:150,alignItems:"center",justifyContent: 'center',}}>
                  <View style={{marginTop:10,marginLeft:10,width:80,}}>
                     <Image 
                     style={{width:120,height:80,borderRadius:10,}}

                      source={{uri:'https://www.cookiespcrepairs.com.au/wp-content/uploads/2018/03/computersetupfmcos.png'}} />
                  </View>
                  <View 
                  style={{marginTop:10,marginLeft:10,width:"60%",height:130,}}>
                     <Text 
                     style={{color:"black",fontSize:15,marginLeft:30}}>
                       {I18n.t("Dell_PC_BY_APPTRON")}
                     </Text>
                     <Text
                      style={{color:"black",fontSize:20,marginTop:10,marginLeft:35}}>
                        $69.00
                     </Text>
                     <View style={{width:'100%',alignItems:'flex-end',justifyContent:"flex-end",height:65}}>
                        <Icon name="trash-alt" type="FontAwesome5" style={{fontSize:15,}} />
                     </View>
                  </View>
                  <View style={{marginTop:10,marginLeft:10,width:"10%",alignItems:"center",justifyContent: 'center',}}>
                     <View style={{width:25,backgroundColor: "gainsboro",borderRadius:10,height:120,alignItems:"center"}}>
                        <Icon onPress={this.CounterIncrementer} name="arrow-dropup" style={{fontSize:25,color:'grey'}} />
                        <Text style={{marginTop:25}}>{this.state.counter}</Text>
                        <Icon onPress={this.CounterDecrementer}
                          name="arrow-dropdown" style={{fontSize:25,color:"grey",marginTop:25}} />
                     </View>
                  </View>
             </View>
        </View>

        <View style={{alignItems:"flex-end",flexDirection:"row",width:"100%",flex:1,}}>
            <TouchableOpacity 
            onPress={()=>this.props.navigation.navigate('Item')}
            style={{backgroundColor: "rgba(220,220,220,0.5)", flexGrow:1,height:40,justifyContent:"center",alignItems: 'center',flexDirection:"row"}}>
               <Icon name="arrow-back" style={{fontSize:10}} />
               <Text>{I18n.t("Back")}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Login')} style={{backgroundColor: "#42C2BF",justifyContent: 'center', flexGrow:1,height:40,alignItems:"center"}}>
               <Text style={{color:"white"}}>{I18n.t("Nextstep")}</Text>
            </TouchableOpacity>
        </View>

        {/* Body ends here */}

        {/* Footer Tab */}
        <Footer>
          <FooterTab style={{backgroundColor: "white",}}>
            <Button onPress={() => this.props.navigation.navigate('Home')}>
              <Icon name="home" style={{color:"gainsboro"}} />
            </Button>
            <Button onPress={() => this.props.navigation.navigate('Category')}>
              <Icon name="th-large" type="FontAwesome" style={{color:"gainsboro"}}/>
            </Button>
            <Button onPress={() => this.props.navigation.navigate('Search')}>
              <Icon active name="search" type="FontAwesome" style={{color:"gainsboro"}} />
            </Button>
            <Button onPress={() => this.props.navigation.navigate('Cart')}>
              <Icon name="cart" style={{color:"#42C2BF"}} />
            </Button>
            <Button onPress={() => this.props.navigation.navigate('Account')}>
              <Icon name="user" type="FontAwesome" style={{color:"gainsboro"}} />
            </Button>
          </FooterTab>
        </Footer>
      </View>
    );
  }
}