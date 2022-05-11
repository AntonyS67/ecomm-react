import React from "react";
import { BASE_URI } from "../../utils/constants";

export default function OrderPDF(props) {
  const { order } = props;

  return (
    <div>
      <iframe src={`${BASE_URI}/storage/${order.path_pdf}`} width="100%" height="500px"></iframe>
    </div>
  );
}
