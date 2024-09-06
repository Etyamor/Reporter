import { useState} from "react";
import useAuthStore from "../store/authStore";
import Loading from "./Loading";

function Login() {

    const { login, signup, formLoading } = useAuthStore();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLogin, setIsLogin] = useState(true);

    const handleSubmit = () => {
        if (isLogin) {
            login(email, password);
        } else {
            signup(email, password);
        }
    };

    if (formLoading) {
        return <Loading />;
    }

    return (
        <>
            <div className="flex items-center justify-center min-h-screen bg-gray-100">
                <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
                    <h2 className="text-2xl font-bold mb-6 text-center">{isLogin ? "Login" : "Sign up"}</h2>
                    <input
                        className="w-full p-2 mb-4 border rounded"
                        type="email"
                        placeholder="Email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}/>
                    <input
                        className="w-full p-2 mb-4 border rounded"
                        type="password"
                        placeholder="Password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}/>
                    <button
                        className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 mb-4"
                        onClick={handleSubmit}
                    >
                        {isLogin ? "Login" : "Sign Up"}
                    </button>
                    <button
                        className="w-full text-blue-500 p-2 rounded hover:underline"
                        onClick={() => setIsLogin(!isLogin)}
                    >
                        {isLogin ? "Don't have an account? Sign Up" : "Already have an account? Login"}
                    </button>
                </div>
            </div>
        </>
    )
}

export default Login;