import React, { useEffect, useRef, useState } from 'react'
import logo from "../../assets/surface1.png"
import group from "../../assets/icons/Group.svg"
import { useDispatch, useSelector } from 'react-redux';
import { adminVerificationCode } from '../../redux/slice/login_auth';

const VerificationCode = ({ email }) => {
    const [verificationCode, setVerificationCode] = useState(['', '', '', '']);
    const codeInputs = Array.from({ length: 4 }, (_, index) => index);
    const inputRefs = codeInputs.map(() => useRef(null));
    const dispatch = useDispatch();
    const { verification } = useSelector(state => state.adminLogin);
    useEffect(() => {
        if (verification) {
            localStorage.setItem("token", "jsjssjsjjs")
            window.location.href = "/"
        }
    }, [verification])

    const handleInputChange = (index, value) => {
        if (value.length > 1) {
            value = value[1];
        }
        const newCode = [...verificationCode];
        newCode[index] = value;
        setVerificationCode(newCode);

        if (value) {
            if (index < 3) {
                inputRefs[index + 1].current.focus();
            }
        } else {
            if (index > 0) {
                inputRefs[index - 1].current.focus();
            }
        }
    };
    const verificationFunction = () => {
        let data = {
            email: email,
            code: Number(verificationCode.join(''))
        }
        dispatch(adminVerificationCode(data))
    }
    return (
        <div className="flex">
            <div className="h-max mx-auto ">

                <div className="bg-white shadow-xl p-10 flex flex-col gap-4 text-sm w-[800px]">
                    <img className="bg-[#FFF06B] w-[161px] m-auto mb-[20px]" src={logo} alt="logo" />
                    <div className='mb-[30px]'>
                        <img className="w-[161px] m-auto mb-[20px]" src={group} alt="logo" />
                        <h1 className='font-bold text-xl'>Enter a Verification Code</h1>
                        <h3 className='mt-[10px] text-md'>A text message with a verification code was<br /> just sent to *******890</h3>
                    </div>
                    <div className="flex justify-center items-center">
                        <div className="space-x-4">
                            {codeInputs.map((index) => (
                                <input
                                    key={index}
                                    ref={inputRefs[index]}
                                    className="w-12 h-12 text-3xl text-center border border-gray-300 rounded focus:outline-none focus:border-indigo-500 transition-colors"
                                    maxLength="1"
                                    value={verificationCode[index]}
                                    onChange={(e) => handleInputChange(index, e.target.value)}
                                />
                            ))}
                        </div>
                    </div>
                    <div>
                        <input className="bg-[#4F46E5] w-1/2 py-2 rounded-md text-white font-bold cursor-pointer hover:bg-[#181196]" onClick={verificationFunction} type="submit" value="Continue" />
                    </div>
                    <div>
                        <p className="text-center">Didn’t get the code? <span className='text-[#4F46E5] cursor-pointer'>Resend Code</span></p>
                    </div>
                    <div className='mt-[30px]'>
                        <p className="text-sm text-gray-500 mt-10"><a href="#" className="text-gray">Copyright 2022 - 2023 Edfora. All Rights Reserved</a></p>
                        <ul className='flex justify-center'>
                            <li className='mr-2 p-1 border-r-2 border-gray-400'>Terms Of Use</li>
                            <li className='mr-2 p-1  border-r-2 border-gray-400'>Privacy Policy</li>
                            <li className='mr-2 p-1  border-r-2 border-gray-400'>Disclaimer</li>
                            <li className='mr-2  p-1 border-r-2 border-gray-400'>Copyright</li>
                        </ul>
                    </div>
                </div>

            </div>
        </div >
    )
}

export default VerificationCode
