import { Link } from 'react-router-dom'
import img1 from '../../../assets/1.jpg'
import img2 from '../../../assets/2.jpg'
import img3 from '../../../assets/3.1.jpg'
import img4 from '../../../assets/4.jpg'
import img5 from '../../../assets/5.jpg'
import img6 from '../../../assets/6.webp'

const Banner = () => {
    return (
        <div className="carousel w-full h-[600px] py-12">
            <div id="slide1" className="carousel-item relative w-full rounded-lg ">
                <img src={img1} className="w-full" />
                <div className="absolute h-full top-0 left-0 bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
                <div className='text-white font-bold w-[480px] space-y-7 pt-[99px] pl-[100px]'>
                    <h2 className='text-5xl font-bold'>THE GLOBAL FOOD DONATION</h2>
                    <p> A simple act of kindness that nourishes both the hungry and the heart. Share a meal, share love.</p>
                    <div >
                    <button className="btn btn-primary mr-5">Discover More</button>
                   <Link to={'/login'}> <button className="btn btn-secondary">Login</button></Link>
                    </div>
                   </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 text-orange-600">
                    <a href="#slide6" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
            <img src={img2} className="w-full" />
                <div className="absolute h-full top-0 left-0 bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
                <div className='text-white font-bold w-[480px] space-y-7 pt-[99px] pl-[100px]'>
                    <h2 className='text-5xl'>THE GLOBAL FOOD DONATION</h2>
                    <p> A simple act of kindness that nourishes both the hungry and the heart. Share a meal, share love.</p>
                    <div >
                    <button className="btn btn-primary mr-5">Discover More</button>
                   <Link to={'/login'}> <button className="btn btn-secondary">Login</button></Link>
                    </div>
                   </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide1" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
            <img src={img3} className="w-full" />
                <div className="absolute h-full top-0 left-0 bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
                <div className='text-white font-bold w-[480px] space-y-7 pt-[99px] pl-[100px]'>
                    <h2 className='text-5xl'>THE GLOBAL FOOD DONATION</h2>
                    <p> A simple act of kindness that nourishes both the hungry and the heart. Share a meal, share love.</p>
                    <div >
                    <button className="btn btn-primary mr-5">Discover More</button>
                   <Link to={'/login'}> <button className="btn btn-secondary">Login</button></Link>
                    </div>
                   </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide2" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
            <img src={img4} className="w-full" />
                <div className="absolute h-full top-0 left-0 bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
                <div className='text-white font-bold w-[480px] space-y-7 pt-[99px] pl-[100px]'>
                    <h2 className='text-5xl'>THE GLOBAL FOOD DONATION</h2>
                    <p> A simple act of kindness that nourishes both the hungry and the heart. Share a meal, share love.</p>
                    <div >
                    <button className="btn btn-primary mr-5">Discover More</button>
                   <Link to={'/login'}> <button className="btn btn-secondary">Login</button></Link>
                    </div>
                   </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide3" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide5" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide5" className="carousel-item relative w-full">
            <img src={img5} className="w-full" />
                <div className="absolute h-full top-0 left-0 bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
                <div className='text-white font-bold w-[480px] space-y-7 pt-[99px] pl-[100px]'>
                    <h2 className='text-5xl'>THE GLOBAL FOOD DONATION</h2>
                    <p> A simple act of kindness that nourishes both the hungry and the heart. Share a meal, share love.</p>
                    <div >
                    <button className="btn btn-primary mr-5">Discover More</button>
                   <Link to={'/login'}> <button className="btn btn-secondary">Login</button></Link>
                    </div>
                   </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide4" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide6" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide6" className="carousel-item relative w-full">
            <img src={img6} className="w-full" />
                <div className="absolute h-full top-0 left-0 bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
                <div className='text-white font-bold w-[480px] space-y-7 pt-[99px] pl-[100px]'>
                    <h2 className='text-5xl'>THE GLOBAL FOOD DONATION</h2>
                    <p> A simple act of kindness that nourishes both the hungry and the heart. Share a meal, share love.</p>
                    <div >
                    <button className="btn btn-primary mr-5">Discover More</button>
                   <Link to={'/login'}> <button className="btn btn-secondary">Login</button></Link>
                    </div>
                   </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide5" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
           
        </div>
    );
};

export default Banner;