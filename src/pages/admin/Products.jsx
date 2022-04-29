import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Modal from "../../components/category/modal";
import HeaderPage from "../../components/HeaderPage";
import Pagination from "../../components/Pagination";
import FormProduct from "../../components/products/FormProduct";
import TableProducts from "../../components/products/TableProducts";
import { useCategory } from "../../hooks/useCategory";
import useProduct from "../../hooks/useProduct";
import Header from "../../partials/Header";
import Sidebar from "../../partials/Sidebar";
export default function Products() {
  const location = useLocation();
  let query = new URLSearchParams(location.search);
  let q = parseInt(query.get("page"));

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(q || 1);
  const [isChange, setIsChange] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [titleModal, setTitleModal] = useState("");
  const [contentModal, setContentModal] = useState(null);

  const { loading, products, total, pages, getProducts,deleteProduct } = useProduct();
  const { categories, getCategoriesAll } = useCategory();

  const path = window.location.origin + location.pathname;

  useEffect(() => {
    getProducts(currentPage);
    getCategoriesAll();
  }, [isChange]);

  const changeRender = () => setIsChange((prev) => !prev);

  const onEdit = async (data) => {
    setTitleModal(`Editar Producto`);
    setContentModal(
      <FormProduct
        setShowModal={setShowModal}
        changeRender={changeRender}
        product={data}
        categories={categories}
      />
    );
    setShowModal(true);
  };

  const onDelete = async (data) => {
    const confirmed = window.confirm(
      `Desea eliminar el producto ${data.name}?`
    );
    if (confirmed) {
        await deleteProduct(data.id);

      if (products.length === 1 && currentPage > 0) {
        setCurrentPage(currentPage - 1);
      }

      changeRender();
    }
  };

  const addProduct = () => {
    setTitleModal("Nuevo Producto");
    setContentModal(
      <FormProduct
        setShowModal={setShowModal}
        changeRender={changeRender}
        categories={categories}
      />
    );
    setShowModal(true);
  };

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        {/*  Site header */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <main>
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
            {loading ? (
              <p>Cargando...</p>
            ) : (
              <>
                <div className="col-span-full xl:col-span-8 bg-white shadow-lg rounded-sm border border-slate-200">
                  <HeaderPage
                    btnTitle="Nuevo"
                    btnClick={addProduct}
                    title="Productos"
                  />
                  <div>
                    <TableProducts
                      products={products}
                      onDelete={onDelete}
                      onEdit={onEdit}
                    />
                    {total > 10 && (
                      <Pagination
                        total={total}
                        pages={pages}
                        currentPage={currentPage}
                        data={products}
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
            )}
          </div>
        </main>
      </div>
    </div>
  );
}
