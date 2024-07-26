/* eslint-disable react/prop-types */
import { useState } from 'react';
import './App.css'
import { cvInfo } from './data';
import GenerateCV from './GenerateCV';

function generateCV(e) {
  e.preventDefault();
  return false;
}

function GeneralFormSection({generalInfo, onChange}) {
  const {name, email, phoneNumber, location} = generalInfo;

  return (
    <>
      <label htmlFor='name'>Name: </label>
      <input 
        type="text" 
        id="name"
        required 
        value={name} 
        onChange={onChange}
        data-type='name'
      />

      <label htmlFor="email">Email: </label>
      <input 
        type="email" 
        id="email" 
        value={email}
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
    </>
  )
}

function EducationForm({educationInfo, onInfoChange}) {
  const {id, schoolName, degree, fieldOfStudy, dateStart, dateEnd} = educationInfo;

  return (
    <div className='education-form'>
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
    </div>
  )
}

function EducationFormSection({educationInfos, onInfoChange}) {

  return (
    <div className='education-list'>
      {
        educationInfos.map((educationInfo) => {
          return <EducationForm 
            key={educationInfo.id}
            educationInfo={educationInfo}
            onInfoChange={onInfoChange}
          />
        })
      }
    </div>
  )
}

function PracticalForm({companyName, title, responsibility, dateStart, dateEnd}) {
  return (
    <div className='practical-form'>
      <label htmlFor="company-name">Company name: </label>
      <input type="text" id="company-name" required value={companyName}/>

      <label htmlFor="position-title">Position title: </label>
      <input type="text" id="position-title" value={title} />

      <label htmlFor="main-responsibilities">Main responsibilities: </label>
      <textarea name="main-responsibilities" id="main-responsibilities" value={responsibility}></textarea>

      <label htmlFor="date-start">Date start:</label>
      <input type="date" id="date-start" value={dateStart} />

      <label htmlFor="date-end">Date end:</label>
      <input type="date" id="date-end" value={dateEnd} />
    </div>
  )
}

function PracticalFormSection({practicalInfo}) {
  return (
    <div className='practical-list'>
      {
        practicalInfo.map((info) => {
          return (
            <PracticalForm 
              key={info.id}
              {...info}
            />
          )
        })
      }
    </div>
  )
}

function App() {
  // const [info, setInfo] = useState(cvInfo);
  const [generalInfo, setGeneralInfo] = useState(cvInfo.generalInfo);
  const [educationInfos, setEducationInfos] = useState(cvInfo.educationInfos);
  const [practicalInfo, setPracticalInfo] = useState(cvInfo.practicalInfo);

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
          />
        </fieldset>

        <fieldset className="practical-exp">
          <legend>Practical Experience</legend>
          <PracticalFormSection 
            practicalInfo={practicalInfo}
          />
        </fieldset>

        <button type="submit" >Generate</button>
      </form>

      <div className="result">
        <GenerateCV 
          cvInfo={{generalInfo, educationInfos, practicalInfo}}
        />
      </div>
    </main>
  )
}

export default App
