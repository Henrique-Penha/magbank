import { Navigate } from "react-router-dom";

const PrivateRouter = ({ Component, logged }) => {
    return logged ? <Component /> : <Navigate to='/login' />
}

export default PrivateRouter;
