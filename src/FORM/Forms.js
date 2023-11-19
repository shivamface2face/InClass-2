// import React,{useState} from 'react'

// const Forms = () => {

 
//     useEffect(() => {
         
//      })




//     const [formData, setformData] = useState({
//         fname: '',
//         lname: '',
//         email: '',
//         country: 'india',
//         stadress: '',
//         city: '',
//         state:'',
//         postcode: '',
//         postal: '',
//         comments: false,
//         candidate: false,
//         offer: false,
//         pushNotifications:""
//    });


//     // mapping of data
//     function changeHandler(event) {
//         // distructore 
//         const { name, value, checked, type } = event.target;
//         // set the data now
//         // ek previous value padi hogi usko phle copy karna h phir value set krna hai
//         setformData((prev) => ({ ...prev, [name]: type==="checkbox"?checked:value }));
//     }


//     function submitHandler(event) {
//         event.preventDefault();
//         console.log(formData);
//    }
    
//     //  value for track the state
//   return (
//       <div className='flex flex-col items-center justify-center'>
//           <form action="" onSubmit={submitHandler}>
//               <label htmlFor="fname">First Name</label>
//               <br />
//               <input type="text"
//                   name="fname"
//                   id="fname"
//                   value={formData.fname}
//                   onChange={changeHandler}   // for change in value of input
//                   placeholder='enter first name'
//                   className='border border-red-300'
//               />

             
//               <br />


// <label htmlFor="lname">Last Name</label>
//                   <br />
            
//               <input type="text"
//                   name="lname"
//                   id="lname"
//                   value={formData.lname}
//                   onChange={changeHandler}   // for change in value of input
//                   placeholder='enter last name'
//                   className='border border-red-300'
//               />
             
//               <br />
          

// <label htmlFor="email">Email</label>
//               <br />
//               <input type="email"
//                   name="email"
//                   id="email"
//                   value={formData.email}
//                   onChange={changeHandler}   // for change in value of input
//                   placeholder='enter email'
//                   className='border border-red-300'
//               />

//               <br />



//               <label htmlFor="country"></label>
//               <select name="country" value={formData.country} id="country" onChange={changeHandler}>
//                   <option value="">India</option>
//                   <option value="">USA</option>
//                   <option value="">UK</option>
//                   <option value="">ISRIAL</option>
//               </select>

//               <br />
          

//           <label htmlFor="stadress">Street Adress</label>
//                         <br />
//                         <input type="text"
//                             name="stadress"
//                             id="stadress"
//                             value={formData.stadress}
//                             onChange={changeHandler}   // for change in value of input
//                             placeholder='enter street adress'
//                             className='border border-red-300'
//                         />
          
//               <br />
              
//               <br />
          

//           <label htmlFor="city">City</label>
//                         <br />
//                         <input type="text"
//                             name="city"
//                             id="city"
//                             value={formData.city}
//                             onChange={changeHandler}   // for change in value of input
//                             placeholder='enter your city'
//                             className='border border-red-300'
//                         />
          
//               <br />
              
//               <br />
          

//           <label htmlFor="state">State</label>
//                         <br />
//                         <input type="text"
//                             name="state"
//                             id="state"
//                             value={formData.state}
//                             onChange={changeHandler}   // for change in value of input
//                             placeholder='enter your state'
//                             className='border border-red-300'
//                         />
          
//               <br />
              
//               <label htmlFor="postal">Postl Code</label>
//                         <br />
//                         <input type="number"
//                             name="postal"
//                             id="postal"
//                             value={formData.postal}
//                             onChange={changeHandler}   // for change in value of input
//                             placeholder='enter your postal code'
//                             className='border border-red-300'
//                         />
          
//               <br />
              



//               <fieldset>
//                   <legend>
//                       By Email
//                   </legend>
//                   <div className='flex flex-row'>
//                   <input
//                       type="checkbox"
//                       name="comments"
//                       id="comments"
//                       checked={formData.comments}
//                       onChange={changeHandler}
//                   />
//                   <div><label htmlFor="comments">
//                       Comments
//                   </label>
//                       <p>get notified by us</p></div>
//                       </div>


//                       <div className='flex flex-row'>
//                   <input
//                       type="checkbox"
//                       name=" candidate"
//                       id=" candidate"
//                       checked={formData.candidate}
//                       onChange={changeHandler}
//                   />
//                   <div><label htmlFor=" candidate">
//                   Candidate
//                   </label>
//                       <p>get notified by us</p></div>
//                       </div>

//                       <div className='flex flex-row'>
//                   <input
//                       type="checkbox"
//                       name=" offer"
//                       id=" offer"
//                       checked={formData.offer}
//                       onChange={changeHandler}
//                   />
//                   <div><label htmlFor=" offer">
//                     Offer
//                   </label>
//                       <p>get notified by us</p></div>
//                   </div>
                  

//               </fieldset>


//               {/*  for radio button */}

//               <fieldset>
//                   <legend>Push Notification</legend>
//                   <p>these are deliverd via SMS to your mobile phone</p>


//                   <input type="radio"
//                       name="pushNotifications"
//                       id="pushNotifications"
//                       value={formData.pushNotifications}
//                       onChange={changeHandler}
                      
//                   />
//                   <label htmlFor="pushNotifications">EveryThing</label>


//                   <br />
//                   <br />
                  
//                   <input type="radio"
//                       name="pushNotifications"
//                       id="pushEmail"
//                       value={formData.pushNotifications}
//                       onChange={changeHandler}
                      
//                   />
//                   <label htmlFor="same as email">Same as Email</label>

//               </fieldset>


//               <button className='text-white bg-blue-600 rounded text-bold'>Save</button>
              

               
//           </form>
//     </div>
//   )
// }

// export default Forms;