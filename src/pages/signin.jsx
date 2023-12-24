import { useGetUserQuery, useLoginUserMutation, useSetCurrentUserMutation } from "@/redux/api/baseApi";
import { setUser } from "@/redux/features/user/userSlice";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { loginUser } from "../redux/features/user/userSlice";

const signin = () => {
  const {
    register,
    handleSubmit,
    watch,
    control,
    reset,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const [loginUsers, result] = useLoginUserMutation();
  const [setCurrentUser , res ] = useSetCurrentUserMutation()
  const { data, isError } = useGetUserQuery();
  const onSubmit = ({ email, password }) => {
    console.log(email, password);
    loginUsers({ email, password });
    // console.log(result);
    if (result.isSuccess || res.isUninitialized ) {
      console.log(data);
      const currentUser = data.find((user) => user.email === email);
      console.log(currentUser);
      dispatch(setUser(currentUser));
      dispatch(loginUser(currentUser));
      setCurrentUser(currentUser);
      // console.log(res);
      reset();
    }
   
  };
  return (
    <div data-theme="light" className="h-[100vh] w-[50vw] mx-auto my-auto ">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h4 className="font-bold mb-2">Please SignUp</h4>
        <input
          type="email"
          placeholder="email"
          {...register("email", { required: true })}
          className="input input-bordered"
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
          className="input input-bordered"
        />
        <div className="form-control mt-6">
          <input
            type="submit"
            value="Login"
            className="btn bg-orange-600 text-white hover:bg-orange-400"
          />
        </div>
      </form>
      <p>
        <small className="text-orange-600 ml-6 text-sm">
          Already have no account? please{" "}
          <Link href="/signup" className="font-bold">
            Register
          </Link>
        </small>
      </p>
    </div>
  );
};

export default signin;
