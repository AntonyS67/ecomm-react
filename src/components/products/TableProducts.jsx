import React from "react";
import { FaEdit, FaTimes } from "react-icons/fa";
import { BASE_URI } from "../../utils/constants";

export default function TableProducts(props) {
    const {products,onEdit,onDelete} = props
  return (
    <div className="overflow-x-auto">
      <table className="table-auto w-full">
        {/* Table header */}
        <thead className="text-sm uppercase text-slate-400 bg-slate-50 rounded-sm">
          <tr>
            <th className="p-2">
              <div className="font-bold text-center">Imagen</div>
            </th>
            <th className="p-2">
              <div className="font-bold text-center">Nombre</div>
            </th>
            <th className="p-2">
              <div className="font-bold text-center">SKU</div>
            </th>
            <th className="p-2">
              <div className="font-bold text-center">Descripción</div>
            </th>
            <th className="p-2">
              <div className="font-bold text-center">Categoría</div>
            </th>
            <th className="p-2">
              <div className="font-bold text-center">Precio</div>
            </th>
            <th className="p-2">
              <div className="font-bold text-center">Stock</div>
            </th>
            <th className="p-2">
              <div className="font-bold text-center">Acciones</div>
            </th>
          </tr>
        </thead>
        {/* Table body */}
        <tbody className="text-sm font-medium divide-y divide-slate-100">
          {products.map((product, index) => (
            <tr key={index}>
              <td className="p-2">
                <div className="text-center">
                    <img src={`${BASE_URI}/storage/${product.image}`} width="50" height="50"/>
                </div>
              </td>
              <td className="p-2">
                <div className="text-center">{product.name}</div>
              </td>
              <td className="p-2">
                <div className="text-center">{product.sku}</div>
              </td>
              <td className="p-2">
                <div className="text-center">{product.description}</div>
              </td>
              <td className="p-2">
                <div className="text-center">{product.category.name}</div>
              </td>
              <td className="p-2">
                <div className="text-center">S/{product.price}</div>
              </td>
              <td className="p-2">
                <div className="text-center">{product.stock}</div>
              </td>
              <td>
                <div className="flex justify-center">
                  <FaEdit
                    type="icon"
                    cursor="pointer"
                    onClick={() => onEdit(product)}
                    className="mr-5"
                  />
                  <FaTimes
                    type="icon"
                    cursor="pointer"
                    onClick={() => onDelete(product)}
                  />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
