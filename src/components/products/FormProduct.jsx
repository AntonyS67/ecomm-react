import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import useProduct from "../../hooks/useProduct";

export default function FormProduct(props) {
  const { setShowModal, changeRender, categories,product } = props;

  const {saveProduct,updateProduct} = useProduct()

  const formik = useFormik({
    initialValues: initialValues(product),
    validationSchema: Yup.object(validationSchema()),
    validateOnChange: false,
    onSubmit: async (formValue) => {
      try {
        if(product) await updateProduct(formValue,product.id);
        else await saveProduct(formValue)
        changeRender()
        setShowModal(false)
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
          Imagen
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="image"
          type="file"
          name="image"
          accept=".jpg,.jpeg,.png"
          // value={formik.values.image}
          onChange={(event)=>{
            formik.setFieldValue('image',event.target.files[0])
          }}
        />
      </div>
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
          rows="3"
          name="description"
          value={formik.values.description}
          onChange={formik.handleChange}
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="price"
        >
          Precio
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="price"
          type="number"
          name="price"
          value={formik.values.price}
          onChange={formik.handleChange}
        />
        {formik.errors.price && (
          <p className="text-red-500 text-sm">{formik.errors.price}</p>
        )}
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="stock"
        >
          Stock
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="stock"
          type="number"
          name="stock"
          value={formik.values.stock}
          onChange={formik.handleChange}
        />
        {formik.errors.stock && (
          <p className="text-red-500 text-sm">{formik.errors.stock}</p>
        )}
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="category_id"
        >
          Categoría
        </label>
        <select
          onChange={formik.handleChange}
          name="category_id"
          id="category_id"
          value={formik.values.category_id}
          className="max-w-[100%]"
        >
          <option value="">-- Seleccione una categoría --</option>
          {categories.map((category, index) => (
            <option key={index} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>

        {formik.errors.category_id && (
          <p className="text-red-500 text-sm">{formik.errors.category_id}</p>
        )}
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
    price: data?.price || 0,
    stock: data?.stock || "",
    category_id: data?.category_id || "",
    image: data?.image || "",
  };
}

function validationSchema() {
  return {
    name: Yup.string().required("El nombre del producto es requerido"),
    price: Yup.number().required("El precio del producto es requerido"),
    stock: Yup.number().required("El stock del producto es requerido"),
    category_id: Yup.number().required("La categoria es requerida")
  };
}
