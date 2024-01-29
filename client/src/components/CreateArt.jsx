import React, {useState} from 'react'

const CreateArt = () => {
    const [title, setTitle] = useState('');
    const [about, setAbout] = useState('');
    const [price, setPrice] = useState('');
    const [unit, setUnit] = useState('');
    const [stock, setStock] = useState('');
    const [descr, setDescr] = useState('');

  return (
    <div className='flex flex-col grow'>
        <div className='mx-10 mt-10 rounded-lg shadow-xl bg-slate-100'>
            <div className='flex flex-col text-black'>
                <div className='pt-3 font-semibold text-2xl text-center'>Creating Article</div>
                    <div>
                        <div>
                            <input type="text" />
                        </div>
                    </div>
            </div>
        </div>
    </div>
  )
}

export default CreateArt
