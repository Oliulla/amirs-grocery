import { Button, Checkbox, Label, TextInput } from "flowbite-react";

export default function SigninForm() {
  return (
    <div className="flex flex-col justify-center items-center w-full">
      <form className="flex w-full flex-col gap-4 bg-gray-900 px-4 py-24 rounded-lg">
        <h2 className="text-3xl font-semibold mb-16">Please Login</h2>

        <div>
          <div className="mb-2 block">
            <Label
              htmlFor="username"
              value="Your User Name"
              className="text-white text-xl"
            />
          </div>
          <TextInput
            id="userName"
            type="text"
            placeholder="ex: john doe"
            required
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label
              htmlFor="password"
              value="Your password"
              className="text-white text-xl"
            />
          </div>
          <TextInput
            id="password"
            type="password"
            required
            placeholder="......"
          />
        </div>
        <div className="flex items-center gap-2">
          <Checkbox id="remember" />
          <Label htmlFor="remember" className="text-blue-600">
            Remember me
          </Label>
        </div>
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
}
