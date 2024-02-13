import { Navigation, NavigationSettings } from "./layout";
import { Route, Routes, useLocation } from "react-router-dom";
import { routes, routes_settings, skills_page } from "./routes";
import { v4 as uuidv4 } from "uuid";
import { getItem } from "./helpers/localStorageFunc";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { darkModefunc } from "./reducer/dark-light-mode";
import { ScrollTop } from "./ui";
import { Alert } from "@material-tailwind/react";
import { alertMessageEnd } from "./reducer/alert-massage";

function App() {
    const location = useLocation();
    const dispatch = useDispatch();
    const { alert } = useSelector((state) => state.alert);
    const general_routes = [...routes, ...routes_settings, ...skills_page];

    useEffect(() => {
        const darkLight = getItem("dark");
        if (darkLight == "true") {
            dispatch(darkModefunc());
        }
    }, [alert]);

    alert !== null &&
        setTimeout(() => {
            dispatch(alertMessageEnd());
        }, 2000);

    return (
        <div className="min-h-screen  dark:bg-[#171836] ">
            {/* alert massage */}
            {alert !== null && (
                <Alert
                    color={alert.color}
                    className="max-w-[80%] sm:max-w-xl absolute right-3 top-3 z-50"
                >
                    {alert.title}
                </Alert>
            )}

            <ScrollTop />
            <Navigation />
            {location.pathname.startsWith("/settings") && (
                <NavigationSettings />
            )}
            <Routes>
                {general_routes.map((data) => {
                    return (
                        <Route
                            key={uuidv4()}
                            path={data.path}
                            element={data.element}
                        />
                    );
                })}

                {/* <Route path="*" element={<NoPage />} /> */}
            </Routes>
        </div>
    );
}

export default App;
