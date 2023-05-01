import React, { useState } from 'react';
import './product.css';
import ProductModal from './ProductModal';
import { FiMoreVertical } from 'react-icons/fi';
import FormEditProduct from '../form/FormEditProduct';

const Product = ({ id, name, description, image_url, price, handleList }) => {

    const [detailsModalActive, setDetailsModalActive] = useState(false);
    const [showOptions, setShowOptions] = useState(false);
    const [editModalActive, setEditModalActive] = useState(false);
    const imageSrc = `http://localhost:3000/assets/${image_url}`;

    const closeDetailsModal = () => {
        setDetailsModalActive(false);
    }

    const closeEditModal = () => {
        setEditModalActive(false);
    }

    const handleDelete = async(id) => {
        const response = await fetch(`http://localhost:3000/products/${id}`, {
            method: 'DELETE' 
        })
        const data = response.json();
        console.log(data);
        handleList(true);
    }

return (
    <>
        <div className='product-container' 
        onClick={() => {detailsModalActive ? setDetailsModalActive(false) : setDetailsModalActive(true)}}
        >


        <FiMoreVertical 
        className='product-options' 
        onClick={(e) => {
            e.stopPropagation();
            showOptions ? setShowOptions(false) : setShowOptions(true)
        }} 
        />
            {
                showOptions && (
                    <div className='options-container'>
                        <ul>
                            <li className='option' 
                            onClick={(e) => {
                                e.stopPropagation();
                                handleDelete(id)}}
                                >
                                Delete
                            </li>
                            <li className='option'
                            onClick={(e) => {
                                e.stopPropagation();
                                setEditModalActive(true);
                                setShowOptions(false)
                            }}
                                >
                                Edit
                            </li>
                        </ul>
                    </div>
                )
            }

            <img className='product-image' src={imageSrc} alt="" />

            <div className='product-details' style={{textAlign:'end'}}>
                <h1 className='product-title'>{name}</h1>
                <h2 className='product-price'>${price}</h2>
            </div>
        </div>

        {detailsModalActive && (
            <ProductModal
            id={id}
            name={name}
            description={description}
            image_url={imageSrc}
            price={price}
            closeModal={closeDetailsModal}
            />
        )}

        {editModalActive && (
            <div className='overlay'>
                <FormEditProduct
                closeModal={closeEditModal}
                id={id}
                name={name}
                description={description}
                image_url={image_url}
                price={price}
                updateList={handleList}
                />
            </div>
        )}
    </>
)
}

export default Product