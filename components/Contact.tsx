"use client";
import React from "react";

import { MdMarkEmailRead } from "react-icons/md";
import { ImLocation2 } from "react-icons/im";
import { useForm, SubmitHandler } from "react-hook-form";

type Props = {};

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const Contact = (props: Props) => {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:nayanbastola111@gmail.com?subject-${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message} (${formData.email})`;
  };

  return (
    <>
      <div className="h-screen  p-4 md:p-10  flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
        <h3 className="absolute top-16 md:top-24 uppercase tracking-[15px] text-gray-500 text-2xl md:text-4xl">
          Contact
        </h3>
        <div className="flex flex-col space-y-8 md:space-y-10 text-center md:text-left">
          <h4 className="text-2xl md:text-4xl font-semibold">
            I have got just what you need{" "}
            <span className="decoration-secondary underline">
              Let&lsquo;s talk
            </span>
          </h4>
          <div className="space-y-8 md:space-y-10">
            <div className="flex items-center space-x-2 md:space-x-5">
              <MdMarkEmailRead className="text-secondary h-5 w-5 md:h-7 md:w-7 animate-bounce" />
              <p>nayanbastola111@gmail.com</p>
            </div>
            <div className="flex items-center space-x-2 md:space-x-5">
              <ImLocation2 className="text-secondary h-5 w-5 md:h-7 md:w-7 animate-pulse" />
              <p>Toronto, Canada</p>
            </div>
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col space-y-4 md:space-y-2 w-full md:w-fit mx-auto"
          >
            <div className="flex flex-col md:flex-row space-y-2 md:space-x-2">
              <input
                {...register("name")}
                className="contactInput"
                type="text"
                placeholder="Name"
              />
              <input
                {...register("email")}
                className="contactInput"
                type="email"
                placeholder="Email"
              />
            </div>
            <input
              {...register("subject")}
              className="contactInput"
              type="text"
              placeholder="Subject"
            />
            <textarea
              {...register("message")}
              className="contactInput"
              placeholder="Message..."
              rows={4}
            />
            <button
              type="submit"
              className="bg-secondary py-4 md:py-5 px-6 md:px-10 rounded-md text-black font-bold text-lg"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
