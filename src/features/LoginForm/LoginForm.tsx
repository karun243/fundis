import { View } from "react-native";
import Typography from "../../components/Typography";
import { useTranslation } from "react-i18next";

const LoginForm = () => {
  const { t } = useTranslation();
  return (
    <View className="flex-1 mx-10 mt-5 mb-9">
      <Typography classname="text-main-normal" variant="H6">
        {t("feature.login.WELCOME")}
      </Typography>
    </View>
  );
};
export default LoginForm;
