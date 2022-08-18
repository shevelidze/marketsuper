import React from "react";
import { ui } from "../components";

const UiTest: React.FC = () => {
    return (
        <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
            <ui.Button>Hello world!</ui.Button>
            <ui.Button variant="small">Hello world!</ui.Button>
            <ui.Button disabled>Hello world!</ui.Button>
        </div>
    );
};

export default UiTest;
