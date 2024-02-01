import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { Button, Checkbox, Label, Spinner, TextInput } from "flowbite-react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

export default function SigninForm() {
  const { handleSubmit, control } = useForm();
  const [isLoading, setIsLoading] = useState(false);
  const rotuer = useRouter();

  const action = "login";

  const onSubmit = async (data) => {
    try {
      setIsLoading(true);
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/user`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userName: data?.userName,
          password: data?.password,
          action,
        }),
      });
      const resData = await res.json();

      if (!resData?.success) {
        toast.error(resData?.message);
        return;
      }

      // Set userName to localStorage
      localStorage.setItem("userName", resData?.data?.userName);
      toast.success(resData?.message);
      rotuer.push("/dashboard/me");
    } catch (error) {
      console.error("Internal Error");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center w-full">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex w-full flex-col gap-4 bg-gray-900 px-4 py-24 rounded-lg"
      >
        <h2 className="text-3xl font-semibold mb-16">Please Login</h2>

        <div>
          <div className="mb-2 block">
            <Label
              htmlFor="userName"
              value="Your User Name"
              className="text-white text-xl"
            />
          </div>
          <Controller
            name="userName"
            control={control}
            render={({ field }) => (
              <TextInput
                {...field}
                id="userName"
                type="text"
                placeholder="ex: john doe"
                required
              />
            )}
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
          <Controller
            name="password"
            control={control}
            render={({ field }) => (
              <TextInput
                {...field}
                id="password"
                type="password"
                required
                placeholder="......"
              />
            )}
          />
        </div>

        <div className="flex items-center gap-2">
          <Controller
            name="remember"
            control={control}
            render={({ field }) => (
              <>
                <Checkbox id="remember" {...field} />
                <Label htmlFor="remember" className="text-blue-600">
                  Remember me
                </Label>
              </>
            )}
          />
        </div>

        {isLoading ? (
          <Button>
            <Spinner aria-label="Spinner button example" size="sm" />
            <span className="pl-3">Loading...</span>
          </Button>
        ) : (
          <Button type="submit">Submit</Button>
        )}
      </form>
    </div>
  );
}
