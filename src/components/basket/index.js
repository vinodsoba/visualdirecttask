import React from 'react';

export function Basket(props) {
    const {cartItems, onAdd, onRemove} = props;
    return ( 
    <aside className='block col-1'>
        <div>
            {cartItems.length === 0  &&<div class='hide-block'>Cart is Empty</div>  }
        </div>
        {cartItems.map((item) => (
            <div key={item.id} class="row">
                <div className='col-2'>{item.name}</div>
                <div className='col-2'>
                    <button onClick={() => onAdd(item)} className="add">
                        +
                    </button>
                    <button onClick={() => onRemove(item)} className="remove">
                        -
                    </button>
                </div>
                <div className='col-2 text-right'>
                    {item.qty} x {item.price}
                </div>
            </div>
            
        ))}
    </aside> 
    );
}

