import React from 'react'

export default function ValidateForm() {
  return (
    <>
      <div className="form max-w-7xl mx-auto bg-blue flex justify-between">
          {/* <div className="float-end mx-6 my-5 ">
          <button className='border m-2 p-2  rounded'>Edit</button>
          <button className='border p-2  rounded'>Delete</button>
          </div> */}
         <form className="max-w-96 m-3  bg-slate-900 p-3 rounded">
            <h1 className='text-3xl font-bold'>CRUD APPLICATION</h1>
            <input className='w-80 p-3 mt-3 border-none rounded outline-none text-black' type="text" placeholder='Enter your name' /><br />
    
            <input className='w-80 p-3 mt-3 border-none rounded outline-none text-black' type="text" placeholder='Enter your email' /><br />
    
            <input className='w-80 p-3 mt-3 border-none rounded outline-none text-black' type="text" placeholder='Enter your phone' /><br />

            <input className='w-80 p-3 mt-3 border-none rounded outline-none text-black' type="text" placeholder='MM/DD/YYYY' /><br />

            <input className='w-80 p-3 mt-3 border-none rounded outline-none text-black' type="text" placeholder='Enter your City' /><br />

            <input className='w-80 p-3 mt-3 border-none rounded outline-none text-black' type="text" placeholder='Enter your District' /><br />

            <select className='w-80 border-none rounded outline-none text-black p-3 mt-3'>
                    <option>Provision 1</option>
                    <option>Provision 2</option>
                    <option>Provision 3</option>
                    <option>Provision 4</option>
                    <option>Provision 5</option>
                    <option>Provision 6</option>
                    <option>Provision 7</option>
                
            </select> <br />
            <select className='w-80 border-none rounded outline-none text-black p-3 mt-3'>
                    <option>Nepal</option>
            </select>
            <div className="submit-btn">
            <button className='border bg-slate-400 text-white rounded p-1 m-3'>Choose file  </button>     <span className='text-white text-3xl'>No file choosen</span> <br />
            <button className='bg-blue-500 text-xl text-white w-80 border-none rounded outline-none p-1 mt-1'>SUBMIT</button>
            </div>
         </form>
         {/* ******** View crud application ********* */}

         <div className="view-table max-w-5xl m-3 bg-slate-800 rounded">
          <button className='w-52 border rounded bg-blue-500 p-1 mt-5 float-end mr-10 text-xl'>View All Profiles</button>
          <div className=" max-5xl mx-3 pt-20 flex  gap-28">
              <label className='text-xl '>Name</label>
              <label className='text-xl '>Email</label>
              <label className='text-xl '>Phone</label>
              <label className='text-xl '>DOB</label>
              <label className='text-xl '>Address</label>
              <label className='text-xl '>Action</label>
          </div>
         </div>
      </div>
    </>
  )
}
