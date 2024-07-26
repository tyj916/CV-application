/* eslint-disable react/prop-types */
function EducationForm({educationInfo, onInfoChange, removeInfo}) {
  const {id, schoolName, degree, fieldOfStudy, dateStart, dateEnd} = educationInfo;

  return (
    <div className='education-form info-form'>
      <label htmlFor={"school-name-" + id}>School name: </label>
      <input 
        type="text" 
        id={"school-name-" + id}
        required 
        value={schoolName} 
        onChange={onInfoChange}
        data-key={id}
        data-type='schoolName'
      />

      <label htmlFor={"degree-" + id}>Degree: </label>
      <input 
        type="text" 
        id={"degree-" + id} 
        value={degree} 
        onChange={onInfoChange}
        data-key={id}
        data-type='degree'
      />

      <label htmlFor={"field-of-study-" + id}>Field of study: </label>
      <input 
        type="text" 
        id={"field-of-study-" + id} 
        value={fieldOfStudy} 
        onChange={onInfoChange}
        data-key={id}
        data-type='fieldOfStudy'
      />

      <label htmlFor={"date-start-" + id}>Date start:</label>
      <input 
        type="date" 
        id={"date-start-" + id} 
        value={dateStart} 
        onChange={onInfoChange}
        data-key={id}
        data-type='dateStart'
      />

      <label htmlFor={"date-end-" + id}>Date end:</label>
      <input 
        type="date" 
        id={"date-end-" + id} 
        value={dateEnd} 
        onChange={onInfoChange}
        data-key={id}
        data-type='dateEnd'
      />

      <button 
        type='button' 
        onClick={removeInfo}
        data-key={id}
      >Remove</button>
    </div>
  )
}

export default function EducationFormSection({educationInfos, onInfoChange, addNewInfo, removeInfo}) {
  return (
    <>
      <button type='button' onClick={addNewInfo}>Add New</button>
      <div className='education-list info-list'>
        {
          educationInfos.map((educationInfo) => {
            return <EducationForm 
              key={educationInfo.id}
              educationInfo={educationInfo}
              onInfoChange={onInfoChange}
              removeInfo={removeInfo}
            />
          })
        }
      </div>
    </>
    
  )
}