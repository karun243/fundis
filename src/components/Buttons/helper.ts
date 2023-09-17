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
                pressedBgColor: "bg-main-normal",
                disabledBgColor: "bg-main-light opacity-75",
                defaultTextColor: "text-main-dark-hover",
                pressedTextColor: "text-main-dark-hover",
                disabledTextColor: "text-main-dark-hover opacity-75",
                defaultIconColor: "",
                pressedIconColor: "",
                disabledIconColor: "opacity-75",
            };
        case "main-light-hover":
            return {
                defaultBgColor: "bg-main-light-hover",
                pressedBgColor: "bg-main-light",
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
                pressedBgColor: "bg-state-error-dark",
                disabledBgColor: "bg-state-error-light",
                defaultTextColor: "text-state-error-light",
                pressedTextColor: "text-state-error-light",
                disabledTextColor: "text-state-error-base opacity-50",
                defaultIconColor: "",
                pressedIconColor: "",
                disabledIconColor: "opacity-75",
            };
        case "white":
            return {
                defaultBgColor: "bg-white",
                pressedBgColor: "bg-main-normal",
                disabledBgColor: "",
                defaultTextColor: "text-main-normal",
                pressedTextColor: "text-white",
                disabledTextColor: "text-main-normal opacity-50",
                defaultIconColor: "",
                pressedIconColor: "",
                disabledIconColor: "opacity-75",
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