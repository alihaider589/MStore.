import React, { Component } from 'react'
import { Text, View, StyleSheet, Image, TextInput,BackHandler, TouchableOpacity, Dimensions,ScrollView } from 'react-native'
import Logo from './Images/logo.png'
import facebook from './Images/facebook.png';
import { Container, Header, Content, Footer, FooterTab, Button, Icon,Drawer } from 'native-base';
import I18n from 'react-native-i18n';
import AR from '../Components/I18N/AR';
import EN from '../Components/I18N/EN';

export default class LoginEN extends Component {

  state={
    Lang:"EN",
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
    this.props.navigation.navigate('Home',{Lang:this.state.Lang})
    return true
    }

  componentWillUnmount() {
    this._didFocusSubscription && this._didFocusSubscription.remove();
    this._willBlurSubscription && this._willBlurSubscription.remove();
  }


  render() {

    I18n.fallbacks = true;
    I18n.locale = this.state.Lang;
    I18n.translations = {
      AR,
      EN
    };

    return (
      <View style={{flex:1}}>
       {/* Header */}
       <View style={style.Header}>
          <View style={{
            alignItems:"flex-start",
            margin:10,
            flexGrow: 1,
          }}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Home',{Lang:this.state.Lang})}>
              <Icon name="arrow-back" style={{fontSize:20}} />
            </TouchableOpacity>
          </View>
          <View style={{
            alignItems:"flex-start",
            margin:10,
            flexGrow: 1,
            justifyContent: 'center',
          }}>
              <Image source={Logo} style={{height:40,width:110}} />
          </View>
        </View>
        {/* Header ends here */}
      <ScrollView style={{flex:1,backgroundColor: "white",}}>
      <View style={style.container}>
      <View style={{alignItems:"center"}}>
      <Image source={Logo} style={style.insta}></Image>
      </View>
      <View style={style.txtView}>
          <TextInput style={style.txtInput} placeholder={I18n.t('Username')} placeholderTextColor="#A9A9A9"></TextInput>
          <TextInput style={style.txtInput} placeholder={I18n.t('Password')} placeholderTextColor="#A9A9A9"></TextInput>
      </View>
      <View style={{width:"80%", alignItems:"flex-end"}}>
      <TouchableOpacity >
        <Text style={{fontSize:13, marginLeft:30, fontWeight:"bold"}}>{I18n.t('Forgot')}</Text>
      </TouchableOpacity>
      </View>
      <View style={style.loginBtnView}>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('CreditCard')} style={style.loginBtn}>
          <Text style={{color:"white", fontWeight:"bold"}}>{I18n.t('Login')}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={style.loginBtn}>
          <Text style={{color:"white", fontWeight:"bold"}}><Image source={facebook} style={{borderRadius:5}}/> &nbsp;{I18n.t('Login_Facebook')}</Text>
        </TouchableOpacity>
      </View>
      <View style={style.bottomView}>
      <TouchableOpacity onPress={() => this.props.navigation.navigate('Signup',{Lang:this.state.Lang})}><Text style={{paddingTop:"3%", fontSize:12,color:"black"}}>{I18n.t('Dont_Have')}<Text style={{fontWeight:"bold", color:"#42C2BF"}}>{I18n.t('Signup')}</Text></Text></TouchableOpacity>
      </View>
      </View>
      </ScrollView>

      {/* Body ends here */}
       {/* Footer Tab */}
       <Footer>
          <FooterTab style={{backgroundColor: "white",}}>
            <Button onPress={() => this.props.navigation.navigate('Home',{Lang:this.state.Lang})}>
              <Icon name="home" style={{color:"gainsboro"}} />
            </Button>
            <Button onPress={() => this.props.navigation.navigate('Categories',{Lang:this.state.Lang})}>
              <Icon name="th-large" type="FontAwesome" style={{color:"gainsboro"}}/>
            </Button>
            <Button onPress={() => this.props.navigation.navigate('Search',{Lang:this.state.Lang})}>
              <Icon active name="search" type="FontAwesome" style={{color:"gainsboro"}} />
            </Button>
            <Button onPress={() => this.props.navigation.navigate('Cart',{Lang:this.state.Lang})}>
              <Icon name="cart" style={{color:"gainsboro"}} />
            </Button>
            <Button onPress={() => this.props.navigation.navigate('Account',{Lang:this.state.Lang})}>
              <Icon name="user" type="FontAwesome" style={{color:"gainsboro"}} />
            </Button>
          </FooterTab>
        </Footer>
</View>
    )
  }
}

const style = StyleSheet.create({
   container:{
     flex:1,
    alignItems:"center",
    backgroundColor:"white",
    width:"100%",
  },
   insta:{
     width:220, 
    height:82,
    marginTop:30
  },
  txtView:{marginTop:50, 
    width:"80%", 
    alignItems:"center"
  },
  txtInput:{
       borderColor:"black",
       borderWidth:1,
       width:"100%",
       borderRadius:5,
       backgroundColor:"rgba(220,220,220,0.3)",
       marginTop:10
   },
   loginBtnView:{
    width:"80%", 
    alignItems:"center",
    flex:0.8
   },
   loginBtn:{
     backgroundColor:'#42C2BF',
     width:"100%",
     height:40,
     alignItems:"center",
     justifyContent:"center",
     borderRadius:5,
     marginTop:10
   },
   bottomView:{ 
     flex:0.2,  
     width:"100%", 
     justifyContent:"flex-start", 
     alignItems:"center" ,
     marginBottom: 20,
  },
  Header:{
    width:"100%",
    height:50,
    backgroundColor: 'white',
    flexDirection: 'row',
  }
}
)

const {
  width: SCREEN_WIDTH,
  height: SCREEN_HEIGHT,
} = Dimensions.get('window');