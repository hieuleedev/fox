import React, { useState } from 'react';
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
    isEditing: boolean; // Thêm trạng thái chỉnh sửa
    onEdit: () => void; // Hàm để chuyển sang chế độ chỉnh sửa
    onDelete: () => void; // Hàm để xóa sự kiện
    onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ show, event, isEditing, onEdit, onDelete, onClose }) => {
    const [images, setImages] = useState<string[]>([]);

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const selectedImages = e.target.files;
        if (selectedImages) {
            const imageUrls: string[] = [];
            for (let i = 0; i < selectedImages.length; i++) {
                const file = selectedImages[i];
                const reader = new FileReader();
                reader.onload = (e) => {
                    if (e.target) {
                        imageUrls.push(e.target.result as string);
                    }
                    if (imageUrls.length === selectedImages.length) {
                        setImages(imageUrls);
                    }
                };
                reader.readAsDataURL(file);
            }
        }
    };

    const handleDeleteImage = (index: number) => {
        const updatedImages = [...images];
        updatedImages.splice(index, 1);
        setImages(updatedImages);
    };

    const handleTitleChange = (newTitle: string) => {
        // Xử lý thay đổi tiêu đề (hoặc các trường khác nếu cần)
    };

    const handleUpdateEvent = () => {
        // Xử lý cập nhật sự kiện
    };

    const handleDeleteEvent = () => {
        // Xử lý xóa sự kiện
    };

    return (
        show && (
            <div className="fixed inset-0 flex items-center justify-center z-50">
                <div className="bg-white p-4 rounded-lg shadow-lg w-1/2 relative">
                    <button
                        className="absolute top-0 right-0 text-red-600 hover:text-gray-800 px-2 py-1"
                        onClick={onClose}
                    >
                        Đóng
                    </button>
                    {isEditing ? ( // Chế độ chỉnh sửa
                        <>
                            <h2 className="text-2xl font-semibold mb-2">Cập nhật sự kiện</h2>
                            <input
                                type="text"
                                placeholder="Tiêu đề"
                                value={event?.title}
                                onChange={(e) => handleTitleChange(e.target.value)}
                                className="w-full p-2 mb-2 rounded-lg"
                            />
                            {/* Các trường khác */}
                            <button
                                className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
                                onClick={handleUpdateEvent}
                            >
                                Cập nhật
                            </button>
                            <button
                                className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-700 ml-2"
                                onClick={onDelete}
                            >
                                Xóa
                            </button>
                        </>
                    ) : ( // Chế độ xem
                        <>
                            <h2 className="text-2xl font-semibold mb-2">{event?.title}</h2>
                            <p className="text-lg text-gray-600 mb-2">
                                Bắt Đầu: {moment(event?.start).format('HH:mm')} giờ
                            </p>
                            <p className="text-lg text-gray-600 mb-2">
                                Kết Thúc: {moment(event?.end).format('HH:mm')} giờ
                            </p>
                            <p className="mb-4">{event?.description}</p>
                            {images.length > 0 && (
                                <div className="flex flex-wrap">
                                    {images.map((image, index) => (
                                        <div key={index} className="relative">
                                            <img
                                                src={image}
                                                alt={`Event Image ${index + 1}`}
                                                className="w-32 h-32 rounded-lg m-2"
                                            />
                                            <button
                                                className="absolute top-0 right-0 text-red-600 hover:text-red-800 px-2 py-1"
                                                onClick={() => handleDeleteImage(index)}
                                            >
                                                x
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            )}
                            <label
                                htmlFor="imageUpload"
                                className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700 cursor-pointer"
                            >
                                Tải hình ảnh cho sự kiện
                            </label>
                            <input
                                type="file"
                                id="imageUpload"
                                accept="image/*"
                                className="hidden"
                                multiple
                                onChange={handleImageChange}
                            />
                            <button
                                className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
                                onClick={onEdit}
                            >
                                Chỉnh sửa
                            </button>
                        </>
                    )}
                </div>
            </div>
        )
    );
};

export default Modal;
