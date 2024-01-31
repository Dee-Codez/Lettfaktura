import React, {useState} from 'react'; 
import {FaArrowCircleUp} from 'react-icons/fa'; 
import { useNavigate, Link } from 'react-router-dom';

const Terms = () => {

    const navigate = useNavigate();

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
        behavior: 'smooth'
        /* you can also use 'auto' behaviour 
            in place of 'smooth' */
        }); 
    }; 
    
    window.addEventListener('scroll', toggleVisible); 


  return (
    <div className= 'flex m-10 rounded-3xl shadow-slate-700 shadow-lg justify-center bg-slate-200  text-black'>
      <div>
      <div className='hidden bg-blue-200 grow items-end justify-end sm:absolute top-10 right-10'>
                        <div className=' mt-5 text-right p-5 text-2xl' onClick={() => {navigate('/invoices')}}>
                            Skip
                        </div>
                    </div>
        <div className='flex'>
            <div className='flex flex-col items-center'>
                <div className='flex flex-row items-center'>
                    <div className='flex mt-5 p-5 flex-row text-4xl font-semibold '>
                        <div>Terms And Conditions</div>
                    </div>
                    
                </div>
                <div className='text-lg p-5 mt-5 pb-10 text-center'>
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
      </div>
      <div className={`fixed outline-none bg-transparent bottom-[80px] right-[40px] h-[20px] text-[3rem]`}>
        <FaArrowCircleUp onClick={scrollToTop} className= {`cursor-pointer ${visible ? "visible" : "invisible "}`} />
      </div>
    </div>
  )
}

export default Terms
