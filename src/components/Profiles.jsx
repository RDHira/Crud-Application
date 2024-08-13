import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ViewProfiles from './ViewProfiles';


const Profiles= () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        dob: '',
        city: '',
        district: '',
        provision: '',
        country: 'Nepal',
        file: null,
    });

    const [errors, setErrors] = useState({});
    const [fileError, setFileError] = useState('');
    const [fileName, setFileName] = useState('No file chosen');
    const [countries, setCountries] = useState([]);
    const [records, setRecords] = useState([]);
    const [editingIndex, setEditingIndex] = useState(null);

    useEffect(() => {
        // Fetch the list of countries from the API
        axios.get('https://restcountries.com/v3.1/all')
            .then(response => {
                const countryList = response.data.map(country => country.name.common);
                setCountries(countryList);
            })
            .catch(error => {
                console.error('Error fetching countries:', error);
            });
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
        validateField(name, value);
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file && file.type === 'image/png') {
            setFormData({
                ...formData,
                file: file,
            });
            setFileName(file.name);
            setFileError('');
        } else {
            setFileError('Only PNG files are allowed');
            setFileName('No file chosen');
        }
    };

    const validateField = (name, value) => {
        let error = '';

        switch (name) {
            case 'name':
                if (!value) error = 'Name is required';
                break;
            case 'email':
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!value) error = 'Email is required';
                else if (!emailRegex.test(value)) error = 'Invalid email format';
                break;
            case 'phone':
                const phoneRegex = /^\d{7,}$/;
                if (!value) error = 'Phone number is required';
                else if (!phoneRegex.test(value)) error = 'Phone number must be at least 7 digits';
                break;
            case 'dob':
                const dobRegex = /^(0[1-9]|1[0-2])\/(0[1-9]|[12][0-9]|3[01])\/(19|20)\d{2}$/;
                if (!value) error = 'Date of Birth is required';
                else if (!dobRegex.test(value)) error = 'Invalid Date of Birth format (MM/DD/YYYY)';
                break;
            default:
                break;
        }

        setErrors({
            ...errors,
            [name]: error,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { name, email, phone, dob } = formData;

        if (!name || !email || !phone || !dob || fileError) {
            alert('Please fill in all required fields correctly');
            return;
        }

        if (editingIndex !== null) {
            const updatedRecords = [...records];
            updatedRecords[editingIndex] = formData;
            setRecords(updatedRecords);
            setEditingIndex(null);
        } else {
            setRecords([...records, formData]);
        }

        setFormData({
            name: '',
            email: '',
            phone: '',
            dob: '',
            city: '',
            district: '',
            provision: '',
            country: 'Nepal',
            file: null,
        });
        setFileName('No file chosen');
        setFileError('');
    };

    const handleEdit = (index) => {
        setFormData(records[index]);
        setEditingIndex(index);
    };

    const handleDelete = (index) => {
        const updatedRecords = records.filter((_, i) => i !== index);
        setRecords(updatedRecords);
    };

    return (
        <>
            <form className="max-w-96 m-3 bg-slate-900 p-4 rounded" onSubmit={handleSubmit}>
                <h1 className='text-3xl font-bold text-white'>CRUD APPLICATION</h1>
                <input
                    className='w-80 p-3 mt-3 border-none rounded outline-none text-black'
                    type="text"
                    name="name"
                    placeholder='Enter your name'
                    value={formData.name}
                    onChange={handleChange}
                />
                {errors.name && <p className="text-red-500">{errors.name}</p>}<br />
        
                <input
                    className='w-80 p-3 mt-3 border-none rounded outline-none text-black'
                    type="text"
                    name="email"
                    placeholder='Enter your email'
                    value={formData.email}
                    onChange={handleChange}
                />
                {errors.email && <p className="text-red-500">{errors.email}</p>}<br />
        
                <input
                    className='w-80 p-3 mt-3 border-none rounded outline-none text-black'
                    type="text"
                    name="phone"
                    placeholder='Enter your phone'
                    value={formData.phone}
                    onChange={handleChange}
                />
                {errors.phone && <p className="text-red-500">{errors.phone}</p>}<br />

                <input
                    className='w-80 p-3 mt-3  border-none rounded outline-none text-black'
                    type="text"
                    name="dob"
                    placeholder='MM/DD/YYYY'
                    value={formData.dob}
                    onChange={handleChange}
                />
                {errors.dob && <p className="text-red-500">{errors.dob}</p>}<br />

                <input
                    className='w-80 p-3 mt-3 border-none rounded outline-none text-black'
                    type="text"
                    name="city"
                    placeholder='Enter your City'
                    value={formData.city}
                    onChange={handleChange}
                /><br />

                <input
                    className='w-80 p-3 mt-3 border-none rounded outline-none text-black'
                    type="text"
                    name="district"
                    placeholder='Enter your District'
                    value={formData.district}
                    onChange={handleChange}
                /><br />

                <select
                    className='w-80 border-none rounded outline-none text-black p-3 mt-3'
                    name="provision"
                    value={formData.provision}
                    onChange={handleChange}
                >
                    <option value="">Select Provision</option>
                    <option value="Provision 1">Provision 1</option>
                    <option value="Provision 2">Provision 2</option>
                    <option value="Provision 3">Provision 3</option>
                    <option value="Provision 4">Provision 4</option>
                    <option value="Provision 5">Provision 5</option>
                    <option value="Provision 6">Provision 6</option>
                    <option value="Provision 7">Provision 7</option>
                </select> <br />
                <select
                    className='w-80 border-none rounded outline-none text-black p-3 mt-3'
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                >
                    {countries.map((country, index) => (
                        <option key={index} value={country}>{country}</option>
                    ))}
                </select>

                <div className="submit-btn my-4">
                    <label className='border bg-slate-400 text-black rounded p-1 m-3 cursor-pointer'>
                        Choose file
                        <input
                            type="file"
                            className="hidden"
                            onChange={handleFileChange}
                            accept=".png"
                        />
                    </label>
                    <span className='text-white'>{fileName}</span> <br />
                    {fileError && <p className="text-red-500">{fileError}</p>}
                    <button className='bg-blue-500 text-xl text-white w-80 border-none rounded outline-none p-1 mt-4'>SUBMIT</button>
                </div>
            </form>
            <ViewProfiles
                records={records}
                handleEdit={handleEdit}
                handleDelete={handleDelete}
            />
        </>
    );
};

export default Profiles;
