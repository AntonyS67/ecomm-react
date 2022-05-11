import { useFormik } from 'formik';
import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useOrder } from '../../hooks/useOrder';
import * as Yup from "yup"

export default function FormPay() {
    const {saveOrder} = useOrder()
    const navigate = useNavigate()
  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: Yup.object(validationSchema()),
    validateOnChange: false,
    onSubmit:async (formData)=>{
        try {
            await saveOrder(formData)
            navigate('/pay-success')
        } catch (error) {
            console.log(error);
        }
    }
  });
  return (
    <form
      className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col"
      onSubmit={formik.handleSubmit}
    >
      <div className="mb-4">
        <label
          className="block text-grey-darker text-sm font-bold mb-2"
          htmlFor="shipping_address"
        >
          Dirección de envio
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
          id="shipping_address"
          type="text"
          name="shipping_address"
          value={formik.values.shipping_address}
          onChange={formik.handleChange}
        />
        {formik.errors.shipping_address && (
          <p className="text-red text-xs italic">{formik.errors.shipping_address}</p>
        )}
      </div>
      <div className="mb-6">
        <label
          className="block text-grey-darker text-sm font-bold mb-2"
          htmlFor="order_address"
        >
          Dirección de la orden
        </label>
        <input
          className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3"
          id="order_address"
          type="text"
          name="order_address"
          onChange={formik.handleChange}
          value={formik.values.order_address}
        />
        {formik.errors.order_address && (
          <p className="text-red text-xs italic">{formik.errors.order_address}</p>
        )}
      </div>
      <div className="mb-6">
        <label
          className="block text-grey-darker text-sm font-bold mb-2"
          htmlFor="order_address"
        >
          Correo Electrónico
        </label>
        <input
          className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3"
          id="order_email"
          type="email"
          name="order_email"
          onChange={formik.handleChange}
          value={formik.values.order_email}
        />
        {formik.errors.order_email && (
          <p className="text-red text-xs italic">{formik.errors.order_email}</p>
        )}
      </div>
      <div className="mb-6">
        <label
          className="block text-grey-darker text-sm font-bold mb-2"
          htmlFor="terms"
        >
          Acepto los términos y condiciones
        </label>
        <input
        //   className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3"
          id="terms"
          type="checkbox"
          name="terms"
          onChange={formik.handleChange}
          value={formik.values.terms}
        />
        {formik.errors.terms && (
          <p className="text-red text-xs italic">{formik.errors.terms}</p>
        )}
      </div>
      <div className="flex items-center justify-between">
        <button
          type="submit"
          className="p-2 lg:px-4 md:mx-2 text-white rounded bg-indigo-600 mt-3"
        >
          Pagar
        </button>
      </div>
    </form>
  )
}

function initialValues() {
    return {
      shipping_address: "",
      order_address: "",
      order_email: "",
      terms: false,
    };
  }
  
  function validationSchema() {
    return {
      shipping_address: Yup.string().required("La direccion de envio es requerida"),
      order_address: Yup.string().required("La direccion de la orden es requerida"),
      order_email: Yup.string().required("El correo electrónico es requerido").email(true),
      terms: Yup.bool().oneOf([true],"Debes aceptar los términos y condiciones"),
    };
  }
  