import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { profileStyle } from '../components/ProfileStyle';


const ProfileScreen = () => {
  const [followers, setFollowers] = useState(100);
  const [wallet, setWallet] = useState(1000);

  return (
    <View style={profileStyle.container}>
      <View style={profileStyle.header}>
        <TouchableOpacity onPress={() => setFollowers(followers - 1)}>
          <Text style={profileStyle.followers}>Followers: {followers}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setWallet(wallet - 1)}>
          <Text style={profileStyle.wallet}>Wallet: {wallet}</Text>
        </TouchableOpacity>
      </View>
      <View style={profileStyle.profilePicContainer}>
        <Image
          style={profileStyle.profilePic}
          source={{
            uri:
              'https://pbs.twimg.com/profile_images/1270234259582689280/CNG4EWte_400x400.jpg',
          }}
        />
      </View>
      <TouchableOpacity style={profileStyle.settingsButton}>
        <Text style={profileStyle.settingsText}>Settings</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProfileScreen;
