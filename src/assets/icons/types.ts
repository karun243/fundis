import { SvgProps } from "react-native-svg";
import { cs } from "../../customStyles/colorStyle";

export interface IconProps extends SvgProps {
    iconColor?: keyof typeof cs;
}