import React, { useState } from 'react';

const ViewProfiles = ({ records, handleEdit, handleDelete }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const recordsPerPage = 5;

    const indexOfLastRecord = currentPage * recordsPerPage;
    const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
    const currentRecords = records.slice(indexOfFirstRecord, indexOfLastRecord);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div className="view-table max-w-4xl mx-auto my-4 bg-slate-900 rounded p-5">
            <button className='w-52 border rounded bg-blue-500 p-1 text-white float-end text-xl mb-5'>View All Profiles</button>
            <table className="min-w-full bg-slate-700 text-white border">
                <thead>
                    <tr>
                        <th className="text-xl border px-4 py-2">Name</th>
                        <th className="text-xl border px-4 py-2">Email</th>
                        <th className="text-xl border px-4 py-2">Phone</th>
                        <th className="text-xl border px-4 py-2">DOB</th>
                        <th className="text-xl border px-4 py-2">Address</th>
                        <th className="text-xl border px-4 py-2">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {currentRecords.map((record, index) => (
                        <tr key={index} className="bg-slate-600">
                            <td className="border px-4 py-2">{record.name}</td>
                            <td className="border px-4 py-2">{record.email}</td>
                            <td className="border px-4 py-2">{record.phone}</td>
                            <td className="border px-4 py-2">{record.dob}</td>
                            <td className="border px-4 py-2">{`${record.city}, ${record.district}, ${record.country}`}</td>
                            <td className="border px-4 py-2">
                                <div className="flex justify-center items-center gap-4">
                                <button onClick={() => handleEdit(index + indexOfFirstRecord)} className="bg-blue-600 p-1 rounded w-14">Edit</button>
                                <button onClick={() => handleDelete(index + indexOfFirstRecord)} className="bg-red-500 p-1 mt-2 rounded">Delete</button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {records.length > recordsPerPage && (
                <div className="flex justify-center mt-3">
                    {Array.from({ length: Math.ceil(records.length / recordsPerPage) }, (_, i) => (
                        <button
                            key={i}
                            onClick={() => paginate(i + 1)}
                            className={`mx-1 p-1 rounded ${currentPage === i + 1 ? 'bg-blue-500' : 'bg-slate-400'}`}
                        >
                            {i + 1}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};

export default ViewProfiles;
