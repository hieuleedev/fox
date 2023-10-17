import React, { useState } from 'react';
import ModalRegister from '../components/modal/ModalRegister';
import Input from "../components/input/Input"
import useAuthStore, { AuthStore } from "../store/useAuthStore"
import { loginRequest } from "../service/authService"
const Login = React.memo(() => {
    const [showRegisterModal, setShowRegisterModal] = useState(false);
    const [email, setEmail] = useState('');
    const [invalidEmail, setInvalidEmail] = useState(false);
    const [password, setPassword] = useState('');
    const { isLoggedIn, status, login, setMessage, setStatus, message, saveToken }: AuthStore = useAuthStore()

    const handleRegisterModal = () => {
        setShowRegisterModal(true); // Mở modal đăng ký
    }

    const handleCloseRegisterModal = () => {
        setShowRegisterModal(false); // Đóng modal đăng ký
    }

    const validateEmail = () => {
        const emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
        if (!emailPattern.test(email)) {
            setInvalidEmail(true);
        } else {
            setInvalidEmail(false);
        }
    }
    console.log("email", email)
    console.log("pâs", password)
    const handleLogin = async () => {
        // setStatus('pending');

        console.log("email", email)
        try {

            const data = await loginRequest(email, password);

            // Xử lý đăng nhập thành công (data chứa thông tin đăng nhập)
            login(data.token);
            setStatus('success');
            setMessage("thành công");
            saveToken(data)
            // Redirect hoặc thực hiện các hành động sau khi đăng nhập thành công
        } catch (error) {
            // Xử lý lỗi từ authService
            setStatus('error');
            setMessage("lõi");
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white shadow-lg rounded-lg p-8 w-96">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Đăng Nhập</h2>
                <form>
                    <div className="mb-4">
                        <label className="block text-gray-600 text-sm font-medium">Email</label>
                        <Input
                            type="email"
                            value={email}
                            onChange={(e: any) => setEmail(e.target.value)}
                            onBlur={validateEmail}
                            invalid={invalidEmail}
                            placeholder="Nhập email"
                        />
                        {invalidEmail && (
                            <p className="text-red-500 text-sm">Email không hợp lệ</p>
                        )}
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-600 text-sm font-medium">Mật khẩu</label>
                        <input
                            type="password"
                            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-400"
                            onChange={(e: any) => setPassword(e.target.value)}
                            placeholder="Nhập mật khảu"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                        onClick={handleLogin}
                    >
                        Đăng nhập
                    </button>
                    {status === 'error' && <div className="text-red-500">{message}</div>}
                    <a href="#" className="text-blue-500 text-sm mt-2 hover:underline">
                        Quên mật khẩu?
                    </a>
                    <button className="bg-white border py-2 w-full rounded-xl mt-5 flex justify-center items-center text-sm hover:scale-105 duration-300 text-[#002D74]">
                        <svg className="mr-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="25px">
                            <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z" />
                            <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z" />
                            <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z" />
                            <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z" />
                        </svg>
                        Đăng nhập với Google
                    </button>
                </form>
                <div className="mt-4 text-center" onClick={handleRegisterModal}>
                    <p className="text-gray-600">Chưa có tài khoản?</p>
                    <h1 className="text-blue-500 hover:underline cursor-pointer">Đăng ký ngay</h1>
                </div>
            </div>
            <div className="md:block hidden w-1/5">
                <img className="rounded-3xl " src="https://images.unsplash.com/photo-1616606103915-dea7be788566?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80" />
            </div>
            {showRegisterModal && (
                <div className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-gray-800 bg-opacity-50">
                    <ModalRegister onClose={handleCloseRegisterModal} />
                </div>
            )}
        </div>
    );
});

export default Login;
