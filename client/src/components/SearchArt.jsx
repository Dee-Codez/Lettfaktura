import {useState,useEffect, useCallback, useRef} from 'react'

const SearchArt = ({ArticleTerm,ProductTerm}) => {

  const [currArt, setCurrArt] = useState(ArticleTerm);
  const [currProd, setCurrProd] = useState(ProductTerm);
  let [finArt, setFinArt] = useState([]);

  const initialRender = useRef(true);

  useEffect(() => {
    // Set a timeout to delay the state update
    const timeoutId = setTimeout(() => {
      setCurrArt(ArticleTerm);
      setCurrProd(ProductTerm);
    }, 150); // Delay of few milliseconds

    // Clear the timeout if the component re-renders before the timeout is over
    return () => clearTimeout(timeoutId);
  }, [ArticleTerm, ProductTerm]);


    const searchArticlesbyID = useCallback(async () => {
        try {
            const response = await fetch(`https://lettfaktura-backend.vercel.app/articles/id/${currArt}`)
            const articles = await response.json()
            console.log(articles);
            return articles;
        } catch (error) {
            console.error(error.message);
        }
    },[currArt])

    const searchArticlesbyTitle = useCallback(async () => {
      try {
          const response = await fetch(`https://lettfaktura-backend.vercel.app/articles/title/${currProd}`)
          const articles = await response.json()
          console.log(articles);
          return articles;
      } catch (error) {
          console.error(error.message);
      }
    },[currProd])

    useEffect(() => {
      if (initialRender.current) {
        initialRender.current = false;
      } else {
        const fetchArticlesByID = async () => {
          const idArt = await searchArticlesbyID();
          setFinArt(idArt);
        };
    
        fetchArticlesByID();
      }
    }, [currArt, searchArticlesbyID]);
    
    useEffect(() => {
      if (initialRender.current) {
        initialRender.current = false;
      } else {
        const fetchArticlesByTitle = async () => {
          const titleArt = await searchArticlesbyTitle();
          setFinArt(titleArt);
        };
    
        fetchArticlesByTitle();
      }
    }, [currProd, searchArticlesbyTitle]);


  return (

    <div className='text-black flex flex-col items-center mt-16'>

      {(currArt === "" && currProd === "") ? <p>Search For Articles From The Searchbar</p> :
        <div className='overflow-hidden'>
        {finArt && finArt.length === 0 ? <p>No articles found</p> : 
          <table className='border-separate border-spacing-5 xl:max-w-[70vw]'>
          <thead>
            <tr className='text-left'>
              <th className='pr-5 hidden md:table-cell text-left'>Article ID</th>
              <th className='pr-5 text-left'>Title</th>
              <th className='pr-5 text-left'>Price</th>
              <th className='pr-5 text-left'>Unit</th>
              <th className='pr-5 hidden md:table-cell  text-left'>Stock</th>
              <th className='pr-5 hidden md:table-cell  text-left'>Description</th>
            </tr>
          </thead>
          <tbody>
            {finArt && finArt.map((article, index) => (
              <tr key={index}>
                <td className='py-[6px] md:max-w-[15vw]  hidden md:table-cell  px-2 text-center border truncate border-cyan-900/30 rounded-full'>{article.article_id}</td>
                <td className='py-[6px] md:max-w-[15vw] px-2 text-center border truncate border-cyan-900/30 rounded-full'>{article.title}</td>
                <td className='py-[6px] md:max-w-[15vw] px-2 text-center border truncate border-cyan-900/30 rounded-full'>{article.price}</td>
                <td className='py-[6px] md:max-w-[15vw] px-2 text-center border truncate border-cyan-900/30 rounded-full'>{article.unit}</td>
                <td className='py-[6px] md:max-w-[15vw] hidden md:table-cell  px-2 text-center border truncate border-cyan-900/30 rounded-full'>{article.stock}</td>
                <td className='py-[6px] md:max-w-[15vw] hidden md:table-cell  px-2 text-left border truncate border-cyan-900/30 rounded-full'>{article.descr}</td>
              </tr>
            ))}
          </tbody>
        </table>
        }
        </div>
      }
    </div>
  )
}

export default SearchArt
