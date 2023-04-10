import React, {useState} from 'react';
import { View, Text, TouchableHighlight} from 'react-native'

const ExpandableText = ({ children, descriptionLength }) => {
  const fullText = children;

  // Set the initial state of the text to be collapsed
  const [isExpanded, setIsExpanded] = useState(false);

  // This function is called when the read more/less button is clicked
  const toggleText = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <View className='text'>
      <Text>{isExpanded ? fullText : `${fullText.slice(0, descriptionLength)}...`}</Text>
      <TouchableHighlight
  activeOpacity={0.6}
  underlayColor="#DDDDDD"
  onPress={() => toggleText()}>
      <Text className='toggle-button'>
        {isExpanded ? 'Show less' : 'Show more'}
      </Text>
      </TouchableHighlight>
    </View>
  );
};

export default ExpandableText;
