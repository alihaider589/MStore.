import React, { Component } from 'react';
import {Platform,TextInput, StyleSheet, Text, View,Image, TouchableOpacity,BackHandler,SafeAreaView,ScrollView,ImageBackground} from 'react-native';
import {Header,Button,Input,Left,Body,Right,Icon,Footer,FooterTab} from 'native-base'
import Modal from 'react-native-modal'
import I18n from 'react-native-i18n'
import EN from './I18N/EN'
import AR from './I18N/AR'


export default class ListView extends Component {

    

    static navigationOptions={
        drawerLabel:null
    }

    state = {
        isModalVisible:false
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
        return true
      }
  
    componentWillUnmount() {
      this._didFocusSubscription && this._didFocusSubscription.remove();
      this._willBlurSubscription && this._willBlurSubscription.remove();
    }

  componentWillUnmount() {
    this._didFocusSubscription && this._didFocusSubscription.remove();
    this._willBlurSubscription && this._willBlurSubscription.remove();
  }


    static navigationOptions = {
        drawerLabel:() => null
      }

  render() {
    I18n.fallbacks=true;
    I18n.locale="AR"
    I18n.translations={
      AR,
      EN
    }
    return (
      <View style={{flex:1,backgroundColor: "white",}}>
         {/* Header Start */}
         <View style={style.Header}>
          <View style={{
            alignItems:"flex-start",
            margin:10,
            flexGrow: 1,
          }}>
          <TouchableOpacity onPress={() => this.props.navigation.toggleDrawer()}>
            <Icon name="align-left" type="FontAwesome" />
          </TouchableOpacity>
          </View>
          <View style={{
            alignItems:"flex-end",
            margin:10,
            flexGrow:1
          }}>
          <TouchableOpacity onPress={() => {this.setState({isModalVisible:!this.state.isModalVisible})}}>
            <Icon name="th-large" type="FontAwesome" />
          </TouchableOpacity>
          </View>
        </View>
        {/* header End */}

                {/* Modal starts */} 
                <Modal style={style.BottomModal} onBackButtonPress={() => {this.setState({isModalVisible: false})}} animationInTiming={700} animationOutTiming={700} backdropOpacity={0.5} isVisible={this.state.isModalVisible}>
            <View style={{backgroundColor: "white",marginTop:10,marginLeft:10,marginRight:10,borderRadius:10}}>
                <View style={{alignItems:"flex-end",marginTop:10}}>
                    <TouchableOpacity onPress={() => {this.setState({isModalVisible:!this.state.isModalVisible})}}>
                    <Icon name="times" type="FontAwesome" style={{marginRight: 20,}}/>
                    </TouchableOpacity>
                </View>
                <View style={{justifyContent:"center",marginTop:10,flexDirection:"row",width:"100%",alignItems: 'center',height:80}}>
                    <TouchableOpacity onPress={() => 
                        {this.props.navigation.navigate('Home');
                        this.setState({isModalVisible:!this.state.isModalVisible})
                        }} style={{width:"40%",alignItems: 'center',height:70,borderRadius:10,justifyContent: 'center',}}>
                        <View>
                        <Icon style={{fontSize:40}} name="view-agenda" type="MaterialIcons" />                      
                        </View>
                        <Text style={{color:"black"}}>Horizontal</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => 
                        {this.props.navigation.navigate('ListView');
                        this.setState({isModalVisible:!this.state.isModalVisible})}
                        } style={{width:"40%",alignItems: 'center',justifyContent: 'center',height:70,borderRadius:10,backgroundColor: "#42C2BF"}}>
                        <View>
                        <Icon name="view-list" type="MaterialIcons" style={{fontSize:40}}/>
                        </View>
                        <Text style={{color:"black"}}>List</Text>
                    </TouchableOpacity>
                </View>
                <View style={{justifyContent:"center",marginTop:10,flexDirection:"row",width:"100%",alignItems: 'center',height:80}}>
                    <TouchableOpacity onPress={() => {this.props.navigation.navigate('TwoColumn');
                    this.setState({isModalVisible:!this.state.isModalVisible})
                }} style={{width:"40%",alignItems: 'center',height:70,borderRadius:10,justifyContent: 'center'}}>
                        <View>
                        <Icon style={{fontSize:40}} name="th-large" type="FontAwesome" />                      
                        </View>
                        <Text style={{color:"black"}}>Two Column</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {this.props.navigation.navigate('ThreeColumn');
                    this.setState({isModalVisible:!this.state.isModalVisible})
                }} style={{width:"40%",alignItems: 'center',justifyContent: 'center',height:70,borderRadius:10,}}>
                        <View>
                        <Icon name="view-column" type="MaterialIcons" style={{fontSize:40}}/>
                        </View>
                        <Text style={{color:"black"}}>Three Column</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
        {/* Modal ends */} 

        {/* Body starts */}
        <ScrollView style={{flex:1,width:"100%"}}>
            <View style={{width:'100%',alignItems:"center",flex:1}}>
                <View style={{width:"100%"}}>
                   <TouchableOpacity onPress={() => this.props.navigation.navigate('Item',{Picture:'https://dj.rane.com/files/blog//64setup_traktor.png'})} style={{alignItems: 'center',}} activeOpacity={0.8}>
                    <ImageBackground source={{uri:'https://dj.rane.com/files/blog//64setup_traktor.png'}} style={{width:"98%",height:350,alignItems:"flex-start"}}>
                     <View style={{justifyContent: 'flex-end',height:"90%"}}>
                       <Text style={{fontSize:20,color:'white',fontWeight:"bold",marginLeft:5}}>{I18n.t("Dell_Pc_By_Apptron")}</Text>
                       <Text style={{fontSize:15,color:'white',marginLeft:5,marginBottom:5}}>$88.0</Text>
                       </View>
                    </ImageBackground>
                   </TouchableOpacity>  
                </View>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Item',{Picture:'https://storage-asset.msi.com/global/picture/support/navigation_15413966055bdfd87d4e093.png'})} style={{flexDirection:"row",width:"90%"}}>
                    <View style={{marginTop:10,width:80,}}>
                        <Image style={{width:80,height:130,borderRadius:10,}} source={{uri:'https://storage-asset.msi.com/global/picture/support/navigation_15413966055bdfd87d4e093.png'}} />
                    </View>
                    <View style={{marginTop:10,marginLeft:10,width:"60%",height:130,}}>
                        <Text style={{color:"black",fontSize:20}}>
                       {I18n.t("Graphic_Cards")}

                        </Text>
                        <Text style={{color:"black",fontSize:13,marginTop:10}}>
                            $88.00
                        </Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Item',{Picture:'https://asset.msi.com/resize/image/global/product/product_1_20180612110053_5b1f376535ac3.png62405b38c58fe0f07fcef2367d8a9ba1/600.png'})} style={{flexDirection:"row",width:"90%"}}>
                    <View style={{marginTop:10,width:80,}}>
                        <Image style={{width:80,height:130,borderRadius:10,}} source={{uri:'https://asset.msi.com/resize/image/global/product/product_1_20180612110053_5b1f376535ac3.png62405b38c58fe0f07fcef2367d8a9ba1/600.png'}} />
                    </View>
                    <View style={{marginTop:10,marginLeft:10,width:"60%",height:130,}}>
                        <Text style={{color:"black",fontSize:20}}>
                      {I18n.t("SAMSUNG_240HZ_SCREEN")}
                        </Text>
                        <Text style={{color:"black",fontSize:13,marginTop:10}}>
                            $58.00
                        </Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Item',{Picture:'https://us.123rf.com/450wm/cepn/cepn1706/cepn170600150/80126398-laptop-on-table-in-office-with-panoramic-sunset-view-of-modern-downtown-skyscrapers-at-business-dist.jpg?ver=6'})} style={{flexDirection:"row",width:"90%"}}>
                    <View style={{marginTop:10,width:80,}}>
                        <Image style={{width:80,height:130,borderRadius:10,}} source={{uri:'https://us.123rf.com/450wm/cepn/cepn1706/cepn170600150/80126398-laptop-on-table-in-office-with-panoramic-sunset-view-of-modern-downtown-skyscrapers-at-business-dist.jpg?ver=6'}} />
                    </View>
                    <View style={{marginTop:10,marginLeft:10,width:"60%",height:130,}}>
                        <Text style={{color:"black",fontSize:20}}>
                        {I18n.t("RAM")}
                        </Text>
                        <Text style={{color:"black",fontSize:13,marginTop:10}}>
                            $128.00
                        </Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Item',{Picture:'http://www.itp.net/images/content/617928/xlarge/43623-flash-st_xlarge.jpg'})} style={{flexDirection:"row",width:"90%"}}>
                    <View style={{marginTop:10,width:80,}}>
                        <Image style={{width:80,height:130,borderRadius:10,}} source={{uri:'http://www.itp.net/images/content/617928/xlarge/43623-flash-st_xlarge.jpg'}} />
                    </View>
                    <View style={{marginTop:10,marginLeft:10,width:"60%",height:130,}}>
                        <Text style={{color:"black",fontSize:20}}>
                        {I18n.t("HP_Laptop")}
                        </Text>
                        <Text style={{color:"black",fontSize:13,marginTop:10}}>
                            $148.00
                        </Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Item',{Picture:'https://www.electronicproducts.com/uploadedImages/Power_Products/Batteries_and_Fuel_Cells/PowerSphere_Hub.PNG?n=5633'})} style={{flexDirection:"row",width:"90%"}}>
                    <View style={{marginTop:10,width:80,}}>
                        <Image style={{width:80,height:130,borderRadius:10,}} source={{uri:'https://www.electronicproducts.com/uploadedImages/Power_Products/Batteries_and_Fuel_Cells/PowerSphere_Hub.PNG?n=5633'}} />
                    </View>
                    <View style={{marginTop:10,marginLeft:10,width:"60%",height:130,}}>
                        <Text style={{color:"black",fontSize:20}}>
                         {I18n.t("Google_Assitant")}
                        </Text>
                        <Text style={{color:"black",fontSize:13,marginTop:10}}>
                            $200.00
                        </Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Item',{Picture:'http://www.chinasmartproduct.com/uploads/201811575/2018-new-products-electronic-cigarette-kit17516617402.jpg'})} style={{flexDirection:"row",width:"90%"}}>
                    <View style={{marginTop:10,width:80,}}>
                        <Image style={{width:80,height:130,borderRadius:10,}} source={{uri:'http://www.chinasmartproduct.com/uploads/201811575/2018-new-products-electronic-cigarette-kit17516617402.jpg'}} />
                    </View>
                    <View style={{marginTop:10,marginLeft:10,width:"60%",height:130,}}>
                        <Text style={{color:"black",fontSize:20}}>
                   {I18n.t("Ipod")}
                        </Text>
                        <Text style={{color:"black",fontSize:13,marginTop:10}}>
                            $88.00
                        </Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Item',{Picture:'http://www.shure.com/assets/all/product_types/homepage/headphones-75e03921730162872508ccf9d94b7ace32766f862ccb0c37d5cfd1ce388f4241.png'})} style={{flexDirection:"row",width:"90%"}}>
                    <View style={{marginTop:10,width:80,}}>
                        <Image style={{width:80,height:130,borderRadius:10,}} source={{uri:'http://www.shure.com/assets/all/product_types/homepage/headphones-75e03921730162872508ccf9d94b7ace32766f862ccb0c37d5cfd1ce388f4241.png'}} />
                    </View>
                    <View style={{marginTop:10,marginLeft:10,width:"60%",height:130,}}>
                        <Text style={{color:"black",fontSize:20}}>
                         {I18n.t("Headphones")}
                        </Text>
                        <Text style={{color:"black",fontSize:13,marginTop:10}}>
                            $48.00
                        </Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Item',{Picture:'http://allyouwant.pk/wp-content/uploads/2018/04/Alien-Multimedia-Speaker.png'})} style={{flexDirection:"row",width:"90%"}}>
                    <View style={{marginTop:10,width:80,}}>
                        <Image style={{width:80,height:130,borderRadius:10,}} source={{uri:'http://allyouwant.pk/wp-content/uploads/2018/04/Alien-Multimedia-Speaker.png'}} />
                    </View>
                    <View style={{marginTop:10,marginLeft:10,width:"60%",height:130,}}>
                        <Text style={{color:"black",fontSize:20}}>
                        {I18n.t("Speakers")}
                        </Text>
                        <Text style={{color:"black",fontSize:13,marginTop:10}}>
                            $28.00
                        </Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Item',{Picture:'http://www.sclance.com/pngs/iphone-6-png-no-background/iphone_6_png_no_background_714721.png'})} style={{flexDirection:"row",width:"90%"}}>
                    <View style={{marginTop:10,width:80,}}>
                        <Image style={{width:80,height:130,borderRadius:10,}} source={{uri:'http://www.sclance.com/pngs/iphone-6-png-no-background/iphone_6_png_no_background_714721.png'}} />
                    </View>
                    <View style={{marginTop:10,marginLeft:10,width:"60%",height:130,}}>
                        <Text style={{color:"black",fontSize:20}}>
                         {I18n.t("Iphone")}
                        </Text>
                        <Text style={{color:"black",fontSize:13,marginTop:10}}>
                            $228.00
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>    
        </ScrollView>
        {/* Body ends */}

            {/* Footer Tab */}
            <Footer>
          <FooterTab style={{backgroundColor: "white",}}>
            <Button onPress={() => this.props.navigation.navigate('Home')}>
              <Icon name="home" style={{color:"#42C2BF"}} />
            </Button>
            <Button onPress={() => this.props.navigation.navigate('Categories')}>
              <Icon name="th-large" type="FontAwesome" style={{color:"gainsboro"}}/>
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
    );
  }
}
const style = StyleSheet.create({
    ViewDisplay:{
      backgroundColor: "white",
       width:150,
       alignItems:"center"
      },
      ColumnStyle:{
        height: 250,
        alignItems:"center",
        justifyContent: 'center',
      },
      TextStyle:{
        fontWeight:"bold",
        color:"black", 
        alignContent: 'center',
      },
      Header:{
          width:"100%",
          height:50,
          backgroundColor: 'white',
          flexDirection: 'row',
        },
        BottomModal: {
          justifyContent: "flex-end",
          height:"50%",
          margin: 0,
        },
  })