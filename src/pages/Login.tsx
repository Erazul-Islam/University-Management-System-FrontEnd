import { useLoginMutation } from "@/redux/features/auth/authApi";
import { setUser } from "@/redux/features/auth/authslice";
import { verifyToken } from "@/utils/VerifyToken";
import { Button } from "antd";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";

const Login = () => {

    const dispatch = useDispatch()

    const { register, handleSubmit } = useForm()

    const [login, { data, error }] = useLoginMutation()
    console.log(data)
    console.log(error)

    const onSubmit = async (data) => {
        const userInfo = {
            id: data.id,
            password: data.password
        }
        const res = await login(userInfo).unwrap()
        const user = verifyToken(res.data.accessToken)
        console.log(user)
        dispatch(setUser({ user: user, token: res.data.accessToken }))
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label htmlFor="id">ID:</label>
                <input type="text" id="id" {...register('id')} />
            </div>
            <div>
                <label htmlFor="id">Password:</label>
                <input type="text" id="password" {...register('password')} />
            </div>
            <Button htmlType="submit" >Login</Button>
        </form>
    );
};

export default Login;