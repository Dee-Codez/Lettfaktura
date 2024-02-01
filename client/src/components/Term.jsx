import React, {useState, useEffect} from 'react';
import diamond from '../assets/diamond.png';
import england from "../assets/england.png";
import TermMenu from './TermMenu';
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import { useNavigate } from 'react-router-dom'
import { MdNavigateNext } from "react-icons/md";


const imgUrl = 'https://source.unsplash.com/random/1920x1080/?nature,dark';

const Term = () => {

    const navigate = useNavigate();

    
    const [img, setImg] = useState();
    const [isOpen, setIsOpen] = useState(false);

    const fetchImage = async () => {
        const res = await fetch(imgUrl);
        const imageBlob = await res.blob();
        const imageObjectURL = URL.createObjectURL(imageBlob);
        setImg(imageObjectURL);
      };

      useEffect(() => {
        fetchImage();
    }, []);

    if(!img) return (
        <div className='text-2xl flex items-center justify-center text-black'>
            <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
            <div className="inline-block h-20 w-20 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]" role="status">
                <span
                    className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
                    >Loading...</span>
                
                </div>
            </div>
        </div>
    )


  return (
    <div className='flex flex-col w-full bg-cover h-screen transition-height duration-75 ease-out text-black'>
        <div >
            <div className='flex'>
                <div className='w-full z-0'>
                    <div className='blur-[1px] fixed h-[100vh] flex-grow z-10'>
                        <img className='w-screen h-[100%] object-cover object-center' src={img}/>
                    </div>
                </div>
                
                <div className='absolute w-full z-10'>
                    <div className='hidden lg:contents w-full z-0'>
                        <TermMenu />
                    </div>
                    <div>
                        <div className='relative top-16 bg-white my-6 mx-4 z-0 rounded-lg'>
                            <div className='absolute cursor-pointer top-[34px] right-3'>
                                <MdNavigateNext color='lime' fontSize={30} />
                            </div>
                            <div className=' flex flex-col items-center'>
                                <div className='text-center text-2xl mt-8 font-semibold'>
                                    Terms And Conditions
                                </div>
                                <div className='flex text-center break-words text-lg mt-4 m-2 py-6'>
                                    
                                <p className='leading-10'>
                                    By clicking on Invoicing Now, you choose to download according to the information you have entered and the text on the download page and the terms here, and at the same time accept the terms here.
                                    <div className='h-5'></div>
                                    You can use the program FREE for 14 days.
                                    <div className='h-5'></div>
                                    LettFaktura is so easy and self-explanatory that the chance that you will end up needing support is minimal, but if you should need support, we are here for you, with our office staffed most of the day. After the trial period, the subscription continues and costs NOK 99, for example. VAT per month, which is invoiced annually. If you do not wish to keep the program, simply cancel the trial period by notifying us within 14 days of downloading.
                                    <div className='h-5'></div>
                                    You of course have the right to end the use of the program free of charge, by notifying us by email within 14 days of download, that you do not wish to continue with the program, and of course not paying anything either.
                                    <div className='h-5'></div>
                                    If we do not receive such a message from you within 14 days of downloading, then the order cannot be changed for natural reasons. By download is meant the date and time when you have chosen to press the Invoicing Now button.
                                    <div className='h-5'></div>
                                    Invoicing is done for one year at a time.
                                    <div className='h-5'></div>
                                    The price for LettFaktura (offer price NOK 99 per month / word price NOK 129 per month) is for the annual fee Start for one year of use of the program.
                                    <div className='h-5'></div>
                                    (When using the offer price of NOK 99, the one-year period is calculated from download.)
                                    <div className='h-5'></div>
                                    All prices are ex. VAT.
                                    <div className='h-5'></div>
                                    Time registration. Calculation, Member invoicing, Offers, Customer follow-up, Inventory count, Inventory management and English invoice text are additional modules that can be ordered after installation of the program.
                                    <div className='h-5'></div>
                                    The annual fee is ongoing, but if you do not wish to continue using the program, all you have to do is give notice thirty days before the start of the next one-year period.
                                    <div className='h-5'></div>
                                    The introductory offer (NOK 99 per month) is for the annual fee Start for the first year. After the first year, words are billed. price which is currently, for annual fee Start, one hundred and twenty-nine kroner per month, for annual fee Remote control, two hundred and sixty-five kroner per month and for annual fee Pro, three hundred and thirty-three kroner per month. After one year, the annual Remote Control fee is invoiced as standard, but you can choose Start or Pro by giving notice at any time before the due date.
                                    <div className='h-5'></div>
                                    If you choose to keep the program by not notifying us by email within 14 days of download that you do not wish to continue with the program, you accept that you will pay the invoice for your order. Code for the program will be sent automatically after the invoice has been paid. Failure to pay the invoice or late payment does not give the right to cancel the order. We are happy to help fix the logo for you at cost price.
                                    <div className='h-5'></div>
                                    Licenses for the use of LettFaktura are of course sold in accordance with the applicable laws.
                                    <div className='h-5'></div>
                                    In order to be able to help you more easily and provide you with support, as well as to comply with the laws, we naturally have to store your information.
                                    <div className='h-5'></div>
                                    In connection with the storage of information, the law requires that we provide you with the following information:
                                    <div className='h-5'></div>
                                    If you order as a private person, you have the right to cancel as required by law. Your information is stored so that we can help you, etc. We will use it to be able to help you if you need help, follow the laws regarding bookkeeping, etc. When there are upgrades and the like, we may send you offers and the like about our products and services by email or the like. You may be contacted by email, post and phone. If you don't want to be contacted, just send us an email about it.
                                    <div className='h-5'></div>
                                    You can at any time ask not to be sent information about upgrades by email, fax, letter or the like, and we will of course not do that. You send such a request to us by email, fax, letter or similar.
                                    <div className='h-5'></div>
                                    For natural reasons, we have to store, process and move your data. Your information is stored until further notice. You give us permission to store, process and move your data, as well as to send you offers and the like by email, fax, letter and the like. Due to the way it works with software, permission also needs to be given to other parties. The permission is therefore granted to us, as well as to the companies and/or person(s) who own the software, the source code, the website and the like. It is also given to current and future companies owned and/or controlled by one or more of those who currently own and/or control us. It is also given to current and future companies owned and/or controlled by one or more of those who currently own and/or control the companies (if any), which own or will own the software, source code, website and the like. It is also given to current and future persons (if any) who own or will own the software, source code, website and the like. This applies both to current and future products and services. It is also given to another company, which we can use to send/sell products, upgrades and the like, either by sub-licensing or otherwise.
                                    <div className='h-5'></div>
                                    You of course have the right to request access to, change and deletion of the information we hold about you. You also have the right to request restriction of data processing, and to object to data processing and the right to data portability. You have the right to complain to the supervisory authority. You can find more legal information about us here. The laws of Ireland are the applicable laws. Placing an order is of course completely voluntary. Of course, we do not use any automated profiling or decisions.
                                    <div className='h-5'></div>
                                    If you wish to contact us, please use the information on this or any of our other websites.
                                    <div className='h-5'></div>
                                    Click on Invoicing Now to download according to the information you have entered and the terms here. (Date and time of admission are entered automatically in our registers.)
                                    <div className='h-5'></div>
                                    Our experience is that our customers are very satisfied with the way we work and hope and believe that this will also be their experience.
                                    <div className='h-5'></div>
                                    Have a great day! 
                                </p>
                                    
                            </div>
                                
                            </div>
                        </div>
                        <div className='absolute mt-[100px] pb-20 left-1/2 transform -translate-x-1/2' >
                            <div className='px-5 py-2 bg-lime-400 rounded-lg'> 
                                <p className='text-center'>Accept And Continue</p>
                            </div>
                        </div>
                    </div>
                    
                    
                    <div className='absolute top-0 lg:hidden w-full z-50'>
                        <div>
                            <div className='flex flex-col grow z-50'>
                                <div className='flex h-[60px] w-screen justify-between bg-white/20 backdrop-blur-xl shadow-lg '>
                                    <div className='relative mt-3 ml-6 w-[50px] text-white' onClick={()=>{setIsOpen((prev) => !prev)}} >  
                                        {!isOpen ? (<GiHamburgerMenu className='drop-shadow-[1px_1px_1px_var(--tw-shadow-color)] shadow-slate-900' fontSize={35}/>) : (<RxCross2 className='drop-shadow-[1px_1px_1px_var(--tw-shadow-color)] shadow-slate-900'  fontSize={35}/>)}
                                    </div>
                                    {isOpen && (
                                        <div className='absolute  bg-white/20 top-[60px] p-2 py-4 rounded-br-2xl backdrop-blur-xl shadow-lg shadow-black/40'>
                                            <div className='flex flex-col text-white gap-5'>
                                                <div className='text-2xl ml-5 pr-4 drop-shadow-[1px_1px_1px_var(--tw-shadow-color)] shadow-slate-900 cursor-pointer' onClick={()=>{navigate('/home')}}>
                                                    <p className=''>Home</p>
                                                </div>
                                                <div className='text-2xl ml-5 pr-4 drop-shadow-[1px_1px_1px_var(--tw-shadow-color)] shadow-slate-900 cursor-pointer' onClick={()=>{navigate('/invoices')}}>
                                                    Orders
                                                </div>
                                                <div className='text-2xl ml-5 pr-4 drop-shadow-[1px_1px_1px_var(--tw-shadow-color)] shadow-slate-900 cursor-pointer' onClick={()=>{navigate('/home')}}>
                                                    Our Customers
                                                </div>
                                                <div className='text-2xl ml-5 pr-4 drop-shadow-[1px_1px_1px_var(--tw-shadow-color)] shadow-slate-900 cursor-pointer' onClick={()=>{navigate('/home')}}>
                                                    About Us
                                                </div>
                                                <div className='text-2xl ml-5 pr-4 drop-shadow-[1px_1px_1px_var(--tw-shadow-color)] shadow-slate-900 cursor-pointer' onClick={()=>{navigate('/home')}}>
                                                    Contact Us
                                                </div>
                                            </div>

                                        </div>
                                    )}
                                    <div className='p-1 mr-6 text-white flex flex-row items-center gap-3 text-lg cursor-pointer drop-shadow-[1px_1px_1px_var(--tw-shadow-color)] shadow-slate-900'>
                                        English
                                        <img className='h-6' src={england} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    
                </div>

                
                
                

                
                {/* <div className='absolute top-1/2 left-1/2 z-10 '>
                        <div className='isolate bg-slate-300'>
                            Hey
                        </div>
                    
                        <div className='p-10  transform -translate-x-1/2 -translate-y-1/2 flex rounded-2xl bg-white z-0' >
                            <div className=''>
                                Terms And Conditions
                            </div>
                        </div>
                    </div>  

                <div className='blur-[2px] z-20'>
                    <img className='' src={randomImage}/>
                </div> */}
            </div>
        </div>
    </div>



    
    // <div className='text-black'>
    //         <div className='absolute bg-white z-9'>
    //             Home
    //         </div>
    //   <div className='relative'>
        
            
            // <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10'>
            //     <div className='p-10 flex rounded-2xl bg-white' >
            //         <div className=''>
            //             Terms And Conditions
            //         </div>
            //     </div>
            // </div>
            
    //         <div className='blur-[3px] z-1'>
    //             <img className='overflow-hidden' src={randomImage} />
    //         </div>
    //   </div>
      
    // </div>
  )
}

export default Term
