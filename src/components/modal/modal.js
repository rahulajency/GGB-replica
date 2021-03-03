// @flow
import * as React from 'react';
import './modal.scss';
import Days from '../../screens/home/home';

export default class modal extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      imageData:this.props.imageData
    }
}

  render() {
    let { toggleModal } = this.props;
    let { imageData } = this.state;
    let { name , price , og_price , available_on } =  imageData;
    let regPrice = ( parseInt(price) - ( parseInt(price) * 0.1 ) );
    let regOGPrice = ( parseInt(og_price) - ( parseInt(og_price) * 0.1 ) );

    console.log(Days);
    return (
      <div className='modal-wrapper' >
        <div className='modal'>
          <div className='modal-header-container'>
              <div className='modal-header' >Choose Your Bowl</div>
              <div className='close-modal'>
                <button className='close-btn' onClick={()=>toggleModal()} >X</button>
              </div>
          </div>
          <div className='modal-item'>
            <div className='item-name bold' >{name}</div>
            <div className='item-category' >Veg</div>
          </div>
          <div className='modal-size'>
            <div className='title' >Select Size</div>
            <div className='size-container'>
              <div className='size-item' >
                <div className='size-item-input' ><input type='radio' className='size-radio' name='size' /><div>Regular Bowl</div></div>
                <div className='size-price' >₹{regPrice}<span className='og' >₹{regOGPrice}</span></div>
              </div>
              <div className='size-item' >
                <div className='size-item-input'><input type='radio' className='size-radio' name='size' /><div>Superbowl</div></div>
                <div className='size-price' >₹{price} <span className='og' >₹{og_price}</span></div>
              </div>
            </div>
          </div>
          <div className='modal-delivery'>
            <div className='delivery-item'>
              <div className='txt' >Select Delivery Day *</div>
              <select className='select' >
                <option>Choose a day</option>
                {
                  available_on.map((day,index) => {
                    return(
                      <option key={index} >{day}</option>
                    )
                  })
                }
              </select>
            </div>
            <div className='delivery-item'>
              <div className='txt'>Select Delivery Slot *</div>
              <select className='select' >
                <option>Choose a slot</option>
                <option>Lunch</option>
                <option>Dinner</option>
              </select>
            </div>
          </div>
          <div className='modal-btn'>
            <button className='btn'><div>Select & Continue </div><div><i className="fa fa-arrow-right modal-arrow"></i></div></button>
          </div>
        </div>
      </div>
      
    );
  };
};