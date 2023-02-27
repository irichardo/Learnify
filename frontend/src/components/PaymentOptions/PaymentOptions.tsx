import './PaymentOptions.css'
import {useState } from "react"
import { useAuth0 } from "@auth0/auth0-react"
import Axios from 'axios'

interface Payment{
  Amount : number
}


const PaymentOptions = () =>{


    const {user} = useAuth0();
    
    // console.log(user);
    
    const data = user?user.email:null
    
    const [payAmount, setPayment] = useState<Payment>({
        Amount:0
    })
 


    const handlerValue = (event:React.MouseEvent<HTMLButtonElement>) =>{
      let Amount = event.currentTarget.value;
      setPayment({Amount:Number(Amount)})
    }



    const handlerPayment = async()=>{
        await Axios.post('http://localhost:3030/getid',{ id:data})
        const res = await Axios.post('http://localhost:3030/create-payment', payAmount);
        
        window.open(res.data,'Ventana de verificacion');
    }
    

    return(
        <div className='paymentOptions'>  
    <div>
    <label>
    <button className='AmountTokens' value={'5'} onClick={(value)=>handlerValue(value)}> 200 tokens</button> 
    </label><br/>
    <label>
    <button className='AmountTokens' value={'10'} onClick={(value)=>handlerValue(value)}>500 tokens </button>
    </label><br/>
    <label>
    <button className='AmountTokens' value={'20'} onClick={(value)=>handlerValue(value)}>1200 tokens</button>
    </label><br/>
    <button className='PayButton' onClick={handlerPayment} >pagar</button>
    
  </div> 
    </div>
    )
}


export default PaymentOptions;