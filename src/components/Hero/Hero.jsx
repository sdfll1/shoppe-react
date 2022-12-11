import React, { useState } from 'react'
import './Hero.css'
import ear1 from '../assets/img/Zirak01.png'
import ear2 from '../assets/img/zirak02.jpg'
import ear3 from '../assets/img/Zirak03.png'
import ear4 from '../assets/img/Zirak04.png'
import ear5 from '../assets/img/Zirak05.png'
import star from '../assets/img/star.png'

import twit from '../assets/img/twit.png'
import msg from '../assets/img/msg.png'
import like from '../assets/img/like.svg'
import facebook from '../assets/img/facebook.png'
import insta from '../assets/img/insta.png'

function Hero(add) {
    const [count, setCount] = useState(0)

    let arrLocal = []

    function minus(params) {
        setCount(count > 0 ? count - 1 : count)
        window.localStorage.setItem('key', count)
        console.log(window.localStorage.getItem('key'))
    }
    function plus(params) {
        setCount(parseInt(count + 1))
        window.localStorage.setItem('key', count)
        console.log(window.localStorage.getItem('key'))
    }

    function add(params) {
        
    }




    return (
        <div className='hero container'>
            <div className='ears'>
                <ul className='hero_imgList'>
                    <li className='hero_imgList'>
                        <img src={ear1} alt='img' />
                    </li>
                    <li className='hero_imgList'>
                        <img src={ear2} alt='img' />
                    </li>
                    <li className='hero_imgList'>
                        <img src={ear3} alt='img' />
                    </li>
                    <li className='hero_imgList'>
                        <img src={ear4} alt='img' />
                    </li>
                </ul>
                <img src={ear5} alt='img' className='earImg' />
            </div>
            <div className='hero__text'>
                <h1>Lira Earrings</h1>
                <h4>$20,00</h4>
                <nav className='starNav'>
                    <img src={star} alt='img' />
                    <img src={star} alt='img' />
                    <img src={star} alt='img' />
                    <img src={star} alt='img' />
                    <img src={star} alt='img' />

                    <h5 className='customer'>1 customer review</h5>
                </nav>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat, augue a volutpat hendrerit, sapien tortor faucibus augue, a maximus elit ex vitae libero. Sed quis mauris eget arcu facilisis consequat sed eu felis.
                </p>
                <nav className='addToCart'>
                    <nav className='add'>
                        <button className='minus' onClick={() => minus()}>-</button>
                        <h5>{window.localStorage.getItem('key')}</h5>
                        <button className='plus' onClick={() => plus()}>
                            +</button>
                    </nav>
                    <button className='addBtn' onClick={()=> add()}>
                        ADD TO CART
                    </button>
                </nav>

                <nav className='hero__icons'>
                    <img src={like} alt='img' className='like' />

                    <img src={msg} alt='img' />
                    <img src={facebook} alt='img' />
                    <img src={insta} alt='img' />
                    <img src={twit} alt='img' />
                </nav>

                <h1 className='btm'><span>SKU:</span>12</h1>
                <h1 className='btm'><span>Categories:</span>Fashion,Style</h1>
            </div>


        </div>
    )


}

export default Hero