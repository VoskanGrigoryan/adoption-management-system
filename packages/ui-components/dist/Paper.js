import { jsx as _jsx } from "react/jsx-runtime";
import { Paper as MantinePaper } from "@mantine/core";
export const Paper = ({ children, ...props }) => {
    return (_jsx(MantinePaper, { ...props, styles: {
            root: {
                backgroundColor: "var(--mantine-color-dark-4)",
                border: "1px solid var(--mantine-color-dark-5)",
            },
        }, children: children }));
};
export default Paper;
