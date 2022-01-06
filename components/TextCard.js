import React from 'react';
import {Card, Paragraph} from 'react-native-paper';
import tailwind from 'twrnc';
import {Dimensions, StyleSheet, Text, View} from 'react-native';

const TextCard = ({diary}) => {
  return (
    <Card
      style={[
        tailwind`flex w-40 justify-between relative mt-5 h-40 shadow-md`,
        styles.card,
      ]}>
      <Card.Content>
        <Paragraph>{diary}</Paragraph>
      </Card.Content>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    marginLeft: Dimensions.get('window').width * 0.06,
    marginRight: Dimensions.get('window').width * 0.02,
    marginBottom: Dimensions.get('window').height * 0.02,
  },
});

export default TextCard;
