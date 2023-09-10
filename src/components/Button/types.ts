import { TypographyVariantType } from '../Typography';
import { cs } from '../../customStyles/colorStyle';

type ButtonStateType = "active" | "disabled" | "loading";
export type BorderRadiusType = "full" | "md" | "sm";
export type ButtonColorType =
    | "main-normal"
    | "main-normal-hover"
    | "main-light-hover"
    | "main-light"
    | "state-error-base";

export type TextButtonProps = {
    children: string;
    className?: string;
    onPress: () => void;
    state: ButtonStateType;
    textVariant: TypographyVariantType;
};

export type OutlinedButtonProps = {
    borderColor: keyof typeof cs;
    borderRadius: BorderRadiusType;
    children: string;
    className?: string;
    icon?: React.ReactNode;
    onPress: () => void;
    state: ButtonStateType;
    textClassName?: string;
    textVariant: TypographyVariantType;
};

export type SolidButtonProps = {
    bgColor: ButtonColorType;
    borderRadius: BorderRadiusType;
    children: string | React.ReactNode;
    className?: string;
    fullWidth?: boolean;
    icon?: React.ReactNode;
    onPress: () => void;
    state: ButtonStateType;
    textClassName?: string;
    textVariant: TypographyVariantType;
}