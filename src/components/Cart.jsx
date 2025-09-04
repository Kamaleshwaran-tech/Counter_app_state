import React, { useState } from 'react'
import Card from 'react-bootstrap/Card';
import product from '../images/product_logo.jpg';
import Button from 'react-bootstrap/Button';
const Cart = () => {

    const [count,setCount] = useState(0);

  return (
    <div >

        <Card style={{backgroundColor:'beige',width: '80rem',alignItems:'center'}}>
      
                <Card.Body >
                    <div style={{  display:'flex',gap:'15px'}}>
                        <Card.Img  style={{padding:'10px'}} variant="top" src={product} />
                    
                    <Card.Text >
                        <h1>MEMORABLE Mouse Pad, Printed Gaming Waterproof Anti Skid Rubber Base</h1>
                    <div style={{opacity:'50%',paddingTop:'50px'}}>
                        Seller:ExclusiveStoreFont <br />
                    <p style={{textDecorationLine:'line-through'}}>₹299</p>
                    </div>
                    <h4>₹139</h4>
                    </Card.Text>
                        </div> <br />
                    
                    <div style={{display:'flex', gap:'10px',marginLeft:'35px'}}>
                    <button style={{borderRadius:'10px'}} onClick={() =>{ if(count>0){ setCount (count- 1) }}} >-</button>

                    <form action="">
                        <input style={{width:'25px'}} type="number" value={count} />
                    </form>
                    
                    <button style={{borderRadius:'10px'}} onClick={()=> setCount(count+1) }>+</button>
                </div>
                <div style={{textAlign:'end',padding:'15px'}}><Button style={{width:'150px',height:'35px'}} variant='success'>Place Order</Button></div>

                </Card.Body>
                </Card>
   
    </div>
  )
}

export default Cart