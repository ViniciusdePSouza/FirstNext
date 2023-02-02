import { HomeContainer, ProductShop } from '../styles/pages/home'
import Image from 'next/image'

import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'

import TShirt1 from '../assets/1.png'
import TShirt2 from '../assets/2.png'
import TShirt3 from '../assets/3.png'

import { stripe } from '../lib/stripe'

import { GetServerSideProps } from 'next'

import Stripe from 'stripe'

interface HomeProps {
    products: {
        id: string
        name: string
        imgURL: string
        price: number
    }[]
}

export default function Home({ products }: HomeProps) {
    const [sliderRef] = useKeenSlider({
        slides: {
            perView: 3,
            spacing: 48
        }
    })
    return (
        <HomeContainer ref={sliderRef} className='keen-slider'>
            {
                products.map(product => {
                    return (
                        <ProductShop className='keen-slider__slide' key={product.id}>
                            <Image src={product.imgURL} width={520} height={480} alt='' />
                            <footer>
                                <strong>{product.name}</strong>
                                <span>R$ {product.price/100}</span>
                            </footer>
                        </ProductShop>
                    )
                })
            }
        </HomeContainer>
    )
}

export const getServerSideProps: GetServerSideProps = async () => {
    const response = await stripe.products.list({
        expand: ['data.default_price']
    })

    const products = response.data.map(product => {
        const price = product.default_price as Stripe.Price
        return {
            id: product.id,
            name: product.name,
            imgURL: product.images[0],
            price: price.unit_amount
        }
    })

    return {
        props: {
            products
        }
    }
}