import React from "react";
import { registerApi } from "../../api/auth";
import { useAuth } from "../../hooks/useAuth";
import { useFormik } from "formik";
import * as Yup from "yup";

export default function FormRegister() {
  const { login } = useAuth();
  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: Yup.object(validationSchema()),
    validateOnChange: false,
    onSubmit: async (formValue) => {
      console.log(formValue);
      try {
        const response = await registerApi(formValue);
        const { access_token } = response;
        login(access_token);
      } catch (error) {
        console.log(error.message);
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
          htmlFor="fullname"
        >
          Nombres y Apellidos
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
          id="fullname"
          type="text"
          value={formik.values.fullname}
          onChange={formik.handleChange}
          placeholder="Nombres y Apellidos"
        />
        {formik.errors.fullname && <p>{formik.errors.fullname}</p>}
      </div>
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
          value={formik.values.email}
          onChange={formik.handleChange}
          placeholder="Email"
        />
        {formik.errors.email && <p>{formik.errors.email}</p>}
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
          placeholder="******************"
          value={formik.values.password}
          onChange={formik.handleChange}
        />
        <p className="text-red text-xs italic">Please choose a password.</p>
        {formik.errors.password && <p>{formik.errors.password}</p>}
      </div>
      <div className="flex items-center justify-between">
        <button
          type="submit"
          className="p-2 lg:px-4 md:mx-2 text-white rounded bg-indigo-600 mt-3"
        >
          Sign Up
        </button>
        <a
          className="inline-block align-baseline font-bold text-sm text-blue hover:text-blue-darker"
          href="/login"
        >
          Ya tienes una cuenta?
        </a>
      </div>
    </form>
  );
}

function initialValues() {
  return {
    fullname: "",
    email: "",
    password: "",
  };
}

function validationSchema() {
  return {
    fullname: Yup.string().required("Tu nombre y apellido es requerido"),
    email: Yup.string()
      .required("El correo eléctronico es requerido")
      .email("El formato debe ser email"),
    password: Yup.string()
      .required("La contraseña es requerida")
      .min(6, "Ingrese minimo 6 carácteres"),
  };
}
