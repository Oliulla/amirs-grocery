import { useAuth } from "@/context/AuthContext";
import { Button, Label, Modal, TextInput } from "flowbite-react";
import { useState } from "react";
import toast from "react-hot-toast";
import { CiEdit } from "react-icons/ci";

const UpdateProfileModal = () => {
  const [openModal, setOpenModal] = useState(false);
  const [updatedUserName, setUpdatedUsername] = useState("");
  const [currentPass, setCurrentPass] = useState("");
  const { dispatch } = useAuth();

  function onCloseModal() {
    setOpenModal(false);
    setUpdatedUsername("");
    setCurrentPass("");
  }

  const handleChangeProfile = async () => {
    const currentUserName = localStorage.getItem("userName");
    // console.log(currentUserName);
    if (!updatedUserName || !updatedUserName) {
      toast.error("User name and password is required");
      return;
    }

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/user?username=${currentUserName}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            updatedUserName: updatedUserName,
            oldPassword: currentPass,
          }),
        }
      );

      const resData = await res.json();

      if (!resData?.success) {
        toast.error(resData?.message);
        return;
      }

      if (resData.success) {
        onCloseModal();
        toast.success(resData.message);
        dispatch({
          type: "LOGIN",
          payload: { userName: resData?.data?.userName },
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <button onClick={() => setOpenModal(true)}>
        <CiEdit />
      </button>
      <>
        <Modal
          show={openModal}
          size="md"
          position="center"
          onClose={onCloseModal}
          className="border border-red-600"
        >
          <Modal.Header className="border-b">
            <span className="text-xl font-medium text-gray-900 dark:text-white">
              Change username
            </span>
          </Modal.Header>
          <Modal.Body className="flex items-center min-h-screen">
            <div className="space-y-6">
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="username" value="Your username" />
                </div>
                <TextInput
                  id="username"
                  placeholder="amir hossain"
                  value={updatedUserName}
                  onChange={(e) => setUpdatedUsername(e.target.value)}
                  required
                />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="password" value="Your Current password" />
                </div>
                <TextInput
                  id="password"
                  type="password"
                  value={currentPass}
                  onChange={(e) => setCurrentPass(e.target.value)}
                  required
                />
              </div>

              <div className="w-full">
                <Button onClick={handleChangeProfile}>Update Name</Button>
              </div>
            </div>
          </Modal.Body>
        </Modal>
      </>
    </>
  );
};

export default UpdateProfileModal;
