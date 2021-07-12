import React, { useEffect, useState } from 'react'
import { getGifs } from '../helpers/getGifs';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({propCategory}) => {

    const {data:images, loading} = useFetchGifs(propCategory);
    
    return (
        <div className="card-grid">
            <h3>{propCategory}</h3>

            {
                loading && <p>Loading...</p>
            }
            <ol>
                { 
                    images.map((image) => (
                        <GifGridItem 
                            key={image.id}
                            {...image}
                        />
                    ))
                
                }
            </ol>
        </div>
    )
}
