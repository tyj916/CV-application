/* eslint-disable react/prop-types */
function PracticalForm({practicalInfo, onInfoChange, removeInfo}) {
  const {id, companyName, positionTitle, responsibility, dateStart, dateEnd} = practicalInfo;
  
  return (
    <div className='practical-form info-form'>
      <label htmlFor={"company-name-" + id}>Company name: </label>
      <input 
        type="text" 
        id={"company-name-" + id} 
        required 
        value={companyName}
        onChange={onInfoChange}
        data-key={id}
        data-type='companyName'
      />

      <label htmlFor={"position-title-" + id}>Position title: </label>
      <input 
        type="text" 
        id={"position-title-" + id} 
        value={positionTitle} 
        onChange={onInfoChange}
        data-key={id}
        data-type='positionTitle'  
      />

      <label htmlFor={"responsibility-" + id}>Main responsibilities: </label>
      <textarea 
        id={"responsibility-" + id} 
        value={responsibility}
        onChange={onInfoChange}
        data-key={id}
        data-type='responsibility'  
      ></textarea>

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

export default function PracticalFormSection({practicalInfos, onInfoChange, addNewInfo, removeInfo}) {
  return (
    <>
      <button type='button' onClick={addNewInfo}>Add New</button>
      <div className='practical-list info-list'>
        {
          practicalInfos.map((practicalInfo) => {
            return (
              <PracticalForm 
                key={practicalInfo.id}
                practicalInfo={practicalInfo}
                onInfoChange={onInfoChange}
                removeInfo={removeInfo}
              />
            )
          })
        }
      </div>
    </>
  )
}