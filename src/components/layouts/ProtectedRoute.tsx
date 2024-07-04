import { useCurrentToken } from "@/redux/features/auth/authslice";
import { useAppSelector } from "@/redux/features/hooks";
import { ReactNode } from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }: { children: ReactNode }) => {


    const {token} = useAppSelector(useCurrentToken)

    if(!token){
        return <Navigate to='/login' replace={true} ></Navigate>
    }

    return children
};

export default ProtectedRoute;