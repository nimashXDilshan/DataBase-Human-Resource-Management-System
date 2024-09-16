import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import { useNavigate, Link, useParams } from "react-router-dom";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";

const initialState = {
  leave_type: "",
  from_date: "",
  to_date: "",
  leave_reason: "",
};

const LeaveRequest = () => {
  const [state, setState] = useState(initialState);
  const { leave_type, from_date, to_date, leave_reason } = state;
  const navigate = useNavigate();

  const handleChanges = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/get/${id}`)
      .then((resp) => setState({ ...resp.data[0] }));
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!leave_type || !from_date || !to_date || !leave_reason) {
      return;
    }

    const formattedFromDate = new Date(from_date).toISOString().split("T")[0];
    const formattedToDate = new Date(to_date).toISOString().split("T")[0];

    axios
      .post("http://localhost:5000/api/post", {
        leave_type,
        from_date: formattedFromDate,
        to_date: formattedToDate,
        leave_reason,
      })
      .then(() => {
        setState(initialState);
      })
      .catch((err) => toast.error(err.response.data));
    setTimeout(() => navigate("/Leave"), 500);
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (!leave_type || !from_date || !to_date || !leave_reason) {
  //     toast.error("Error");
  //   } else {
  //     if (!id) {
  //       axios
  //         .post("http://localhost:5000/api/post", {
  //           leave_type,
  //           from_date: formattedFromDate,
  //           to_date: formattedToDate,
  //           leave_reason,
  //         })
  //         .then(() => {
  //           setState({
  //             leave_type: "",
  //             from_date: "",
  //             to_date: "",
  //             leave_reason: "",
  //           });
  //         })
  //         .catch((err) => toast.error(err.response.data));
  //     } else {
  //       axios
  //         .put(`http://localhost:5000/api/update/${id}`, {
  //           leave_type,
  //           from_date: formattedFromDate,
  //           to_date: formattedToDate,
  //           leave_reason,
  //         })
  //         .then(() => {
  //           setState({
  //             leave_type: "",
  //             from_date: "",
  //             to_date: "",
  //             leave_reason: "",
  //           });
  //         })
  //         .catch((err) => toast.error(err.response.data));
  //     }
  //     const formattedFromDate = new Date(from_date).toISOString().split("T")[0];
  //   const formattedToDate = new Date(to_date).toISOString().split("T")[0];

  //     setTimeout(() => navigate("/Leave"), 500);
  //   }
  // };

  //   const handleSubmit = (e) => {
  //     e.preventDefault();

  //     if (!leave_type || !from_date || !to_date || !leave_reason) {
  //       toast.error("Please fill in all fields.");
  //       return;
  //     }

  //     // Convert dates to YYYY-MM-DD format
  //     const formattedFromDate = new Date(from_date).toISOString().split("T")[0];
  //     const formattedToDate = new Date(to_date).toISOString().split("T")[0];

  //     const request = !id
  //       ? axios.post("http://localhost:5000/api/post", {
  //           leave_type,
  //           from_date: formattedFromDate,
  //           to_date: formattedToDate,
  //           leave_reason,
  //         })
  //       : axios.put(`http://localhost:5000/api/update/${id}`, {
  //           leave_type,
  //           from_date: formattedFromDate,
  //           to_date: formattedToDate,
  //           leave_reason,
  //         });

  //     request
  //       .then(() => {
  //         setState({
  //           leave_type: "",
  //           from_date: "",
  //           to_date: "",
  //           leave_reason: "",
  //         });
  //         toast.success("Submitted successfully!");
  //         setTimeout(() => navigate("/Leave"), 500);
  //       })
  //       .catch((err) => toast.error(err.response?.data || "An error occurred"));
  //   };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-6">Request a Leave</h1>
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-lg"
      >
        <div className="mb-6 text-left">
          <label
            htmlFor="leave_type"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Leave Type*
          </label>
          <select
            name="leave_type"
            id="leave_type"
            className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
            onChange={handleChanges}
            required
            value={leave_type || ""}
          >
            <option value="" disabled>
              Select the leave type
            </option>
            <option value="Annual Leave">Annual Leave</option>
            <option value="Casual Leave">Casual Leave</option>
            <option value="Maternity Leave">Maternity Leave</option>
            <option value="No Pay">No Pay</option>
          </select>
        </div>

        <div className="mb-6 text-left">
          <label
            htmlFor="from_date"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            From*
          </label>
          <DatePicker
            placeholderText="dd/mm/yyyy"
            selected={from_date}
            onChange={(date) => setState({ ...state, from_date: date })}
            dateFormat="dd/MM/yyyy"
            className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
            id="from_date"
            name="from_date"
            required
          />
        </div>

        <div className="mb-6 text-left">
          <label
            htmlFor="to_date"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            To*
          </label>
          <DatePicker
            placeholderText="dd/mm/yyyy"
            selected={to_date}
            onChange={(date) => setState({ ...state, to_date: date })}
            dateFormat="dd/MM/yyyy"
            className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
            id="to_date"
            name="to_date"
            required
          />
        </div>

        <div className="mb-6 text-left">
          <label
            htmlFor="leave_reason"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Leave Reason*
          </label>
          <textarea
            name="leave_reason"
            id="leave_reason"
            rows="4"
            className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
            placeholder="Description"
            onChange={handleChanges}
            required
            value={leave_reason || ""}
          ></textarea>
        </div>

        <div className="flex items-center justify-between">
          <Link
            to="/Leave"
            className="bg-black text-white font-bold py-2 px-4 rounded border border-black hover:bg-white hover:text-black focus:outline-none"
          >
            Cancel
          </Link>
          <button
            type="submit"
            className="bg-black text-white font-bold py-2 px-4 rounded border border-black hover:bg-white hover:text-black focus:outline-none"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default LeaveRequest;
