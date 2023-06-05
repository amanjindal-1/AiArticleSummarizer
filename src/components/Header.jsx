import { logo } from '../assets';

export default function Header() {
    return (
        <header className='w-full flex justify-center items-center flex-col'>
            <nav className='flex justify-between w-full pt-3 mb-10 items-center'>
                <img src={logo} alt='logo' className='w-52 object-contain' />
                <button
                    type='button'
                    onClick={() => window.open('https://github.com/amanjindal-1/AiArticleSummarizer')}
                    className='black_btn'
                >GitHub</button>
            </nav>
            <h1 className='head_text'>
                Summarize Articles using <br className='max-md:hidden' />
                <span className='orange_gradient'>OpenAI GPT-4</span>
            </h1>
            <h2 className='desc'>
                Experience the ease of reading with BriefMaster, an open-source article summarizer that effortlessly condenses lengthy articles into clear and concise summaries.
            </h2>
        </header>
    )
}
