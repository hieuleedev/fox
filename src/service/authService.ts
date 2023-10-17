
import axios from 'axios';

export const loginRequest = async (email: string, password: string) => {
    console.log("hsagdsh", email)
    try {
        const response = await axios.post('http://localhost:3001/auth/login', {
            email: email,
            password: password,
        });

        // Kiểm tra mã trạng thái HTTP
        if (response.status === 200) {
            const data = response.data;
            return data;
        } else {
            console.log('Lỗi kaka');
        }
    } catch (error) {
        console.error('Lỗi kaka', error);
    }
};






