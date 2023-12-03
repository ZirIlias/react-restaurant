import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

export const useTheme = function() {
    return useContext( ThemeContext);
}