import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useCategory } from "../../hooks/useCategory";

export default function FormCategory(props) {  
  const { setShowModal, changeRender, category } = props;
  
  const { saveCategory,updateCategory } = useCategory();

  const formik = useFormik({
    initialValues: initialValues(category),
    validationSchema: Yup.object(validationSchema()),
    validateOnChange: false,
    onSubmit: async (formValue) => {
      try {
        if(category) await updateCategory(formValue,category.id)
        else await saveCategory(formValue);
        setShowModal(false);
        changeRender();
      } catch (error) {
        console.log(error);
      }
    },
  });
  return (
    <form
      className="rounded px-8 pt-6 pb-8 mb-4"
      onSubmit={formik.handleSubmit}
    >
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="name"
        >
          Nombre
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="name"
          type="text"
          name="name"
          value={formik.values.name}
          onChange={formik.handleChange}
        />
        {formik.errors.name && (
          <p className="text-red-500 text-sm">{formik.errors.name}</p>
        )}
      </div>
      <div className="mb-6">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="description"
        >
          Descripción
        </label>
        <textarea
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          id="description"
          type="text"
          rows="10"
          name="description"
          value={formik.values.description}
          onChange={formik.handleChange}
        />
      </div>
      <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
        <button
          className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
          type="button"
          onClick={() => setShowModal(false)}
        >
          Cerrar
        </button>
        <button
          className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
          type="submit"
        >
          Guardar
        </button>
      </div>
    </form>
  );
}

function initialValues(data) {
  return {
    name: data?.name || "",
    description: data?.description || "",
  };
}

function validationSchema() {
  return {
    name: Yup.string().required("El nombre de la categoría es requerida"),
  };
}
