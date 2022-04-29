import React from "react";
import { FaTimes } from "react-icons/fa";
import { BASE_URI } from "../../utils/constants";

export default function TableCart(props) {
  const { carts, deleteCart, handleChange } = props;
  const getTotal = () => {
    let suma = 0;
    carts.map((cart) => {
      suma += cart.quantity * cart.product.price;
      return 0;
    });
    return suma;
  };
  const removeProductCart = (id) => {
    deleteCart(id);
    handleChange();
  };
  return (
    <div className="overflow-x-auto">
      <table className="table-auto w-full">
        {/* Table header */}
        <thead className="text-sm uppercase text-slate-400 bg-slate-50 rounded-sm">
          <tr>
            <th className="p-2">
              <div className="font-bold text-center">#</div>
            </th>
            <th className="p-2">
              <div className="font-bold text-center">Imagen</div>
            </th>
            <th className="p-2">
              <div className="font-bold text-center">Producto</div>
            </th>
            <th className="p-2">
              <div className="font-bold text-center">Precio</div>
            </th>
            <th className="p-2">
              <div className="font-bold text-center">Cantidad</div>
            </th>
            <th className="p-2">
              <div className="font-bold text-center">Total</div>
            </th>
            <th className="p-2">
              <div className="font-bold text-center">Acciones</div>
            </th>
          </tr>
        </thead>
        {/* Table body */}
        <tbody className="text-sm font-medium divide-y divide-slate-100">
          {carts.map((cart, index) => (
            <tr key={index}>
              <td className="p-2">
                <div className="text-center">{index + 1}</div>
              </td>
              <td className="p-2">
                <div className="text-center">
                  <img
                    src={`${BASE_URI}/storage/${cart.product.image}`}
                    width="50"
                    height="50"
                    alt={cart.product.name}
                  />
                </div>
              </td>
              <td className="p-2">
                <div className="text-center">{cart.product.name}</div>
              </td>
              <td className="p-2">
                <div className="text-center">{cart.product.price}</div>
              </td>
              <td className="p-2">
                <div className="text-center">{cart.quantity}</div>
              </td>
              <td className="p-2">
                <div className="text-center">
                  {cart.quantity * cart.product.price}
                </div>
              </td>
              <td>
                <div className="flex justify-center">
                  <FaTimes type="icon" cursor="pointer" onClick={()=>removeProductCart(cart.id)} />
                </div>
              </td>
            </tr>
          ))}

          <tr>
            <td className="p-2" colSpan={5}>
              <div className="text-center">TOTAL:</div>
            </td>
            <td className="p-2">
              <div className="text-center">{getTotal()}</div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
