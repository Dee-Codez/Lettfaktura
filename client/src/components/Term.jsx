import React, {useState, useEffect} from 'react';
import diamond from '../assets/diamond.png';
import england from "../assets/england.png";
import bg from "../assets/bg.jpg";
import TermMenu from './TermMenu';
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import { useNavigate } from 'react-router-dom'
import { MdNavigateNext } from "react-icons/md";
import { GrLinkNext } from "react-icons/gr";
import { MdArrowUpward } from "react-icons/md";


const imgUrl = 'https://source.unsplash.com/random/1920x1080/?nature,dark';

const Term = () => {

    const navigate = useNavigate();


    const [terms, setTerms] = useState([]);
    
    const [img, setImg] = useState();
    const [isOpen, setIsOpen] = useState(false);

    const [visible, setVisible] = useState(false) 
  
    const toggleVisible = () => { 
        const scrolled = document.documentElement.scrollTop; 
        if (scrolled > 300){ 
        setVisible(true) 
        }  
        else if (scrolled <= 300){ 
        setVisible(false) 
        } 
    }; 
    
    const scrollToTop = () =>{ 
        window.scrollTo({ 
        top: 0,  
        behavior: 'smooth' //or auto
        }); 
    };

    window.addEventListener('scroll', toggleVisible); 

    const fetchImage = async () => {
        const res = await fetch(imgUrl);
        const imageBlob = await res.blob();
        const imageObjectURL = URL.createObjectURL(imageBlob);
        setImg(imageObjectURL);
      };

    const getTerms = async () => {
        try {
            const response = await fetch("https://lettfaktura-backend.vercel.app/terms");
            const terms = await response.json();
            setTerms(terms);
        } catch (error) {
            console.log(error.message);
        }
    }

      useEffect(() => {
        fetchImage();
        getTerms();
    }, []);

    if(!img || !terms) return (
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
                    <div className=' fixed h-[100vh] flex-grow z-10'>
                        <img className='w-screen h-[100%] object-cover object-center' src={bg}/>
                    </div>
                </div>
                
                <div className='absolute mt-16 lg:mt-0 w-full z-10'>
                    <div className='hidden lg:contents w-full z-0'>
                        <TermMenu />
                    </div>
                    <div className='text-white font-semibold mt-14 text-2xl text-center'>Terms</div>
                    <div className='text-white mt-5 flex justify-center w-full text-center cursor-pointer' onClick={()=>{navigate('/invoices')}}>
                        <div className='bg-[#089e1e] font-bold w-fit py-3 px-10 rounded-3xl' >
                            Close And Go Back
                        </div>
                    </div>
                    <div>
                        <div className='relative top-6 bg-white left-1/2 transform -translate-x-1/2 max-w-[750px] my-6 mr-10 z-0 rounded-2xl'>
                            {/* <div className='absolute cursor-pointer top-[35px] sm:top-[25px] right-2 sm:right-10 sm:border rounded-full sm:p-2 border-black' onClick={()=>{navigate('/invoices')}}>
                                <GrLinkNext  color='lime' fontSize={27} />
                            </div> */}
                            <div className=' flex flex-col items-center'>
                                {/* <div className='text-center text-2xl mt-8 font-semibold'>
                                    Terms And Conditions
                                </div> */}
                                <div className='flex text-center break-words text-sm mt-6 mx-6  py-6'>    
                                <div className='leading-6'>
                                {terms.map((term)=>(
                                        <>
                                        <p key={term.tid}>{term.content}</p>
                                        <div className='h-3'></div>
                                        </>
                                        
                                    ))}
                                </div>
                                    
                                     
                            
                                    
                            </div>
                                
                            </div>
                        </div>
                        <div className='text-white mt-20 pb-8 flex  justify-center w-full text-center cursor-pointer' onClick={()=>{navigate('/invoices')}}>
                            <div className='bg-[#089e1e] font-bold w-fit py-3 px-10 rounded-3xl' >
                                Close And Go Back
                            </div>
                        </div>
                        {/* <div className='absolute mt-[100px] pb-20 left-1/2 transform -translate-x-1/2' >
                            <div className='flex flex-row items-center px-5 py-2 bg-lime-400 rounded-lg cursor-pointer' onClick={()=>{navigate('/invoices')}}> 
                                <p className=' text-center'>Accept And Continue </p>
                                <MdNavigateNext fontSize={30} />
                            </div>
                        </div> */}
                    </div>
                    
                    
                    <div className='absolute -top-10 lg:hidden w-full z-50'>
                        <div>
                            <div className='flex flex-col grow z-50'>
                                <div className='flex h-[60px] w-screen justify-between  '>
                                    <div className='relative mt-3 ml-6 w-[50px] text-white' onClick={()=>{setIsOpen((prev) => !prev)}} >  
                                        {!isOpen ? (<GiHamburgerMenu className='drop-shadow-[1px_1px_1px_var(--tw-shadow-color)] shadow-slate-900' fontSize={35}/>) : (<RxCross2 className='drop-shadow-[1px_1px_1px_var(--tw-shadow-color)] shadow-slate-900'  fontSize={35}/>)}
                                    </div>
                                    {isOpen && (
                                        <div className='absolute ml-5  bg-white top-[60px] p-2 py-4 shadow-lg shadow-black/10'>
                                            <div className='flex flex-col text-black gap-10'>
                                                <div className='text-md font-semibold ml-5 pr-32  cursor-pointer' onClick={()=>{navigate('/home')}}>
                                                    <p className=''>Home</p>
                                                </div>
                                                <div className='text-md font-semibold ml-5 pr-32  cursor-pointer' onClick={()=>{navigate('/invoices')}}>
                                                    Orders
                                                </div>
                                                <div className='text-md font-semibold ml-5 pr-32  cursor-pointer' onClick={()=>{navigate('/home')}}>
                                                    Our Customers
                                                </div>
                                                <div className='text-md font-semibold ml-5 pr-32  cursor-pointer' onClick={()=>{navigate('/home')}}>
                                                    About Us
                                                </div>
                                                <div className='text-md font-semibold ml-5 pr-32  cursor-pointer' onClick={()=>{navigate('/home')}}>
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
                    {/* <div className={`fixed outline-none  bottom-[80px] right-[40px] h-[20px] text-[3rem]`}>
                        <MdArrowUpward  onClick={scrollToTop} color='cyan' className= { `animate-bounce bg-white/20 backdrop-blur-sm cursor-pointer ${visible ? "visible" : "invisible "} rounded-full drop-shadow-[0px_0px_3px_var(--tw-shadow-color)] border border-white shadow-slate-900  cursor-pointer`} />
                    </div> */}
                    
                    
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
