import { StatusBar } from "expo-status-bar";
import React from "react";

import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  TextInput,
  Button,
  TouchableHighlight,
  ScrollView,
  FlatList,
} from "react-native";

//  You need to install these two module for navigation
//  Run the following commands using your terminal:
/*
	$npm install @react-navigation/native
	$expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view
	$npm install @react-navigation/stack
*/

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';

/*Dummy Data for Menus*/
const Menus = [
  {
    url: "https://i.imgur.com/dzwnUwJ.png" ,
    menuTitle: "Lakeview Suites",
    menuDesc:
      "Set within 25 km of National Geographic IMAX Theater and 25 km of Yellowstone Historic Center Museum. On a hillside with views of Lake Taal, this unassuming hotel in a log cabin-style building is 2 km from the Sky Ranch Tagaytay amusement park.",
    menuPrice: "₱ 2,872",
    menuLocation: "5750 Magnus Drive Kaybagal South, Tagaytay",
    menuReview: "Guest like the staff for being friendly. Good Filipino breakfast. Great view of the lake. Guest recommend the place because for them this is a good place for a getaway from the city.",
  },
  {
    url: "https://i.imgur.com/8RsgzBH.png",
    menuTitle: "Quest Hotel",
    menuDesc:
      "Guess like it for being an ideal place for the guests who are looking for value for money and an escape in the South located right in the heart of Tagaytay City. Prepare for its cool climate and visit to see the world famous Taal Volcano. ",
    menuPrice: "₱ 1,969",
    menuLocation: "Fora Rotunda E. Aguinaldo Highway Silang Junction South, Tagaytay",
    menuReview: "Guests liked the clean, updated rooms. Guests appreciated the friendly, professional staff·Guests liked the hotel management, reception & housekeeping",
 },
  {
    url: "https://i.imgur.com/EOtVkp5.png",
    menuTitle: "Suites",
    menuDesc:
      "Surrounded by countryside, this casual hotel with a modern exterior is 2 km from panoramic views at People's Park in the Sky, 4 km from Tagaytay Picnic Grove and 11 km from the 421 road. The relaxed rooms feature flat-screen TVs, minifridges and tea and coffeemaking facilities. ",
    menuPrice: "₱ 7,321",
    menuLocation: "Lot 7, Ridge View Subdivision Barangay Iruhin, Tagaytay",
    menuReview: "Guest like accommodating staffs, the great view of Taal Volcano, and a very relaxing place.",
  },
  {
    url: "https://i.imgur.com/eNDEYd7.png",
    menuTitle: "Royale Parc Hotel",
    menuDesc:
      "Featuring a 24-hour front desk, this property also welcomes guests with a restaurant and an outdoor pool. The accommodation provides a hot tub, free WiFi and family rooms.",
    menuPrice: "₱ 2,784",
    menuLocation: "Emilio Aguinaldo Highway Silang Junction West, Tagaytay",
    menuReview: "Newly remodeled hotel with a homey and rustic vibe. Amenities include a swimming pool and communal jacuzzi. Our room was clean and in order",
  },
  {
    url: "https://i.imgur.com/F0xVmY5.png",
    menuTitle: "Hotel Kimberly",
    menuDesc:
      "Hotel Kimberly Tagaytay is a 4-star property located in Tagaytay, 3.5 km from Sky Ranch and 13.9 km from People's Park in the Sky, boasting of an outdoor swimming pool with garden, an on-site mini farm, and an on-site restaurant. Relaxed, modern rooms offer minibars and satellite TV, as well as terraces or balconies. ",
    menuPrice: "₱ 3,375",
    menuLocation: "Brgy. Kaybagal, Amadeo Road, Tagaytay",
    menuReview: "Guests liked the clean rooms, though some commented they were small & dated·Some guests mentioned the bathrooms could be improved·Some guests noted the beds could be improved",
  },
{
    url: "https://i.imgur.com/GrfXDiZ.png",
    menuTitle: "View Park Hotel",
    menuDesc:
      "A two-hour drive from the metropolis, View Park Hotel Tagaytay welcomes you with the charm and beauty of Asian and Neo-Italian architecture and interiors. The straightforward rooms come with cable TV. Upgraded rooms add free Wi-Fi, DVD players, minifridges and safes. Suites feature separate living rooms, dining areas and kitchenettes.",
    menuPrice: "₱ 1,755",
    menuLocation: "3500 Calamba Road Sungay - East, Tagaytay",
    menuReview: "Guests liked the clean rooms, though some commented they were small, Guests appreciated the friendly, professional staff·Guests enjoyed the pool·Guests spoke highly of the reception staff",
  },

  {
    url: "https://i.imgur.com/RwcSjKa.jpg" ,
    menuTitle: "Escala Tagaytay",
    menuDesc:
      "Nestled in the heart of Kaybagal, Escala Tagaytay is an ideal spot from which to discover Tagaytay. From here, guests can enjoy easy access to all that the lively city has to offer. With its convenient location, the hotel offers easy access to the city's must-see destinations.",
    menuPrice: "₱ 9,190",
    menuLocation: "Purok 102 Maharlika West Tagaytay - Nasugbu Highway, Tagaytay City Proper, Tagaytay, Philippines, 4120",
    menuReview: "View is so beautiful, the room feels so inviting , cozy and relaxing. Have the best sleep ever.",
  },

];

const Members = [
  {
    id:1, 
    url: "https://i.imgur.com/kHWP89O.png" ,
    name: "Mark Joshua Bueno",
    memberDesc: "Mobile Developer (Hotels and Menu List)"
  },

  {
    id:2, 
    url: "https://i.imgur.com/BXTI4Hg.png" , 
    name: "Alexis Camano",
    memberDesc: "Mobile Developer (Logo and Home Screen)"
  },
  
  {
    id:3, 
    url: "https://i.imgur.com/cqkvbL5.png" , 
    name: "Ken C. Ledonio",
    memberDesc: "Mobile Developer (About Us)"
  },

  {
    id:4, 
    url: "https://i.imgur.com/VplB9xF.png" , 
    name: "Dustin Gilmer C. Espiritu",
    memberDesc: "Mobile Developer (About Us and Hotels)"
  },

  {
    id:5, 
    url: "https://i.imgur.com/gXCBCOX.png" , 
    name: "Terell John F. Eleuterio",
    memberDesc: "Mobile Developer (Menu List and Menu Content)"
  },

  {
    id:6, 
    url: "https://i.imgur.com/ce97i9R.png" , 
    name: "Antonio Miguel M",
    memberDesc: "Mobile Developer (Presentor and Hotels)"
  },


]

/*Homescreen Component*/
function HomeScreen({ navigation }) {
  return (
    <ImageBackground source={require("./assets/hotel.jpg")} 
      style={styles.backgroundContainer}>
          <View>
            <Image source={require("./assets/colour.png")}
            style={styles.logo}/>
          </View>

        <Text style={styles.brandName}>HotelGuru</Text>

        <View style={styles.logoContainer}>

            <Icon name={'person-outline'} size={28} color={'rgba(255, 255, 255, 0.7)'}
            style={styles.inputIcon}/>


            <TextInput
            style={styles.input}
            placeholder={'Username'}
            placeholderTextColor={'rgba(255, 255, 255, 0.7)'}
            underlineColorAndroid='transparent' 
            />
        </View>

        <View style={styles.inputContainer}>
            <Icon name={'lock-closed-outline'} size={28} color={'rgba(255, 255, 255, 0.7)'}
            style={styles.inputIcon}/>


            <TextInput
            style={styles.input}
            placeholder={'Password'}
            secureTextEntry={true}
            placeholderTextColor={'rgba(255, 255, 255, 0.7)'}
            underlineColorAndroid='transparent' 
            />
        </View>

        <View>
          <View  style={{width: 150,
                height: 45,
                marginTop: 20, }}>
            <Button
              title="Sign In"
              color="#daa520"
              style={{width: 120,
                height: 45,}}
              onPress={() => navigation.navigate("Menu")}
            />
          </View>
        </View>

        <View>
          <View style={{width: 150,
                height: 45,
                marginTop: -5, }}>
            <Button
              title="About us"
              color="#daa520"
              onPress={() => navigation.navigate("About")}
            />
          </View>
        </View>
      </ImageBackground>
    
  );
}

/* ----CONTENT SA MENU SCREEN-----*/
function MenuDetail(props) {
  return (
    <ScrollView style={styles.menuDetailContainer}>
      <View>
        <Image style={styles.hotelImage} source={{ uri: props.route.params.url}} />
        <Text style={styles.titleText}>{props.route.params.menuTitle}</Text>
      <View>
        <Icon name={'cash-outline'} size={28} color={'#2e8b57'} style={styles.PriceLocDetailIcon}/>
        <Text style={styles.price}>Price:</Text>
        <Text style={styles.fulldetail}>{props.route.params.menuPrice}</Text>
      </View>

      <View>
        <Icon name={'location-outline'} size={28} color={'#ff0000'} style={styles.PriceLocDetailIcon}/>
        <Text style={styles.location}>Location:</Text>
        <Text style={styles.fulldetail}>{props.route.params.menuLocation} </Text>
      </View>

      <View>
      <Icon name={'bed-outline'} size={28} color={'#a52a2a'} style={styles.PriceLocDetailIcon}/>
      <Text style={styles.detail}>Details:</Text>
      <Text style={styles.fulldetail}>{props.route.params.menuDesc}</Text>
      </View>

   
      <View>
      <Icon name={'star-sharp'} size={28} color={'#ffd700'} style={styles.star1}/>
      <Icon name={'star-sharp'} size={28} color={'#ffd700'} style={styles.star2}/>
      <Icon name={'star-sharp'} size={28} color={'#ffd700'} style={styles.star3}/>
      <Icon name={'star-sharp'} size={28} color={'#ffd700'} style={styles.star4}/>
      <Icon name={'star-half-sharp'} size={28} color={'#ffd700'} style={styles.star5}/>
      <Text style={styles.review}>Review:</Text>
      <Text style={styles.reviewdetail}>{props.route.params.menuReview}</Text>

      </View>
    </View>
    </ScrollView>
  );
}

/*Menu Component*/
function MenuScreen({ navigation }) {
  return (
    <ScrollView>
      {Menus.map((menu, key) => (
        <View key={key} style={{ flexDirection: "row", backgroundColor: "#ecf0f1"}} >
          <TouchableHighlight
            activeOpacity={0.6}
            underlayColor="#ecf0f1"
            onPress={() => navigation.navigate(menu.menuTitle)}
          >
            <View style={styles.cardRounded}>
              <Image style={styles.cardImage} source={{ uri: menu.url }} />
              <Text style={styles.menuTitle}>{menu.menuTitle}</Text>
              <Text style={{color: "black", paddingLeft: 10, paddingRight: 10, textAlign: "justify"}} numberOfLines={2}>
                {menu.menuDesc}
              </Text>
            </View>
          </TouchableHighlight>
        </View>
      ))}
    </ScrollView>
  );
}

/* About Component */
function AboutScreen({ navigation }) {
  return (
    <ScrollView>
      {Members.map((members, key) => (
        <View key={key} style={{ flexDirection: "row", backgroundColor: "#ecf0f1"}} >
          <TouchableHighlight
            activeOpacity={0.6}
            underlayColor="#ecf0f1"
          >
            <View style={styles.cardRoundedMember}>
              <Image style={styles.cardImageMember} source={{ uri: members.url }} />
              <Text style={styles.menuTitle}>{members.name}</Text>
              <Text style={{color: "black", paddingLeft: 10, paddingRight: 10, textAlign: "justify"}} numberOfLines={2}>
                {members.memberDesc}
              </Text>
            </View>
          </TouchableHighlight>
        </View>
      ))}
    </ScrollView>
  );
}



/*Main Component*/
const Stack = createStackNavigator(); //Create stack navigation
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: "#daa520",
          },
          headerTintColor: "#ffffff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      >

        <Stack.Screen name="Home" component={HomeScreen} /> 
        <Stack.Screen name="Menu" component={MenuScreen} />
        <Stack.Screen name="About" component={AboutScreen} />
		
        {Menus.map((menu, key) => (
          <Stack.Screen
            key={key}
			
            initialParams={{
              url: menu.url,
              menuTitle: menu.menuTitle,
              menuDesc: menu.menuDesc,
              menuPrice: menu.menuPrice,
              menuLocation: menu.menuLocation,
              menuReview: menu.menuReview,
            }}
            name={menu.menuTitle}
            component={MenuDetail}
          />
        ))}
	
		
      </Stack.Navigator>
    </NavigationContainer>
  );
}

/*Custom Styling*/
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },

  backgroundContainer : {
    flex: 1,
    width: null,
    height: null,
    justifyContent: 'center',
    alignItems: 'center',
  },

  logo: {
    width: 300,
    height: 300,
    marginBottom: -60,
  },

  brandName: {
    marginBottom: 60,
    fontSize: 40,
    fontWeight: "bold",
    color: "#f5fffa",
    textAlign: "center",
    fontFamily: 'monospace'
  },

  label: {
    marginTop: 5,
    color: "#ecf0f1",
    fontSize: 16,
    textAlign: "center",
    fontFamily: "Roboto",
    fontWeight: "bold",
  },

  rowCenter: {
    flexDirection: "row",
    justifyContent: "center",
  },

  input: {
    width: 250,
    height: 45,
    borderRadius: 25,
    fontSize: 16,
    paddingLeft: 45,  
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    color: 'rgba(255, 255, 255, 0.7)',
    marginHorizontal: 25,
    marginBottom: -5,
  },

  inputIcon: {
    position: 'absolute',
    top: 8,
    left: 37,
  },

  logoContainer: {
    marginBottom: 20,
    alignItems: 'center',
  },

  btnRounded: {
    borderRadius: 5,
    margin:5
  },

  cardRounded: {
    height: 300,
    backgroundColor: '#daa520',
    marginLeft: 15,
    marginRight: 15,
    marginTop: 4,
    marginBottom: 8,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 12,
  },
  cardImage: {
    width: 363,
    height: 180,
    borderTopRightRadius: 12,
    borderTopLeftRadius: 12,
  },
  menuTitle: {
    fontSize: 24,
    textAlign: "left",
    color: "#f5fffa",
    fontFamily: "Roboto",
    marginTop: 5,
    marginLeft: 10,
    fontWeight: 'bold',
  },
  menuDesc: {
    paddingLeft: 12,
    paddingRight: 12,
  },
  star: {
    width: 25,
    height: 25,
    marginTop: 6,
    marginLeft: 10,
  },
  hotelImage: {
    width: 363,
    height: 200,
    borderRadius: 12,
    marginRight: "auto",
    marginLeft: "auto",
    marginTop: 18,
  },
  titleText: {
    fontSize: 30,
    color:"black",
    textAlign: 'center',
    fontWeight:'bold',
    marginBottom: 5,
    marginTop: 10,
  },

  price: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingLeft: 35,
  },

  location: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingLeft: 35,
  },

  detail: {
    fontWeight: 'bold',
    paddingLeft: 35,
    fontSize: 18,
  },

  menuDetailContainer: {
    backgroundColor: "#fffaf0",
  },  

  PriceLocDetailIcon: {
    position: 'absolute',
  },

  fulldetail: {
    paddingLeft: 40,
    fontSize: 15,

  },

  reviewdetail: {
    fontSize: 18,
  },

  review: {
    fontSize: 18,
    fontWeight: 'bold',

  },

  star1: {
    position: 'absolute',
    paddingLeft: 40,
    marginTop: 20,
  },

  star2:{
    position: 'absolute',
    paddingLeft: 70,
    marginTop: 20,
  },

  star3:{
    position: 'absolute',
    paddingLeft: 100,
    marginTop: 20,
  },

  star4:{
    position: 'absolute',
    paddingLeft: 130,
    marginTop: 20,
  },

  star5:{
    position: 'absolute',
    paddingLeft: 160,
    marginTop: 20,
  },

  reviewdetail:{
    paddingLeft: 40,
    marginTop: 20,
  },

  cardRoundedMember: {
    height: 300,
    width: 350,
    backgroundColor: '#daa520',
    marginLeft: 15,
    marginRight: 15,
    marginTop: 4,
    marginBottom: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 12,
  },

  cardImageMember: {
    width: 350,
    height: 220,
    
  },



});
