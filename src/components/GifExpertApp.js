import React, { useState } from 'react'
import { AddCategory } from './AddCategory';
import { GifGrid } from './GifGrid';

const GifExpertApp = props => {

    let categoriesList = ['Naruto'];
    const [categories, setCategories] = useState(categoriesList)

    return (
        <div>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories}/>
            <hr />

            <ol>
                {
                    categories.map(category =>(
                        <GifGrid 
                            key={category}
                            propCategory={category}
                        />
                    ))
                }
            </ol>
        </div>
    )
}

export default GifExpertApp
