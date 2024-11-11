import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

const GiveFeedback = () => {
  const {req_id} = useParams();
  const navigate = useNavigate();
  const { currentUser } = useSelector((state) => state.user);
  const [dealer, setdealer] = useState({});

  useEffect(() => {
    const fetchdealer = async () => {
        try {
            const res = await fetch(`http://localhost:3001/api/customer/getDealerFromRequest/${req_id}`);
            const data = await res.json();
            setdealer(data);
        } catch (error) {
            console.error('Error fetching requests:', error);
        }
    };

    if (currentUser) {
        fetchdealer();
        console.log('fetch');
    }
  }, [currentUser, req_id]);

  const [formData, setFormData] = useState({
    dealer: "",
    customer: "",
    rating: 0,
    description: ""
  });

  useEffect(()=>{
    if(dealer._id && currentUser._id){
      setFormData((prev)=>({
        ...prev,
        dealer: dealer._id,
        customer: currentUser._id
      }));
    }
  }, [dealer, currentUser])

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
      const res = await fetch(`http://localhost:3001/api/customer/feedback/${req_id}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
         
        },
        credentials: 'include', 
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      console.log(data);
      navigate('/');
    }catch(error){
      console.log(error);
      navigate('/');
    }
  }

  if (!dealer._id || !currentUser._id) {
    return <div>Loading...</div>;
  }

  return (
    <div>
        <form onSubmit={submitHandler}>
          <label>Rating</label>
          <input type="number" min="1" max="10" required name="rating" value={formData.rating} onChange={changeHandler} />
          <label>Enter Your Feedback here:</label>
          <input type="text" name="description" value={formData.description} onChange={changeHandler} />
          <button>Submit</button>
        </form>
    </div>
  )
}

export default GiveFeedback;