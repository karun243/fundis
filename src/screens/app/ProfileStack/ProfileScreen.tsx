import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { View, ScrollView, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import {} from "../../../assets/icons";

import {
  AssociationsmIcon,
  BackIcon,
  CardIcon,
  ConfigIcon,
  GlobeIcon,
  NotificationIcon,
  SettingIcon,
  ShowIcon,
  ThemeIcon,
} from "../../../assets/icons";
// import LogoutConfirmationModal from "../../../components/Modals/LogoutConfirmationModal";
// import SelectLanguageModal from "../../../components/Modals/SelectLanguageModal";
import Typography from "../../../components/Typography";
import Avatar from "../../../components/Avatar";
import { SolidButton, TextButton } from "../../../components/Buttons";
import SwitchButton from "../../../components/switchButton";
import { LanguageBtn } from "../../../components/languageBtn";
import { useNavigation } from "@react-navigation/native";

const ProfileScreen = () => {
  const navigation = useNavigation();
  // const [logoutModal, setLogoutModal] = useState(false);
  // const [languageModal, setLanguageModal] = useState(false);
  const [language, setLanguage] = useState("EN");
  const [notificationOn, setNotificationOn] = useState(false);
  const toggleNotification = () => {
    setNotificationOn((prev) => !prev);
  };

  const [faceIdOn, setFaceIdOn] = useState(false);
  const toggleFaceId = () => setFaceIdOn((previousState) => !previousState);

  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => setDarkMode((previousState) => !previousState);

  const settingItems = [
    {
      id: "1",
      first: <SettingIcon />,
      second: "Change Password",
      third: null,
    },
    {
      id: "2",
      first: <NotificationIcon iconColor="main-normal" />,
      second: "Notification",
      third: (
        <SwitchButton val={notificationOn} onValChange={toggleNotification} />
      ),
    },
    {
      id: "3",
      first: <GlobeIcon iconColor="main-normal" />,
      second: "Language",
      third: (
        <LanguageBtn
          onPress={() => navigation.navigate("SelectLanguage")}
          language={language}
          setLanguage={setLanguage}
        />
      ),
    },
    {
      id: "4",
      first: <ShowIcon iconColor="main-normal" />,
      second: "Use Face ID to login",
      third: <SwitchButton val={faceIdOn} onValChange={toggleFaceId} />,
    },
    {
      id: "5",
      first: (
        <ThemeIcon iconColor={!darkMode ? "icon-disabled" : "main-normal"} />
      ),
      second: "Dark Mode",
      third: <SwitchButton val={darkMode} onValChange={toggleDarkMode} />,
    },
  ];

  const infoItems = [
    {
      id: "1",
      first: <AssociationsmIcon iconColor="main-normal" />,
      second: "Supported Associations",
      third: "3 Associations",
      fourth: "Association",
    },
    {
      id: "2",
      first: <ConfigIcon iconColor="main-normal" />,
      second: "Objectives",
      third: "3/5 Completed",
      fourth: "Objectives",
    },
    {
      id: "3",
      first: <CardIcon iconColor="main-normal" />,
      second: "Card Information",
      third: "1 Active Card",
      fourth: "CardInfo",
    },
  ];

  return (
    <SafeAreaView className="flex-1 bg-[#F7F7F7]">
      <ScrollView
        showsVerticalScrollIndicator={false}
        className="mx-4 flex-col"
      >
        {/* back button */}
        <TouchableOpacity
          onPress={() => navigation.navigate("Home")}
          className="py-3"
        >
          <BackIcon />
        </TouchableOpacity>
        {/* name/email/avatar */}
        <View className="flex-row items-center justify-between mb-5">
          <View>
            <Typography variant="H6" classname="text-text-heading">
              Wayne Rooney
            </Typography>
            <Typography variant="C1S" classname="text-main-normal">
              waynerooney@mutv.com
            </Typography>
          </View>
          <Avatar label="wayne rooney" />
        </View>
        {/* info items */}
        <View className="bg-white rounded-xl px-4 py-2 mb-8">
          {infoItems.map((item, index) => {
            return (
              <View
                className="flex-row items-center justify-between py-2"
                key={item.id}
              >
                <View className="flex-row items-center">
                  {item.first}
                  <Typography
                    variant="C1S"
                    classname="text-text-placeholder ml-3"
                  >
                    {item.second}
                  </Typography>
                </View>
                <TextButton
                  classname="text-main-normal"
                  state="active"
                  onPress={() => navigation.navigate(item.fourth)}
                  textVariant="C1B"
                >
                  {item.third}
                </TextButton>
                {/* <Typography variant="C1B" classname="text-main-normal">
                  {item.third}
                </Typography> */}
              </View>
            );
          })}
        </View>
        {/* Settings & Preference */}
        <Typography variant="C1B" classname="text-text-body mb-3">
          Settings & Preferences
        </Typography>
        <View className="bg-white rounded-xl px-4 py-2 mb-5">
          {settingItems.map((item, index) => {
            return (
              <View
                className="flex-row items-center justify-between py-2"
                key={item.id}
              >
                <View className="flex-row items-center">
                  {item.first}
                  {index === 0 ? (
                    <TextButton
                      onPress={() => navigation.navigate("ChangePassword")}
                      textVariant="C1S"
                      state="active"
                      classname="ml-3 text-text-placeholder"
                    >
                      {item.second}
                    </TextButton>
                  ) : (
                    <Typography
                      variant="C1S"
                      classname="text-text-placeholder ml-3"
                    >
                      {item.second}
                    </Typography>
                  )}
                </View>
                {item.third}
              </View>
            );
          })}
        </View>
        {/* logout button */}
        <SolidButton
          classname="py-4 "
          // onPress={() => setLogoutModal(true)}
          onPress={() => navigation.navigate("LogoutConfirmation")}
          borderRadius="md"
          bgColor="white"
          textVariant="C1B"
        >
          Logout
        </SolidButton>
        {/* <StatusBar backgroundColor="#F7F7F7" /> */}
        <StatusBar style="auto" translucent backgroundColor="transparent" />
      </ScrollView>
    </SafeAreaView>
  );
};
export default ProfileScreen;

// todos...
// 1. fix issue faced while navigating to Associations from profile screen
