import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Modal from "../../components/category/modal";
import HeaderPage from "../../components/HeaderPage";
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
                <HeaderPage
                  title="Ordenes"
                />
                <div></div>
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
