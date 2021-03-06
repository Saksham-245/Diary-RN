import React from 'react';
import {
  Dimensions,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  View,
} from 'react-native';
import {Button, TextInput} from 'react-native-paper';
import {useSelector, useDispatch} from 'react-redux';
import * as diariesAction from '../store/actions/diariesAction';
import {PRIMARY_COLOR} from '../constants/Colors';

const NewDiary = ({navigation}) => {
  const [text, setText] = React.useState('');
  const [error, setError] = React.useState(false);
  const user = useSelector(state => state.auth.user);
  const dispatch = useDispatch();

  const saveDiary = () => {
    if (text.length === 0) {
      setError(true);
    } else {
      dispatch(diariesAction.saveDiary(user.uid, text));
      navigation.goBack();
    }
  };

  return (
    <View>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'height' : 'padding'}>
        <TextInput
          label="Type your diary here"
          value={text}
          multiline={true}
          numberOfLines={(Dimensions.get('screen').height * 0.6) / 15.2}
          onChangeText={t => setText(t)}
          error={error}
        />
        <Button
          mode={'contained'}
          color={PRIMARY_COLOR}
          style={styles.saveButton}
          onPress={saveDiary}>
          Save
        </Button>
      </KeyboardAvoidingView>
    </View>
  );
};

const styles = StyleSheet.create({
  saveButton: {
    width: Dimensions.get('window').width * 0.8,
    borderRadius: 10,
    marginTop: Dimensions.get('window').height * 0.01,
    marginBottom: Dimensions.get('window').height * 0.02,
    marginLeft: Dimensions.get('window').width * 0.1,
  },
});

export default NewDiary;
