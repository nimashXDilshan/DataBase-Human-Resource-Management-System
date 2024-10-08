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
      .get(`http://localhost:5000/api/leave/${id}`)
      .then((resp) => setState({ ...resp.data[0] }));
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!leave_type || !from_date || !to_date || !leave_reason) {
      return;
    }

    const formattedFromDate = new Date(from_date).toISOString().split("T")[0];
    const formattedToDate = new Date(to_date).toISOString().split("T")[0];
    console.log(formattedFromDate,leave_type);
    axios
      .post("http://localhost:5000/api/leave/", {
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
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300">
      <h1 className="text-3xl font-extrabold text-gray-800 mb-8 tracking-wide">
        Request a Leave
      </h1>

      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-lg px-10 pt-8 pb-10 w-full max-w-lg transform transition duration-300 hover:shadow-2xl"
      >
        <div className="mb-6 text-left">
          <label
            htmlFor="leave_type"
            className="block text-gray-700 text-sm font-semibold mb-2"
          >
            Leave Type*
          </label>
          <select
            name="leave_type"
            id="leave_type"
            className="block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
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
            className="block text-gray-700 text-sm font-semibold mb-2"
          >
            From*
          </label>
          <DatePicker
            placeholderText="dd/mm/yyyy"
            selected={from_date}
            onChange={(date) => setState({ ...state, from_date: date })}
            dateFormat="dd/MM/yyyy"
            className="block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
            id="from_date"
            name="from_date"
            required
          />
        </div>

        <div className="mb-6 text-left">
          <label
            htmlFor="to_date"
            className="block text-gray-700 text-sm font-semibold mb-2"
          >
            To*
          </label>
          <DatePicker
            placeholderText="dd/mm/yyyy"
            selected={to_date}
            onChange={(date) => setState({ ...state, to_date: date })}
            dateFormat="dd/MM/yyyy"
            className="block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
            id="to_date"
            name="to_date"
            required
          />
        </div>

        <div className="mb-6 text-left">
          <label
            htmlFor="leave_reason"
            className="block text-gray-700 text-sm font-semibold mb-2"
          >
            Leave Reason*
          </label>
          <textarea
            name="leave_reason"
            id="leave_reason"
            rows="4"
            className="block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
            placeholder="Describe your reason"
            onChange={handleChanges}
            required
            value={leave_reason || ""}
          ></textarea>
        </div>

        <div className="flex items-center justify-between">
          <Link
            to="/Leave"
            className="inline-block bg-gray-600 text-white font-semibold py-2 px-6 rounded-full transition hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-gray-400"
          >
            Cancel
          </Link>
          <button
            type="submit"
            className="inline-block bg-blue-500 text-white font-semibold py-2 px-6 rounded-full transition hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default LeaveRequest;
