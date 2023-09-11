import { cs } from "../../customStyles/colorStyle";

export const getStrokeColor = (iconColor: keyof typeof cs) => {
    return cs[iconColor]
};