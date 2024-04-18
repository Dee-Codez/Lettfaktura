import { React, Fragment, useEffect, useState, useMemo } from "react";
import { BiDownArrowAlt } from "react-icons/bi";
import { CiMenuKebab } from "react-icons/ci";
import { Link, useNavigate } from "react-router-dom";
import BtnModal from '../components/BtnModal'
import SearchArt from "./SearchArt";

const Feed = () => {

    const navigate = useNavigate();

    const [articles, setArticles] = useState([]);
    const [open,setOpen] = useState(false);
    const [modal, setModal] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [searchArticles, setSearchArticles] = useState([]);

    const getArticles = async () => {
        try {
            const response = await fetch("https://lettfaktura-backend.vercel.app/articles")
            const articles = await response.json()
            setArticles(articles);
            articles.sort((a, b) => {
                // Compare by article_id numerically
                const idComparison = a.article_id - b.article_id;
                if (idComparison !== 0) return idComparison;
            
                // If article_ids are equal, compare by title
                return a.title.localeCompare(b.title);
            });
        } catch (error) {
            console.error(error.message);
        }
    }

    const searchAllArticles = () => {
        const terms = searchTerm.toLowerCase().split(' ');
        const searchArticles= articles.filter(article =>
            terms.some(term =>
                article.title.toLowerCase().includes(term) ||
                article.category.toLowerCase().includes(term)
            )
        );
        setSearchArticles(searchArticles);
    }
    const openModel = (article) => {
        return (
                <BtnModal open={open} onClose={() => setOpen(false)} article={article}/>
        )
    }

    useEffect(() => {
      getArticles();
}, [open])

    useEffect(() => {
        searchAllArticles();
    }, [searchTerm])
    

  return (

    // Column By Column Approach

    <div className='text-black'>
      <div>
        <div className='mt-10 mx-10'>
            <div className='flex items-center justify-center'>
                <div className='flex flex-row gap-4 sm:gap-8'>
                    <div className='hidden ph:flex flex-col items-center'>
                        <div className="flex min-w-[120px] flex-row mx-2 mt-1 items-center">
                            Article_ID
                            <BiDownArrowAlt fontSize={30} color="cyan" />
                        </div>
                    <div className="flex mt-4 flex-col gap-2">
                        {articles.map((article,index) =>(
                            <div key={index} className="text-black rounded-full p-1 px-10 border border-slate-300 " key={article.article_id}>
                                {article.article_id}
                            </div>
                        ))}
                    </div>
                    </div>
                    <div className='flex flex-col ml-[-20px] sm:ml-0'>
                        <div className="flex flex-row mt-1 items-center">
                            Title
                            <BiDownArrowAlt fontSize={30} color="lime" />
                        </div>
                        <div className="flex mt-4   sm:max-w-[350px] max-w-[190px] flex-col gap-2">
                        {articles.map((article,index) =>(
                            <p key={index} className="text-black line-clamp-1 capitalize rounded-full p-1 px-2 sm:px-4 border border-slate-300 " key={article.article_id}>
                                {article.title}
                            </p>
                        ))}
                        </div>
                    </div>
                    <div className='flex flex-col'>
                        <div className="flex flex-row mt-2 ml-2 items-center">
                            Price
                        </div>
                        <div className="flex mt-4 flex-col gap-2">
                        {articles.map((article,index) =>(
                            <div key={index} className="text-black line-clamp-1 capitalize rounded-full w-[100px] max-w-[250px]  sm:w-auto p-1 px-2 sm:px-4 border border-slate-300 " key={article.article_id}>
                                {article.price? article.price:" - "}
                            </div>
                        ))}
                        </div>
                    </div>
                    <div className='hidden 2xl:flex flex-col'>
                        <div className="flex flex-row mt-2 ml-2">
                            Unit
                        </div>
                        <div className="flex mt-4 flex-col gap-2">
                        {articles.map((article,index) =>(
                            <div key={index} className="text-black capitalize rounded-full p-1 px-4 border border-slate-300 " key={article.article_id}>
                            {article.unit? article.unit:" - "}
                            </div>
                        ))}
                        </div>
                    </div>
                    <div className='hidden lg:flex flex-col'>
                        <div className="flex flex-row mt-2 ml-2">
                            Stock
                        </div>
                        <div className="flex mt-4 flex-col gap-2">
                        {articles.map((article,index) =>(
                            <div key={index} className="text-black capitalize rounded-full p-1 line-clamp-1 max-w-[250px] px-4 border border-slate-300 " key={article.article_id}>
                            {article.stock? article.stock:" - "}
                            </div>
                        ))}
                        </div>
                    </div>
                    <div className='hidden tv:flex flex-col'>
                        <div className="flex flex-row mt-2 ml-2">
                            Description
                        </div>
                        <div className="flex mt-4 max-h-1 flex-col gap-2">
                        {articles.map((article,index) =>(
                            <p key={index} className="text-black pb-7 line-clamp-1 max-w-[300px]  rounded-full p-1 px-4 border border-slate-300 " key={article.article_id}>
                            {article.descr? article.descr:" - "}
                            </p>
                        ))}
                        </div>
                    </div>
                    <div className="mt-12 flex flex-col gap-2">
                        {articles.map((article,index) =>(
                            <div key={index}>
                                <Link to={`/invoices/${article.article_id}`} key={article.article_id} onClick={() => {
                                    setOpen(true);
                                    setModal(article);
                                    }}>
                                    <div className="text-black rounded-full py-2 px-2 border border-slate-300 " >
                                        <CiMenuKebab onClick={(article) => openModel(article)} color="black" fontSize={16} />
                                    </div>
                                </Link>
                                { modal ? (
                                    <BtnModal open={open} onClose={() => {
                                        setOpen(false);
                                        navigate("/invoices");
                                    }}  article={modal}/>
                                ) : (<></>)}
                            </div>
                                
                        ))}
                    </div>
                    


                </div>
                
            </div>

        </div>
      </div>
    </div>
    


    // Row By Row Approach With Grid
    // <div>
    //     <div>
    //         <div className="text-black mt-10 mx-5 bg-slate-200">
    //             <div>
    //                 <div className="flex flex-col">
    //                     <div className="flex flex-row gap-2 items-center">
                            // <div className="flex flex-row p-2 items-center ">
                            //     <div className="ml-2">Article No.</div>
                            //     <BiDownArrowAlt fontSize={30} color="cyan" />
                            // </div>
    //                         <div className="flex flex-row p-2 bg-slate-400 max-w-[35rem] items-center">
    //                             <div>Product/Service</div>
    //                             <BiDownArrowAlt fontSize={30} color="lime" />
    //                         </div>
    //                         <div className="flex flex-row p-2 items-center">
    //                             <div>Price</div>
    //                         </div>
    //                         <div className="flex flex-row p-2 items-center">
    //                             <div>Unit</div>
    //                         </div>
                                
                            
    //                     </div>
    //                 </div>
    //             </div>
    //         </div>
    //     </div>
    // </div>









  )
}

export default Feed
