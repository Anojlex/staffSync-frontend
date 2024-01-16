import { useRef, useState } from "react";
import PencilIcon from "./PencilIcon";
import Modal from "./Modal";
import axiosInstance from "../Utils/axiosInstance";
import { toast } from "react-toastify";
import LoadingSpinner from "../Spinner";
import { useDispatch } from "react-redux";
import { addEmployee } from "../Utils/employeeSlice";

const ProfilePic = ({ employeeId, employee }) => {
    const [modalOpen, setModalOpen] = useState(false);
    const [avatar, setAvatar] = useState(employee.avatar);
    const [file, setFile] = useState(null);
    const [changing, setChanging] = useState(false);
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch()


    const updateAvatar = (image) => {
        setFile(image)
        const dataUrl = URL.createObjectURL(image)
        setAvatar(dataUrl)
        setChanging(true)
    };

    const resetAvatar = () => {
        setAvatar(employee.avatar)
        setChanging(false)
    }

    const sendAvatar = async () => {
        const formData = new FormData();
        formData.append('avatar', file);
        formData.append('employeeId', employeeId);
        setChanging(false)
        setLoading(true);
        try {
            const response = await axiosInstance.patch('/users/avatar', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            setLoading(false);
            dispatch(addEmployee(response.data))
            toast.success('Saved successfully!', {
                position: 'bottom-left',
                autoClose: 3000,
            });
        } catch (error) {
            console.error('Error uploading file:', error.message);
        }
    };

    return (
        <div className="flex flex-col items-center pt-12 ml-10">
            <div className="relative  ">
                {loading && (<div className="absolute bg-[#3a455894] w-[150px] h-[150px] rounded-full flex justify-center items-center z-10">
                    <LoadingSpinner />
                </div>)}
                <img
                    src={(avatar ? avatar : "https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-PNG-HD-Image.png")}
                    alt=""

                    className="w-[150px] h-[150px] rounded-full border-4 border-gray-300 shadow-md hover:border-gray-7"
                />
                <button
                    className="absolute -bottom-3 left-0 right-0 m-auto w-fit p-[.35rem] rounded-full bg-gray-300 hover:bg-gray-700 border border-gray-600"
                    title="Change photo"
                    onClick={() => setModalOpen(true)}
                >

                    <PencilIcon />

                </button>
            </div>
            {changing && (
                <div className="flex mt-5">
                    <button className=" border-2 border-green-400 w-16 h-6 m-1 rounded-xl text-xs hover:border-green-500 text-green-400" onClick={resetAvatar}>Cancel</button>
                    <button className="bg-green-400 w-16 h-6 m-1 rounded-xl text-xs hover:bg-green-500 text-white" onClick={sendAvatar}>Save</button>
                </div>
            )}

            {modalOpen && (
                <Modal
                    updateAvatar={updateAvatar}
                    closeModal={() => setModalOpen(false)}
                />
            )}
        </div>
    );
};

export default ProfilePic;
