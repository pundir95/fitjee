import React, { useEffect, useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import logo from "../../assets/surface1.png";
import google from "../../assets/icons/google-color.svg";
import office from "../../assets/icons/office1.svg";
import VerificationCode from './VerificationCode';
import { useDispatch, useSelector } from 'react-redux';
import { adminLogin } from '../../redux/slice/login_auth';

const Login = () => {
    const dispatch = useDispatch();
    const [isVerificationcode, setVerificationCode] = useState(false);
    const [email, setEmail] = useState('')
    const { login } = useSelector(state => state.adminLogin);

    useEffect(() => {
        if (login) {
            setVerificationCode(true);
        }
    }, [login])

    const initialValues = {
        email: '',
    };

    const validationSchema = Yup.object().shape({
        email: Yup.string()
            .email('Invalid email address')
            .required('Email is required'),
    });

    const handleSubmit = (values) => {
        setEmail(values.email)
        dispatch(adminLogin(values.email));

    };

    return (
        <>
            {!isVerificationcode ? <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                {({ errors, touched }) => (
                    <Form>
                        <div className="flex">
                            <div className="h-max mx-auto ">
                                <div className="bg-white shadow-xl p-10 flex flex-col gap-4 text-sm w-[800px]">
                                    <img className="bg-[#FFF06B] w-[161px] m-auto" src={logo} alt="logo" />
                                    <div className='mb-[100px]'>
                                        <h1 className='font-bold'>Hello, Glad to see you!</h1>
                                        <h3>Sign in to continue access</h3>
                                    </div>
                                    <div className="">
                                        <label className="text-gray-600 font-bold inline-block pb-2" style={{ float: 'left' }} htmlFor="email">
                                            EMP Code, Email ID
                                        </label>
                                        <Field
                                            type="email"
                                            name="email"
                                            className={`border ${errors.email && touched.email ? 'border-red-500' : 'border-gray-400'
                                                } focus:outline-slate-400 rounded-md w-full shadow-sm px-5 py-2`}
                                            placeholder="EMP Code, Email ID"
                                        />
                                        <ErrorMessage name="email" component="p" className="text-red-500 text-sm mt-1" />
                                    </div>
                                    <div>
                                        <input
                                            className="bg-[#4F46E5] w-1/2 py-2 rounded-md text-white font-bold cursor-pointer hover:bg-[#181196]"
                                            type="submit"
                                            value="Continue"
                                        />
                                    </div>
                                    <div>
                                        <p className="text-center">Continue with</p>
                                    </div>
                                    <div className="flex justify-center  gap-4">
                                        <button className="px-4 py-2.5 inline-flex items-center rounded text-black text-base tracking-wider font-semibold border border-gray-500" ><img src={office} /><span>Office 365</span> </button>
                                        <button className="px-4 py-2.5 inline-flex items-center rounded text-black text-base tracking-wider font-semibold border border-gray-500" ><img src={google} /> <span>Google</span></button>
                                    </div>
                                    <div className='mt-[30px]'>
                                        <p className="text-sm text-gray-500 mt-10"><a href="#" className="text-gray">Copyright 2022 - 2023 Edfora. All Rights Reserved</a></p>
                                        <ul className='flex justify-center mt-[8px]'>
                                            <li className='mr-2 p-1 border-r-2 border-gray-400'>Terms Of Use</li>
                                            <li className='mr-2 p-1  border-r-2 border-gray-400'>Privacy Policy</li>
                                            <li className='mr-2 p-1  border-r-2 border-gray-400'>Disclaimer</li>
                                            <li className='mr-2  p-1 border-r-2 border-gray-400'>Copyright</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Form>
                )}
            </Formik> : <VerificationCode email={email} />}
        </>

    );
};

export default Login;
