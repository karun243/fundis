import {View, Text} from 'react-native';
import Typography from '../Typography';

type AvatarProps = {
  label: string;
};

const Avatar = (props: AvatarProps) => {
  const {label} = props;

  return (
    <View className="bg-text-placeholder rounded-full h-[57] w-[57] items-center justify-center border-[3px]">
      <Typography variant="C1B" classname="text-main-light-hover">
        {getFirstLetters(label)}
      </Typography>
    </View>
  );
};
export default Avatar;

function getFirstLetters(inputString: string) {
  if (inputString.trim() === '') {
    return 'UN';
  }
  const words = inputString.trim().split(' ');

  if (words.length == 1) {
    const firstLetterWord1 = words[0][0].toUpperCase();
    return firstLetterWord1;
  } else {
    const firstLetterWord1 = words[0][0].toUpperCase();
    const firstLetterWord2 = words[1][0].toUpperCase();
    return `${firstLetterWord1}${firstLetterWord2}`;
  }
}
