import { Container, ImageContainer, ProductInfo } from "@/styles/pages/item";
import Image from "next/image";

import tshirt from '../assets/1.png'

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

export default function BagItem() {
    return (
        <Container>
            <ImageContainer>
                <Image src={tshirt} alt="" width={94} height={94} />
            </ImageContainer>

            <ProductInfo>
                <span>Camisa 1</span>
                <strong>R$ 79,90</strong>
                <button>Remover</button>
            </ProductInfo>
        </Container>
    )
}