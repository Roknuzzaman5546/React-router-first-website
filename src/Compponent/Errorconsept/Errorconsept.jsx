import { useRouteError } from "react-router-dom";

const Errorconsept = () => {
    const error = useRouteError();
    console.error(error)
    return (
        <div>
            <h2>This page is not found</h2>
        </div>
    );
};

export default Errorconsept;