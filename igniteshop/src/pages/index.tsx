import { HomeContainer, ProductShop} from '../styles/pages/home'
import Image from 'next/image'

import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'

import TShirt1 from '../assets/1.png'
import TShirt2 from '../assets/2.png'
import TShirt3 from '../assets/3.png'

export default function Home() {
    const [sliderRef] = useKeenSlider({
        slides: {
            perView: 3,
            spacing: 48
        }
    })
 return ( 
    <HomeContainer ref={sliderRef} className='keen-slider'>
        <ProductShop className='keen-slider__slide'>
            <Image src={TShirt1} width={520} height={480} alt=''/>
            <footer>
                <strong>Camiseta X</strong>
                <span>R$ 79,80</span>
            </footer>
        </ProductShop>
        <ProductShop className='keen-slider__slide'>
            <Image src={TShirt2} width={520} height={480} alt=''/>
            <footer>
                <strong>Camiseta X</strong>
                <span>R$ 79,80</span>
            </footer>
        </ProductShop>
        <ProductShop className='keen-slider__slide'>
            <Image src={TShirt3} width={520} height={480} alt=''/>
            <footer>
                <strong>Camiseta X</strong>
                <span>R$ 79,80</span>
            </footer>
        </ProductShop>
        <ProductShop className='keen-slider__slide'>
            <Image src={TShirt2} width={520} height={480} alt=''/>
            <footer>
                <strong>Camiseta X</strong>
                <span>R$ 79,80</span>
            </footer>
        </ProductShop>
    </HomeContainer>
 )
}