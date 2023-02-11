import { ImageContainer, ProductContainer, ProductDetails } from "@/styles/pages/product";
import { GetStaticPaths, GetStaticProps } from "next";
import Image from 'next/image'

import { stripe } from '../../lib/stripe'
import Stripe from 'stripe'
import { useRouter } from "next/router";

interface ProductProps {
    product: {
        id: string
        name: string
        imgURL: string
        price: string
        description: string
        defaultPriceId: string
    }
}

export default function DetailedProduct({ product }: ProductProps) {
    const { isFallback } = useRouter()

    function handleBuyProduct(){
        console.log(product.defaultPriceId)
    }

    if (isFallback) {
        return <h1>LOADING...</h1>
    }

    return (
        <ProductContainer>
            <ImageContainer>
                <Image src={product.imgURL} alt="" width={520} height={480} />
            </ImageContainer>

            <ProductDetails>
                <h1>{product.name}</h1>
                <span>{product.price}</span>

                <p>{product.description}</p>

                <button onClick={handleBuyProduct}>Comprar Agora</button>
            </ProductDetails>
        </ProductContainer>
    )
}

export const getStaticPaths: GetStaticPaths  = async () => {
    return {
        paths: [
            { params: { id: 'prod_NHH36ZdFks0aSL' } },
        ], 
        fallback: true
    }
}

export const getStaticProps: GetStaticProps<any, { id: string }> = async ({ params }) => {
    const productId = params!.id

    const product = await stripe.products.retrieve(productId, {
        expand: ['default_price']
      })


    const price = product.default_price as Stripe.Price

    return {
        props: {
            product: {
                id: product.id,
                name: product.name,
                imgURL: product.images[0],
                price: new Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                }).format(0.01 * price.unit_amount!),
                description: product.description,
                defaultPriceId: price.id
            },
        },
        revalidate: 60 * 60 * 1
    }
}