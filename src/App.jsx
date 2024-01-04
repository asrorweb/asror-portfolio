import { Navigation, NavigationSettings } from "./layout";
import { Route, Routes, useLocation } from "react-router-dom";
import { routes, routes_settings } from "./routes";
import { v4 as uuidv4 } from "uuid";
import { getItem } from "./helpers/localStorageFunc";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { darkModefunc } from "./reducer/dark-light-mode";
import { ScrollTop } from "./ui";

function App() {
    const location = useLocation();
    const dispatch = useDispatch();
    const general_routes = [...routes, ...routes_settings];

    useEffect(() => {
        const darkLight = getItem("dark");
        if (darkLight == "true") {
            dispatch(darkModefunc());
        }
    }, []);

    return (
        <div className="min-h-screen  dark:bg-[#171836] ">
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
