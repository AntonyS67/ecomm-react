import React from "react";
import { FaEye, FaTimes, FaCheckCircle } from "react-icons/fa";
export default function TableOrders(props) {
  const { orders, editOrder,viewOrder } = props;

  const getNameStatus = (number) => {
    switch (number) {
      case "0":
        return "Rechazado";
      case "1":
        return "Pendiente";
      case "2":
        return "Aceptado";
    }
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
              <div className="font-bold text-center">Còdigo</div>
            </th>
            <th className="p-2">
              <div className="font-bold text-center">Fecha</div>
            </th>
            <th className="p-2">
              <div className="font-bold text-center">Cliente</div>
            </th>
            <th className="p-2">
              <div className="font-bold text-center">Monto</div>
            </th>
            <th className="p-2">
              <div className="font-bold text-center">Direccion de envio</div>
            </th>
            <th className="p-2">
              <div className="font-bold text-center">Direccion de la orden</div>
            </th>
            <th className="p-2">
              <div className="font-bold text-center">Correo Electrónico</div>
            </th>
            <th className="p-2">
              <div className="font-bold text-center">Estado</div>
            </th>
            <th className="p-2">
              <div className="font-bold text-center">Acciones</div>
            </th>
          </tr>
        </thead>
        {/* Table body */}
        <tbody className="text-sm font-medium divide-y divide-slate-100">
          {orders.map((order, index) => (
            <tr key={index}>
              <td className="p-2">
                <div className="text-center">{index + 1}</div>
              </td>
              <td className="p-2">
                <div className="text-center">COD{order.id}</div>
              </td>
              <td className="p-2">
                <div className="text-center">{order.created_at}</div>
              </td>
              <td className="p-2">
                <div className="text-center">{order.user.fullname}</div>
              </td>
              <td className="p-2">
                <div className="text-center">S/{order.ammount}</div>
              </td>
              <td className="p-2">
                <div className="text-center">{order.shipping_address}</div>
              </td>
              <td className="p-2">
                <div className="text-center">{order.order_address}</div>
              </td>
              <td className="p-2">
                <div className="text-center">{order.order_email}</div>
              </td>
              <td className="p-2">
                <div className="text-center">
                  {getNameStatus(order.order_status)}
                </div>
              </td>
              <td>
                <div className="flex justify-center">
                  <FaEye
                    type="icon"
                    cursor="pointer"
                    onClick={() => viewOrder(order)}
                    className="mr-5 text-[blue]"
                    title="Ver"
                  />
                  {order.order_status == "1" && (
                    <>
                      <FaCheckCircle
                        type="icon"
                        cursor="pointer"
                        onClick={() => editOrder(order, "2")}
                        className="mr-5 text-[green]"
                        title="Aceptar"
                      />
                      <FaTimes
                        type="icon"
                        cursor="pointer"
                        onClick={() => editOrder(order, "0")}
                        className="mr-5 text-[red]"
                        title="Rechazar"
                      />
                    </>
                  )}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
