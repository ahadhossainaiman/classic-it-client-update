import { useCreateUserMutation } from "@/redux/api/baseApi";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";

const signup = () => {
  const {
    register,
    handleSubmit,
    watch,
    control,
    reset,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const [createUsers, result] = useCreateUserMutation();
  const onSubmit = ({ email, password, username, photoUrl }) => {
    console.log(email, password, username, photoUrl);
    // dispatch(createUser({ email, password, username, photoUrl }));
    createUsers({ email, password, username, photoUrl });
    console.log(result);
    reset();
  };
  return (
    <div data-theme="light" className="h-[100vh]">
      <form onSubmit={handleSubmit(onSubmit)} className="w-[50%] mx-auto">
        <h4 className="font-bold mb-2 text-3xl text-center py-10">
          Please SignUp
        </h4>
        <input
          type="text"
          placeholder="Name"
          {...register("username", { required: true })}
          className="input input-bordered w-full"
        />
        <br />
        <input
          type="text"
          placeholder="Photo URL"
          {...register("photoUrl", { required: true })}
          className="input input-bordered  w-full my-2"
        />
        <br></br>
        <input
          type="email"
          placeholder="email"
          {...register("email", { required: true })}
          className="input input-bordered  w-full my-2"
        />
        <br />
        <input
          type="password"
          placeholder="password"
          {...register("password", {
            required: true,
            minLength: 6,
            //   pattern: /(?=.*[!@#$%^&*])(?=.*[A-Z])/,
          })}
          className="input input-bordered  w-full my-2"
        />
        <div className="form-control mt-6">
          <input
            type="submit"
            value="Sign Up"
            className="btn bg-orange-600 text-white hover:bg-orange-400"
          />
        </div>
      </form>
      <p>
        <small className="text-orange-600 ml-6 text-sm flex justify-center">
          Already have no account? please{" "}
          <Link href="/signin" className="font-bold">
            Sign In
          </Link>
        </small>
      </p>
    </div>
  );
};

export default signup;
