import { LuShield } from "react-icons/lu";
import { IoCheckmark } from "react-icons/io5";
import { GoLaw } from "react-icons/go";
import { FaChevronRight, FaArrowRight } from "react-icons/fa6";
import Clock from '../../components/Clock';

const Index = () => {
    return (
        <section className="bg-[url(/assets/bg-image.jpg)]  bg-cover bg-center px-5 py-10 xl:py-20 xl:px-50">
            <Clock/>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:px-10 max-w-[1440px] mx-auto mt-5 sm:mt-0">
                <div className="flex sm:flex-row lg:flex-col gap-5 flex-col-reverse ">
                    <div className=" flex-1 sm:w-1/2 lg:w-auto rounded-3xl bg-white p-4 grid grid-cols-2 relative min-h-[400px] sm:min-h-[350px]">
                        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                            <div className="relative w-48 h-48 lg:w-[250px] lg:h-[250px] rounded-full bg-gradient-to-b from-[#4b2b5d] to-[#314679]"> {/* Curved Text using SVG */}
                                <svg viewBox="0 0 200 200" className="absolute inset-0 w-full h-full">
                                    <defs>
                                        <path id="circlePath" d="M 100,20 A 75,80 2 1,1 100,180" fill="none" />
                                    </defs>
                                    <text fill="#f4e6da" fontSize="22" fontWeight={500} fontFamily="Inter, sans-serif" letterSpacing="0" >
                                        <textPath href="#circlePath" startOffset="15" textLength="210" >
                                            ONLY 6 SLOTS LEFT
                                        </textPath>
                                    </text>
                                </svg>
                            </div>
                        </div>
                        <div className="bg-[#faebd9]/40 rounded-2xl p-4 lg:p-6 backdrop-blur-md border border-white flex flex-col justify-between">
                            <h1 className="text-3xl lg:text-[40px] lg:leading-12 roboto-font ">Free <br />  <span className="text-[#666461]">Case </span><br />  <span className="text-[#666461]"> Review</span></h1>
                            <ul className="space-y-4 roboto-font font-medium text-[10px] sm:text-xs xl:text-base">
                                <li className="flex items-center gap-2"><LuShield className="bg-[#b2b7c4] p-1 rounded-full text-xl lg:text-2xl" /> 100% Confidential</li>
                                <li className="flex items-center gap-2"><IoCheckmark className="bg-[#bcadba] p-1 rounded-full  text-xl lg:text-2xl" /> No Win, No Fee</li>
                                <li className="flex items-center gap-2"><GoLaw className="bg-[#e3d2be] p-1 rounded-full  text-xl lg:text-2xl" /> Free Case Evaluation</li>
                            </ul>
                        </div>
                        <div className="flex flex-col items-end pt-6 pb-2 px-2 justify-between">
                            <p className="text-[#6a6a6a] text-end inter-font font-medium">We are here <br /> to help!</p>
                            <div className="flex items-center text-xs lg:text-base group">
                                <button className="bg-[#c39a6b] group-hover:bg-black px-4 py-2.5 rounded-4xl text-white cursor-pointer transition duration-300">
                                    Contact us
                                </button>
                                <button className="bg-[#c39a6b] group-hover:bg-black p-3 lg:p-3.5 rounded-4xl text-white cursor-pointer transition duration-300">
                                    <FaChevronRight />
                                </button>
                            </div>

                        </div>
                    </div>
                    <div className="rounded-3xl sm:w-1/2 lg:w-auto bg-[#f4e6da] p-5 lg:p-6 space-y-2 xl:space-y-4">
                        <h2 className="text-[#4a285a] leading-9 text-[28px] w-6/7 md:text-2xl inter-font font-bold xl:w-5/6">Have you or a loved one been
                            affected by Mesothelioma?
                        </h2>
                        <p className="text-sm w-11/12 xl:w-3/4 inter-font">
                            As a woman, you've carried the weight of care, love, and
                            resilience. Now it’s time someone stands with you.
                        </p>
                        <ul className="text-sm xl:w-3/4 list-disc ms-4 inter-font">
                            <li>Secondary Asbestos exposure is common.</li>
                            <li>Misdiagnosis delays are more frequent in women.</li>
                            <li>Women have won significant legal settlements </li>
                        </ul>
                    </div>
                </div>
                <div className="rounded-3xl bg-[#405c8c]/70  backdrop-blur-md p-5 lg:p-6 text-white">
                    <form className="py-5 lg:py-10">
                        <h2 className="text-4xl inter-font">Claim Form</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8 py-4">
                            <div className="w-full col-span-2 md:col-span-1">
                                <input
                                    type="text"
                                    className="block py-2.5 placeholder:text-white px-0 w-full font-light text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-wodo-yellow peer"
                                    placeholder="First Name *"
                                />
                            </div>
                            <div className="w-full col-span-2 md:col-span-1">
                                <input
                                    type="text"
                                    className="block py-2.5 placeholder:text-white px-0 w-full font-light text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-wodo-yellow peer"
                                    placeholder="Last Name *"
                                />

                            </div>

                            <div className="w-full col-span-2 md:col-span-1">
                                <input
                                    type="text"
                                    className="block py-2.5 placeholder:text-white px-0 w-full font-light text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-wodo-yellow peer"
                                    placeholder="Phone Number *"
                                />
                            </div>
                            <div className="w-full col-span-2 md:col-span-1">
                                <input
                                    type="text"
                                    className="block py-2.5 placeholder:text-white px-0 w-full font-light text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-wodo-yellow peer"
                                    placeholder="Email ID *"
                                />
                            </div>
                            <div className="w-full col-span-2 md:col-span-1">
                                <input
                                    type="text"
                                    className="block font-light py-2.5 placeholder:text-white px-0 w-full  text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-wodo-yellow peer"
                                    placeholder="Date of birth *"
                                />
                            </div>
                            <div className="w-full col-span-2 md:col-span-1">
                                <input
                                    type="text"
                                    className="block py-2.5 placeholder:text-white px-0 w-full font-light text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-wodo-yellow peer"
                                    placeholder="Job Title *"
                                />
                            </div>
                            <div className="w-full col-span-2 md:col-span-1">
                                <input
                                    type="text"
                                    className="block py-2.5 placeholder:text-white px-0 w-full font-light text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-wodo-yellow peer"
                                    placeholder="Date of Dianosis *"
                                />
                            </div>
                            <div className="w-full col-span-2 md:col-span-1">
                                <input
                                    type="text"
                                    className="block py-2.5 placeholder:text-white px-0 w-full font-light text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-wodo-yellow peer"
                                    placeholder="Type of Diagnosis *"
                                />
                            </div>
                            <div className="col-span-2">
                                <input
                                    type="text"
                                    className="block py-2.5 placeholder:text-white px-0 w-full font-light text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-wodo-yellow peer"
                                    placeholder="Tell us your story (optional)"
                                />
                            </div>
                        </div>
                        <div className="flex shrink-0 items-start col-span-2 gap-3 my-5">
                            <div className="group grid size-4 w-23 h-5 sm:w-10 sm:h-5 lg:w-17 lg:h-5 grid-cols-1 pt-1">
                                <input
                                    
                                    type="checkbox"
                                    aria-describedby="comments-description"
                                    className="col-start-1 row-start-1 appearance-none rounded-sm border border-gray-300 bg-transparent checked:border-white checked:bg-white indeterminate:border-black indeterminate:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"
                                />
                                <svg
                                    fill="none"
                                    viewBox="0 0 14 14"
                                    className="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-black group-has-disabled:stroke-gray-950/25"
                                >
                                    <path
                                        d="M3 8L6 11L11 3.5"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="opacity-0 group-has-checked:opacity-100"
                                    />
                                    <path
                                        d="M3 7H11"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="opacity-0 group-has-indeterminate:opacity-100"
                                    />
                                </svg>
                            </div>
                            <div className="text-sm/6">
                                <p className="text-white leading-4 sm:text-sm sm:leading-5 font-light text-xs lg:text-sm">
                                    I agree to the <span className="underline font-normal">privacy policy </span>and and <span className="underline font-normal">disclaimer</span> give my express written
                                    consent to be contacted regarding my case options. I understand that I may
                                    be contacted using automatic dialing equipment. Message and data rates
                                    may apply. My consent does not require purchase. This is Legal advertising.
                                </p>
                            </div>
                        </div>
                        <div className="flex shrink-0 items-center col-span-2 gap-3 my-5">
                            <div className="group grid size-4 w-4 h-4 grid-cols-1">
                                <input
                                    
                                    type="checkbox"
                                    aria-describedby="comments-description"
                                    className="col-start-1 row-start-1 appearance-none rounded-sm border border-gray-300 bg-transparent checked:border-white checked:bg-white indeterminate:border-black indeterminate:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"
                                />
                                <svg
                                    fill="none"
                                    viewBox="0 0 14 14"
                                    className="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-black group-has-disabled:stroke-gray-950/25"
                                >
                                    <path
                                        d="M3 8L6 11L11 3.5"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="opacity-0 group-has-checked:opacity-100"
                                    />
                                    <path
                                        d="M3 7H11"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="opacity-0 group-has-indeterminate:opacity-100"
                                    />
                                </svg>
                            </div>
                            <div className="text-sm/6">
                                <p className="text-white font-light text-xs sm:text-sm lg:text-sm">
                                    Please check this box to verify you're a
                                    person.
                                </p>
                            </div>
                        </div>

                        <div className="col-span-2 mt-10">
                            <button className="w-full bg-[#f4e6da] cursor-pointer hover:bg-black hover:text-white transition-all duration-150 text-black rounded-xl py-2 font-semibold inter-font text-lg border border-white">
                                <span className="hidden lg:block">Start your claim now</span>
                                <span className="flex items-center justify-center gap-4 lg:hidden">Submit <FaArrowRight /></span>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Index;