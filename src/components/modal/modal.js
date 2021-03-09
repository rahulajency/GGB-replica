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

  inputHandler = (value,item) => {
    this.setState({
      [item]:value,
      [item+'Err']:''
    })
  }

  btnHandler = async () => {
    let { toggleModal , sidePanelHandler } = this.props;
    let { size , day , slot } = this.state;

    if(day == ''){
      this.setState({
        dayErr:'Please select a day'
      })
    }else if(slot == ''){
      this.setState({
        slotErr:'Please select a slot'
      })
    }else{
      await toggleModal();
      sidePanelHandler();
    }
  }

  render() {
    let { toggleModal , sidePanelHandler } = this.props;
    let { imageData , sizeErr , dayErr , slotErr } = this.state;
    let { name , price , size , og_price , available_on } =  imageData;
    let regPrice = ( parseInt(price) - ( parseInt(price) * 0.1 ) );
    let regOGPrice = ( parseInt(og_price) - ( parseInt(og_price) * 0.1 ) );

    console.log('Size = '+size);
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
            <div className='err' >{sizeErr}</div>
            <div className='size-container'>
              <div className='size-item' >
                <div className='size-item-input' ><input type='radio' className='size-radio' name='bowl' id='regular' value='regular' onChange={(event)=>this.inputHandler(event.target.value,'size')} checked={true} /><label htmlFor='regular' onClick={()=> this.inputHandler('regular','size') } className={ size === 'regular' ? 'green' : '' } >{config.MODAL.REGULAR_BOWL}</label></div>
                <div className='size-price' >{config.SHARED_ITEMS.RUPEE}{regPrice}<span className='og' >{config.SHARED_ITEMS.RUPEE}{regOGPrice}</span></div>
              </div>
              <div className='size-item' >
                <div className='size-item-input'><input type='radio' className='size-radio' name='bowl' id='super-bowl' value='super-bowl' onChange={(event)=>this.inputHandler(event.target.value,'size')} /><label htmlFor='super-bowl' onClick={()=> this.inputHandler('super-bowl','size') }  className={ size === 'super-bowl' ? 'green' : '' }>{config.MODAL.SUPER_BOWL}</label></div>
                <div className='size-price' >{config.SHARED_ITEMS.RUPEE}{price} <span className='og' >{config.SHARED_ITEMS.RUPEE}{og_price}</span></div>
              </div>
            </div>
          </div>
          <div className='modal-delivery'>
            <div className='delivery-item'>
              <div className='txt' >{config.MODAL.SELECT_DELIVERY_DAY} </div>
              <select className='select' onChange={(event)=>this.inputHandler(event.target.value,'day')} >
                <option hidden={true} >{config.MODAL.CHOOSE_DAY}</option>
                {
                  available_on.map((day,index) => {
                    return(
                      <option key={index} value={day} >{day}</option>
                    )
                  })
                }
              </select>
              <div className='err' >{dayErr}</div>
            </div>
            <div className='delivery-item'>
              <div className='txt'>{config.MODAL.SELECT_DELIVERY_SLOT} </div>
              <select className='select' onChange={(event)=>this.inputHandler(event.target.value,'slot')}>
                <option hidden={true} >{config.MODAL.CHOOSE_SLOT}</option>
                <option value={config.MODAL.LUNCH} >{config.MODAL.LUNCH}</option>
                <option value={config.MODAL.DINNER} >{config.MODAL.DINNER}</option>
              </select>
              <div className='err' >{slotErr}</div>
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