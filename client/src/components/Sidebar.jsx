import React from 'react'
import { LiaFileInvoiceSolid } from "react-icons/lia";
import { BsFillPeopleFill } from "react-icons/bs";
import { GoGear } from "react-icons/go";
import { BsFillJournalBookmarkFill } from "react-icons/bs";
import { IoIosPricetags } from "react-icons/io";
import { LiaFileInvoiceDollarSolid } from "react-icons/lia";
import { RxCrossCircled } from "react-icons/rx";
import { BiSolidOffer } from "react-icons/bi";
import { MdInventory } from "react-icons/md";
import { FaRegAddressCard } from "react-icons/fa6";
import { MdImportExport } from "react-icons/md";
import { NavLink,Link, useNavigate } from 'react-router-dom'

const isNotActiveStyle = 'flex items-center px-5 gap-3 text-gray-500 hover:text-black transition-all duration-75 ease-in-out capitalize';
const isActiveStyle = 'flex items-center px-5 gap-3 font-bold border-r-2 border-black transition-all duration-75 ease-in-out capitalize';

const Sidebar = ({closeToggle}) => {

    let categs = [
        {name:"Invoices", link:"invoices", img:<LiaFileInvoiceSolid fontSize={25} className='text-blue-500'/>},
        {name:"Customers", link:"customer",img:<BsFillPeopleFill fontSize={25} className='text-emerald-300'/>},
        {name:"My Business", link:"mybusiness",img:<GoGear fontSize={25} className='text-cyan-400'/>},
        {name:"Invoice Journal", link:"invoicejournal",img:<BsFillJournalBookmarkFill fontSize={25} className='text-[#0ea5e9]'/>},
        {name:"Price List", link:"pricelist",img:<IoIosPricetags fontSize={25} className='text-[#ffa959]' />},
        {name:"Multiple Invoice", link:"multipleinvoices",img:<LiaFileInvoiceDollarSolid  fontSize={25} className='text-[#0ea5e9]'/>},
        {name:"Unpaid Invoices", link:"unpaidinvoices",img:<RxCrossCircled fontSize={25} className='text-[#ff5555]' />},
        {name:"Offer", link:"offer",img:<BiSolidOffer  fontSize={25} className='text-[#ffe96c]'/>},
        {name:"Inventory Control", link:"inventorycontrol",img:<MdInventory  fontSize={25} className='text-[#38ffff]'/>},
        {name:"Member Invoicing", link:"memberinvoice",img:<FaRegAddressCard fontSize={25} className='text-[#0ea5e9]' />},
        {name:"Import/Export", link:"importexport",img:<MdImportExport fontSize={25} className='text-[#205b77]' />},
    ];

    const handleCloseSidebar = () => {
        if(closeToggle){
          closeToggle(false);
        }
      };

  return (
    // <div className='flex flex-col justify-between bg-white h-full overflow-y-scroll min-w-150 hide-scrollbar'>
    //     <div className='flex flex-col'>
    //         <Link to='/'
    //         className='flex px-5 gap-2 pt-1 w-190 justify-center items-center'
    //         onClick={handleCloseSidebar}>
    //         <div className='text-black text-2xl p-5 text-center'>Menu</div>
    //         </Link>
    //         <hr className='mb-7 text-center ml-5 border-[#0f7ee9] border'/>

    //     </div>
    // </div>
    <div className='flex flex-col w-fit shadow-none xl:shadow-xl shadow-slate-300 pr-5'>
        <div className='text-black text-2xl p-5 text-center'>Menu</div>
        <hr className='mb-7 text-center ml-5 bg-blue-500 text-blue-700 border-[#0f7ee9] border'/>
        <ul className='text-black text-lg flex flex-col gap-5 pr-4'>
            {categs.map((items) => {
                return (
                    <NavLink
                      tag={Link}
                      to={`/${items.link}`}
                      className={({isActive}) => isActive ? isActiveStyle : isNotActiveStyle}
                      onClick={handleCloseSidebar}
                      key={items.name}>
                        <div className='pl-8'>{items.img}</div>
                        <div>{items.name}</div>
                    </NavLink>
                )
            })}
        </ul>
      
    </div>
  )
}

export default Sidebar
