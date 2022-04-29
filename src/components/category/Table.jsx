import React from "react";
import { FaEdit, FaTimes } from "react-icons/fa";
export default function Table(props) {
  const { categories,onDelete,onEdit } = props;

  return (
    <div className="overflow-x-auto">
      <table className="table-auto w-full">
        {/* Table header */}
        <thead className="text-sm uppercase text-slate-400 bg-slate-50 rounded-sm">
          <tr>
            <th className="p-2">
              <div className="font-bold text-center">Nombre</div>
            </th>
            <th className="p-2">
              <div className="font-bold text-center">Descripción</div>
            </th>
            <th className="p-2">
              <div className="font-bold text-center">Acciones</div>
            </th>
          </tr>
        </thead>
        {/* Table body */}
        <tbody className="text-sm font-medium divide-y divide-slate-100">
          {categories.map((category, index) => (
            <tr key={index}>
              <td className="p-2">
                <div className="text-center">{category.name}</div>
              </td>
              <td className="p-2">
                <div className="text-center">{category.description}</div>
              </td>
              <td>
                <div className="flex justify-center">
                  <FaEdit type="icon" cursor="pointer" onClick={()=>onEdit(category)} className="mr-5"/>
                  <FaTimes type="icon" cursor="pointer" onClick={()=>onDelete(category)} />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
