import React from "react";
import styles from "./Button.module.css";

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "big" | "small";
}

const Button: React.FC<ButtonProps> = ({ variant = "big", ...buttonProps }) => {
    return (
        <button
            className={[styles.root, styles[variant]].join(" ")}
            {...buttonProps}
        />
    );
};

export default Button;
