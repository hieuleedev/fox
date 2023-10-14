import React, { useState } from 'react';
import { Calendar, momentLocalizer, Views } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { MOCK_EVENTS } from '../data/event';
import Modal from '../components/modal/Modal';

const localizer = momentLocalizer(moment);

interface EventData {
    title: string;
    start: Date;
    end: Date;
    color: string;
    description: string;
    // images: string[];
}

export default function CalendarPage() {
    const events: EventData[] | undefined = MOCK_EVENTS?.map((event) => {
        return {
            title: event.title,
            start: new Date(event.start),
            end: new Date(event.end),
            color: event.color,
            description: event.description,
        };
    });

    const [showModal, setShowModal] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [showModalEnvent, setShowModalEvent] = useState(false);
    const [selectedEvent, setSelectedEvent] = useState<EventData | null>(null);
    const [newEvent, setNewEvent] = useState<EventData>({
        title: '',
        start: new Date(),
        end: new Date(),
        color: '',
        description: '',

    });
    const handleEventClick = (event: EventData) => {
        setSelectedEvent(event);
        setShowModal(true);
    };;
    const handleSaveEvent = () => {
        // Save the new event to the events list
        //   setEvents([...events, newEvent]);
        setShowModalEvent(false);
        // Reset the new event data
        setNewEvent({
            title: '',
            start: new Date(),
            end: new Date(),
            color: '',
            description: '',
        });
    };
    const handleModalClose = () => {
        setShowModal(false);
    };
    const handleModalCloseEvent = () => {
        setShowModalEvent(false);
    };
    const handleAddEventClick = () => {
        setShowModalEvent(true);
    };
    const handleEditEvent = () => {
        setIsEditing(true); // Chuyển sang chế độ chỉnh sửa
    };

    const handleDeleteEvent = () => {
        // Xử lý xóa sự kiện
    };
    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const selectedImages = e.target.files;
        if (selectedImages) {
            const imageUrls: string[] = [];
            const totalImages = selectedImages.length;
            let loadedImages = 0;

            for (let i = 0; i < totalImages; i++) {
                const file = selectedImages[i];
                const reader = new FileReader();

                reader.onload = (event) => {
                    if (event.target) {
                        imageUrls.push(event.target.result as string);
                        loadedImages++;

                        if (loadedImages === totalImages) {
                            // setNewEvent({ ...newEvent, images: imageUrls });
                        }
                    }
                };

                reader.readAsDataURL(file);
            }
        }
    };

    return (
        <div className="relative">
            <button className="flex items-center justify-center bg-blue-500 text-white rounded-full py-2 px-4 my-4" onClick={handleAddEventClick}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-6 h-6 mr-2"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    />
                </svg>
                Thêm sự kiện
            </button>
            <div className={showModal || showModalEnvent ? 'fixed inset-0 bg-black opacity-50 z-50' : 'hidden'}></div>
            <Calendar
                localizer={localizer}
                startAccessor="start"
                events={events}
                endAccessor="end"
                style={{
                    height: '1000px',
                }}
                eventPropGetter={(event: EventData) => {
                    return {
                        style: {
                            backgroundColor: event.color,
                        },
                    };
                }}
                onSelectEvent={handleEventClick}
                views={[Views.MONTH, Views.WEEK, Views.DAY, Views.AGENDA]}
            />
            {showModalEnvent && (
                <div className="fixed inset-0 flex items-center justify-center z-50">

                    <div className="bg-white p-4 rounded-lg shadow-lg w-1/2">
                        <button
                            className="absolute top-0 right-0 text-red-600 hover:text-gray-800 px-2 py-1"
                            onClick={handleModalCloseEvent}
                        >
                            Đóng
                        </button>
                        <button
                            className="absolute top-2 right-2 text-red-500 cursor-pointer"
                            onClick={handleModalCloseEvent}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>
                        <h2 className="text-2xl font-semibold mb-2">Thêm sự kiện</h2>
                        <input
                            type="text"
                            placeholder="Tiêu đề"
                            value={newEvent.title}
                            onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
                            className="w-full p-2 mb-2 rounded-lg"
                        />
                        <input
                            type="datetime-local"
                            value={moment(newEvent.start).format('YYYY-MM-DDTHH:mm')}
                            onChange={(e) =>
                                setNewEvent({ ...newEvent, start: new Date(e.target.value) })
                            }
                            className="w-full p-2 mb-2 rounded-lg"
                        />
                        <input
                            type="datetime-local"
                            value={moment(newEvent.end).format('YYYY-MM-DDTHH:mm')}
                            onChange={(e) =>
                                setNewEvent({ ...newEvent, end: new Date(e.target.value) })
                            }
                            className="w-full p-2 mb-2 rounded-lg"
                        />
                        <textarea
                            placeholder="Mô tả"
                            value={newEvent.description}
                            onChange={(e) => setNewEvent({ ...newEvent, description: e.target.value })}
                            className="w-full p-2 mb-2 rounded-lg"
                        />
                        <label
                            htmlFor="imageUpload"
                            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700 cursor-pointer"
                        >
                            <span>Thêm ảnh</span>
                            <input
                                type="file"
                                id="imageUpload"
                                accept="image/*"
                                className="hidden"
                                onChange={handleImageChange}
                                multiple
                            />
                        </label>
                        <button
                            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
                            onClick={handleSaveEvent}
                        >
                            Lưu
                        </button>
                        <button
                            className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-700 ml-2"
                            onClick={handleModalCloseEvent}
                        >
                            Hủy
                        </button>
                    </div>
                </div>
            )}


            <Modal
                show={showModal}
                event={selectedEvent}
                isEditing={isEditing} // Trạng thái chỉnh sửa
                onEdit={handleEditEvent} // Hàm để chuyển sang chế độ chỉnh sửa
                onDelete={handleDeleteEvent} // Hàm để xóa sự kiện
                onClose={() => setShowModal(false)}
            />

        </div>
    );
}
