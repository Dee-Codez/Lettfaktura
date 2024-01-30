import React,{useState, useRef, useEffect} from 'react'
import { ImCross } from "react-icons/im";
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import { MdDeleteForever, MdEditSquare  } from "react-icons/md";

const BtnModal = ({open , onClose, article}) => {

    const navigate = useNavigate()


    // const title = useRef();
    // title.value = article.title;
    const [articles, setArticles] = useState([]);



    const [articleid, setArticleid] = useState((article) ? article.article_id : '');
    const [title, setTitle] = useState((article) ? article.title : '');
    const [price, setPrice] = useState((article) ? article.price : '');
    const [unit, setUnit] = useState((article) ? article.unit : '');
    const [stock, setStock] = useState((article) ? article.stock : '');
    const [descr, setDescr] = useState((article) ? article.descr : '');

    const onDelete = async () => {
        try {
            console.log(article.article_id);
            const response = await fetch(`http://localhost:5000/articles/${article.article_id}`,{
                method: 'DELETE',
            })
            console.log(response);
            onClose();
        } catch (error) {
            console.error(error.message);
        }
    };

    useEffect(() => {
        setArticleid(article.article_id);
        setTitle(article.title);
        setPrice(article.price);
        setUnit(article.unit);
        setStock(article.stock);
        setDescr(article.descr);
    },[article,open])
    

  return (
    <div onClick={onClose} className={`fixed inset-0  flex justify-center items-center transition-colors duration-200 ${open ? "visible bg-black/50" : "invisible "}`}>
      <div onClick={(e) => e.stopPropagation()} className='text-white bg-white p-5 rounded-2xl'>
        <button onClick={() => {
            onClose();

        }} className='absolute top-5 right-5 p-2 rounded-full text-gray-400 bg-white '><ImCross /></button>
        <div className='flex'>
            <div>
                <div className='flex flex-col gap-3 text-black'>
                    <div className='flex text-center flex-col items-center justify-center'>
                        <div className='text-[43px] text-center px-6 pb-4 font-semibold'>
                            Article No. {article.article_id}
                        </div>
                    </div>
                    <div className='flex flex-row items-center mt-6'>
                        <label className='text-3xl px-4' htmlFor="title">Title : </label>
                        <input type="text" 
                            value={title}                
                            onChange={(e)=> {
                                setTitle(e.target.value);
                            }}
                            placeholder='Add your title here'
                            className='outline-none bg-slate-100 text-center text-lg sm:text-xl font-bold border-b-2 p-2 border-[#0f7ee9]'
                        />
                        
                    </div>
                    <div className='flex flex-row mt-6'>
                        <label className='text-3xl px-4' htmlFor="price">Price : </label>
                        <input type="text"
                                    inputMode="numeric" 
                                    value={price}
                                    onChange={(e)=> {
                                    setPrice(e.target.value);
                                    }}
                                    placeholder='Enter Price'
                                    className='outline-none text-base sm:text-lg text-center border-b-2 border-[#0f7ee9] p-2 bg-slate-100'
                                />
                    </div>
                    <div className='flex flex-row mt-6'>
                        <label className='text-3xl px-4' htmlFor="unit">Unit : </label>
                        <div className='text-center'>
                                    <select 
                                        className='outline-none w-4/5 text-base font-normal border-b-2 text-center border-[#0f7ee9] bg-slate-100 p-2 rounded-md cursor-pointer'
                                        onChange={(e) => {
                                        setUnit(e.target.value);
                                        }}
                                        value={unit}
                                    >
                                        <option value="other" className='bg-white'>Select Unit</option>   
                                        <option key="kmph" value="kmph">Kilometer/Hour</option>
                                        <option key="mph" value="mph">Mile/Hour</option>
                                    </select>
                        </div>
                    </div>
                    <div className='flex flex-row mt-6'>
                        <label className='text-3xl px-4' htmlFor="stock">Stock : </label>
                        <input type="text"
                                    inputMode="numeric" 
                                    value={stock}
                                    onChange={(e)=> {
                                    setStock(e.target.value);
                                    }}
                                    placeholder='Enter Number Of Unit In Stock'
                                    className='outline-none text-base sm:text-lg text-center border-b-2 border-[#0f7ee9] p-2 bg-slate-100'
                                />
                    </div>
                    <div className='flex flex-row mt-6'>
                    <label className='text-3xl px-4' htmlFor="descr">Description : </label>
                        <div className='flex justify-center'>
                                    <textarea
                                        value={descr}
                                        rows={2}
                                        onChange={(e)=> {
                                        setDescr(e.target.value);
                                        }}
                                        placeholder='Add your description here'
                                        className='outline-none grow text-base sm:text-lg text-center border-b-2 border-[#0f7ee9] p-2 bg-slate-100'
                                    ></textarea>
                         </div>
                    </div>
                    <div className='flex flex-row mt-4 pb-4 justify-center'>
                        <div className='flex flex-row gap-14 items-center'>
                            <div className='flex flex-row items-start mt-10'>
                                <Link to="/invoices" onClick={""} className='bg-blue-500 flex gap-2 flex-row items-center hover:text-blue-950 hover:bg-blue-300  p-4 text-white font-bold px-6 rounded-full outline-none'>
                                    <MdEditSquare />Edit
                                </Link>      
                            </div>
                            <div className='flex flex-row items-end mt-10'>
                                <Link to="/invoices" onClick={onDelete} className='bg-red-500 gap-1 flex flex-row items-center hover:text-red-950 hover:bg-red-300  p-4 text-white font-bold px-6 rounded-full outline-none'>
                                    <MdDeleteForever />Delete
                                </Link>
                            </div>
                        </div>
                    <div>
                </div>

            </div>
        </div>
    </div>

    </div>
      </div>
    </div>
  )
}

export default BtnModal
