import { Route, Routes, useNavigate } from "react-router-dom";
import { NavigationSettings } from "../../layout";
import { v4 as uuidv4 } from "uuid";
import { useEffect } from "react";

function Settings() {
    const navigate = useNavigate();

    useEffect(() => {
        navigate("/settings/mode");
    }, []);

    return <div className="my-container pt-6"></div>;
}

export default Settings;
