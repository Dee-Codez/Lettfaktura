import {useState} from 'react'
import { IoMdAdd, IoMdSearch} from 'react-icons/io'
import { FaPrint } from "react-icons/fa6";
import { LuSettings2 } from "react-icons/lu";
import {Link, useNavigate} from 'react-router-dom'
import { jsPDF } from "jspdf";
import autoTable from "jspdf-autotable";

const Searchbar = ({searchATerm, setsearchATerm, searchPTerm, setsearchPTerm}) => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const generatePDF = async () => {
        setLoading(true);
        const doc = new jsPDF();

        doc.setFontSize(20);
        doc.text("Dee Codez", 15, 15);
        doc.setFontSize(10);
        doc.text("W-306, Abode Valley, Potheri", 15, 20);
        doc.text("Chennai, TN, 603203", 15, 25);
        doc.text("+91 9454315004", 15, 30);


        const logo = await fetch('https://avatars.githubusercontent.com/u/114132607?v=4').then(response => response.blob());
        const reader = new FileReader();
        reader.readAsDataURL(logo);
        reader.onloadend = function() {
            const base64logo = reader.result;                
            doc.addImage(base64logo, 'JPEG', 150, 5, 30, 30);
        }

        doc.setFontSize(25);
        const pageWidth = doc.internal.pageSize.getWidth();
        doc.text("INVOICE", pageWidth / 2, 65, { align: 'center' });

        doc.setFontSize(10);
        const date = new Date();
        doc.text("Order Date: " + date.toLocaleDateString(), 15, 75);
        doc.text("Order Time: " + date.toLocaleTimeString(), 15, 80);

        const tableColumn = ["Article_ID", "Title", "Price", "Unit", "Stock", "Description"];
        const tableRows = [];

        const products = await fetch('https://lettfaktura-backend.vercel.app/articles').then(response => response.json());

        products.forEach(product => {
            const productData = [product.article_id, product.title, product.price, product.unit, product.stock, product.descr];
            tableRows.push(productData);
        });

        doc.autoTable(tableColumn, tableRows, { startY: 90 });

        doc.setFontSize(10);
        const pageHeight = doc.internal.pageSize.getHeight();
        doc.text("This is an Auto-Generated PDF", pageWidth / 2, pageHeight - 20,{ align: 'center'});
        doc.text("For Personal Use, Head On To lettfaktura.vercel.app And Check It Out", pageWidth / 2, pageHeight - 15,{ align: 'center'});
        doc.text("Created By Dee Codez!", pageWidth / 2, pageHeight - 9,{ align: 'center'});

        const timestamp = Date.now();
        doc.save(`Invoice_${timestamp}.pdf`);
        setLoading(false);
    }
  return (
    <div className='flex gap-2 md:gap-5 w-full mt-5 justify-center items-center '>
        <div className='flex flex-col px-4 w-full md:flex-row flex-wrap items-center justify-center gap-10 lg:gap-20'>
            <div className='flex flex-col mt-5 gap-5 text-black'>
                <div className='flex justify-start items-center border w-full mx-4 border-slate-400 ml-0 lg:ml-10 px-6 rounded-2xl bg-white outline-none focus-within:shadow-sm'>
                    <input 
                    type="text" 
                    onChange={(e) => setsearchATerm(e.target.value)}
                    onClick={() => setsearchPTerm('')}
                    placeholder='Search Article ID'
                    value={searchATerm}
                    onFocus={() => navigate('/search')}
                    className='p-2 w-full bg-white outline-none'
                    />
                    <IoMdSearch color='cyan' fontSize={30} className='text-blue ml-1' />
                </div>
                <div className='flex justify-start items-center border w-full mx-4 border-slate-400 ml-0 lg:ml-10 px-6 rounded-2xl bg-white outline-none focus-within:shadow-sm'>
                    <input 
                    type="text" 
                    onChange={(e) => setsearchPTerm(e.target.value)}
                    onClick={() => setsearchATerm('')}
                    placeholder='Search Title'
                    value={searchPTerm}
                    onFocus={() => navigate('/search')}
                    className='p-2 w-full bg-white outline-none'
                    />
                    <IoMdSearch color='cyan' fontSize={30} className='text-blue ml-1' />
                </div>
            </div>
            <div className='flex flex-row pl-0 md:pl-16 gap-8 lg:gap-20'>
                <div className='rounded-3xl h-fit p-2 w-fit flex flex-row text-black justify-center items-center border hover:bg-slate-100 shadow-md hover:shadow-none border-slate-400'>
                    <Link to='/create-article'  className='flex flex-row flex-wrap gap-1 px-6 2xl:px-2 items-center md:w-50 h-full transition ease-in-out duration-300'>
                        <div className='hidden 2xl:flex text-black'>New Product</div>
                        <IoMdAdd fontSize={30} color='lime'/>
                    </Link>
                </div>
                <div className='rounded-3xl h-fit w-fit flex flex-row text-black justify-center items-center border hover:bg-slate-100 shadow-md hover:shadow-none border-slate-400'>
                    {loading ? <div className='flex justify-center p-2 gap-2 m-1 items-center text-white'>
                        Loading..
                        <div className="inline-block h-5 w-5 animate-spin rounded-full border-2 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]" role="status">
                        </div>
                    </div> : 
                    <Link to={'print'} onClick={generatePDF} className='flex flex-row flex-wrap gap-1 py-2 px-8 2xl:px-4 items-center md:w-50 h-full transition ease-in-out duration-300'>
                        <div className='hidden 2xl:flex text-black pr-1'>Print List</div>
                        <FaPrint fontSize={30} color='yellow'/>
                    </Link>
                    }
                    
                </div>
                <div className='rounded-3xl h-fit p-2 w-fit flex flex-row text-black justify-center items-center border hover:bg-slate-100 shadow-md hover:shadow-none border-slate-400'>
                    <Link to={'advanced'} className='flex flex-row flex-wrap gap-1 px-6 2xl:px-2 items-center md:w-50 h-full transition ease-in-out duration-300'>
                        <div className='hidden 2xl:flex text-black'>Advanced Mode</div>
                        <LuSettings2 fontSize={30} color='cyan'/>
                    </Link>
                </div>
            </div>
        </div>
        
        
    </div>
  )
}

export default Searchbar
