import React, { useState, ChangeEvent, FormEvent } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faEnvelope,
    faUser,
    faPen,
    faPaperPlane,
} from '@fortawesome/free-solid-svg-icons';

// Define the structure of the form data
interface IFormData {
    email: string;
    subject: string;
    message: string;
}

// Define the structure of the errors object
interface IErrors {
    email?: string;
    subject?: string;
    message?: string;
}

const Contact: React.FC = () => {
    const [formData, setFormData] = useState<IFormData>({
        email: '',
        subject: '',
        message: '',
    });

    const [errors, setErrors] = useState<IErrors>({});

    const handleChange = (
        e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const validateForm = (): boolean => {
        let tempErrors: IErrors = {};
        tempErrors.email = formData.email
            ? /^\S+@\S+\.\S+$/.test(formData.email)
                ? ''
                : 'Email is not valid.'
            : 'This field is required.';
        tempErrors.subject = formData.subject ? '' : 'This field is required.';
        tempErrors.message = formData.message ? '' : 'This field is required.';
        setErrors(tempErrors);
        return Object.values(tempErrors).every((x) => x === '');
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (validateForm()) {
            // Submit form logic here...
            console.log(formData);
            alert('Form submitted successfully!');
            // Reset form fields
            setFormData({
                email: '',
                subject: '',
                message: '',
            });
        }
    };

    return (
        <div className="pt-0 p-4 mt-0">
            <div className="text-center mb-8">
                <h1 className="text-3xl font-bold text-pink-600 dark:text-pink-400">
                    Get in Touch
                </h1>
                <p className="text-gray-600 dark:text-gray-300">
                    Feel free to reach out for collaborations or just a friendly
                    hello 👋
                </p>
            </div>

            <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-8">
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label
                            htmlFor="subject"
                            className="block text-lg font-bold text-pink-500 dark:text-pink-400 mb-2 flex items-center"
                        >
                            <FontAwesomeIcon icon={faPen} className="mr-2" />
                            Subject:
                        </label>
                        <input
                            type="text"
                            id="subject"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            className="w-full p-2 rounded-md bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 outline-none focus:border-pink-500 dark:focus:border-pink-400 text-gray-700 dark:text-gray-300"
                        />
                        {errors.subject && (
                            <p className="text-red-600 text-sm mt-1">
                                {errors.subject}
                            </p>
                        )}
                    </div>
                    <div className="mb-4">
                        <label
                            htmlFor="email"
                            className="block text-lg font-bold text-pink-500 dark:text-pink-400 mb-2 flex items-center"
                        >
                            <FontAwesomeIcon
                                icon={faEnvelope}
                                className="mr-2"
                            />
                            Email:
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full p-2 rounded-md bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 outline-none focus:border-pink-500 dark:focus:border-pink-400 text-gray-700 dark:text-gray-300"
                        />
                        {errors.email && (
                            <p className="text-red-600 text-sm mt-1">
                                {errors.email}
                            </p>
                        )}
                    </div>

                    <div className="mb-4">
                        <label
                            htmlFor="message"
                            className="block text-lg font-bold text-pink-500 dark:text-pink-400 mb-2 flex items-center"
                        >
                            <FontAwesomeIcon
                                icon={faPaperPlane}
                                className="mr-2"
                            />
                            Message:
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            className="w-full p-2 rounded-md bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 outline-none focus:border-pink-500 dark:focus:border-pink-400 text-gray-700 dark:text-gray-300"
                        ></textarea>
                        {errors.message && (
                            <p className="text-red-600 text-sm mt-1">
                                {errors.message}
                            </p>
                        )}
                    </div>

                    <button
                        type="submit"
                        className="bg-pink-500 dark:bg-pink-400 text-white p-3 rounded-full transition-all duration-300 hover:bg-pink-600 dark:hover:bg-pink-500 cursor-pointer"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Contact;
