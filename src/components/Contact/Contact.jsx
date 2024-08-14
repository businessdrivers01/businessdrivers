import React, { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import tickImg from '../../assets/tick.png';
import { Button } from '../../utils';

function Contact() {
    const [state, handleSubmit] = useForm("xzzpgnbo");
    const [submitting, setSubmitting] = useState(false);
    const [showPopup, setShowPopup] = useState(false);

    const handleFormSubmit = async (event) => {
        event.preventDefault(); // Prevent default form submission behavior
        setSubmitting(true);
        await handleSubmit(event);
        setSubmitting(false);
        setShowPopup(true);
    };

    const handlePopupClose = () => {
        setShowPopup(false);
    };

    return (
        <section className="">
            <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-orange">
                    Contact <span className='text-skyBlue'>Us</span>
                </h2>
                {showPopup ? (
                    <div className="fixed inset-0 flex justify-center items-center bg-gray-900 bg-opacity-75">
                        <div className="bg-white p-8 rounded-lg border-skyBlue border-[3px]">
                            <img src={tickImg} alt="" className="w-16 mx-auto mb-4" />
                            <h2 className="text-xl text-orange font-bold mb-2 text-center">Thank You!</h2>
                            <p className="text-center text-skyBlue mb-4 font-semibold">
                                Your details have been successfully submitted.
                                <span className='text-orange'> We'll get back to you soon.</span>
                            </p>
                            <div className="ok-btn-container flex justify-center">
                                <Button
                                    type="button"
                                    className="py-3 px-20 text-lg text-center text-white bg-skyBlue hover:bg-white hover:text-skyBlue border border-skyBlue duration-300 font-bold"
                                    onClick={handlePopupClose}
                                    children='OK'
                                />
                            </div>
                        </div>
                    </div>
                ) : (
                    <>
                        <p className="mb-8 lg:mb-16 text-center text-skyBlue font-semibold sm:text-xl">
                            Don't Be Shy! Hit Us Up.
                        </p>
                        <form onSubmit={handleFormSubmit} className="space-y-8">
                            <div>
                                <label htmlFor="email" className="block mb-2 font-bold text-2xl text-orange">Your email</label>
                                <input
                                    id="email"
                                    type="email"
                                    name="email"
                                    className="font-bold shadow-sm bg-gray-50 border border-gray-300 text-orange text-lg rounded-lg focus:ring-primary-500 focus:border-skyBlue block w-full p-2.5"
                                    placeholder="your-email@example.com"
                                    required
                                />
                                <ValidationError
                                    prefix="Email"
                                    field="email"
                                    errors={state.errors}
                                />
                            </div>
                            <div>
                                <label htmlFor="phone" className="block mb-2 font-bold text-2xl text-orange">Your phone number</label>
                                <input
                                    id="phone"
                                    type="tel"
                                    name="phone"
                                    className="font-bold shadow-sm bg-gray-50 border border-gray-300 text-orange text-lg rounded-lg focus:ring-primary-500 focus:border-skyBlue block w-full p-2.5"
                                    placeholder="123-456-7890"
                                    required
                                />
                                <ValidationError
                                    prefix="Phone"
                                    field="phone"
                                    errors={state.errors}
                                />
                            </div>
                            <div>
                                <label htmlFor="subject" className="block mb-2 text-2xl font-bold text-orange">Subject</label>
                                <input
                                    id="subject"
                                    type="text"
                                    name="subject"
                                    className="font-bold block p-3 w-full text-lg text-orange bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-skyBlue"
                                    placeholder="Let us know how we can help you"
                                    required
                                />
                            </div>
                            <div className="sm:col-span-2">
                                <label htmlFor="message" className="block mb-2 text-2xl font-bold text-orange">Your message / Comment / Question</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="6"
                                    className="font-bold block p-2.5 w-full text-lg text-orange bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-skyBlue"
                                    placeholder="Please leave your message here..."
                                ></textarea>
                                <ValidationError
                                    prefix="Message"
                                    field="message"
                                    errors={state.errors}
                                />
                            </div>
                            <div className="submit-btn-container flex justify-center md:justify-start">
                                <Button
                                    type="submit"
                                    className="py-3 px-5 text-md text-center text-white bg-skyBlue hover:bg-white hover:text-skyBlue border border-skyBlue duration-300 font-bold"
                                    disabled={state.submitting || submitting}
                                    children={submitting ? "Sending..." : "Send message!"}
                                />
                            </div>
                        </form>
                    </>
                )}
            </div>
        </section>
    );
}

export default Contact;
