import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { loginApi } from "../../api/auth";
import { useAuth } from "../../hooks/useAuth";

export default function FormLogin() {
  const { login } = useAuth();
  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: Yup.object(validationSchema()),
    validateOnChange: false,
    onSubmit: async (formvalue) => {
      try {
        const response = await loginApi(formvalue);
        const { access_token } = response;
        login(access_token);
      } catch (error) {
        console.log(error);
      }
    },
  });
  return (
    <form
      className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col"
      onSubmit={formik.handleSubmit}
    >
      <div className="mb-4">
        <label
          className="block text-grey-darker text-sm font-bold mb-2"
          htmlFor="email"
        >
          Email
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
          id="email"
          type="email"
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          placeholder="Email"
        />
        {formik.errors.email && (
          <p className="text-red text-xs italic">{formik.errors.email}</p>
        )}
      </div>
      <div className="mb-6">
        <label
          className="block text-grey-darker text-sm font-bold mb-2"
          htmlFor="password"
        >
          Password
        </label>
        <input
          className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3"
          id="password"
          type="password"
          name="password"
          onChange={formik.handleChange}
          value={formik.values.password}
          placeholder="******************"
        />
        {formik.errors.password && (
          <p className="text-red text-xs italic">{formik.errors.password}</p>
        )}
      </div>
      <div className="flex items-center justify-between">
        <button
          type="submit"
          className="p-2 lg:px-4 md:mx-2 text-white rounded bg-indigo-600 mt-3"
        >
          Sign In
        </button>
        <a
          className="inline-block align-baseline font-bold text-sm text-blue hover:text-blue-darker"
          href="#"
        >
          Forgot Password?
        </a>
      </div>
    </form>
  );
}

function initialValues() {
  return {
    email: "",
    password: "",
  };
}

function validationSchema() {
  return {
    email: Yup.string().required("El email es requerido").email(),
    password: Yup.string().required("La contraseña es requerida"),
  };
}
