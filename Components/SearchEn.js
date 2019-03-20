import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity,StyleSheet,ScrollView,Image,ImageBackground} from 'react-native';
import { Icon,Footer,FooterTab,Button } from 'native-base';
import Modal from 'react-native-modal';
import { Chip } from 'react-native-paper';
import Main from '../main'
import I18n from 'react-native-i18n'
import EN from './I18N/EN'
import AR from './I18N/AR'


export default class Search extends Component {

  state = {
    isModalVisible: false,
    chipBackground1:"#F5F5F5",
    ChipBorderColor1:"#F5F5F5",
    ChipWidth1:1,
    chipBackground2:"#F5F5F5",
    ChipBorderColor2:"#F5F5F5",
    ChipWidth2:1,
    chipBackground3:"#F5F5F5",
    ChipBorderColor3:"#F5F5F5",
    ChipWidth3:1,
    chipBackground4:"#F5F5F5",
    ChipBorderColor4:"#F5F5F5",
    ChipWidth4:1,
    chipBackground5:"#F5F5F5",
    ChipBorderColor5:"#F5F5F5",
    ChipWidth5:1,
    chipBackground6:"#F5F5F5",
    ChipBorderColor6:"#F5F5F5",
    ChipWidth6:1,
    chipBackground7:"#F5F5F5",
    ChipBorderColor7:"#F5F5F5",
    ChipWidth7:1,
    chipBackground8:"#F5F5F5",
    ChipBorderColor8:"#F5F5F5",
    ChipWidth8:1,
    chipBackground9:"#F5F5F5",
    ChipBorderColor9:"#F5F5F5",
    ChipWidth9:1,
    chipBackground10:"#F5F5F5",
    ChipBorderColor10:"#F5F5F5",
    ChipWidth10:1,
    chipBackground11:"#F5F5F5",
    ChipBorderColor11:"#F5F5F5",
    ChipWidth11:1,

    sliderValue:0,
  };

    ChipSelected1 = () =>{
      if (this.state.ChipBorderColor1 == "#F5F5F5")
      {
        this.setState({
          chipBackground1:"white",
          ChipWidth1:1,
          ChipBorderColor1:"#42C2BF"
        })
      }
      if (this.state.ChipBorderColor1 == "#42C2BF")
            {
              this.setState({
                chipBackground1:"#F5F5F5",
                ChipWidth1:0,
                ChipBorderColor1:"#F5F5F5"
              })
            }
    }
      
      ChipSelected2 = () =>{
        if (this.state.ChipBorderColor2 == "#F5F5F5")
        {
          this.setState({
            chipBackground2:"white",
            ChipWidth2:1,
            ChipBorderColor2:"#42C2BF"
          })
        }
        if (this.state.ChipBorderColor2 == "#42C2BF")
      {
        this.setState({
          chipBackground2:"#F5F5F5",
          ChipWidth2:0,
          ChipBorderColor2:"#F5F5F5"
        })
      }
    }
      
        ChipSelected3 = () =>{
          if (this.state.ChipBorderColor3 == "#F5F5F5")
          {
            this.setState({
              chipBackground3:"white",
              ChipWidth3:1,
              ChipBorderColor3:"#42C2BF"
            })
          }
          if (this.state.ChipBorderColor3 == "#42C2BF")
          {
            this.setState({
              chipBackground3:"#F5F5F5",
              ChipWidth3:0,
              ChipBorderColor3:"#F5F5F5"
            })
          }
        }
          ChipSelected4 = () =>{
            if (this.state.ChipBorderColor4 == "#F5F5F5")
            {
              this.setState({
                chipBackground4:"white",
                ChipWidth4:1,
                ChipBorderColor4:"#42C2BF"
              })
            }
            if (this.state.ChipBorderColor4 == "#42C2BF")
            {
              this.setState({
                chipBackground4:"#F5F5F5",
                ChipWidth4:0,
                ChipBorderColor4:"#F5F5F5"
              })
            }
          }
          
            ChipSelected5 = () =>{
              if (this.state.ChipBorderColor5 == "#F5F5F5")
              {
                this.setState({
                  chipBackground5:"white",
                  ChipWidth5:1,
                  ChipBorderColor5:"#42C2BF"
                })
              }
              if (this.state.ChipBorderColor5 == "#42C2BF")
            {
              this.setState({
                chipBackground5:"#F5F5F5",
                ChipWidth5:0,
                ChipBorderColor5:"#F5F5F5"
              })
            }
            }
              ChipSelected6 = () =>{
                if (this.state.ChipBorderColor6 == "#F5F5F5")
                {
                  this.setState({
                    chipBackground6:"white",
                    ChipWidth6:1,
                    ChipBorderColor6:"#42C2BF"
                  })
                }
                if (this.state.ChipBorderColor6 == "#42C2BF")
            {
              this.setState({
                chipBackground6:"#F5F5F5",
                ChipWidth6:0,
                ChipBorderColor6:"#F5F5F5"
              })
            }
              }

                ChipSelected7 = () =>{
                  if (this.state.ChipBorderColor7 == "#F5F5F5")
                  {
                    this.setState({
                      chipBackground7:"white",
                      ChipWidth7:1,
                      ChipBorderColor7:"#42C2BF"
                    })
                  }
                  if (this.state.ChipBorderColor7 == "#42C2BF")
                  {
                    this.setState({
                      chipBackground7:"#F5F5F5",
                      ChipWidth7:0,
                      ChipBorderColor7:"#F5F5F5"
                    })
                  }
                }   
 
                ChipSelected8 = () =>{
                  if (this.state.ChipBorderColor8 == "#F5F5F5")
                  {
                    this.setState({
                      chipBackground8:"white",
                      ChipWidth8:1,
                      ChipBorderColor8:"#42C2BF"
                    })
                  }
                  if (this.state.ChipBorderColor8 == "#42C2BF")
                  {
                    this.setState({
                      chipBackground8:"#F5F5F5",
                      ChipWidth8:0,
                      ChipBorderColor8:"#F5F5F5"
                    })
                  }
                }   

                ChipSelected9 = () =>{
                  if (this.state.ChipBorderColor9 == "#F5F5F5")
                  {
                    this.setState({
                      chipBackground9:"white",
                      ChipWidth9:1,
                      ChipBorderColor9:"#42C2BF"
                    })
                  }
                  if (this.state.ChipBorderColor9 == "#42C2BF")
                  {
                    this.setState({
                      chipBackground9:"#F5F5F5",
                      ChipWidth9:0,
                      ChipBorderColor9:"#F5F5F5"
                    })
                  }
                }   

                ChipSelected10 = () =>{
                  if (this.state.ChipBorderColor10 == "#F5F5F5")
                  {
                    this.setState({
                      chipBackground10:"white",
                      ChipWidth10:1,
                      ChipBorderColor10:"#42C2BF"
                    })
                  }
                  if (this.state.ChipBorderColor10 == "#42C2BF")
                  {
                    this.setState({
                      chipBackground10:"#F5F5F5",
                      ChipWidth10:0,
                      ChipBorderColor10:"#F5F5F5"
                    })
                  }
                }   

                ChipSelected11 = () =>{
                  if (this.state.ChipBorderColor11 == "#F5F5F5")
                  {
                    this.setState({
                      chipBackground11:"white",
                      ChipWidth11:1,
                      ChipBorderColor11:"#42C2BF"
                    })
                  }
                  if (this.state.ChipBorderColor11 == "#42C2BF")
                  {
                    this.setState({
                      chipBackground11:"#F5F5F5",
                      ChipWidth11:0,
                      ChipBorderColor11:"#F5F5F5"
                    })
                  }
                }   
  

  _toggleModal = () =>{
    this.setState({ isModalVisible: !this.state.isModalVisible });
    }

  render() {
    I18n.fallbacks=true;
    I18n.locale="EN"
    I18n.translations={
      AR,
      EN
    }

    return (
      <View style={{flex:1,backgroundColor: "white",width:"100%",alignItems:"center"}}>
        <View style={{width:"80%",borderRadius:20,marginTop: 50,height:40,backgroundColor:"rgba(220,220,220,0.4)",flexDirection:"row",justifyContent: 'center', elevation:1}}>
          <View style={{width:"10%",height:40,justifyContent: 'center',alignItems:"flex-end"}}>
          <Icon name="search" type="FontAwesome" style={{fontSize: 20,color:"black"}} />
          </View>  
          <TextInput style={{width:"70%",justifyContent: 'center',}} placeholder={I18n.t("Search_Product_By_name")} placeholderTextColor="rgba(0,0,0,0.7)" selectionColor="#42C2BF">
          </TextInput>
          <View style={{width:"20%",height:40,justifyContent: 'center',alignItems:"center",}}>
            <View style={{height:20,borderLeftWidth:0.6,borderColor: 'silver',}}>
              <TouchableOpacity onPress={this._toggleModal}>
                <Icon name="tune" type="MaterialIcons" style={{fontSize: 20,marginLeft: 5,color:"silver"}} />
              </TouchableOpacity>
            </View>
          </View> 
        </View>

<View style={{flex:1,marginTop:20}}>
<Text style={{fontSize:20,fontWeight:'bold',marginLeft:10}}>
    {I18n.t("Categories")}
</Text>

    <ScrollView   horizontal={true} showsHorizontalScrollIndicator={false} style={{marginTop:10}}>

<View style={{height:150,width:250,marginLeft:10}}>
<TouchableOpacity style={{borderRadius:2,}}>

<ImageBackground  source={{uri:'https://a8032d8db563c4b4d109-a54e6191de0d1d254fc6b902e3fafe7f.ssl.cf1.rackcdn.com/White_Phillips_Desktop_Speakers.jpg'}}
 style={{height:150,width:250}} imageStyle={{borderRadius:10}}>
<Text style={{marginTop:'45%',fontWeight:'bold',color:'rgba(0,0,0,0.8)',fontSize:25,marginLeft:'70%'}}>{I18n.t("Digital")}</Text>
 </ImageBackground>

 </TouchableOpacity>
</View>




<View style={{height:150,width:250,marginLeft:10}}>
<TouchableOpacity style={{borderRadius:2,}}
onPress={()=>this.props.navigation.navigate('ListView')}
>

<ImageBackground  source={{uri:'https://i.kinja-img.com/gawker-media/image/upload/s--2GPM9sfj--/c_scale,f_auto,fl_progressive,q_80,w_800/jrtlgaqnn00qaa3eedx4.jpg'}}
 style={{height:150,width:250}} imageStyle={{borderRadius:10}}>
<Text style={{marginTop:'45%',fontWeight:'bold',color:'rgba(0,0,0,0.8)',fontSize:25,marginLeft:'60%'}}>{I18n.t("Gadget")}</Text>
 </ImageBackground>

 </TouchableOpacity>
</View>



<View style={{height:150,width:250,marginLeft:10}}>
<TouchableOpacity style={{borderRadius:2,}}
onPress={()=>this.props.navigation.navigate('TwoColumn')}
>

<ImageBackground  source={{uri:'https://assetstorev1-prd-cdn.unity3d.com/package-screenshot/c9bee0a5-35ad-4f2a-8ce7-7274c6b12f95_scaled.jpg'}}
 style={{height:150,width:250}} imageStyle={{borderRadius:10}}>
<Text style={{marginTop:'45%',fontWeight:'bold',color:'rgba(0,0,0,0.8)',fontSize:25,marginLeft:'50%'}}>{I18n.t("Clothing")}</Text>
 </ImageBackground>

 </TouchableOpacity>
</View>




<View style={{height:150,width:250,marginLeft:10}}>
<TouchableOpacity style={{borderRadius:2,}}
onPress={()=>this.props.navigation.navigate('ThreeColumn')}
>

<ImageBackground  source={{uri:'https://www.seaslugteam.com/wp-content/uploads/2018/05/portable-radio.jpg'}}
 style={{height:150,width:250}} imageStyle={{borderRadius:10}}>
<Text style={{marginTop:'45%',fontWeight:'bold',color:'rgba(0,0,0,0.8)',fontSize:25,marginLeft:'50%'}}>{I18n.t("Electronics")}</Text>
 </ImageBackground>

 </TouchableOpacity>
</View>




<View style={{height:150,width:250,marginLeft:10}}>
<TouchableOpacity style={{borderRadius:2,}}>

<ImageBackground  source={{uri:'http://danielfooddiary.com/wp-content/uploads/2019/02/alchemist22.jpg'}}
 style={{height:150,width:250}} imageStyle={{borderRadius:10}}>
<Text style={{marginTop:'45%',fontWeight:'bold',color:'rgba(0,0,0,0.8)',fontSize:25,marginLeft:'55%'}}>{I18n.t("Foodies")}</Text>
 </ImageBackground>

 </TouchableOpacity>
</View>




<View style={{height:150,width:250,marginLeft:10}}>
<TouchableOpacity style={{borderRadius:2,}}
onPress={()=>this.props.navigation.navigate('ListView')}
>

<ImageBackground  source={{uri:'https://t3.ftcdn.net/jpg/01/91/25/98/240_F_191259849_SEaCDFFRsRUZC94b0mTVd2yRICkBVhjn.jpg'}}
 style={{height:150,width:250}} imageStyle={{borderRadius:10}}>
<Text style={{marginTop:'45%',fontWeight:'bold',color:'rgba(0,0,0,0.8)',fontSize:25,marginLeft:'60%'}}>{I18n.t("sports")}</Text>
 </ImageBackground>

 </TouchableOpacity>
</View>





    </ScrollView>
</View>
        <Modal onBackButtonPress={() => {this.setState({isModalVisible: false})}} animationInTiming={700} animationOutTiming={300} backdropOpacity={0} isVisible={this.state.isModalVisible} style={style.BottomModal}>
              <ScrollView>
                <View style={{backgroundColor: "white",margin:10}}>
                     <View style={{alignItems:"flex-start",marginTop:10}}>
                          <TouchableOpacity onPress={this._toggleModal}>
                              <Icon name="arrow-back" type="MaterialIcons" style={{marginRight: 20,}}/>
                          </TouchableOpacity>
                     </View>
                     <Text style={{fontSize:25,color:"black",marginLeft:10,marginTop:20}}>
                       Filters
                     </Text>
                     <Text style={{ marginLeft: 10,marginTop:20}}>
                        <Text style={{color:"black",}}>{I18n.t("Product_Catalog")}</Text>
                     </Text>
                     <View style={{flexDirection:"row"}}>
                      <Chip onPress={this.ChipSelected1} style={{margin:5,backgroundColor: this.state.chipBackground1, borderWidth: this.state.ChipWidth1, borderColor:this.state.ChipBorderColor1,}}><Text style={{color:"#42C2BF"}}>Media</Text></Chip>
                      <Chip onPress={this.ChipSelected2} style={{margin:5,backgroundColor: this.state.chipBackground2, borderWidth: this.state.ChipWidth2, borderColor:this.state.ChipBorderColor2,color:"#42C2BF"}}><Text style={{color:"#42C2BF"}}>{I18n.t("Checkers")}</Text></Chip>
                      <Chip onPress={this.ChipSelected3} style={{margin:5,backgroundColor: this.state.chipBackground3, borderWidth: this.state.ChipWidth3, borderColor:this.state.ChipBorderColor3,color:"#42C2BF"}}><Text style={{color:"#42C2BF"}}>{I18n.t("Nutrition")}</Text></Chip>
                     </View>
                     <View style={{flexDirection:"row"}}>
                      <Chip onPress={this.ChipSelected4} style={{margin:5,backgroundColor: this.state.chipBackground4, borderWidth: this.state.ChipWidth4, borderColor:this.state.ChipBorderColor4,color:"#42C2BF"}}><Text style={{color:"#42C2BF"}}>{I18n.t("hunting")}</Text></Chip>
                      <Chip onPress={this.ChipSelected5} style={{margin:5,backgroundColor: this.state.chipBackground5, borderWidth: this.state.ChipWidth5, borderColor:this.state.ChipBorderColor5,color:"#42C2BF"}}><Text style={{color:"#42C2BF"}}>{I18n.t("Electronics")}</Text></Chip>
                      <Chip onPress={this.ChipSelected6} style={{margin:5,backgroundColor: this.state.chipBackground6, borderWidth: this.state.ChipWidth6, borderColor:this.state.ChipBorderColor6,color:"#42C2BF"}}><Text style={{color:"#42C2BF"}}>{I18n.t("Heepster_Good")}</Text></Chip>
                      <Chip onPress={this.ChipSelected7} style={{margin:5,backgroundColor: this.state.chipBackground7, borderWidth: this.state.ChipWidth7, borderColor:this.state.ChipBorderColor7,color:"#42C2BF"}}><Text style={{color:"#42C2BF"}}>{I18n.t("sports")}</Text></Chip>
                     </View>
                     <Text style={{ marginLeft: 10,marginTop:20}}>
                        <Text style={{color:"black",}}>{I18n.t("Product_Tag")}</Text>
                     </Text>
                     <View style={{flexDirection:"row"}}>
                      <Chip onPress={this.ChipSelected8} style={{margin:5,backgroundColor: this.state.chipBackground8, borderWidth: this.state.ChipWidth8, borderColor:this.state.ChipBorderColor8}}><Text style={{color:"#42C2BF"}}>{I18n.t("banana")}</Text></Chip>
                      <Chip onPress={this.ChipSelected9} style={{margin:5,backgroundColor: this.state.chipBackground9, borderWidth: this.state.ChipWidth9, borderColor:this.state.ChipBorderColor9}}><Text style={{color:"#42C2BF"}}>{I18n.t("Top_Sale")}</Text></Chip>
                      <Chip onPress={this.ChipSelected10} style={{margin:5,backgroundColor: this.state.chipBackground10, borderWidth: this.state.ChipWidth10, borderColor:this.state.ChipBorderColor10}}><Text style={{color:"#42C2BF"}}>{I18n.t("sports")}</Text></Chip>
                      <Chip onPress={this.ChipSelected11} style={{margin:5,backgroundColor: this.state.chipBackground11, borderWidth: this.state.ChipWidth11, borderColor:this.state.ChipBorderColor11}}><Text style={{color:"#42C2BF"}}>{I18n.t("grey")}</Text></Chip>
                     </View>
                     <View style={{width:"100%",alignItems:"center",marginTop:20}}>
                       <View style={{flexDirection:"row",width:"100%"}}>
                          <View style={{width:"80%",alignItems:"center"}}>
                            <Text style={{color:"#42C2BF",fontSize:20,}}>${this.state.sliderValue.toFixed(2)}</Text>
                          </View>
                          <Text style={{fontSize:15,width:"20%"}}>$4000</Text>
                       </View>

                     </View>
                     <View style={{alignItems:'center',marginTop:10,width:"100%"}}>
                       <TouchableOpacity style={style.Button} activeOpacity = {0.8} >
                         <Text style={{color:"white",fontSize:17}}>{I18n.t("Filters")}</Text>
                       </TouchableOpacity>
                       <TouchableOpacity activeOpacity = {0.8} >
                         <Text style={{color:"#42C2BF",marginTop:10}}>{I18n.t("Clear_Filter")}</Text>
                       </TouchableOpacity>
                     </View>
                </View>
              </ScrollView>  
        </Modal>

        <View style={{flex:1}}>
</View>
  <Footer>
  <FooterTab style={{backgroundColor: "white",}}>
    <Button onPress={() => this.props.navigation.navigate('Home')}>
      <Icon name="home"  style={{color:"gainsboro"}}/>
    </Button>
    <Button onPress={() => this.props.navigation.navigate('Category')}>
      <Icon name="th-large" type="FontAwesome" style={{color:"gainsboro"}}/>
    </Button>
    <Button onPress={() => this.props.navigation.navigate('Search')}>
      <Icon active name="search" type="FontAwesome" style={{color:"#42C2BF"}}  />
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
  BottomModal: {
    justifyContent: "flex-start",
    height:"100%",
    margin: 0,
  },
  Button:{
    borderRadius:20,
    backgroundColor: '#42C2BF',
    alignItems:"center",
    justifyContent: 'center',
    height:40,
    width:"90%",
    marginTop:10,
    borderRadius:20
}
})