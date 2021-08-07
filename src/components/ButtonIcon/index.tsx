import React from 'react';
import { Text, Image, View, TouchableOpacity } from 'react-native';

import discordImg from '../../assets/discord.png';

import { styles } from './styles';

export function ButtonIcon() {
  return (
    <TouchableOpacity>
      <View style={styles.container}>
        <View style={styles.iconWrapper}>
          <Image source={discordImg} style={styles.icon} />
        </View>

        <Text style={styles.title}>Entrar com Discord</Text>
      </View>
    </TouchableOpacity>
  );
}
