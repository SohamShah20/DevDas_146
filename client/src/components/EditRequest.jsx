import React, { useEffect, useState } from 'react'

const EditRequest = (props) => {
    const req = props.req;
    const [formData, setFormData] = useState({});

  return (
    <div>
        <p>Hello</p>
        {/*<form onSubmit={editHandler}>
            <label>Date</label>
            <input
            type="date"
            name="date"
            required
            defaultValue={req.date}
            onChange={changeHandler} />
        </form>*/}
    </div>
  )
}

export default EditRequest;