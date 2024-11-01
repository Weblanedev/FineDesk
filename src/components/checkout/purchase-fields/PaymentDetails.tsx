import PurchaseFormContext from "contexts/PurchaseFormContext";
import { useContext } from "react";

function PaymentDetails() {
  const purchaseFormContext = useContext(PurchaseFormContext)!;
  const { register } = purchaseFormContext!;

  return (
    <>
      <h6 className="text-primary fw-bold mb-3 fs-7">Payment Details</h6>
      <div className="row gx-3">
        <div className="col-md-6">
          <label className="form-label">Payment Method</label>
        </div>
        <div className="col-md-6">
          <div className="mb-3">
            <label
              className="fw-bold d-block py-3 rounded border form-check border-primary-hover"
              htmlFor="card"
            >
              <input
                className="form-check-input ms-0 me-2"
                type="radio"
                {...register("paymentMethod", { required: true })}
                value="card"
                id="card"
                data-cy="card"
              />
              <span className="fw-bold">Card</span>
            </label>
          </div>
          <div className="mb-4 pb-2 pb-xxl-0">
            <label
              className="fw-bold d-block py-3 rounded border form-check border-primary-hover"
              htmlFor="cash-on-delivery"
            >
              <input
                className="form-check-input ms-0 me-2"
                type="radio"
                {...register("paymentMethod", { required: true })}
                value="cash-on-delivery"
                id="cash-on-delivery"
                data-cy="cash-on-delivery"
              />
              <span className="fw-bold">Cash on Delivery</span>
            </label>
          </div>
        </div>
      </div>
    </>
  );
}

export default PaymentDetails;
