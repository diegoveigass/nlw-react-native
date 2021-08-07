import React from 'react';
import {
  Text,
  Image,
  View,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';

import discordImg from '../../assets/discord.png';

import { styles } from './styles';

type ButtonProps = TouchableOpacityProps & {
  title?: string;
};

export function ButtonIcon({ title, ...rest }: ButtonProps) {
  return (
    <TouchableOpacity style={styles.container} {...rest}>
      <View style={styles.iconWrapper}>
        <Image source={discordImg} style={styles.icon} />
      </View>

      <Text style={styles.title}>{title ?? 'Default'}</Text>
    </TouchableOpacity>
  );
}
