import React, { Component } from 'react';
import { View, Text,StyleSheet,TouchableOpacity,Image,ScrollView,ImageBackground } from 'react-native';
import Cloth from './Images/Category_cloth_banner.jpg';
import I18n from 'react-native-i18n'
import AR from './I18N/AR'
import EN from './I18N/EN'

export default class CategoriesEn extends Component {

  render() {
    I18n.fallbacks=true;
    I18n.locale="EN"
    I18n.translations={
      AR,
      EN
    }
    return (
      <View style={{flex:1,width:"100%"}}>
        <ScrollView style={{width:"100%"}}>
              <View style={{marginTop:20,width:"100%",alignItems:"center"}}>
                  <View style={{alignItems:"center",width:"100%"}}>
                      <TouchableOpacity style={{width:'100%',alignItems:"center"}} activeOpacity={0.8}
                  onPress={this.props.homenav}
                    
                    >
                        <ImageBackground  
                        source={{uri:'https://i.servimg.com/u/f19/17/13/16/24/cover_12.png'}} 
                        imageStyle={{borderRadius:10}} blurRadius={1}
                        style={{width:"97%", height:120,justifyContent: 'center',marginLeft:10,alignItems: 'center',}}>
                        <View style={{width:"90%",alignItems:"flex-end"}}>
                            <Text style={{color:"white",fontSize:25,marginRight:30}}>{I18n.t("Digital")}</Text>
                            <Text style={{color:"white",fontSize:10,marginRight:30}}>45 {I18n.t("Product")}</Text>
                           </View>
                        </ImageBackground>
                      </TouchableOpacity>
                  </View>
                  <View style={{alignItems:"center",width:"100%",marginTop:20}}>
                      <TouchableOpacity style={{width:'100%',alignItems:"center"}} activeOpacity={0.8}
                      onPress={this.props.catnav}
                      >
                        <ImageBackground blurRadius={1.5} source={{uri:'https://www.maniwonders.com/wp-content/uploads/2017/11/Silver-Cascade-Navy-Cover-Slideshow.jpg'}} imageStyle={{borderRadius:10}} style={{width:"97%", height:120,justifyContent: 'center',marginLeft:10,alignItems:"center"}}>
                            <View style={{width:"90%",alignItems:"flex-end"}}>
                              <Text style={{color:"white",fontSize:25,marginRight:30}}>{I18n.t("Gadget")}</Text>
                              <Text style={{color:"white",fontSize:10,marginRight:30}}>35 {I18n.t("Product")}</Text>
                            </View>
                        </ImageBackground>
                      </TouchableOpacity>
                  </View>

                  <View style={{alignItems:"center",width:"100%",marginTop:20}}>
                      <TouchableOpacity style={{width:'100%',alignItems:"center"}} activeOpacity={0.8}
                      onPress={this.props.clothnav}
                      >
                        <ImageBackground blurRadius={1}
                         source={{uri:'https://kartmy.com/wp-content/uploads/2018/09/81HbOgTDikL._SL1500_.jpg'}} imageStyle={{borderRadius:10}} style={{width:"97%", height:120,justifyContent: 'center',marginLeft:10,alignItems:"center"}}>
                          <View style={{width:"90%",alignItems:"flex-start"}}>
                              <Text style={{color:"white",fontSize:25,marginRight:30}}>{I18n.t("Electronics")}</Text>
                              <Text style={{color:"white",fontSize:10,marginRight:30}}>78 {I18n.t("Product")}</Text>
                          </View>
                        </ImageBackground>
                      </TouchableOpacity>
                  </View>
                  <View style={{alignItems:"center",width:"100%",marginTop:20}}>
                      <TouchableOpacity style={{width:'100%',alignItems:"center"}} activeOpacity={0.8}
                      onPress={this.props.electronav}
                      
                      >
                        <ImageBackground blurRadius={1} source={Cloth} imageStyle={{borderRadius:10}}
                         style={{width:"97%", height:120,justifyContent: 'center',marginLeft:10,alignItems: 'center',}}>
                          <View style={{width:"90%",alignItems:"flex-start"}}>
                              <Text style={{color:"white",fontSize:25,marginRight:30}}>{I18n.t("Clothing")}</Text>
                              <Text style={{color:"white",fontSize:10,marginRight:30}}>12 {I18n.t("Product")}</Text>
                          </View>
                        </ImageBackground>
                      </TouchableOpacity>
                  </View>
              </View>
        </ScrollView>
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