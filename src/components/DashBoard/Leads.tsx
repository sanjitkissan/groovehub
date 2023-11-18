import React, { useEffect, useState } from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import axios from "axios";
export default function Leads() {
  const [uplord, setUplord] = useState<any>([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://outrageous-belt-calf.cyclic.app/api/v1/getcontact"
        );
        const jsonData = await response.json();
        setUplord(jsonData.contact);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);
  // const handleDelete = (index:number) => {
  //   // Replace 'YOUR_BACKEND_URL' with the actual URL of your backend server.
  //   const backendUrl = 'https://outrageous-belt-calf.cyclic.app/api/v1/getcontact' + index;

  //   axios
  //     .delete(backendUrl)
  //     .then((response) => {
  //       console.log('Item deleted successfully!');
  //       // Perform any other actions after successful deletion, if required.
  //     })
  //     .catch((error) => {
  //       console.error('Error deleting item:', error);
  //       // Handle errors, show error messages, etc.
  //     });
  // };
  return (
    <section className="w-full flex flex-col items-center justify-center gap-2">
      <h1 className="text-4xl font-bold text-blue-900">Leads</h1>
      <table >
      <tbody>
        <tr className="">
        <td className="">SlNo.</td>
          <th className="">Name</th>
          <th className="">Email</th>
          <th className="">Phone Number</th>
          <th className="">Message</th>
          {/* <th className="">Delete</th> */}
        </tr>

        {uplord.map((value: any, index: number) => (
          <tr className="" key={index}>
            <td className="">{index}</td>
            <td className="">{value.name}</td>
            <td className="">{value.email}</td>
            <td className="">{value.phone}</td> 
            <td className="">{value.message}</td>
            {/* <td className="">
              <DeleteIcon className="!text-xl !cursor-pointer" onClick={()=>{handleDelete(index)}}/>
            </td> */}
          </tr>
        ))}
        </tbody>
      </table>
    </section>
  );
}
