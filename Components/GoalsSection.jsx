import { Component } from "react";
import { Text, View } from "react-native";

class GoalsSection extends Component {

  constructor(props){
    super(props);
    this.state = { goalsArray: [{title:'walking', formType: 'yesno', color: 'purple'}]}
  }
  render(){
  return (
    <View>
      {this.state.goalsArray.map(goal => {
        return (<Text>
          {goal.title}
          </Text>)})
      }
    </View>
  )
}
}


export default GoalsSection;
