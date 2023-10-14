import React from 'react';
import moment from 'moment';
interface EventData {
    title: string;
    start: Date;
    end: Date;
    color: string;
    description: string;
}

interface ModalProps {
    show: boolean;
    event: EventData | null;
    onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ show, event, onClose }) => {
    return (
        show && (
            <div className="fixed inset-0 flex items-center justify-center z-50">
                <div className="bg-white p-4 rounded-lg shadow-lg w-1/2">
                    <h2 className="text-2xl font-semibold mb-2">{event?.title}</h2>
                    <p className="text-lg text-gray-600 mb-2">
                        Bắt Đầu: {moment(event?.start).format('HH:mm')} giờ
                    </p>
                    <p className="text-lg text-gray-600 mb-2">
                        Kêt Thúc: {moment(event?.end).format('HH:mm')} giờ
                    </p>
                    <p className="mb-4">{event?.description}</p>
                    <button
                        className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
                        onClick={onClose}
                    >
                        Đóng
                    </button>
                </div>
            </div>
        )
    );
};

export default Modal;