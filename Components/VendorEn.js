import React, { Component } from 'react';
import { View, Text,StyleSheet,TouchableOpacity,Image,ScrollView,ImageBackground } from 'react-native';
import Man from './Images/Category_man_banner.jpg';
import Cloth from './Images/Category_cloth_banner.jpg';

export default class Vendor extends Component {

  render() {
    return (
      <View style={{flex:1,width:"100%"}}>
       
        <ScrollView style={{width:"100%"}}>
              <View style={{marginTop:20,width:"100%",alignItems:"center"}}>
                  <View style={{alignItems:"center",width:"100%"}}>
                      <TouchableOpacity style={{width:'100%',alignItems:"center"}} activeOpacity={0.8}>
                        <ImageBackground source={Man} imageStyle={{borderRadius:10}} style={{width:"97%", height:120,justifyContent: 'center',marginLeft:10,alignItems: 'center',}}>
                        <View style={{width:"90%",alignItems:"flex-start"}}>
                            <Text style={{color:"white",fontSize:25,marginRight:30}}>Apptron</Text>
                            <Text style={{color:"white",fontSize:10,marginRight:30}}>Karachi City,Pakistan</Text>
                            <Text style={{color:"white",fontSize:10,marginRight:30}}>alihaider589@outlook.com</Text>

                           </View>
                        </ImageBackground>
                      </TouchableOpacity>
                  </View>
                  <View style={{alignItems:"center",width:"100%",marginTop:20}}>
                      <TouchableOpacity style={{width:'100%',alignItems:"center"}} activeOpacity={0.8}>
                        <ImageBackground source={Cloth} imageStyle={{borderRadius:10}} style={{width:"97%", height:120,justifyContent: 'center',marginLeft:10,alignItems: 'center',}}>
                          <View style={{width:"90%",alignItems:"flex-start"}}>
                              <Text style={{color:"white",fontSize:25,marginRight:30}}>Apptron </Text>
                              <Text style={{color:"white",fontSize:10,marginRight:30}}>Karachi City,Pakistan</Text>
                              <Text style={{color:"white",fontSize:10,marginRight:30}}>alihaider589@outlook.com</Text>

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