
export type PlaneOptionType = { id: string; label: string; value: string }[];
export type IconOptionType = {
    id: string;
    icon: React.ReactNode;
    label: string;
    value: string;
}[];

export type RadioButtonGroupProps = {
    options: PlaneOptionType | IconOptionType;
    selectedOption: string;
    onSelect: (option: string) => void;
    divider?: boolean;
    onColor?: string;
    offColor?: string;
    size?: number;
};

export type RadioButtonProps = {
    label: string;
    selected: boolean;
    onSelect: () => void;
    icon?: React.ReactNode;
    onColor?: string;
    offColor?: string;
    size?: number;
};
