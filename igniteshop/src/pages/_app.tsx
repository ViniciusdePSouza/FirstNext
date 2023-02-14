import { globalStyles } from "@/styles/global"
import { BagButton, Cart, CloseButton, Container, Header, InfoDiv } from "@/styles/pages/app"
import { AppProps } from "next/app"
import Image from "next/image"
import bagIcon from '../assets/bagIcon.svg'

import logo from '../assets/logo.svg'
import closeIcon from '../assets/closeIcon.svg'

import { CartProvider } from "use-shopping-cart"
import BagItem from "@/components/item"
import { useState } from "react"
globalStyles()
export default function App({ Component, pageProps }: AppProps) {
    const [showCart, setShowCart] = useState(false)

    function handleShowCart() {
        setShowCart(state => state = !state)
    }

    return (
        <CartProvider
        shouldPersist={false}
        mode="payment"
        cartMode="client-only"
        stripe={process.env.STRIPE_SECRET_KEY!}
        successUrl="http://localhost:3000/success"
        cancelUrl="http://localhost:3000/"
        currency="BRL"
        allowedCountries={['US', 'BR', 'CA']}
        billingAddressCollection={true}
        >
            <Container>
                <Header>
                    <Image src={logo} alt="" />
                    <BagButton onClick={handleShowCart}>
                        <Image src={bagIcon} width={24} height={24} alt="" ></Image>
                    </BagButton>

                    {showCart &&
                        <Cart>
                            <CloseButton onClick={handleShowCart}>
                                <Image src={closeIcon} width={24} height={24} alt='fechar carrinho'></Image>
                            </CloseButton>
                            <h1>Sacola de Compras</h1>

                            <BagItem></BagItem>
                            <BagItem></BagItem>
                            <BagItem></BagItem>

                            <footer>
                                <InfoDiv>
                                    <span>Quantidade</span>
                                    <span>3 items</span>
                                </InfoDiv>

                                <InfoDiv>
                                    <strong>Valor total</strong>
                                    <strong>R$ 270,00</strong>
                                </InfoDiv>

                                <button>Finalizar Compra</button>
                            </footer>
                        </Cart>
                    }
                </Header>

                <Component {...pageProps} />
            </Container>
        </CartProvider>
    )
}

