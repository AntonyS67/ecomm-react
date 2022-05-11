import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Modal from "../../components/category/modal";
import HeaderPage from "../../components/HeaderPage";
import OrderPDF from "../../components/orders/OrderPDF";
import TableOrders from "../../components/orders/TableOrders";
import Pagination from "../../components/Pagination";
import { useOrder } from "../../hooks/useOrder";
import Header from "../../partials/Header";
import Sidebar from "../../partials/Sidebar";

export default function Orders() {
  const location = useLocation();
  let query = new URLSearchParams(location.search);
  let q = parseInt(query.get("page"));
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(q || 1);
  const [isChange, setIsChange] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [titleModal, setTitleModal] = useState("");
  const [contentModal, setContentModal] = useState(null);
  const path = window.location.origin + location.pathname;

  const { orders, total, pages, getAllOrders, updateOrder } = useOrder();

  useEffect(() => {
    getAllOrders(currentPage);
  }, [isChange]);

  const editOrder = async (order, status) => {
    let confirmed = "";

    if (status === "2") {
      confirmed = window.confirm("Desea aceptar la orden?");
    } else if (status === "0") {
      confirmed = window.confirm("Desea rechazar la orden?");
    }
    if (confirmed) {
      const new_order = {
        ammount: order.ammount,
        shipping_address: order.shipping_address,
        order_address: order.order_address,
        order_email: order.order_email,
        order_status: status,
      };

      await updateOrder(order.id,new_order);
    }
    setIsChange(true);
  };

  const viewOrder = (order) => {
    setContentModal(
      <OrderPDF order={order}/>
    )
    setShowModal(true)
  }

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        {/*  Site header */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <main>
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
            <>
              <div className="col-span-full xl:col-span-8 bg-white shadow-lg rounded-sm border border-slate-200">
                <HeaderPage title="Ordenes" />
                <div>
                  <TableOrders
                    orders={orders}
                    total={total}
                    pages={pages}
                    editOrder={editOrder}
                    viewOrder={viewOrder}
                  />
                  {total > 10 && (
                    <Pagination
                      total={total}
                      pages={pages}
                      currentPage={currentPage}
                      data={orders}
                      path={path}
                    />
                  )}
                </div>
              </div>
              <Modal
                titleModal={titleModal}
                showModal={showModal}
                setShowModal={setShowModal}
                contentModal={contentModal}
              />
            </>
          </div>
        </main>
      </div>
    </div>
  );
}
