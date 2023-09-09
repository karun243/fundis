import clsx from "clsx";
import { Text } from "react-native";

const variants = {
  H1: "H1",
  H2: "H2",
  H3: "H3",
  H4: "H4",
  H5: "H5",
  H6: "H6",
  B1S: "B1S",
  B1B: "B1B",
  B2S: "B2S",
  B2B: "B2B",
  C1: "C1",
  C1B: "C1B",
  D1B: "D1B",
} as const;

const variantClasses = {
  H1: "text-H1",
  H2: "text-H2",
  H3: "text-H3",
  H4: "text-H4",
  H5: "text-H5",
  H6: "text-H6",
  B1S: "text-B1S",
  B1B: "text-B1B",
  B2S: "text-B2S",
  B2B: "text-B2B",
  C1: "text-C1",
  C1B: "text-C1B",
  D1B: "text-D1B",
} as const;

export type TypographyVariantTypes = keyof typeof variants;

type TypographyProps = {
  children: string | React.ReactNode;
  variant: TypographyVariantTypes;
  classname?: string; // for other styles like textcolor
};

const Typography = (props: TypographyProps) => {
  const { children, variant, classname } = props;
  const typographyStyle = clsx(variantClasses[variant], classname);

  return <Text className={typographyStyle}>{children}</Text>;
};
export default Typography;
