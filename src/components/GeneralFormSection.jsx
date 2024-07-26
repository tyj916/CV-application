/* eslint-disable react/prop-types */
export default function GeneralFormSection({generalInfo, onChange}) {
  const {name, email, phoneNumber, location} = generalInfo;

  return (
    <div className='general-info info-form'>
      <label htmlFor='name'>Name: </label>
      <input 
        type="text" 
        id="name"
        required 
        autoComplete='true'
        value={name} 
        onChange={onChange}
        data-type='name'
      />

      <label htmlFor="email">Email: </label>
      <input 
        type="email" 
        id="email" 
        value={email}
        autoComplete='true'
        onChange={onChange}
        data-type='email'
      />

      <label htmlFor="phone-number">Phone number: </label>
      <input 
        type="tel" 
        id="phone-number" 
        value={phoneNumber}
        onChange={onChange}
        data-type='phoneNumber'
      />

      <label htmlFor="location">Location: </label>
      <input 
        type="text" 
        id="location" 
        value={location}
        onChange={onChange}
        data-type='location'
      />
    </div>
  )
}