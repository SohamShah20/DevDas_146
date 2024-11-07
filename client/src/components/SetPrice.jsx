import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SetPrice = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        type: "",
        price: 0
      });
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    function changeHandler(event){
        setFormData(
          (prev) => (
            {
              ...prev,
              [event.target.name]: event.target.value,
            }
        ));
    }

    const submitHandler = async(event)=>{
        event.preventDefault();
        try{
            setLoading(true);

            const res = await fetch('http://localhost:3001/api/admin/setprice', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                  
                  
                },
                credentials: 'include',
                body: JSON.stringify(formData),
              });
              const data = await res.json();
              console.log(data);
              if (data.success === false) {
             setLoading(false);
             setError(data.message);
             return;
           }
            setLoading(false);
            setError(null);
      
 
             navigate('/');
        } catch (error) {
            setLoading(false);
            setError(error.message);
          }
    }

  return (
    <div>
        <form onSubmit={submitHandler}>
            <label>Scrap Type</label>
            <input type="String" onChange={changeHandler} name="type" required value={formData.type}/>
            <label>Scrap Price</label>
            <input type="number" onChange={changeHandler} name="price" required value={formData.price}/>
            <button>Submit</button>
        </form>
    </div>
  )
}

export default SetPrice;