import React from 'react'
import { GrFormClose } from 'react-icons/gr';

const ProductModal = ({ id, name, description, image_url, price, closeModal  }) => {
  return (
    <div className='overlay'>
        <div className='product-container modal-container'>

            <img className='product-image' src={image_url} alt="" />

            <div className='details-container'>
                <div className='product-details modal-details'>
                    <h1 className='product-title'>{name}</h1>
                    <h2 className='product-price'>${price}</h2>
                </div>

                <p className='description'>{description}</p>
            </div>

            <GrFormClose color='white' className='close-button' onClick={() => closeModal(false)} />

        </div>
    </div>
  )
}

export default ProductModal