import React from 'react';
import Link from 'next/link';
function ModalRegister({ onClose }: any) {
    return (
        <div className="bg-white shadow-lg rounded-lg p-8 w-96 relative">
            <button
                className="absolute top-2 right-4 text-gray-600 hover:text-gray-800"
                onClick={onClose}
            >
                x {/* Dấu x Unicode */}
            </button>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Đăng Ký</h2>

            <form>
                <div className="mb-4">
                    <label className="block text-gray-600 text-sm font-medium">Tên đăng nhập</label>
                    <input
                        type="text"
                        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-400"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-600 text-sm font-medium">Email</label>
                    <input
                        type="email"
                        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-400"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-600 text-sm font-medium">Mật khẩu</label>
                    <input
                        type="password"
                        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-400"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-600 text-sm font-medium">Xác nhận mật khẩu</label>
                    <input
                        type="password"
                        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-400"
                    />
                </div>
                <button
                    type="submit"
                    className="w-full py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                >
                    Đăng Ký
                </button>
            </form>
            <div className="mt-4 text-center">
                <p className="text-gray-600">Đã có tài khoản?</p>
                <Link href="/login" className="text-blue-500 hover:underline">Đăng nhập</Link>
            </div>
        </div>

    );
}

export default ModalRegister;