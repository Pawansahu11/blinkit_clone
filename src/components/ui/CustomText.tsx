import { Fonts } from "@utils/Constants";
import { TextStyle } from "react-native";

interface Props {
    variant?:
    "h1" |
    "h2" |
    "h3" |
    "h4" |
    "h5" |
    "h6" |
    "h7" |
    "h8" |
    "h9" |
    "body";
    fontFamily?: Fonts;
    fontSize?: number;
    style?: TextStyle | TextStyle[];
    children?: React.ReactNode;
    numberOfLines?: number;
    onLayout?: (event: object) => void
}
const 


