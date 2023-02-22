import React, { useEffect, useState } from 'react'
import Notice from '../components/Notice'
import { useForm } from 'react-hook-form'
import '../css/news.css'
import { callWeatherAPI } from '../helpers/news'


const NewsPageScreen = () => {
    
    const {register,handleSubmit,watch,formState:{errors}}=useForm()
    
    const [news, setNews] = useState([])
    
    const newsSelect=(data)=>{
        console.log(data)
        callWeatherAPI(data.category,data.country).then(r=>{
            setNews(r.articles)
        })
    }
    
    useEffect(() => {
        callWeatherAPI('general','ar').then(r=>{
            console.log(r)
            setNews(r.articles)
        })
    }, [])

  return (
    <>
    <header className='p-5'>
        <h1>News Page!</h1>
    </header>
    <main className='news-bg'>
        <form className="container my-3" onSubmit={handleSubmit(newsSelect)}>
            <div className='row'>
                <div className='col col-md-6'>
                    <label htmlFor="">Pick a category:</label>
                    <select className="form-select" defaultValue="general" {...register('category')} aria-label="Default select example">
                        <option value="business">Business</option>
                        <option value="entertainment">Entertainment</option>
                        <option value="science">Science</option>
                        <option value="sports">Sports</option>
                        <option value="technology">Technology</option>
                        <option value="general">General</option>
                    </select>
                </div>
                <div className='col col-md-6'>
                <label htmlFor="">Pick a country:</label>
                    <select className="form-select" defaultValue="ar" {...register('country')} aria-label="Default select example">
                        <option value="ar">Argentina</option>
                        <option value="us">United States</option>
                        <option value="ve">Venezuela</option>
                        <option value="mx">Mexico</option>
                        <option value="br">Brazil</option>
                    </select>
                </div>
                    <button className='btn btn-info my-3'>Search</button>
            </div>
        </form>
        <section className='container'>
            <div className="row">
            {
                news.map((n,index)=><div className='col-12 col-md-6 col-lg-4 mb-3' key={index}><Notice sourceName={n.source?.name} title={n.title} description={n.content} image={n.urlToImage} link={n.url} key={index}/></div>)
            }
            </div>
        </section>
    </main>
    </>
  )
}

export default NewsPageScreen