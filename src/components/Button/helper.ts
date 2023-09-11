import { BorderRadiusType, ButtonColorType } from "./types";

export const getBorderRadiusStyle = (borderRadius: BorderRadiusType) => {
    switch (borderRadius) {
        case "full":
            return "rounded-full";
        case "md":
            return "rounded-[12px]";
        case "sm":
            return "rounded-[5px]";
        default:
            return "";
    }
};

export const getButtonColorStyle = (bgColor: ButtonColorType) => {
    switch (bgColor) {
        case "main-light":
            return {
                defaultBgColor: "bg-main-light",
                pressedBgColor: "",
                disabledBgColor: "",
                defaultTextColor: "",
                pressedTextColor: "",
                disabledTextColor: "",
                defaultIconColor: "",
                pressedIconColor: "",
                disabledIconColor: "",
            };
        case "main-light-hover":
            return {
                defaultBgColor: "bg-main-light-hover",
                pressedBgColor: "",
                disabledBgColor: "",
                defaultTextColor: "",
                pressedTextColor: "",
                disabledTextColor: "",
                defaultIconColor: "",
                pressedIconColor: "",
                disabledIconColor: "",
            };
        case "main-normal":
            return {
                defaultBgColor: "bg-main-normal",
                pressedBgColor: "bg-main-dark",
                disabledBgColor: "bg-main-light",
                defaultTextColor: "text-main-light-hover",
                pressedTextColor: "text-main-light-hover",
                disabledTextColor: "text-main-normal",
                defaultIconColor: "",
                pressedIconColor: "",
                disabledIconColor: "",
            };
        case "main-normal-hover":
            return {
                defaultBgColor: "bg-main-normal-hover",
                pressedBgColor: "",
                disabledBgColor: "",
                defaultTextColor: "",
                pressedTextColor: "",
                disabledTextColor: "",
                defaultIconColor: "",
                pressedIconColor: "",
                disabledIconColor: "",
            };
        case "state-error-base":
            return {
                defaultBgColor: "bg-state-error-base",
                pressedBgColor: "",
                disabledBgColor: "",
                defaultTextColor: "",
                pressedTextColor: "",
                disabledTextColor: "",
                defaultIconColor: "",
                pressedIconColor: "",
                disabledIconColor: "",
            };
        default:
            return {
                defaultBgColor: " ",
                pressedBgColor: "",
                disabledBgColor: "",
                defaultTextColor: "",
                pressedTextColor: "",
                disabledTextColor: "",
                defaultIconColor: "",
                pressedIconColor: "",
                disabledIconColor: "",
            };
    }
};