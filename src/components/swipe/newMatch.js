import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { size } from '../../helpers/devices';
import AppStyles from '../../AppStyles';
import FastImage from 'react-native-fast-image';
import Button from 'react-native-button';
import { IMLocalized } from '../../Core/localization/IMLocalization';
import Stars from '../../../node_modules/react-native-stars';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { addDocument } from '../../cs530-additions/database';

const NewMatch = (props) => {
  const { url, onSendMessage, onKeepSwiping, currentUser, matchedUser } = props;

  return (
    
    <FastImage source={{ uri: url }} style={styles.container}>
      <Text style={styles.name_style}>{IMLocalized("Rate your interest")}</Text>
{/* stars have been added. need to send the info somewhere. need to redirect user once they've
clicked on the stars */}
  <Stars 
    half={true}
    count={10}
    default={7}
    // update={(onKeepSwiping)} 
    update={(val)=>{
      console.log("stars"+ val),
      addDocument('rating', 
      {user: currentUser,
      match: matchedUser,
      rating: val}),
      onKeepSwiping()
    }} 
    // update={updateDoc}
    // update={(val)=>{
      
    //   addDocument('ratings', 
    //   {user: currentUser,
    //   match: matchedUser,
    //   rating: val})
    //   (onKeepSwiping)
    // }} 
    // update={(onKeepSwiping)} 
    spacing={10}
    starSize={100}
    // count={5}
    fullStar={<Icon name={'star'} size={50} style={[styles.myStarStyle]}/>}
    emptyStar={<Icon name={'star-outline'} size={50} style={[styles.myStarStyle, styles.myEmptyStarStyle]}/>}
    halfStar={<Icon name={'star-half'} size={50} style={[styles.myStarStyle]}/>}
  />
{/* </View> */}
      {/* <TouchableOpacity style={styles.detailBtn} onPress={onKeepSwiping}> 
        <Text style={styles.label}>{IMLocalized('KEEP SWIPING')}</Text> 
      </TouchableOpacity> */}
    </FastImage>
  );
};

NewMatch.propTypes = {
  onSendMessage: PropTypes.func,
  onKeepSwiping: PropTypes.func,
  url: PropTypes.string,
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  name_style: {
    fontSize: size(40),
    fontWeight: 'bold',
    color: '#09EE8F',
    // marginBottom: size(100),
    backgroundColor: 'transparent',
  },
  button: {
    width: '85%',
    backgroundColor: AppStyles.colorSet.mainThemeForegroundColor,
    borderRadius: 12,
    padding: 15,
    marginBottom: size(15),
  },
  label: {
    fontSize: size(18),
    fontWeight: 'bold',
    color: 'white',
    backgroundColor: 'transparent',
  },
  detailBtn: {
    marginBottom: size(75),
  },
  myStarStyle: {
    color: 'gold',
    backgroundColor: 'transparent',
    textShadowColor: 'black',
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 2,
    marginBottom: size(100),
  },
  myEmptyStarStyle: {
    color: 'silver',
  }
});

export default NewMatch;
