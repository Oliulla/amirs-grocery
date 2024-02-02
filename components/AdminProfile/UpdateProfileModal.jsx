import { Button, Label, Modal, TextInput } from "flowbite-react";
import { useState } from "react";
import { CiEdit } from "react-icons/ci";

const UpdateProfileModal = () => {
  const [openModal, setOpenModal] = useState(false);
  const [email, setEmail] = useState("");

  function onCloseModal() {
    setOpenModal(false);
    setEmail("");
  }

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
                  <Label htmlFor="email" value="Your email" />
                </div>
                <TextInput
                  id="email"
                  placeholder="name@company.com"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  required
                />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="password" value="Your password" />
                </div>
                <TextInput id="password" type="password" required />
              </div>

              <div className="w-full">
                <Button>Update Name</Button>
              </div>
            </div>
          </Modal.Body>
        </Modal>
      </>
    </>
  );
};

export default UpdateProfileModal;
