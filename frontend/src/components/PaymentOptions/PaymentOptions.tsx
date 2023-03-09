import './PaymentOptions.css'
import {useState } from "react"
import { useAuth0 } from "@auth0/auth0-react"
import Axios from 'axios'
import tokens from '../../assets/icons/tokens-icon.png'

interface Payment{
  Amount : number
}


const PaymentOptions = () =>{


    const {user} = useAuth0();
    
    console.log(user);
    
    
    const [payAmount, setPayment] = useState<Payment>({
      Amount:0
    })
    
    const data ={
      user: user?user.email:null,
      name: user?user.name:null,
      price: payAmount.Amount!==0?payAmount.Amount:null
    }


    const handlerValue = (event:React.MouseEvent<HTMLButtonElement>) =>{
      let Amount = event.currentTarget.value;
      setPayment({Amount:Number(Amount)})
    }



    const handlerPayment = async()=>{
        await Axios.post('http://localhost:3030/getid', { data:data})
        const res = await Axios.post('http://localhost:3030/create-payment', payAmount);
        
        window.open(res.data,'Ventana de verificacion');
    }
    

    return(
        <div className='contenedor'>  
            <div className='grid'>
              <div>
                 <button className='AmountTokens' value={'5'}  onClick={(value)=>handlerValue(value)}><img className='tokens' src={tokens}></img>200 tokens</button>
                 <button className='AmountTokens' value={'10'} onClick={(value)=>handlerValue(value)}><img className='tokens' src={tokens}></img>500 tokens </button>
                 <button className='AmountTokens' value={'20'} onClick={(value)=>handlerValue(value)}><img className='tokens' src={tokens}></img>1200 tokens</button>
              </div>
                 <button className='PayButton' onClick={handlerPayment} >PAGAR</button>
            </div> 
        </div>
    )
}


export default PaymentOptions;