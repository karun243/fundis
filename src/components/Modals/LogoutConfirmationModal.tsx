import {View, Text, Pressable} from 'react-native';
import Typography from '../Typography';
import {Dispatch, SetStateAction} from 'react';
import {OutlinedButton, SolidButton} from '../Buttons';

type LogoutConfirmationModalProps = {
  setLogoutModal: Dispatch<SetStateAction<boolean>>;
};

const LogoutConfirmationModal = (props: LogoutConfirmationModalProps) => {
  const {setLogoutModal} = props;
  return (
    <Pressable
      onPress={() => setLogoutModal(false)}
      className="absolute top-0 bottom-0 right-0 left-0 z-20 items-center justify-center"
      style={{backgroundColor: 'rgba(0, 18, 26, 0.8)'}}
    >
      <Pressable className="w-[75%]  py-5 px-5  bg-white rounded-xl ">
        <View className="flex-col items-center space-y-5">
          <Typography variant="B2B" classname="mb-2">
            Logout
          </Typography>
          <Typography variant="C1S" classname="text-center text-[#71727A]">
            Are you sure you want to log out? You'll need to login again to use the app.
          </Typography>
          <View className="w-full px-1 flex-row justify-between my-2">
            <OutlinedButton
              classname="flex-1 py-2"
              textVariant="C1S"
              state="active"
              onPress={() => setLogoutModal(false)}
              borderColor="icon-default"
              borderRadius="md"
            >
              Cancel
            </OutlinedButton>
            <SolidButton
              textVariant="C1B"
              onPress={() => console.warn('You press logout')}
              classname="flex-1 ml-4 px-4 py-2"
              bgColor="state-error-base"
              borderRadius="md"
            >
              Logout
            </SolidButton>
          </View>
        </View>
      </Pressable>
    </Pressable>
  );
};
export default LogoutConfirmationModal;
