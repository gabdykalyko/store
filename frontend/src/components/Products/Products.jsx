import ProductsItem from '../ProductsItem/ProductsItem';
import style from './Products.module.scss';
import banner1 from '../../assets/images/banner1.jpeg'

const sheets = {
    title: "Постельное белье",
    products: [
        {
            img: banner1,
            name: "Белье зеленое",
            price: "500"
        },
        {
            img: banner1,
            name: "Белье синее",
            price: "500"
        },
        {
            img: banner1,
            name: "Белье красное",
            price: "500"
        },
        {
            img: banner1,
            name: "Белье желтое",
            price: "500"
        }
    ]
}

const plaid = {
    title: "Пледы",
    products: [
        {
            img: banner1,
            name: "Белье зеленое",
            price: "500"
        },
        {
            img: banner1,
            name: "Белье синее",
            price: "500"
        },
        {
            img: banner1,
            name: "Белье красное",
            price: "500"
        },
        {
            img: banner1,
            name: "Белье желтое",
            price: "500"
        }
    ]
}

const kitchen = {
    title: "Текстиль для кухни",
    products: [
        {
            img: banner1,
            name: "Белье зеленое",
            price: "500"
        },
        {
            img: banner1,
            name: "Белье синее",
            price: "500"
        },
        {
            img: banner1,
            name: "Белье красное",
            price: "500"
        },
        {
            img: banner1,
            name: "Белье желтое",
            price: "500"
        }
    ]
}

const blanket = {
    title: "Одеяла",
    products: [
        {
            img: banner1,
            name: "Белье зеленое",
            price: "500"
        },
        {
            img: banner1,
            name: "Белье синее",
            price: "500"
        },
        {
            img: banner1,
            name: "Белье красное",
            price: "500"
        },
        {
            img: banner1,
            name: "Белье желтое",
            price: "500"
        }
    ]
}

const Products = () => {
    return(
        <div className={style.products}>
            <ProductsItem products={sheets}/>
            <ProductsItem products={plaid} />
            <ProductsItem products={kitchen}/>
            <ProductsItem products={blanket}/> 
        </div>
    )
}

export default Products;