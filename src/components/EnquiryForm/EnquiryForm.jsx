import React from 'react'
import './EnquiryForm.css'

function EnquiryForm() {
  return (
    <div className='enquirycontainer'>
        <form action="" className='enquiryForm'>
            <label>Name*</label>
            <input type="text" placeholder='Enter your name'/>
            <label>Phone Number*</label>
            <input type="text" placeholder='Enter your phone number'/>
            <label>Email*</label>
            <input type="text" placeholder='Enter your E-mail'/>
            <label>Subject</label>
            <input type="text" placeholder='Write us your needs'/>
            <button>FREE CONSULTATION</button>
        </form>
    </div>
  )
}

export default EnquiryForm