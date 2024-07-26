/* eslint-disable react/prop-types */
import { useState } from 'react';
import './App.css'
import { cvInfo } from './data';
import GenerateCV from './GenerateCV';
import { v4 as uuidv4 } from 'uuid';

function generateCV(e) {
  e.preventDefault();
  return false;
}

function GeneralFormSection({generalInfo, onChange}) {
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

function EducationFormSection({educationInfos, onInfoChange, addNewInfo, removeInfo}) {
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

function PracticalFormSection({practicalInfos, onInfoChange, addNewInfo, removeInfo}) {
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

function App() {
  const [generalInfo, setGeneralInfo] = useState(cvInfo.generalInfo);
  const [educationInfos, setEducationInfos] = useState(cvInfo.educationInfos);
  const [practicalInfos, setPracticalInfos] = useState(cvInfo.practicalInfos);

  function handleGeneralInfoChange(e) {
    setGeneralInfo({...generalInfo, [e.target.dataset.type]: e.target.value});
  }

  function handleEducationInfosChange(e) {
    setEducationInfos(educationInfos.map(info => {
      if (info.id === e.target.dataset.key) {
        info[e.target.dataset.type] = e.target.value;
      }
      return info;
    }));
  }

  function addEducationInfo() {
    setEducationInfos([{
      id: uuidv4(),
      schoolName: '',
      degree: '',
      fieldOfStudy: '',
      dateStart: '',
      dateEnd: '',
    }, ...educationInfos]);
  }

  function removeEducationInfo(e) {
    setEducationInfos(educationInfos.filter(info => {
      return info.id !== e.target.dataset.key;
    }));
  }

  function handlePracticalInfosChange(e) {
    setPracticalInfos(practicalInfos.map(info => {
      if (info.id === e.target.dataset.key) {
        info[e.target.dataset.type] = e.target.value;
      }
      return info;
    }));
  }

  function addPracticalInfo() {
    setPracticalInfos([{
      id: uuidv4(),
      companyName: '',
      positionTitle: '',
      responsibility: '',
      dateStart: '',
      dateEnd: '',
    }, ...practicalInfos]);
  }

  function removePracticalInfo(e) {
    setPracticalInfos(practicalInfos.filter(info => {
      return info.id !== e.target.dataset.key;
    }));
  }

  return (
    <main className='main-container'>
      <form onSubmit={generateCV}>
        <fieldset className="general-info">
          <legend>General Information</legend>
          <GeneralFormSection 
            generalInfo={generalInfo}
            onChange={handleGeneralInfoChange}
          />
        </fieldset>

        <fieldset className="education-exp">
          <legend>Education Experience</legend>
          <EducationFormSection 
            educationInfos={educationInfos}
            onInfoChange={handleEducationInfosChange}
            addNewInfo={addEducationInfo}
            removeInfo={removeEducationInfo}
          />
        </fieldset>

        <fieldset className="practical-exp">
          <legend>Practical Experience</legend>
          <PracticalFormSection 
            practicalInfos={practicalInfos}
            onInfoChange={handlePracticalInfosChange}
            addNewInfo={addPracticalInfo}
            removeInfo={removePracticalInfo}
          />
        </fieldset>
      </form>

      <div className="result">
        <GenerateCV 
          cvInfo={{generalInfo, educationInfos, practicalInfos}}
        />
      </div>
    </main>
  )
}

export default App
