import { React, useEffect, useState } from "react";
import { BiDownArrowAlt } from "react-icons/bi";
import { CiMenuKebab } from "react-icons/ci";


const Feed = () => {
    const [articles, setArticles] = useState([]);

    const getArticles = async () => {
        try {
            const response = await fetch("http://localhost:5000/articles")
            const articles = await response.json()
            setArticles(articles)
        } catch (error) {
            console.error(error.message);
        }
    }

    useEffect(() => {
      getArticles();
    }, [])
    

  return (
    //  Column By Column Approach

    <div className='text-black'>
      <div>
        <div className='mt-10 mx-10'>
            <div className='flex'>
                <div className='flex flex-row gap-8'>
                    <div className='flex flex-col items-center'>
                        <div className="flex flex-row mt-2 items-center">
                            Article No.
                            <BiDownArrowAlt fontSize={30} color="cyan" />
                        </div>
                        <div className="flex mt-4 flex-col gap-2">
                        {articles.map(article =>(
                            <div className="text-black rounded-full p-1 px-10 border border-slate-300 " key={article.article_id}>
                                {article.article_id}
                            </div>
                        ))}
                        </div>
                    </div>
                    <div className='flex flex-col'>
                        <div className="flex flex-row mt-2 items-center">
                            Product/Service
                            <BiDownArrowAlt fontSize={30} color="lime" />
                        </div>
                        <div className="flex mt-4 flex-col gap-2">
                        {articles.map(article =>(
                            <div className="text-black capitalize rounded-full p-1 px-4 border border-slate-300 " key={article.article_id}>
                                {article.title}
                            </div>
                        ))}
                        </div>
                    </div>
                    <div className='flex flex-col'>
                        <div className="flex flex-row mt-2 ml-2 items-center">
                            Price
                        </div>
                        <div className="flex mt-4 flex-col gap-2">
                        {articles.map(article =>(
                            <div className="text-black capitalize rounded-full p-1 px-4 border border-slate-300 " key={article.article_id}>
                                {article.price}
                            </div>
                        ))}
                        </div>
                    </div>
                    <div className='hidden 2xl:flex flex-col'>
                        <div className="flex flex-row mt-2 ml-2">
                            Unit
                        </div>
                        <div className="flex mt-4 flex-col gap-2">
                        {articles.map(article =>(
                            <div className="text-black capitalize rounded-full p-1 px-4 border border-slate-300 " key={article.article_id}>
                            {article.unit? article.unit:" - "}
                            </div>
                        ))}
                        </div>
                    </div>
                    <div className='flex flex-col'>
                        <div className="flex flex-row mt-2 ml-2">
                            Stock
                        </div>
                        <div className="flex mt-4 flex-col gap-2">
                        {articles.map(article =>(
                            <div className="text-black capitalize rounded-full p-1 px-4 border border-slate-300 " key={article.article_id}>
                            {article.stock? article.stock:" - "}
                            </div>
                        ))}
                        </div>
                    </div>
                    <div className='flex flex-col'>
                        <div className="flex flex-row mt-2 ml-2">
                            Description
                        </div>
                        <div className="flex mt-4 max-h-1 flex-col gap-2">
                        {articles.map(article =>(
                            <p className="text-black max-w-[300px] truncate rounded-full p-1 px-4 border border-slate-300 " key={article.article_id}>
                            {article.descr? article.descr:" - "}
                            </p>
                        ))}
                        </div>
                    </div>
                    <div>
                        {articles.map(article =>(
                            <div className="text-black capitalize rounded-full p-1 px-4 border border-slate-300 " key={article.article_id}>
                            <select className="appearance-none" name="" id="">
                            <CiMenuKebab color="black" fontSize={20} />
                            </select>
                            </div>
                        ))}
                    </div>


                </div>
                
            </div>

        </div>
      </div>
    </div>
    


    // Row By Row Approach
    // <div>
    //     <div>
    //         <div className="text-black mt-10 mx-5 bg-slate-200">
    //             <div>
    //                 <div className="flex flex-col">
    //                     <div className="flex flex-row gap-2 items-center">
    //                         <div className="flex flex-row p-2 items-center ">
    //                             <div className="ml-2">Article No.</div>
    //                             <BiDownArrowAlt fontSize={30} color="cyan" />
    //                         </div>
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
