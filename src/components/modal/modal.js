// @flow
import * as React from 'react';
import './modal.scss';
import Days, { days } from '../../screens/home/home';
import config from '../../assets/config/config';

export default class modal extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      imageData:this.props.imageData,
      size:'',
      day:'',
      slot:'',
      sizeErr:'',
      dayErr:'',
      slotErr:''
    }
  }

  inputHandler = (event,item) => {
    this.setState({
      [item]:event.target.value
    })
  }

  btnHandler = async () => {
    let { toggleModal , sidePanelHandler } = this.props;
    let { size , day , slot } = this.state;

    if( size != '' && day != '' && slot !='' ){
      await toggleModal();
      sidePanelHandler();
    }else{
      console.log('Invalid');
    }
  }

  render() {
    let { toggleModal , sidePanelHandler } = this.props;
    let { imageData , sizeErr , dayErr , slotErr } = this.state;
    let { name , price , og_price , available_on } =  imageData;
    let regPrice = ( parseInt(price) - ( parseInt(price) * 0.1 ) );
    let regOGPrice = ( parseInt(og_price) - ( parseInt(og_price) * 0.1 ) );

    return (
      <div className='modal-wrapper' >
        <div className='modal'>
          <div className='modal-header-container'>
              <div className='modal-header' >{config.MODAL.TITLE}</div>
              <div className='close-modal'>
                <button className='close-btn' onClick={()=>toggleModal()} >X</button>
              </div>
          </div>
          <div className='modal-item'>
            <div className='item-name bold' >{name}</div>
            <div className='item-category' >{config.SHARED_ITEMS.VEG}</div>
          </div>
          <div className='modal-size'>
            <div className='title' >{config.MODAL.SELECT_SIZE}</div>
            <div>{sizeErr}</div>
            <div className='size-container'>
              <div className='size-item' >
                <div className='size-item-input' ><input type='radio' className='size-radio' name='bowl' value='regular' onChange={(event)=>this.inputHandler(event,'size')} /><div>{config.MODAL.REGULAR_BOWL}</div></div>
                <div className='size-price' >{config.SHARED_ITEMS.RUPEE}{regPrice}<span className='og' >{config.SHARED_ITEMS.RUPEE}{regOGPrice}</span></div>
              </div>
              <div className='size-item' >
                <div className='size-item-input'><input type='radio' className='size-radio' name='bowl' value='super-bowl' onChange={(event)=>this.inputHandler(event,'size')} /><div>{config.MODAL.SUPER_BOWL}</div></div>
                <div className='size-price' >{config.SHARED_ITEMS.RUPEE}{price} <span className='og' >{config.SHARED_ITEMS.RUPEE}{og_price}</span></div>
              </div>
            </div>
          </div>
          <div className='modal-delivery'>
            <div className='delivery-item'>
              <div className='txt' >{config.MODAL.SELECT_DELIVERY_DAY}</div>
              <select className='select' onChange={(event)=>this.inputHandler(event,'day')} >
                <option>{config.MODAL.CHOOSE_DAY}</option>
                {
                  available_on.map((day,index) => {
                    return(
                      <option key={index} value={day} >{day}</option>
                    )
                  })
                }
              </select>
            </div>
            <div className='delivery-item'>
              <div className='txt'>{config.MODAL.SELECT_DELIVERY_SLOT}</div>
              <select className='select' onChange={(event)=>this.inputHandler(event,'slot')}>
                <option>{config.MODAL.CHOOSE_SLOT}</option>
                <option value={config.MODAL.LUNCH} >{config.MODAL.LUNCH}</option>
                <option value={config.MODAL.DINNER} >{config.MODAL.DINNER}</option>
              </select>
            </div>
          </div>
          <div className='modal-btn'>
            <button className='btn' onClick={()=>this.btnHandler()} ><div>{config.MODAL.BUTTON_TEXT} </div><div><i className="fa fa-arrow-right modal-arrow"></i></div></button>
          </div>
        </div>
      </div>
      
    );
  };
};