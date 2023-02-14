import { BagButton, HomeContainer, ProductInfo, ProductShop } from '../styles/pages/home'
import Image from 'next/image'

import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'

import { stripe } from '../lib/stripe'

import { GetStaticProps } from 'next'

import { useContext } from "react";

import Stripe from 'stripe'
import Link from 'next/link'
import Head from 'next/head'

import BagIcon from '../assets/bagIcon.svg'
import { CartContext, Product } from '@/context/CartContext'

interface HomeProps {
    products: {
        id: string
        name: string
        imgURL: string
        price: string
    }[]
}

interface NewProductProps {
    id: string
    name: string
    imgURL: string
    price: string
}

export default function Home({ products }: HomeProps) {
    const [sliderRef] = useKeenSlider({
        slides: {
            perView: 3,
            spacing: 48
        }
    })

    const { setCartItemsMOCK } = useContext(CartContext)

    function callSetCartItemsMock({id , name, price, imgURL}: Product ) {
        const NewProduct = {
            id, name, price, imgURL
        }
        setCartItemsMOCK(NewProduct)
    }

    return (
        <>
            <Head>
                <title>Home | Ignite Shop</title>
            </Head>

            <HomeContainer ref={sliderRef} className='keen-slider'>
                {
                    products.map(product => (
                        <Link key={product.id} href={`/product/${product.id}`} prefetch={false}>
                            <ProductShop className='keen-slider__slide'>
                                <Image src={product.imgURL} width={520} height={480} alt='' />
                                <footer>
                                    <ProductInfo>
                                        <strong>{product.name}</strong>
                                        <span>{product.price}</span>
                                    </ProductInfo>

                                    <BagButton onClick={() => callSetCartItemsMock({ id: product.id, name: product.name, price: product.price, imgURL: product.imgURL })}>
                                        <Image src={BagIcon} width={24} height={24} alt=""/>
                                    </BagButton>
                                </footer>
                            </ProductShop>
                        </Link>
                    ))
                }
            </HomeContainer>
        </>
    )
}

export const getStaticProps: GetStaticProps = async () => {
    const response = await stripe.products.list({
        expand: ['data.default_price']
    })

    const products = response.data.map(product => {
        const price = product.default_price as Stripe.Price
        return {
            id: product.id,
            name: product.name,
            imgURL: product.images[0],
            price: new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL',
            }).format(0.01 * price.unit_amount!)
        }
    })

    return {
        props: {
            products
        }
    }
}