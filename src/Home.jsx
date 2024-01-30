import React from 'react'
import Itemcard from './Itemcard'
import data from './data'

export default function Home() {

    return (
        <div>
            <h1 className='text-center mt-3'>All Items</h1>
            <section className='py-4 container'>
                <div className='row justify-content-center'>
                    {data.productData.map((item, index) => {
                        return (
                            <Itemcard img={item.img} title={item.title} desc={item.desc} item= {item} price={item.price} key={index} />
                        )
                    })}


                </div>
            </section>
        </div>
    )
}
