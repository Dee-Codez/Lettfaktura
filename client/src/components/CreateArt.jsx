import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'

const CreateArt = () => {

    const navigate = useNavigate();

    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [unit, setUnit] = useState('');
    const [stock, setStock] = useState('');
    const [descr, setDescr] = useState('');

    const onSubmit = async (e) => {
        e.preventDefault();
        try {
            const body = {title,price,unit,stock,descr};
            const response = await fetch(`https://lettfaktura-backend.vercel.app/articles/`,{
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(body)
            }).then(() => {
                navigate('/invoices')
            })
            console.log(response);
        } catch (error) {
            console.error(error.message);
        }
    }


  return (
    <div className='flex flex-col'>
        <div className='mx-10 mt-10 rounded-lg shadow-xl bg-slate-100'>
            <div className='flex flex-col text-black'>
                <div className='pt-8 font-semibold text-2xl text-center'>Creating Article</div>
                    <div className='flex flex-col justify-center items-center'>
                        <div className='flex flex-1 flex-col gap-6 lg:pl-5 pb-20 mt-10 w-fit'>
                            <input type="text" 
                                value={title}
                                onChange={(e)=> {
                                setTitle(e.target.value);
                                }}
                                placeholder='Add your title here'
                                className='outline-none bg-slate-100 text-center text-lg sm:text-xl font-bold border-b-2 p-2 border-[#0f7ee9]'
                            />
                            <input type="text"
                                inputMode="numeric" 
                                value={price}
                                onChange={(e)=> {
                                setPrice(e.target.value);
                                }}
                                placeholder='Enter Price'
                                className='outline-none text-base sm:text-lg text-center border-b-2 border-[#0f7ee9] p-2 bg-slate-100'
                            />
                            <div className='text-center'>
                                <select 
                                    className='outline-none w-4/5 text-base font-normal border-b-2 text-center border-[#0f7ee9] bg-slate-100 p-2 rounded-md cursor-pointer'
                                    onChange={(e) => {
                                    setUnit(e.target.value);
                                    }}
                                >
                                    <option value="other" className='bg-white'>Select Unit</option>   
                                    <option key="kmph" value="kmph">Kilometer/Hour</option>
                                    <option key="mph" value="mph">Mile/Hour</option>
                                </select>
                            </div>
                            <input type="text"
                                inputMode="numeric" 
                                value={stock}
                                onChange={(e)=> {
                                setStock(e.target.value);
                                }}
                                placeholder='Enter Number Of Unit In Stock'
                                className='outline-none text-base sm:text-lg text-center border-b-2 border-[#0f7ee9] p-2 bg-slate-100'
                            />
                            <div className='flex justify-center'>
                                <textarea type="text" 
                                    value={descr}
                                    onChange={(e)=> {
                                    setDescr(e.target.value);
                                    }}
                                    placeholder='Add your description here'
                                    className='outline-none grow text-base sm:text-lg text-center border-b-2 border-[#0f7ee9] p-2 bg-slate-100'
                                ></textarea>
                            </div>
                            <div className='flex justify-center items-end mt-10'>
                                <button type='button'
                                onClick={onSubmit}
                                className='bg-green-500 text-white font-bold px-4 rounded-full outline-none'
                                >
                                    Save Article
                                </button>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    </div>
  )
}

export default CreateArt
