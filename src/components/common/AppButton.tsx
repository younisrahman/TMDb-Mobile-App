import React from 'react';
import {
  TouchableOpacity,
  StyleProp,
  ViewStyle,
  StyleSheet,
  TextStyle,
} from 'react-native';
import {hp, wp} from '@utils';
import {Colors, FontFamily, FontSize} from '@config';
import {AppText} from '@common';
interface AppButtonProp {
  title?: string;
  textStyle?: TextStyle;
  style?: StyleProp<ViewStyle>;
  onPress?: () => void;
}

const AppButton: React.FC<AppButtonProp> = ({
  title,
  textStyle,
  style,
  onPress,
}) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.buttonStyle, style]}>
      <AppText style={[styles.buttonText, textStyle]}>{title}</AppText>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  buttonText: {
    color: Colors.black,
    fontFamily: FontFamily.SourceSansB,
    fontSize: FontSize.M,
  },
  buttonStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    width: wp(90),
    height: hp(6),
    borderRadius: hp(0.7),
    backgroundColor: Colors.primary,
  },
});

export default AppButton;