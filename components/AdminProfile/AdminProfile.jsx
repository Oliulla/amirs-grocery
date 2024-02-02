import { Button, Card, Label, TextInput } from "flowbite-react";
import { HiUserCircle } from "react-icons/hi";
import UpdateProfileModal from "./UpdateProfileModal";

export default function AdminProfile() {
  return (
    <Card className="w-full min-h-screen">
      <div className="flex flex-col items-center justify-center w-full">
        {/* <Image
          alt="Bonnie image"
          height="96"
          src="/images/people/profile-picture-3.jpg"
          width="96"
          className="mb-3 rounded-full shadow-lg"
        /> */}
        <HiUserCircle className="w-20 h-20" />
        <div className="mt-4 flex space-x-3 lg:mt-6">
          <div className="text-2xl flex items-center gap-x-2">
            <span>amir hossain</span>
          </div>
          <UpdateProfileModal />
        </div>
      </div>
      <div className="mt-10">
        <h2 className="text-red-600 font-semibold text-4xl">Danger Zone</h2>
        <div className="mt-8">
          <h3 className="text-2xl">Change Password</h3>
          <form className="flex max-w-md flex-col gap-4 mt-8">
            <div>
              <div className="mb-2 block">
                <Label
                  htmlFor="currentPassword"
                  value="Your current password"
                />
              </div>
              <TextInput
                id="currentPassword"
                type="password"
                placeholder="......"
                required
                shadow
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="updatedPassword" value="Your new password" />
              </div>
              <TextInput id="updatedPassword" type="password" required shadow />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="repeat-password" value="Repeat password" />
              </div>
              <TextInput id="repeat-password" type="password" required shadow />
            </div>

            <Button type="submit">Submit</Button>
          </form>
        </div>
      </div>
    </Card>
  );
}
