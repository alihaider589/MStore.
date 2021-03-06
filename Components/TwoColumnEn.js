import React, { Component } from 'react'
import {Platform,TextInput, StyleSheet, Text,BackHandler, View,Image, TouchableOpacity,SafeAreaView,ScrollView,ImageBackground} from 'react-native';
import {Header,Button,Input,Left,Body,Right,Icon,Footer,FooterTab} from 'native-base'
import { Col, Row, Grid } from 'react-native-easy-grid';
import Modal from 'react-native-modal'
import I18n from 'react-native-i18n'
import EN from './I18N/EN'
import AR from './I18N/AR'


export default class TwoColumnEn extends Component {
  static navigationOptions={
    drawerLabel:null
  }
  state={
    searchModal:false
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

  
  static navigationOptions = {
    drawerLabel:() => null
  }
  
  render() {
    I18n.fallbacks=true;
    I18n.locale="EN"
    I18n.translations={
      AR,
      EN
    }
    return (
       <SafeAreaView style={{flex:1, backgroundColor: "white",}}>
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
       <ScrollView>
           <View style={{width:"100%"}}>
              <TouchableOpacity onPress={() => this.props.navigation.navigate('Item',{Picture:'https://storage-asset.msi.com/global/picture/support/navigation_15413966055bdfd87d4e093.png'})} style={{alignItems: 'center',}} activeOpacity={0.8}>
                <ImageBackground source={{uri:'https://storage-asset.msi.com/global/picture/support/navigation_15413966055bdfd87d4e093.png'}} style={{width:"98%",height:350,alignItems:"flex-start"}}>
                   <View style={{justifyContent: 'flex-end',height:"90%"}}>
                   <Text style={{fontSize:20,color:'black',fontWeight:"bold",marginLeft:5}}>{I18n.t("Graphic_Cards")}</Text>
                   <Text style={{fontSize:15,color:'black',marginLeft:5,marginBottom:5}}>$88.0</Text>
                 </View>
              </ImageBackground>
             </TouchableOpacity>  
          </View>
         <Grid>
            <Col style={style.ColumnStyle}>
              <TouchableOpacity onPress={() => this.props.navigation.navigate('Item',{Picture:'https://asset.msi.com/resize/image/global/product/product_1_20180612110053_5b1f376535ac3.png62405b38c58fe0f07fcef2367d8a9ba1/600.png'})}>
                  <Image source={{uri:'https://asset.msi.com/resize/image/global/product/product_1_20180612110053_5b1f376535ac3.png62405b38c58fe0f07fcef2367d8a9ba1/600.png'}} style={{width:150, height:200}} />
                      <View style={style.ViewDisplay}>
                        <Text style={style.TextStyle}>
                      {I18n.t("SAMSUNG_240HZ_SCREEN")}
                        
                        </Text>
                        <Text style={{fontSize:12,color:"black"}}>$38.00</Text>
                      </View>
              </TouchableOpacity>
            </Col>
            <Col style={style.ColumnStyle}>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Item',{Picture:'http://www.completesol.com/images/comp2.png'})}>
                  <Image source={{uri:'http://www.completesol.com/images/comp2.png'}} style={{width:150, height:200}} />
                      <View style={style.ViewDisplay}>
                        <Text style={style.TextStyle}>
                        {I18n.t("Dell_Pc_By_Apptron")}
                        </Text>
                        <Text style={{fontSize:12,color:"black"}}>$18.00</Text>
                      </View>
                </TouchableOpacity>
            </Col>
          </Grid>
          <Grid>
            <Col style={style.ColumnStyle}>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Item',{Picture:'http://www.chinasmartproduct.com/uploads/201811575/2018-new-products-electronic-cigarette-kit17516617402.jpg'})}>
                  <Image source={{uri:'http://www.chinasmartproduct.com/uploads/201811575/2018-new-products-electronic-cigarette-kit17516617402.jpg'}} style={{width:150, height:200}} />
                      <View style={style.ViewDisplay}>
                        <Text style={style.TextStyle}>
                        
                   {I18n.t("Ipod")}
                        
                        </Text>
                        <Text style={{fontSize:12,color:"black"}}>$38.00</Text>
                      </View>
                </TouchableOpacity>  
            </Col>
            <Col style={style.ColumnStyle}>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Item',{Picture:'http://www.shure.com/assets/all/product_types/homepage/headphones-75e03921730162872508ccf9d94b7ace32766f862ccb0c37d5cfd1ce388f4241.png'})}>
                  <Image source={{uri:'http://www.shure.com/assets/all/product_types/homepage/headphones-75e03921730162872508ccf9d94b7ace32766f862ccb0c37d5cfd1ce388f4241.png'}} style={{width:150, height:200}} />
                      <View style={style.ViewDisplay}>
                        <Text style={style.TextStyle}>
                        {I18n.t("Headphones")}
                        
                        
                        </Text>
                        <Text style={{fontSize:12,color:"black"}}>$38.00</Text>
                      </View>
                </TouchableOpacity>
            </Col>
          </Grid>
          <Grid>
            <Col style={style.ColumnStyle}>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Item',{Picture:'https://images.homedepot-static.com/productImages/a2352d0e-fac1-4501-ba48-5249476a08fd/svn/stainless-steel-amana-over-the-range-microwaves-amv2307pfs-40_300.jpg'})}>
                  <Image source={{uri:'https://images.homedepot-static.com/productImages/a2352d0e-fac1-4501-ba48-5249476a08fd/svn/stainless-steel-amana-over-the-range-microwaves-amv2307pfs-40_300.jpg'}} style={{width:150, height:200}} />
                      <View style={style.ViewDisplay}>
                        <Text style={style.TextStyle}>
                        {I18n.t("Headphones")}
                        
                        
                        </Text>
                        <Text style={{fontSize:12,color:"black"}}>$38.00</Text>
                      </View>
                </TouchableOpacity>
            </Col>
            <Col style={style.ColumnStyle}>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Item',{Picture:'http://allyouwant.pk/wp-content/uploads/2018/04/Alien-Multimedia-Speaker.png'})}>
                  <Image source={{uri:'http://allyouwant.pk/wp-content/uploads/2018/04/Alien-Multimedia-Speaker.png'}} style={{width:150, height:200}} />
                      <View style={style.ViewDisplay}>
                        <Text style={style.TextStyle}>
                        {I18n.t("Speakers")}
                        
                        
                        </Text>
                        <Text style={{fontSize:12,color:"black"}}>$38.00</Text>
                      </View>
                </TouchableOpacity>      
            </Col>
          </Grid>
          <Grid>
            <Col style={style.ColumnStyle}>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Item',{Picture:'http://www.sclance.com/pngs/iphone-6-png-no-background/iphone_6_png_no_background_714721.png'})}>
                  <Image source={{uri:'http://www.sclance.com/pngs/iphone-6-png-no-background/iphone_6_png_no_background_714721.png'}} style={{width:150, height:200}} />
                      <View style={style.ViewDisplay}>
                        <Text style={style.TextStyle}>
                        {I18n.t("Iphone")}
                        
                        
                        </Text>
                        <Text style={{fontSize:12,color:"black"}}>$38.00</Text>
                      </View>
                </TouchableOpacity>
            </Col>
            <Col style={style.ColumnStyle}>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Item',{Picture:'https://images-ssl-usweb.bbystatic.com/pacsales/resources/images/slot2_roku.png'})}>
                  <Image source={{uri:'https://images-ssl-usweb.bbystatic.com/pacsales/resources/images/slot2_roku.png'}} style={{width:150, height:200}} />
                      <View style={style.ViewDisplay}>
                        <Text style={style.TextStyle}>
                        
                        {I18n.t("Iphone")}
                        
                        </Text>
                        <Text style={{fontSize:12,color:"black"}}>$38.00</Text>
                      </View>
                </TouchableOpacity>
            </Col>
          </Grid>
          <Grid>
            <Col style={style.ColumnStyle}>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Item',{Picture:'https://www.apple.com/euro/buy/b/screens/images/mac_ipad_ipod_hero.png'})}>
                  <Image source={{uri:'https://www.apple.com/euro/buy/b/screens/images/mac_ipad_ipod_hero.png'}} style={{width:150, height:200}} />
                      <View style={style.ViewDisplay}>
                        <Text style={style.TextStyle}>
                        
                        {I18n.t("Iphone")}
                        
                        </Text>
                        <Text style={{fontSize:12,color:"black"}}>$38.00</Text>
                      </View>
                </TouchableOpacity>
            </Col>
            <Col style={style.ColumnStyle}>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Item',{Picture:'https://www.plantronics.com/content/dam/plantronics/products/voyager-5200.png.transform/hero-image/img.png'})}>
                  <Image source={{uri:'https://www.plantronics.com/content/dam/plantronics/products/voyager-5200.png.transform/hero-image/img.png'}} style={{width:150, height:200}} />
                      <View style={style.ViewDisplay}>
                        <Text style={style.TextStyle}>
                        
                        {I18n.t("Iphone")}
                        
                        </Text>
                        <Text style={{fontSize:12,color:"black"}}>$38.00</Text>
                      </View>
                </TouchableOpacity>
            </Col>
          </Grid>
          <Grid>
          <Col style={style.ColumnStyle}>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Item',{Picture:'https://assets.bose.com/content/dam/Bose_DAM/Web/consumer_electronics/global/products/headphones/bose_noise_masking_sleepbuds/product_silo_images/noise_masking_sleepbuds_EC_hero.psd/_jcr_content/renditions/cq5dam.web.320.320.png'})}>
                  <Image source={{uri:'https://assets.bose.com/content/dam/Bose_DAM/Web/consumer_electronics/global/products/headphones/bose_noise_masking_sleepbuds/product_silo_images/noise_masking_sleepbuds_EC_hero.psd/_jcr_content/renditions/cq5dam.web.320.320.png'}} style={{width:150, height:200}} />
                      <View style={style.ViewDisplay}>
                        <Text style={style.TextStyle}>
                        
                        {I18n.t("Iphone")}
                        
                        
                        </Text>
                        <Text style={{fontSize:12,color:"black"}}>$38.00</Text>
                      </View>
                </TouchableOpacity>
            </Col>
          </Grid>
        </ScrollView>

        {/* Modal starts */} 
        <Modal style={style.BottomModal} onBackButtonPress={() => {this.setState({isModalVisible: false})}} animationInTiming={700} animationOutTiming={700} backdropOpacity={0.5} isVisible={this.state.isModalVisible}>
            <View style={{backgroundColor: "white",marginTop:10,marginLeft:10,marginRight:10,borderRadius:10}}>
              <View style={{alignItems:"flex-end",marginTop:10}}>
                <TouchableOpacity onPress={() => {this.setState({isModalVisible:!this.state.isModalVisible})}}>
                   <Icon name="times" type="FontAwesome" style={{marginRight: 20,}}/>
                </TouchableOpacity>
              </View>
              <View style={{justifyContent:"center",marginTop:10,flexDirection:"row",width:"100%",alignItems: 'center',height:80}}>
                  <TouchableOpacity onPress={() => {this.props.navigation.navigate('Home');
                  this.setState({isModalVisible:!this.state.isModalVisible})
                }} style={{width:"40%",alignItems: 'center',height:70,borderRadius:10,justifyContent: 'center',}}>
                    <View>
                      <Icon style={{fontSize:40}} name="view-agenda" type="MaterialIcons" />                      
                    </View>
                    <Text style={{color:"black"}}>Horizontal</Text>
                  </TouchableOpacity>
                <TouchableOpacity onPress={() =>
                  { this.props.navigation.navigate('ListView');
                  this.setState({isModalVisible:!this.state.isModalVisible})
                  }} style={{width:"40%",alignItems: 'center',justifyContent: 'center',height:70,borderRadius:10}}>
                    <View>
                      <Icon name="view-list" type="MaterialIcons" style={{fontSize:40}}/>
                    </View>
                    <Text style={{color:"black"}}>List</Text>
                </TouchableOpacity>
              </View>
              <View style={{justifyContent:"center",marginTop:10,flexDirection:"row",width:"100%",alignItems: 'center',height:80}}>
                  <TouchableOpacity onPress={() =>
                    
                    
                    {this.props.navigation.navigate('TwoColumn');
                    this.setState({isModalVisible:!this.state.isModalVisible})
                    } }style={{width:"40%",alignItems: 'center',height:70,borderRadius:10,justifyContent: 'center',backgroundColor: "#42C2BF"}}>
                    <View>
                      <Icon style={{fontSize:40}} name="th-large" type="FontAwesome" />                      
                    </View>
                    <Text style={{color:"black"}}>Two Column</Text>
                  </TouchableOpacity>
                <TouchableOpacity onPress={() =>{ this.props.navigation.navigate('ThreeColumn');
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

           {/* Footer Tab */}
        <Footer>
          <FooterTab style={{backgroundColor: "white",}}>
            <Button onPress={() => this.props.navigation.navigate('Home')}>
              <Icon name="home" style={{color:"#42C2BF"}} />
            </Button>
            <Button onPress={() => this.props.navigation.navigate('Category')}>
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
      </SafeAreaView>
    )
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