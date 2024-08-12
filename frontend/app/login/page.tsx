"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { useEffect, useRef } from "react";
import * as z from "zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
const LoginSchema = z.object({
  email: z.string().email("enter valid email"),
  password: z.string().min(6, "password should be atleast 6 characters long"),
});
type login = z.infer<typeof LoginSchema>;
const page = () => {
  const dd = useRef(null);
  function createStars(type: any, quantity: any) {
    for (let i = 0; i < quantity; i++) {
      var star = document.createElement("div");
      star.classList.add("star", `type-${type}`);
      star.style.left = `${randomNumber(1, 99)}%`;
      star.style.bottom = `${randomNumber(1, 99)}%`;
      star.style.animationDuration = `${randomNumber(50, 200)}s`;
      //@ts-ignore
      dd?.current?.appendChild(star);
    }
  }
  function randomNumber(min: any, max: any) {
    return Math.floor(Math.random() * max) + min;
  }
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<login>({ resolver: zodResolver(LoginSchema) });
  const onSubmit: SubmitHandler<login> = async (data) => {
    console.log(data);
  };
  useEffect(() => {
    createStars(1, 100);
    createStars(2, 50);
    createStars(3, 30);
  }, []);
  return (
    <div className="h-[100dvh] flex items-center justify-center" ref={dd}>
      <form
        className="flex flex-col items-center border rounded-t-xl justify-center gap-3 md:w-1/2 w-full  z-10 py-10 px-4 mx-10"
        style={{ backgroundColor: "#121212" }}
      >
        <Link href="/" className="text-center">
          <h1 className="font-mono md:text-[50px] text-[30px] section-heading">
            Finder
          </h1>
        </Link>

        <p className="text-center text-gray-400 mb-5">
          <span className="text-semibold text-[25px] block">Login</span>
          <span>
            Don't have an Account?{" "}
            <Link href="/register" className="underline">
              Register
            </Link>
          </span>
        </p>
        <div className="flex flex-col gap-3 items-start md:w-1/2 w-full">
          <label className="text-gray-400">Email</label>
          <Input className="w-full bg-gray-800" placeholder="arpit@gmail.com" />
          {errors.email && (
            <span className="text-red-500">{errors.email.message}</span>
          )}
        </div>
        <div className="flex flex-col gap-3 items-end md:w-1/2 w-full">
          <Link href="/forgot" className="text-sm text-gray-400 underline">
            Forgot Password?
          </Link>
        </div>
        <div className="flex flex-col gap-3 items-start md:w-1/2 w-full">
          <label className="text-gray-400">Password</label>
          <Input className="w-full bg-gray-800" placeholder="12345!@@" />
          {errors.password && (
            <span className="text-red-500">{errors.password.message}</span>
          )}
        </div>
        <div className="flex flex-col gap-3 items-center mt-5 md:w-1/2 w-full">
          <Button className="w-full">Login</Button>
        </div>
      </form>
    </div>
  );
};

export default page;
