import React from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Button, ScrollView } from "react-native";


            
const styles=StyleSheet.create({
  TextInputStyleClass:{
    color: "green",
    fontSize: 40
  },
  column: {
    flexDirection: "column"
  }
})


export default class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      teamonescore: 0,
      teamtwoscore: 0,
      teamonepoint : {},
      teamtwopoint : {}
    };

  }

  updatescore(){
    let teamonetotal= 0;
    for(let game in this.state.teamonepoint){
      teamonetotal += parseInt(this.state.teamonepoint[game]) || 0;
    }

    let teamtwototal= 0;
    for(let game in this.state.teamtwopoint){
      teamtwototal += parseInt(this.state.teamtwopoint[game]) || 0;
    }

    this.setState({
      teamonescore: teamonetotal,
      teamtwoscore: teamtwototal,
    });

  }

  renderTextBox(number, team) {
    let placeholder = 'GAME ' + number;
    return (
      <View style={styles.column} key="number">
        <TextInput keyboardType="numeric" key="number"  onChangeText={(text)=>{
          let teamname={};
          teamname[team]=this.state[team];
          teamname[team][number]=text;

          this.setState(teamname);
          this.updatescore();
        }} placeholder={placeholder} underlineColorAndroid="transparent" style={styles.TextInputStyleClass} />
      </View>
    );
  }

  render() {
    let teamOneGames = [];
    let teamTwoGames = [];

    for (let i = 1; i <= 10; i++) {
      teamOneGames.push(this.renderTextBox(i,'teamonepoint'));
      teamTwoGames.push(this.renderTextBox(i,'teamtwopoint'));
    }

    return (


     
<View style={{flexDirection: "row", height: "100%"}}>
  <View style={{ flex: 1, justifyContent: "center", backgroundColor: "#6dc6ed"}}>
    <Text >TEAM 1</Text>
    <TextInput  placeholder="ENTER NAME" underlineColorAndroid="transparent" style={styles.TextInputStyleClass} />
    <TextInput  placeholder="ENTER NAME" underlineColorAndroid="transparent" style={styles.TextInputStyleClass} />

    {teamOneGames}

    <View style={styles.row}>

      <Text
        fontWeight="bold"
        style={styles.TextInputStyleClass}>{this.state.teamonescore}</Text>

    </View>

   
   
  </View>
 
  <View style={{ flex: 1, justifyContent: "center", backgroundColor: "#f9c275"}}>
    <Text >TEAM 2</Text>
    <TextInput  placeholder="ENTER NAME" underlineColorAndroid="transparent" style={styles.TextInputStyleClass} />
    <TextInput  placeholder="ENTER NAME" underlineColorAndroid="transparent" style={styles.TextInputStyleClass} />

    {teamTwoGames}

    <View style={styles.row}>

      <Text
        fontWeight="bold"

        style={styles.TextInputStyleClass}>{this.state.teamtwoscore}</Text>

    </View>

    
    
  </View>
</View>

    );
  }
}







  
                 