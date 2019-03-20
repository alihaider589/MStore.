import React, { Component } from 'react'
import { Text, View,ImageBackground, Dimensions } from 'react-native'
import {Content,List,ListItem,Left,Thumbnail,Body,Right, Container,Tabs,Header,Tab,TabHeading,Icon,Card,CardItem,Button,Footer,FooterTab} from 'native-base'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import AutoHeightImage from 'react-native-auto-height-image'
import Modal from 'react-native-modal'
import Shirt from '../Images/shirt.jpg'
import I18n from 'react-native-i18n'
import EN from '../I18N/EN'
import AR from '../I18N/AR'



export default class Item1 extends Component {
  static navigationOptions={
    drawerLabel:()=>null
  }
state={
  isModalVisible:false,
  ImageHeight:"100%"

}  
  
  
  render() {
    I18n.fallbacks=true;
    I18n.locale="AR"
    I18n.translations={
      AR,
      EN
    }




    const  Picture = this.props.navigation.getParam('Picture')
    return (
<View style={{flex:1}}>





      <ScrollView style={{flex:1,backgroundColor:'white'}} showsVerticalScrollIndicator={false}>

      
    <View style={{width:250,height:150,marginTop:40,marginLeft:50}}> 
    <TouchableOpacity onPress={() => {this.setState({isModalVisible:true})}}>

<ImageBackground source={{uri:Picture}} 
imageStyle={{borderWidth:1,borderRadius:10}}
style={{width:250,height:150}}>

</ImageBackground>
</TouchableOpacity>
    </View>
    <View style={{marginTop:30,alignContent:'flex-start'}}>

<Text style={{marginLeft:50,fontSize:20,fontWeight:'bold'}}>
Accellarate X7 PRO media
</Text>
<Text style={{fontSize:15,color:'rgb(0, 122, 204)',marginTop:10,marginLeft:'40%'}}>{I18n.t("APPTRON")}</Text>
<Text style={{fontSize:15,color:'black',marginTop:10,marginLeft:'50%'}}>$900 </Text>
<Text style={{fontSize:15,color:'black',marginTop:10,marginLeft:'40%'}}>(0)<Text style={{color:'rgb(0, 122, 204)'}}>
{I18n.t("Reviews")} </Text>
  </Text>

</View>


<View>


<Container>

        <Tabs tabBarActiveTextColor="rgb(0,0,0)" tabBarUnderlineStyle={{backgroundColor:'rgb(68, 195, 192)'}}>
          <Tab
          
      activeTextStyle={{color: 'black', fontWeight: 'bold'}}
          heading={
             <TabHeading style={{backgroundColor: 'white'}} >
              <Text style={{color:'rgb(68, 69, 70)'}}>{I18n.t("Description")}</Text>
              </TabHeading>
            } >
<Description />
          </Tab>
          <Tab 
            heading={ 
            <TabHeading  style={{backgroundColor: 'white'}}>
              <Text style={{color:'rgb(68, 69, 70)'}}>{I18n.t("Vendors")}</Text>
              </TabHeading>
            }>
            <Vendor />
          </Tab>
          <Tab
            heading={ 
            <TabHeading  style={{backgroundColor: 'white'}}>
              <Text style={{color:'rgb(68, 69, 70)'}}>{I18n.t("Reviews")}</Text>
              </TabHeading>
            }>
            <Reviews />
          </Tab>
        </Tabs>
      </Container>


</View>
</ScrollView>
<View style={{backgroundColor:'white',flexDirection:'row'}}>

<TouchableOpacity>
 
<Icon name='share' type="MaterialIcons"  style={{height:30,width:30,marginTop:5,marginLeft:10}}/>
</TouchableOpacity>
<TouchableOpacity>

<Icon name='favorite-border' type="MaterialIcons"  style={{height:30,width:30,marginTop:5,marginLeft:15}}/>

</TouchableOpacity>
<TouchableOpacity
>
<Icon name='shopping-cart' type="MaterialIcons"  style={{height:30,width:30,marginTop:5,marginLeft:15}}/>

<Text 
onPress={()=>this.props.navigation.navigate('Cart')}
>hello</Text>

</TouchableOpacity>
<TouchableOpacity
style={{width:220,height:34,marginLeft:15,backgroundColor:'rgb(0, 122, 204)',justifyContent: 'center',alignItems:'center'}}>
<Text style={{color:'white',marginTop:5,fontWeight:'bold'}} 
onPress={()=>alert('hello')}

> 
  BUY NOW
</Text>

</TouchableOpacity>
</View>
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
      <Icon active name="search" type="FontAwesome"  style={{color:"gainsboro"}} />
    </Button>
    <Button onPress={() => this.props.navigation.navigate('Account')}>
      <Icon name="user" type="FontAwesome" style={{color:"gainsboro"}} />
    </Button>
  </FooterTab>
</Footer>
</View>
 {/* Modal starts */} 
 <Modal style={{width:"100%",height:"100%"}} onBackButtonPress={() => {this.setState({isModalVisible: false})}}
         animationInTiming={700} animationOutTiming={700} backdropOpacity={0.5} isVisible={this.state.isModalVisible}>
            <View style={{backgroundColor: "white",marginTop:10,marginLeft:-20,marginBottom:10,borderRadius:10,width:"100%"}}>
              <View style={{width:"100%",alignItems:"flex-end",marginTop:10}}>
                <TouchableOpacity onPress={() => {this.setState({isModalVisible:!this.state.isModalVisible})}}>
                   <Icon name="times" type="FontAwesome" style={{marginRight: 20,}}/>
                </TouchableOpacity>
              </View>
              <AutoHeightImage width={Dimensions.get('window').width} source={{uri:Picture}} />
            </View>
        </Modal>
        {/* Modal ends */}


</View>

    )

  }
}



 class Description extends Component {
  render() {
    return (
      <Container>
      <Content padder>
        <Card>
           <CardItem >
            <Body>
              <Text>
              
              </Text>
            </Body>
          </CardItem>
          <CardItem >
            <Text>

            {I18n.t("dummy")}

               
            </Text>
          </CardItem>
        </Card>
      </Content>
    </Container>
    );
  }
}



class Vendor extends Component {
  render() {
    return (
      <Container>
      <Content padder>
        <Card>
           <CardItem >
            <Body>
              <Text>
              
              </Text>
            </Body>
          </CardItem>
          <CardItem >
            <Text>

            {I18n.t("dummy")}

            </Text>
          </CardItem>
        </Card>
      </Content>
    </Container>
    );
  }
}




class Reviews extends Component {
  render() {
    return (
      <Container>
      <Content padder>
        <Card>
           <CardItem >
            <Body>
              <Text>
              
              </Text>
            </Body>
          </CardItem>
          <CardItem >
            <Text>
            {I18n.t("dummy")}

               
            </Text>
          </CardItem>
        </Card>
      </Content>
    </Container>
    
    );
  }
}
