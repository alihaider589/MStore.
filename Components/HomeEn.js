import React, { Component } from 'react'
import { View, Text,StyleSheet,TouchableOpacity,ScrollView,Image,ImageBackground,Alert } from 'react-native';
import {StackNavigator,createAppContainer}from 'react-navigation'
import {Icon,Footer,FooterTab,Button} from 'native-base'
import Modal from 'react-native-modal'
import AR from './I18N/AR'
import EN from './I18N/EN'
import I18n from 'react-native-i18n'

export default class HomeEn extends Component {

  state={
    FirstHeart:"silver",
    SecondHeart:"silver",
    ThirdHeart:"silver",
    FourthHeart:"silver",
    FifthHeart:"silver",
    SixthHeart:"silver",
    SeventhHeart:"silver",
    EighthHeart:"silver",
    Nine:"silver",
    Ten:"silver",
    Eleven:"silver",
    Tweleve:"silver",
    Thirteen:"silver",
    Fourteen:"silver",
    Fifteen:"silver",
    Sixteen:"silver",
    Seventeen:"silver",
    Eighteen:"silver",
    Nineteen:"silver",
    Twenty:"silver",
    TwentyOne:"silver",
    isModalVisible: false,




  }

  FirstHeart = () =>{
    if(this.state.FirstHeart == "silver")
    {
      this.setState({
        FirstHeart:"red"
      })
    }
    else{
      this.setState({
        FirstHeart:"silver"
      })
    }
  }

  SecondHeart= () =>{
    if(this.state.SecondHeart == "silver")
    {
      this.setState({
        SecondHeart:"red"
      })
    }
    else{
      this.setState({
        SecondHeart:"silver"
      })
    }
  }

  ThirdHeart = () =>{
    if(this.state.ThirdHeart == "silver")
    {
      this.setState({
        ThirdHeart:"red"
      })
    }
    else{
      this.setState({
        ThirdHeart:"silver"
      })
    }
  }
  FourthHeart = () =>{
    if(this.state.FourthHeart == "silver")
    {
      this.setState({
        FourthHeart:"red"
      })
    }
    else{
      this.setState({
        FourthHeart:"silver"
      })
    }
  }
  FifthHeart = () =>{
    if(this.state.FifthHeart == "silver")
    {
      this.setState({
        FifthHeart:"red"
      })
    }
    else{
      this.setState({
        FifthHeart:"silver"
      })
    }
  }

  SixthHeart = () =>{
    if(this.state.SixthHeart == "silver")
    {
      this.setState({
        SixthHeart:"red"
      })
    }
    else{
      this.setState({
        SixthHeart:"silver"
      })
    }
  }
  SeventhHeart = () =>{
    if(this.state.SeventhHeart == "silver")
    {
      this.setState({
        SeventhHeart:"red"
      })
    }
    else{
      this.setState({
        SeventhHeart:"silver"
      })
    }
  }
  EighthHeart = () =>{
    if(this.state.EighthHeart == "silver")
    {
      this.setState({
        EighthHeart:"red"
      })
    }
    else{
      this.setState({
        EighthHeart:"silver"
      })
    }
  }
  Nine = () =>{
    if(this.state.Nine == "silver")
    {
      this.setState({
        Nine:"red"
      })
    }
    else{
      this.setState({
        Nine:"silver"
      })
    }
  }
  Ten = () =>{
    if(this.state.Ten == "silver")
    {
      this.setState({
        Ten:"red"
      })
    }
    else{
      this.setState({
        Ten:"silver"
      })
    }
  }
  Eleven = () =>{
    if(this.state.Eleven == "silver")
    {
      this.setState({
        Eleven:"red"
      })
    }
    else{
      this.setState({
        Eleven:"silver"
      })
    }
  }
  Tweleve = () =>{
    if(this.state.Tweleve == "silver")
    {
      this.setState({
        Tweleve:"red"
      })
    }
    else{
      this.setState({
        Tweleve:"silver"
      })
    }
  }
  Tweleve = () =>{
    if(this.state.Tweleve == "silver")
    {
      this.setState({
        Tweleve:"red"
      })
    }
    else{
      this.setState({
        Tweleve:"silver"
      })
    }
  }
  Thirteen = () =>{
    if(this.state.Thirteen == "silver")
    {
      this.setState({
        Thirteen:"red"
      })
    }
    else{
      this.setState({
        Thirteen:"silver"
      })
    }
  }
  Fourteen = () =>{
    if(this.state.Fourteen == "silver")

    {
      this.setState({
        Fourteen:"red"
      })
    }
    else{
      this.setState({
        Fourteen:"silver"
      })
    }
  }
  Fifteen = () =>{
    if(this.state.Fifteen == "silver")
    {
      this.setState({
        Fifteen:"red"
      })
    }
    else{
      this.setState({
        Fifteen:"silver"
      })
    }
  }
  Sixteen = () =>{
    if(this.state.Sixteen == "silver")
    {
      this.setState({
        Sixteen:"red"
      })
    }
    else{
      this.setState({
        Sixteen:"silver"
      })
    }
  }
  Seventeen = () =>{
    if(this.state.Seventeen == "silver")
    {
      this.setState({
        Seventeen:"red"
      })
    }
    else{
      this.setState({
        Seventeen:"silver"
      })
    }
  }
  Eighteen = () =>{
    if(this.state.Eighteen == "silver")
    {
      this.setState({
        Eighteen:"red"
      })
    }
    else{
      this.setState({
        Eighteen:"silver"
      })
    }
  }
  Nineteen = () =>{
    if(this.state.Nineteen == "silver")
    {
      this.setState({
        Nineteen:"red"
      })
    }
    else{
      this.setState({
        Nineteen:"silver"
      })
    }
  }
  Twenty = () =>{
    if(this.state.Twenty == "silver")
    {
      this.setState({
        Twenty:"red"
      })
    }
    else{
      this.setState({
        Twenty:"silver"
      })
    }
  }

  TwentyOne = () =>{
    if(this.state.TwentyOne == "silver")
    {
      this.setState({
        TwentyOne:"red"
      })
    }
    else{
      this.setState({
        TwentyOne:"silver"
      })
    }
  }

  render() {
    I18n.fallbacks=true;
    I18n.locale="EN"
    I18n.translations={
      AR,
      EN
    }
    return (

        <View style={{flex:1,backgroundColor:'rgb(247, 248, 252)'}}>
        <ScrollView>
        {/* Header Start */}
         <View style={{
                 width:"100%",
                 height:50,
                 backgroundColor: 'white',
                 flexDirection: 'row',
               
         }}>
           <View style={{
             alignItems:"flex-start",
             margin:10,
             flexGrow: 1,
           }}>
           <TouchableOpacity onPress={() => this.props.navigation.toggleDrawer()}>
             <Icon name="align-left" type="FontAwesome"  
            />
           </TouchableOpacity>
           </View>
           <View style={{
             alignItems:"flex-end",
             margin:10,
             flexGrow:1
           }}>
           <TouchableOpacity>
             <Icon name="th-large" type="FontAwesome" 
             onPress={() => {this.setState({isModalVisible:!this.state.isModalVisible})}}/>
             </TouchableOpacity>
           </View>
         </View>
         {/* header End */}

{/* Logo And System Date Start */}

         <View style={{marginLeft:10,marginTop:30}}>
                <Image source={require('./Images/logo.png')} style={{height:45,width:120}} />
                <Text style={{color:"black",marginTop:5}}>{new Date().toDateString()} English</Text>
              </View>

{/* Logo And System Date End */}



        {/* // Fist slider Starts Here */}
      <ScrollView horizontal={true} style={{marginLeft:10,marginTop:30}} showsHorizontalScrollIndicator={false}>
      <View>
          <View style={{width:255,height:230,backgroundColor:'white'}}>


        <TouchableOpacity style={{alignItems: 'center',}} activeOpacity={0.8} 
        onPress={()=>this.props.navigation.navigate('Item',{Picture:'https://dj.rane.com/files/blog//64setup_traktor.png'})}>
              
          <ImageBackground source={{uri :'https://dj.rane.com/files/blog//64setup_traktor.png'}} 
          style={{width:250,height:150,alignItems:"flex-start",}}>
            <View style={{alignItems:"flex-end",width:"100%"}}>
              <TouchableOpacity onPress={this.FirstHeart}>
                <Icon name='favorite-border' type="MaterialIcons" style={{fontSize:20,color:this.state.FirstHeart}} />
              </TouchableOpacity>
            </View>
            <View style={{justifyContent: 'flex-end',height:"90%"}}>

            </View>
          </ImageBackground>
          
          <View>

          <Text style={{fontSize:15,color:'black',fontWeight:"bold",marginLeft:-10}}>Accellarate X7 PRO media {"\n"}REDOKANSHOP</Text>
              <Text style={{fontSize:15,color:'black',marginBottom:5,marginRight:160}}>$900.00</Text>
          </View>
        </TouchableOpacity>  
          </View>
      </View>
      <View style={{marginLeft:10}}>
       
      <View style={{width:255,height:230,backgroundColor:'white'}}>


<TouchableOpacity style={{alignItems: 'center',}} activeOpacity={0.8}
onPress={()=>this.props.navigation.navigate('Item',{Picture:'https://storage-asset.msi.com/global/picture/support/navigation_15413966055bdfd87d4e093.png'})}
>
      
  <ImageBackground source={{uri :'https://storage-asset.msi.com/global/picture/support/navigation_15413966055bdfd87d4e093.png'}} 
  style={{width:250,height:150,alignItems:"flex-start",}}>
    <View style={{alignItems:"flex-end",width:"100%"}}>
      <TouchableOpacity onPress={this.SecondHeart}>
        <Icon name='favorite-border' type="MaterialIcons" style={{fontSize:20,color:this.state.SecondHeart}} />
      </TouchableOpacity>
    </View>
    <View style={{justifyContent: 'flex-end',height:"90%"}}>

    </View>
  </ImageBackground>
  
  <View>

  <Text style={{fontSize:15,color:'black',fontWeight:"bold",marginLeft:-10}}>Accellarate X7 PRO media {"\n"}REDOKANSHOP</Text>
      <Text style={{fontSize:15,color:'black',marginBottom:5,marginRight:160}}>$900.00</Text>
  </View>
</TouchableOpacity>  
  </View>
</View> 
      <View style={{marginLeft:10}}>
      <View style={{width:255,height:230,backgroundColor:'white'}}>


<TouchableOpacity style={{alignItems: 'center',}} activeOpacity={0.8}
onPress={()=>this.props.navigation.navigate('Item',{Picture:'https://asset.msi.com/resize/image/global/product/product_1_20180612110053_5b1f376535ac3.png62405b38c58fe0f07fcef2367d8a9ba1/600.png'})}
>
      
  <ImageBackground source={{uri :'https://asset.msi.com/resize/image/global/product/product_1_20180612110053_5b1f376535ac3.png62405b38c58fe0f07fcef2367d8a9ba1/600.png'}} 
  style={{width:250,height:150,alignItems:"flex-start",}}>
    <View style={{alignItems:"flex-end",width:"100%"}}>
      <TouchableOpacity onPress={this.ThirdHeart}>
        <Icon name='favorite-border' type="MaterialIcons" style={{fontSize:20,color:this.state.ThirdHeart}} />
      </TouchableOpacity>
    </View>
    <View style={{justifyContent: 'flex-end',height:"90%"}}>

    </View>
  </ImageBackground>
  
  <View>

  <Text style={{fontSize:15,color:'black',fontWeight:"bold",marginLeft:-10}}>Accellarate X7 PRO media {"\n"}REDOKANSHOP</Text>
      <Text style={{fontSize:15,color:'black',marginBottom:5,marginRight:160}}>$900.00</Text>
  </View>
</TouchableOpacity>  
  </View>
</View>
  </ScrollView>






{/* // First Slider Ends Here */}



{/* Categories Icon Slider Starts Here */}

<ScrollView horizontal={true} style={{marginLeft:10,marginTop:30}} showsHorizontalScrollIndicator={false}>
                  <View>
                    <TouchableOpacity style={{alignItems: 'center',}} activeOpacity={0.8}
                    
                    >
                      <Image source={{uri:'https://img.icons8.com/color/48/000000/two-smartphones.png'}} style={{width:50,height:50}} />
                      <Text style={{fontSize:10,color:'black'}}>{I18n.t("Mobile")}</Text>
                    </TouchableOpacity>  
                  </View>
                  <View style={{marginLeft:20}}>
                    <TouchableOpacity style={{alignItems: 'center',}} activeOpacity={0.8}>
                      <Image source={{uri:'https://img.icons8.com/dusk/64/000000/watch.png'}} style={{width:50,height:50}} />
                      <Text style={{fontSize:10,color:'black'}}>{I18n.t("StrangeThing")}</Text>
                    </TouchableOpacity>  
                  </View>
                  <View style={{marginLeft:20}}>
                    <TouchableOpacity style={{alignItems: 'center',}} activeOpacity={0.8}>
                      <Image source={{uri:'https://img.icons8.com/color/48/000000/joystick.png'}} style={{width:50,height:50}} />
                      <Text style={{fontSize:10,color:'black'}}>{I18n.t("TV_and_Video")}</Text>
                    </TouchableOpacity>  
                  </View>
                  <View style={{marginLeft:20}}>
                    <TouchableOpacity style={{alignItems: 'center',}} activeOpacity={0.8}>
                      <Image source={{uri:'https://img.icons8.com/color/48/000000/android-tablet.png'}} style={{width:50,height:50}} />
                      <Text style={{fontSize:10,color:'black'}}>{I18n.t("Accessory")}</Text>
                    </TouchableOpacity>  
                  </View>
                  <View style={{marginLeft:20}}>
                    <TouchableOpacity style={{alignItems: 'center',}} activeOpacity={0.8}>
                      <Image source={{uri:'https://img.icons8.com/office/40/000000/rattle.png'}} style={{width:50,height:50}} />
                      <Text style={{fontSize:10,color:'black'}}>{I18n.t("Gifts")}</Text>
                    </TouchableOpacity>  
                  </View>
                  <View style={{marginLeft:20}}>
                    <TouchableOpacity style={{alignItems: 'center',}} activeOpacity={0.8}>
                      <Image source={{uri:'https://img.icons8.com/office/30/000000/exercise.png'}} style={{width:50,height:50}} />
                      <Text style={{fontSize:10,color:'black'}}>{I18n.t("fitness")}</Text>
                    </TouchableOpacity>  
                  </View>
                  <View style={{marginLeft:20}}>
                    <TouchableOpacity style={{alignItems: 'center',}} activeOpacity={0.8}>
                      <Image source={{uri:'https://img.icons8.com/doodle/48/000000/coniferous-tree.png'}} style={{width:50,height:50}} />
                      <Text style={{fontSize:10,color:'black'}}>{I18n.t("outdoors")}</Text>
                    </TouchableOpacity>  
                  </View>
              </ScrollView>
{/* Categories Icon Slider Ends Here */}



   {/* // slider After Icon Starts Here */}
   <ScrollView horizontal={true} style={{marginLeft:10,marginTop:30}} showsHorizontalScrollIndicator={false}>
      <View style={{width:255,height:107,backgroundColor:'white',alignItems:'center',justifyContent:'center'}}>
          <View style={{height:'97%',width:'97%'}}>

        <TouchableOpacity style={{alignItems: 'center',borderRadius:40}} activeOpacity={0.8}
      onPress={()=>this.props.navigation.navigate('Item',{Picture:'https://us.123rf.com/450wm/cepn/cepn1706/cepn170600150/80126398-laptop-on-table-in-office-with-panoramic-sunset-view-of-modern-downtown-skyscrapers-at-business-dist.jpg?ver=6'})}  
        >
          <ImageBackground source={{uri :'https://us.123rf.com/450wm/cepn/cepn1706/cepn170600150/80126398-laptop-on-table-in-office-with-panoramic-sunset-view-of-modern-downtown-skyscrapers-at-business-dist.jpg?ver=6'}} style={{width:250,height:100,alignItems:"flex-start",}}>
            <View style={{alignItems:"flex-end",width:"100%"}}>
              <TouchableOpacity onPress={this.FirstHeart}>
               
              </TouchableOpacity>
            </View>
            <View style={{justifyContent: 'flex-end',height:"90%"}}>
              <Text style={{fontSize:15,color:'black',marginLeft:150,marginBottom:15}}>{I18n.t("Shop_the")} {"\n"}<Text style={{fontWeight:'bold'}}>{I18n.t("Hottest")}</Text>{"\n"} {I18n.t("Product")}{"\n"}{I18n.t("Shop_Now")}</Text>
            </View>
          </ImageBackground>
        </TouchableOpacity>  
          </View>
      </View>
      <View style={{marginLeft:10}}>
     
      <View style={{width:255,height:107,backgroundColor:'white',alignItems:'center',justifyContent:'center'}}>
          <View style={{height:'97%',width:'97%'}}>

        <TouchableOpacity style={{alignItems: 'center',borderRadius:40}} activeOpacity={0.8}
        
        onPress={()=>this.props.navigation.navigate('Item',{Picture:'https://us.123rf.com/450wm/cepn/cepn1706/cepn170600150/80126398-laptop-on-table-in-office-with-panoramic-sunset-view-of-modern-downtown-skyscrapers-at-business-dist.jpg?ver=6'})}
        
        >
          <ImageBackground source={{uri :'https://us.123rf.com/450wm/cepn/cepn1706/cepn170600150/80126398-laptop-on-table-in-office-with-panoramic-sunset-view-of-modern-downtown-skyscrapers-at-business-dist.jpg?ver=6'}} style={{width:250,height:100,alignItems:"flex-start",}}>
            <View style={{alignItems:"flex-end",width:"100%"}}>
              <TouchableOpacity onPress={this.FirstHeart}>
              
              </TouchableOpacity>
            </View>
            <View style={{justifyContent: 'flex-end',height:"90%"}}>
            <Text style={{fontSize:15,color:'black',marginLeft:150,marginBottom:15}}>{I18n.t("Shop_the")} {"\n"}<Text style={{fontWeight:'bold'}}>{I18n.t("Hottest")}</Text>{"\n"} {I18n.t("Product")}{"\n"}{I18n.t("Shop_Now")}</Text>
          
             </View>
          </ImageBackground>
        </TouchableOpacity>  
          </View>
      </View>
      </View>
      <View style={{marginLeft:10}}>
      <View style={{width:255,height:107,backgroundColor:'white',alignItems:'center',justifyContent:'center'}}>
          <View style={{height:'97%',width:'97%'}}>

        <TouchableOpacity style={{alignItems: 'center',borderRadius:40}} activeOpacity={0.8}
        onPress={()=>this.props.navigation.navigate('Item',{Picture:'https://us.123rf.com/450wm/cepn/cepn1706/cepn170600150/80126398-laptop-on-table-in-office-with-panoramic-sunset-view-of-modern-downtown-skyscrapers-at-business-dist.jpg?ver=6'})}
        
        >
          <ImageBackground source={{uri :'https://us.123rf.com/450wm/cepn/cepn1706/cepn170600150/80126398-laptop-on-table-in-office-with-panoramic-sunset-view-of-modern-downtown-skyscrapers-at-business-dist.jpg?ver=6'}} style={{width:250,height:100,alignItems:"flex-start",}}>
            <View style={{alignItems:"flex-end",width:"100%"}}>
              <TouchableOpacity onPress={this.FirstHeart}>
              
              </TouchableOpacity>
            </View>
            <View style={{justifyContent: 'flex-end',height:"90%"}}>
            <Text style={{fontSize:15,color:'black',marginLeft:150,marginBottom:15}}>{I18n.t("Shop_the")} {"\n"}<Text style={{fontWeight:'bold'}}>{I18n.t("Hottest")}</Text>{"\n"} {I18n.t("Product")}{"\n"}{I18n.t("Shop_Now")}</Text>

            </View>
          </ImageBackground>
        </TouchableOpacity>  
          </View>
      </View>
   

   </View>
  </ScrollView>






{/* //Slider After Icon Ends Here */}



{/* Feature Products start here */}

<View style={{flexDirection:'row',width:'100%',margin:20}}>
              <View style={{width:"70%",alignItems:"flex-start",marginBottom:-10}}>
                <Text style={{fontSize:25,color:"black",fontWeight:'bold'}}>{I18n.t("Feature_Products")}</Text>
              </View>
              <View style={{width:"20%",alignItems:"flex-end",justifyContent: 'center',}}>
                <TouchableOpacity 
                onPress={()=>this.props.navigation.navigate('ListView')}>
                  
                <Text style={{justifyContent:"center"}}>
                <Text style={{fontSize:15,color:"black",color:'rgb(0, 122, 204)'}}>{I18n.t("Show_All")} ></Text>
                </Text>
                </TouchableOpacity>
              </View>
              </View>




              <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                
                
                <View style={{marginLeft:10,marginTop:10,height:160,width:120,backgroundColor:'white'}}>

                <TouchableOpacity 
                onPress={()=>this.props.navigation.navigate('Item',{Picture:'https://www.electronicproducts.com/uploadedImages/Power_Products/Batteries_and_Fuel_Cells/PowerSphere_Hub.PNG?n=5633'})}
                >

                    <ImageBackground source={{uri:'https://www.electronicproducts.com/uploadedImages/Power_Products/Batteries_and_Fuel_Cells/PowerSphere_Hub.PNG?n=5633'}} 
                    style={{width:100, height:100,alignItems:'flex-start'}} >


<View style={{alignItems:"flex-end",width:'120%'}}>
              <TouchableOpacity onPress={this.FourthHeart}>
                <Icon name='favorite-border' type="MaterialIcons" style={{fontSize:20,color:this.state.FourthHeart}} />
              </TouchableOpacity>
            </View>
            <View style={{justifyContent: 'flex-end',height:"90%"}}>

            </View>

                                        
                                        
                                        
                                        </ImageBackground>
                    <View style={{width:100}}>
                      <Text style={{color:"black",fontSize:12}}>{I18n.t("Coupon_Product")}{"\n"}{I18n.t("With_print_Function")}</Text>
                      <Text style={{color:"black",fontSize:12}}>$10.00</Text>
                      <Text style={{color:"black",fontSize:10}}>$450</Text>
                    </View>
                </TouchableOpacity>
                </View>


                      <View style={{marginLeft:10,marginTop:10,height:160,width:120,backgroundColor:'white'}}>

                <TouchableOpacity
                onPress={()=>this.props.navigation.navigate('Item',{Picture:'http://www.chinasmartproduct.com/uploads/201811575/2018-new-products-electronic-cigarette-kit17516617402.jpg'})}
                
                >

                    <ImageBackground source={{uri:'http://www.chinasmartproduct.com/uploads/201811575/2018-new-products-electronic-cigarette-kit17516617402.jpg'}} 
                    style={{width:100, height:100,alignItems:'flex-start'}} >


<View style={{alignItems:"flex-end",width:'120%'}}>
              <TouchableOpacity onPress={this.FifthHeart}>
                <Icon name='favorite-border' type="MaterialIcons" style={{fontSize:20,color:this.state.FifthHeart}} />
              </TouchableOpacity>
            </View>
            <View style={{justifyContent: 'flex-end',height:"90%"}}>

            </View>

                                        
                                        
                                        
                                        </ImageBackground>
                                        <View style={{width:100}}>
                      <Text style={{color:"black",fontSize:12}}>{I18n.t("Coupon_Product")}{"\n"}{I18n.t("With_print_Function")}</Text>
                      <Text style={{color:"black",fontSize:12}}>$10.00</Text>
                      <Text style={{color:"black",fontSize:10}}>$450</Text>
                    </View>
                </TouchableOpacity>
                </View>
                    



                <View style={{marginLeft:10,marginTop:10,height:160,width:120,backgroundColor:'white'}}>

<TouchableOpacity
onPress={()=>this.props.navigation.navigate('Item',{Picture:'http://www.shure.com/assets/all/product_types/homepage/headphones-75e03921730162872508ccf9d94b7ace32766f862ccb0c37d5cfd1ce388f4241.png'})}

>

    <ImageBackground source={{uri:'http://www.shure.com/assets/all/product_types/homepage/headphones-75e03921730162872508ccf9d94b7ace32766f862ccb0c37d5cfd1ce388f4241.png'}} 
    style={{width:100, height:100,alignItems:'flex-start'}} >


<View style={{alignItems:"flex-end",width:'120%'}}>
<TouchableOpacity onPress={this.SixthHeart}>
<Icon name='favorite-border' type="MaterialIcons" style={{fontSize:20,color:this.state.SixthHeart}} />
</TouchableOpacity>
</View>
<View style={{justifyContent: 'flex-end',height:"90%"}}>

</View>

                        
                        
                        
                        </ImageBackground>
      <View style={{width:100}}>
     <Text style={{color:"black",fontSize:12}}>{I18n.t("Coupon_Product")}{"\n"}{I18n.t("With_print_Function")}</Text>
       <Text style={{color:"black",fontSize:12}}>$10.00</Text>
 <Text style={{color:"black",fontSize:10}}>$450</Text>
       </View>
               
</TouchableOpacity>
</View>
    




<View style={{marginLeft:10,marginTop:10,height:160,width:120,backgroundColor:'white'}}>

<TouchableOpacity
onPress={()=>this.props.navigation.navigate('Item',{Picture:'http://allyouwant.pk/wp-content/uploads/2018/04/Alien-Multimedia-Speaker.png'})}
>

    <ImageBackground source={{uri:'http://allyouwant.pk/wp-content/uploads/2018/04/Alien-Multimedia-Speaker.png'}} 
    style={{width:100, height:100,alignItems:'flex-start'}} >


<View style={{alignItems:"flex-end",width:'120%'}}>
<TouchableOpacity onPress={this.SeventhHeart}>
<Icon name='favorite-border' type="MaterialIcons" style={{fontSize:20,color:this.state.SeventhHeart}} />
</TouchableOpacity>
</View>
<View style={{justifyContent: 'flex-end',height:"90%"}}>

</View>

                        
                        
                        
                        </ImageBackground>
    <View style={{width:150}}>
      <Text style={{color:"black",fontSize:12}}>Coupan Product{"\n"}with PrintFunction</Text>
      <Text style={{color:"black",fontSize:12}}>$10.00</Text>
      <Text style={{color:"black",fontSize:10}}>$450</Text>
    </View>
</TouchableOpacity>
</View>
    



<View style={{marginLeft:10,marginTop:10,height:160,width:120,backgroundColor:'white'}}>

<TouchableOpacity>

    <ImageBackground source={{uri:'http://www.sclance.com/pngs/iphone-6-png-no-background/iphone_6_png_no_background_714721.png'}} 
    style={{width:100, height:100,alignItems:'flex-start'}} >


<View style={{alignItems:"flex-end",width:'120%'}}>
<TouchableOpacity onPress={this.EighthHeart}>
<Icon name='favorite-border' type="MaterialIcons" style={{fontSize:20,color:this.state.EighthHeart}} />
</TouchableOpacity>
</View>
<View style={{justifyContent: 'flex-end',height:"90%"}}>

</View>

                        
                        
                        
                        </ImageBackground>
    <View style={{width:150}}>
      <Text style={{color:"black",fontSize:12}}>Coupan Product{"\n"}with PrintFunction</Text>
      <Text style={{color:"black",fontSize:12}}>$10.00</Text>
      <Text style={{color:"black",fontSize:10}}>$450</Text>
    </View>
</TouchableOpacity>
</View>
    




             </ScrollView>


{/* Feature Products Ends here */}




{/* On Sale Products Start Here */}

<View style={{flexDirection:'row',width:'100%',margin:20}}>
              <View style={{width:"70%",alignItems:"flex-start",marginBottom:-10}}>
                <Text style={{fontSize:25,color:"black",fontWeight:'bold'}}>{I18n.t("On_Sale_Products")}</Text>
              </View>
              <View style={{width:"20%",alignItems:"flex-end",justifyContent: 'center',}}>
              <TouchableOpacity
              onPress={()=>this.props.navigation.navigate('ListView')}>

                <Text style={{justifyContent:"center"}}>
                <Text style={{fontSize:15,color:"black",color:'rgb(0, 122, 204)'}}>{I18n.t("Show_All")}</Text>
                </Text>
              </TouchableOpacity>
              </View>
              </View>




              <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                
                
                <View style={{marginLeft:10,marginTop:10,height:180,width:180,backgroundColor:'white'}}>

                <TouchableOpacity
                onPress={()=>this.props.navigation.navigate('Item',{Picture:'https://images-ssl-usweb.bbystatic.com/pacsales/resources/images/slot2_roku.png'})}
                >

                    <ImageBackground source={{uri:'https://images-ssl-usweb.bbystatic.com/pacsales/resources/images/slot2_roku.png'}} 
                    style={{width:150, height:100,alignItems:'flex-start'}} >


<View style={{alignItems:"flex-end",width:'120%'}}>
              <TouchableOpacity onPress={this.Nine}>
                <Icon name='favorite-border' type="MaterialIcons" style={{fontSize:20,color:this.state.Nine}} />
              </TouchableOpacity>
            </View>
            <View style={{justifyContent: 'flex-end',height:"90%"}}>

            </View>

                                        
                                        
                                        
                                        </ImageBackground>
                    <View style={{width:100}}>
                      <Text style={{color:"black",fontSize:12}}>{I18n.t("my_best_electro_PadMan")}{"\n"}-REDOKANSHOP</Text>
                      <Text style={{color:"black",fontSize:11}}>$10.00</Text>
                      <Text style={{color:"black",fontSize:11}}>$450</Text>
                    </View>
                </TouchableOpacity>
                </View>


               <View>

               <View style={{marginLeft:10,marginTop:10,height:180,width:180,backgroundColor:'white'}}>

<TouchableOpacity

onPress={()=>this.props.navigation.navigate('Item',{Picture:'https://www.apple.com/euro/buy/b/screens/images/mac_ipad_ipod_hero.png'})}
>

    <ImageBackground source={{uri:'https://www.apple.com/euro/buy/b/screens/images/mac_ipad_ipod_hero.png'}} 
    style={{width:150, height:100,alignItems:'flex-start'}} >


<View style={{alignItems:"flex-end",width:'120%'}}>
<TouchableOpacity onPress={this.Ten}>
<Icon name='favorite-border' type="MaterialIcons" style={{fontSize:20,color:this.state.Ten}} />
</TouchableOpacity>
</View>
<View style={{justifyContent: 'flex-end',height:"90%"}}>

</View>

                        
                        
                        
                        </ImageBackground>
                        <View style={{width:100}}>
                      <Text style={{color:"black",fontSize:12}}>{I18n.t("my_best_electro_PadMan")}{"\n"}-REDOKANSHOP</Text>
                      <Text style={{color:"black",fontSize:11}}>$10.00</Text>
                      <Text style={{color:"black",fontSize:11}}>$450</Text>
                    </View>
            
</TouchableOpacity>
</View>






               </View>




               <View>

               <View style={{marginLeft:10,marginTop:10,height:180,width:180,backgroundColor:'white'}}>

<TouchableOpacity
onPress={()=>this.props.navigation.navigate('Item',{Picture:'https://www.plantronics.com/content/dam/plantronics/products/voyager-5200.png.transform/hero-image/img.png'})}

>

    <ImageBackground source={{uri:'https://www.plantronics.com/content/dam/plantronics/products/voyager-5200.png.transform/hero-image/img.png'}} 
    style={{width:150, height:100,alignItems:'flex-start'}} >


<View style={{alignItems:"flex-end",width:'120%'}}>
<TouchableOpacity onPress={this.Eleven}>
<Icon name='favorite-border' type="MaterialIcons" style={{fontSize:20,color:this.state.Eleven}} />
</TouchableOpacity>
</View>
<View style={{justifyContent: 'flex-end',height:"90%"}}>

</View>

                        
                        
                        
                        </ImageBackground>
                        <View style={{width:100}}>
                      <Text style={{color:"black",fontSize:12}}>{I18n.t("my_best_electro_PadMan")}{"\n"}-REDOKANSHOP</Text>
                      <Text style={{color:"black",fontSize:11}}>$10.00</Text>
                      <Text style={{color:"black",fontSize:11}}>$450</Text>
                    </View>
            
</TouchableOpacity>
</View>






               </View>



               <View>

               <View style={{marginLeft:10,marginTop:10,height:180,width:180,backgroundColor:'white'}}>

<TouchableOpacity
onPress={()=>this.props.navigation.navigate('Item',{Picture:'https://assets.bose.com/content/dam/Bose_DAM/Web/consumer_electronics/global/products/headphones/bose_noise_masking_sleepbuds/product_silo_images/noise_masking_sleepbuds_EC_hero.psd/_jcr_content/renditions/cq5dam.web.320.320.png'})}

>

    <ImageBackground source={{uri:'https://assets.bose.com/content/dam/Bose_DAM/Web/consumer_electronics/global/products/headphones/bose_noise_masking_sleepbuds/product_silo_images/noise_masking_sleepbuds_EC_hero.psd/_jcr_content/renditions/cq5dam.web.320.320.png'}} 
    style={{width:150, height:100,alignItems:'flex-start'}} >


<View style={{alignItems:"flex-end",width:'120%'}}>
<TouchableOpacity onPress={this.Tweleve}>
<Icon name='favorite-border' type="MaterialIcons" style={{fontSize:20,color:this.state.Tweleve}} />
</TouchableOpacity>
</View>
<View style={{justifyContent: 'flex-end',height:"90%"}}>

</View>

                        
                        
                        
                        </ImageBackground>
                        <View style={{width:100}}>
                      <Text style={{color:"black",fontSize:12}}>{I18n.t("my_best_electro_PadMan")}{"\n"}-REDOKANSHOP</Text>
                      <Text style={{color:"black",fontSize:11}}>$10.00</Text>
                      <Text style={{color:"black",fontSize:11}}>$450</Text>
                    </View>
            
</TouchableOpacity>
</View>






               </View>



               <View>

               <View style={{marginLeft:10,marginTop:10,height:180,width:180,backgroundColor:'white'}}>

<TouchableOpacity
onPress={()=>this.props.navigation.navigate('Item',{Picture:'https://8fddbd524b5976832632-bb1139a233dd1615ca84f744f3688ee9.ssl.cf5.rackcdn.com/xb1e/shell_designs/rasta/f-standard-white.png'})}

>

    <ImageBackground source={{uri:'https://8fddbd524b5976832632-bb1139a233dd1615ca84f744f3688ee9.ssl.cf5.rackcdn.com/xb1e/shell_designs/rasta/f-standard-white.png'}} 
    style={{width:150, height:100,alignItems:'flex-start'}} >


<View style={{alignItems:"flex-end",width:'120%'}}>
<TouchableOpacity onPress={this.Thirteen}>
<Icon name='favorite-border' type="MaterialIcons" style={{fontSize:20,color:this.state.Thirteen}} />
</TouchableOpacity>
</View>
<View style={{justifyContent: 'flex-end',height:"90%"}}>

</View>

                        
                        
                        
                        </ImageBackground>
                        <View style={{width:100}}>
                      <Text style={{color:"black",fontSize:12}}>{I18n.t("my_best_electro_PadMan")}{"\n"}-REDOKANSHOP</Text>
                      <Text style={{color:"black",fontSize:11}}>$10.00</Text>
                      <Text style={{color:"black",fontSize:11}}>$450</Text>
                    </View>
            
</TouchableOpacity>
</View>






               </View>




             </ScrollView>






{/* Onsale Products Ends Here */}












{/* Electronics Products Start Here */}

<View style={{flexDirection:'row',width:'100%',margin:20}}>
              <View style={{width:"70%",alignItems:"flex-start",marginBottom:-10}}>
                <Text style={{fontSize:25,color:"black",fontWeight:'bold'}}>{I18n.t("Electronics")}</Text>
              </View>
              <View style={{width:"20%",alignItems:"flex-end",justifyContent: 'center',}}>
              <TouchableOpacity
              onPress={()=>this.props.navigation.navigate('ListView')}
              > 

                <Text style={{justifyContent:"center"}}>
                <Text style={{fontSize:15,color:"black",color:'rgb(0, 122, 204)'}}>{I18n.t("Show_All")} ></Text>
                </Text>
              </TouchableOpacity>
              </View>
              </View>




              <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                
                
                <View style={{marginLeft:10,marginTop:10,height:180,width:180,backgroundColor:'white'}}>

                <TouchableOpacity
                
                onPress={()=>this.props.navigation.navigate('Item',{Picture:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRE-FoA9rNkQsNzHV5ziL19pVtq9rz4N5DU4MBKE6c889cPdfWN'})}
                >

                    <ImageBackground source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRE-FoA9rNkQsNzHV5ziL19pVtq9rz4N5DU4MBKE6c889cPdfWN'}} 
                    style={{width:150, height:100,alignItems:'flex-start'}} >


<View style={{alignItems:"flex-end",width:'120%'}}>
              <TouchableOpacity onPress={this.Fourteen}>
                <Icon name='favorite-border' type="MaterialIcons" style={{fontSize:20,color:this.state.Fourteen}} />
              </TouchableOpacity>
            </View>
            <View style={{justifyContent: 'flex-end',height:"90%"}}>

            </View>

                                        
                                        
                                        
                                        </ImageBackground>
                                        <View style={{width:100}}>
                      <Text style={{color:"black",fontSize:12}}>{I18n.t("my_best_electro_PadMan")}{"\n"}-REDOKANSHOP</Text>
                      <Text style={{color:"black",fontSize:11}}>$10.00</Text>
                      <Text style={{color:"black",fontSize:11}}>$450</Text>
                    </View>
             </TouchableOpacity>
                </View>


               <View>

               <View style={{marginLeft:10,marginTop:10,height:180,width:180,backgroundColor:'white'}}>

<TouchableOpacity
onPress={()=>this.props.navigation.navigate('Item',{Picture:'https://img.heypik.com/png-vector/20190122/psd-orange-fashion-sense-simple-appliances-heypik-7VU463Y.jpg?x-oss-process=image/resize,w_230/crop,w_230,h_230/sharpen,100/quality,q_70'})}
>

    <ImageBackground source={{uri:'https://img.heypik.com/png-vector/20190122/psd-orange-fashion-sense-simple-appliances-heypik-7VU463Y.jpg?x-oss-process=image/resize,w_230/crop,w_230,h_230/sharpen,100/quality,q_70'}} 
    style={{width:150, height:100,alignItems:'flex-start'}} >


<View style={{alignItems:"flex-end",width:'120%'}}>
<TouchableOpacity onPress={this.Fifteen}>
<Icon name='favorite-border' type="MaterialIcons" style={{fontSize:20,color:this.state.Fifteen}} />
</TouchableOpacity>
</View>
<View style={{justifyContent: 'flex-end',height:"90%"}}>

</View>

                        
                        
                        
                        </ImageBackground>
                        <View style={{width:100}}>
                      <Text style={{color:"black",fontSize:12}}>{I18n.t("my_best_electro_PadMan")}{"\n"}-REDOKANSHOP</Text>
                      <Text style={{color:"black",fontSize:11}}>$10.00</Text>
                      <Text style={{color:"black",fontSize:11}}>$450</Text>
                    </View>
            
</TouchableOpacity>
</View>






               </View>




               <View>

               <View style={{marginLeft:10,marginTop:10,height:180,width:180,backgroundColor:'white'}}>

<TouchableOpacity
onPress={()=>this.props.navigation.navigate('Item',{Picture:'https://www.speedqueen.com/img/product/image-area/front-load-washer-sm.png'})}
>

    <ImageBackground source={{uri:'https://www.speedqueen.com/img/product/image-area/front-load-washer-sm.png'}} 
    style={{width:150, height:100,alignItems:'flex-start'}} >


<View style={{alignItems:"flex-end",width:'120%'}}>
<TouchableOpacity onPress={this.Sixteen}>
<Icon name='favorite-border' type="MaterialIcons" style={{fontSize:20,color:this.state.Sixteen}} />
</TouchableOpacity>
</View>
<View style={{justifyContent: 'flex-end',height:"90%"}}>

</View>

                        
                        
                        
                        </ImageBackground>
                        <View style={{width:100}}>
                      <Text style={{color:"black",fontSize:12}}>{I18n.t("my_best_electro_PadMan")}{"\n"}-REDOKANSHOP</Text>
                      <Text style={{color:"black",fontSize:11}}>$10.00</Text>
                      <Text style={{color:"black",fontSize:11}}>$450</Text>
                    </View>
            
</TouchableOpacity>
</View>






               </View>



               <View>

               <View style={{marginLeft:10,marginTop:10,height:180,width:180,backgroundColor:'white'}}>

<TouchableOpacity
onPress={()=>this.props.navigation.navigate('Item',{Picture:'https://cdn.shopify.com/s/files/1/2660/5202/products/j0hzrhyh0ccntu3xrwtq_76a6ba3e-c96f-4ef0-aae8-241ca466bae1_800x.jpg?v=1537306439'})}

>

    <ImageBackground source={{uri:'https://cdn.shopify.com/s/files/1/2660/5202/products/j0hzrhyh0ccntu3xrwtq_76a6ba3e-c96f-4ef0-aae8-241ca466bae1_800x.jpg?v=1537306439'}} 
    style={{width:150, height:100,alignItems:'flex-start'}} >


<View style={{alignItems:"flex-end",width:'120%'}}>
<TouchableOpacity onPress={this.Seventeen}>
<Icon name='favorite-border' type="MaterialIcons" style={{fontSize:20,color:this.state.Seventeen}} />
</TouchableOpacity>
</View>
<View style={{justifyContent: 'flex-end',height:"90%"}}>

</View>

                        
                        
                        
                        </ImageBackground>
                        <View style={{width:100}}>
                      <Text style={{color:"black",fontSize:12}}>{I18n.t("my_best_electro_PadMan")}{"\n"}-REDOKANSHOP</Text>
                      <Text style={{color:"black",fontSize:11}}>$10.00</Text>
                      <Text style={{color:"black",fontSize:11}}>$450</Text>
                    </View>
            
</TouchableOpacity>
</View>






               </View>



               <View>

               <View style={{marginLeft:10,marginTop:10,height:180,width:180,backgroundColor:'white'}}>

<TouchableOpacity
onPress={()=>this.props.navigation.navigate('Item',{Picture:'https://images.homedepot-static.com/productImages/a2352d0e-fac1-4501-ba48-5249476a08fd/svn/stainless-steel-amana-over-the-range-microwaves-amv2307pfs-40_300.jpg'})}

>

    <ImageBackground source={{uri:'https://images.homedepot-static.com/productImages/a2352d0e-fac1-4501-ba48-5249476a08fd/svn/stainless-steel-amana-over-the-range-microwaves-amv2307pfs-40_300.jpg'}} 
    style={{width:150, height:100,alignItems:'flex-start'}} >


<View style={{alignItems:"flex-end",width:'120%'}}>
<TouchableOpacity onPress={this.Eighteen}>
<Icon name='favorite-border' type="MaterialIcons" style={{fontSize:20,color:this.state.Eighteen}} />
</TouchableOpacity>
</View>
<View style={{justifyContent: 'flex-end',height:"90%"}}>

</View>

                        
                        
                        
                        </ImageBackground>
                        <View style={{width:100}}>
                      <Text style={{color:"black",fontSize:12}}>{I18n.t("my_best_electro_PadMan")}{"\n"}-REDOKANSHOP</Text>
                      <Text style={{color:"black",fontSize:11}}>$10.00</Text>
                      <Text style={{color:"black",fontSize:11}}>$450</Text>
                    </View>
            
</TouchableOpacity>
</View>






               </View>




             </ScrollView>






{/* Electronics Products Ends Here */}


{/* Digital Products Starts Here */}


<View style={{flexDirection:'row',width:'100%',margin:20}}>
              <View style={{width:"70%",alignItems:"flex-start",marginBottom:-10}}>
                <Text style={{fontSize:25,color:"black",fontWeight:'bold'}}>{I18n.t("Digital")}</Text>
              </View>

              <View style={{width:"20%",alignItems:"flex-end",justifyContent: 'center',}}>
              <TouchableOpacity 
              onPress={()=>this.props.navigation.navigate('ListView')}
              >
                <Text style={{justifyContent:"center"}}>
                <Text style={{fontSize:15,color:"black",color:'rgb(0, 122, 204)'}}>{I18n.t("Show_All")}></Text>
                </Text>
              </TouchableOpacity>
              </View>
              </View>


<ScrollView horizontal={true} style={{marginLeft:10,marginTop:30}} showsHorizontalScrollIndicator={false}>
      <View>
          <View style={{width:255,height:230,backgroundColor:'white'}}>


        <TouchableOpacity style={{alignItems: 'center',}} activeOpacity={0.8}
        onPress={()=>this.props.navigation.navigate('Item',{Picture:'https://3qcbdntxdyb43ubh6h0b0qgz-wpengine.netdna-ssl.com/wp-content/uploads/2018/08/MakerBot-Replicator-Product-Image.png'})}
        >
              
          <ImageBackground source={{uri :'https://3qcbdntxdyb43ubh6h0b0qgz-wpengine.netdna-ssl.com/wp-content/uploads/2018/08/MakerBot-Replicator-Product-Image.png'}} 
          style={{width:250,height:150,alignItems:"flex-start",}}>
            <View style={{alignItems:"flex-end",width:"100%"}}>
              <TouchableOpacity onPress={this.Nineteen}>
                <Icon name='favorite-border' type="MaterialIcons" style={{fontSize:20,color:this.state.FirstHeart}} />
              </TouchableOpacity>
            </View>
            <View style={{justifyContent: 'flex-end',height:"90%"}}>

            </View>
          </ImageBackground>
          
          <View>

          <Text style={{fontSize:15,color:'black',fontWeight:"bold",marginLeft:-10}}>Accellarate X7 PRO media {"\n"}REDOKANSHOP</Text>
              <Text style={{fontSize:15,color:'black',marginBottom:5,marginRight:160}}>$900.00</Text>
          </View>
        </TouchableOpacity>  
          </View>
      </View>
      <View style={{marginLeft:10}}>
       
      <View style={{width:255,height:230,backgroundColor:'white'}}>


<TouchableOpacity style={{alignItems: 'center',}} activeOpacity={0.8}
onPress={()=>this.props.navigation.navigate('Item',{Picture:'https://www.cookiespcrepairs.com.au/wp-content/uploads/2018/03/computersetupfmcos.png'})}
>
      
  <ImageBackground source={{uri :'https://www.cookiespcrepairs.com.au/wp-content/uploads/2018/03/computersetupfmcos.png'}} 
  style={{width:250,height:150,alignItems:"flex-start",}}>
    <View style={{alignItems:"flex-end",width:"100%"}}>
      <TouchableOpacity onPress={this.Twenty}>
        <Icon name='favorite-border' type="MaterialIcons" style={{fontSize:20,color:this.state.SecondHeart}} />
      </TouchableOpacity>
    </View>
    <View style={{justifyContent: 'flex-end',height:"90%"}}>

    </View>
  </ImageBackground>
  
  <View>

  <Text style={{fontSize:15,color:'black',fontWeight:"bold",marginLeft:-10}}>Accellarate X7 PRO media {"\n"}REDOKANSHOP</Text>
      <Text style={{fontSize:15,color:'black',marginBottom:5,marginRight:160}}>$900.00</Text>
  </View>
</TouchableOpacity>  
  </View>
</View> 
      <View style={{marginLeft:10}}>
      <View style={{width:255,height:230,backgroundColor:'white'}}>


<TouchableOpacity style={{alignItems: 'center',}} activeOpacity={0.8}
onPress={()=>this.props.navigation.navigate('Item',{Picture:'http://www.completesol.com/images/comp2.png'})}
>
      
  <ImageBackground source={{uri :'http://www.completesol.com/images/comp2.png'}} 
  style={{width:250,height:150,alignItems:"flex-start",}}>
    <View style={{alignItems:"flex-end",width:"100%"}}>
      <TouchableOpacity onPress={this.TwentyOne}>
        <Icon name='favorite-border' type="MaterialIcons" style={{fontSize:20,color:this.state.ThirdHeart}} />
      </TouchableOpacity>
    </View>
    <View style={{justifyContent: 'flex-end',height:"90%"}}>

    </View>
  </ImageBackground>
  
  <View>

  <Text style={{fontSize:15,color:'black',fontWeight:"bold",marginLeft:-10}}>Accellarate X7 PRO media {"\n"}REDOKANSHOP</Text>
      <Text style={{fontSize:15,color:'black',marginBottom:5,marginRight:160}}>$900.00</Text>
  </View>
</TouchableOpacity>  
  </View>
</View>
  </ScrollView>


{/* Digital Products Ends Here */}


{/* Modal Starts here */}




<Modal style={style.BottomModal} onBackButtonPress={() => {this.setState({isModalVisible: false})}} animationInTiming={700} animationOutTiming={700} backdropOpacity={0.5} isVisible={this.state.isModalVisible}>
            <View style={{backgroundColor: "white",marginTop:10,marginLeft:10,marginRight:10,borderRadius:10}}>
              <View style={{alignItems:"flex-end",marginTop:10}}>
                <TouchableOpacity onPress={() => {this.setState({isModalVisible: false})}}>
                   <Icon name="times" type="FontAwesome" style={{marginRight: 20,}}/>
                </TouchableOpacity>
              </View>
              <View style={{justifyContent:"center",marginTop:10,flexDirection:"row",width:"100%",alignItems: 'center',height:80}}>
                  <TouchableOpacity  style={{width:"40%",alignItems: 'center',height:70,borderRadius:10,backgroundColor: "#42C2BF",justifyContent: 'center',}}>
                    <View>
                      <Icon style={{fontSize:40}} name="view-agenda" type="MaterialIcons" />                      
                    </View>
                    <Text style={{color:"black"}}>{I18n.t("Horizontal")}</Text>
                  </TouchableOpacity>
                <TouchableOpacity 
                
                  onPress={()=>
                    {this.props.navigation.navigate('ListView');
                    this.setState({isModalVisible:!this.state.isModalVisible})
                  }}
            
                
                style={{width:"40%",alignItems: 'center',justifyContent: 'center',height:70,borderRadius:10,}}>
                    <View>
                      <Icon name="view-list" type="MaterialIcons" style={{fontSize:40}}/>
                    </View>
                    <Text style={{color:"black"}}>{I18n.t("List")}</Text>
                </TouchableOpacity>
              </View>
              <View style={{justifyContent:"center",marginTop:10,flexDirection:"row",width:"100%",alignItems: 'center',height:80}}>
                  <TouchableOpacity 
                  onPress={()=>
                  {
                    
                    this.props.navigation.navigate('TwoColumn');
                    this.setState({isModalVisible:!this.state.isModalVisible})
                  }
                  }
                  style={{width:"40%",alignItems: 'center',height:70,borderRadius:10,justifyContent: 'center',}}>
                    <View>
                      <Icon style={{fontSize:40}} name="th-large" type="FontAwesome" />                      
                    </View>
                    <Text style={{color:"black"}}>{I18n.t("Two_Column")}</Text>
                  </TouchableOpacity>
                <TouchableOpacity 
                onPress={()=>
                  
                  {this.props.navigation.navigate('ThreeColumn');
                  this.setState({isModalVisible:!this.state.isModalVisible})
                
                }}
                
                style={{width:"40%",alignItems: 'center',justifyContent: 'center',height:70,borderRadius:10,}}>
                    <View>
                      <Icon name="view-column" type="MaterialIcons" style={{fontSize:40}}/>
                    </View>
                    <Text style={{color:"black"}}>{I18n.t("Three_Column")}</Text>
                </TouchableOpacity>
              </View>
            </View>
        </Modal>
{/* Modal Ends here */}

</ScrollView>
<View >
    
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
  </View>
</View>

    )
  }
}

const style = StyleSheet.create({
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