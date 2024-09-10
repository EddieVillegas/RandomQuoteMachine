import { useState, useEffect } from "react"
import { FaTwitter, FaQuoteLeft } from "react-icons/fa";

export default function App() {
  
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');

  const fetchQuote = async () => {
    const URI = 'https://api.quotable.io/random'
    const response = await fetch(URI);
    const { content, author } = await response.json();
    setQuote(content);
    setAuthor(author);
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  const handleNewQuote = () => {
    fetchQuote();
  };

  return (
    <section
      className='d-flex justify-content-center align-items-center vh-100 bg-success'
    >
      <div id='quote-box' className='bg-white shadow rounded text-center p-4 w-50'>
        <h1 id='text' className='fw-bold'>
          <FaQuoteLeft/> {quote}
        </h1>
        <p id='author' className='author text-end'>- {author}</p>
        <div
          role="group" 
          aria-label="social media"
          className="d-flex flex-row justify-content-between" 
        >
            <a href='https://www.twitter.com/intent/tweet' target='_blank'>
              <button id='tweet-quote' className='btn btn-success me-1'><FaTwitter/></button>
            </a>
            <button id='new-quote' className='btn btn-success' onClick={() => handleNewQuote()}>New Quote</button>
        </div>
      </div>
    </section>
  )
}