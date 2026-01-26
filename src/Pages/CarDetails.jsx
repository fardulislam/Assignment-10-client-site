import { Link, useLoaderData, useNavigate } from "react-router";
import Loading from "../Component/Loading";
import Swal from "sweetalert2";


const CarDetails = () => {
  const data = useLoaderData();
  console.log(data);
  const navigate = useNavigate()

  const hendledelete = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/car-collection/${data._id}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            navigate('/browscar')
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          })
          .catch((error) => {
            console.log(error);
          });
      }
    });
  };

  return (
    <div className="min-h-screen mt-24 max-w-5xl mx-auto p-6">
      <img src={data.image} className="w-full h-96 object-cover rounded-xl" />
      <h1 className="text-3xl font-bold mt-4">{data.name}</h1>
      <p>{data.brand}</p>
      <p className="text-xl font-semibold">${data.price}/day</p>
      <div className="flex justify-end gap-2">
        <Link className="btn btn-outline" to={`/updatecar/${data._id}`}>
          update car
        </Link>
        <button onClick={hendledelete} className="btn btn-outline px-10">
          delete
        </button>
      </div>
    </div>
  );
};

export default CarDetails;
