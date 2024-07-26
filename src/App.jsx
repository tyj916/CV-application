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
      />

      <label htmlFor="email">Email: </label>
      <input 
        type="email" 
        id="email" 
        value={email}
        onChange={onChange}
      />

      <label htmlFor="phoneNumber">Phone number: </label>
      <input 
        type="tel" 
        id="phoneNumber" 
        value={phoneNumber}
        onChange={onChange}
      />

      <label htmlFor="location">Location: </label>
      <input 
        type="text" 
        id="location" 
        value={location}
        onChange={onChange}
      />
    </>
  )
}

function EducationForm({schoolName, degree, fieldOfStudy, dateStart, dateEnd}) {
  return (
    <div className='education-form'>
      <label htmlFor="school-name">School name: </label>
      <input type="text" id="school-name" required value={schoolName} />

      <label htmlFor="degree">Degree: </label>
      <input type="text" id="degree" value={degree} />

      <label htmlFor="field-of-study">Field of study: </label>
      <input type="text" id="field-of-study" value={fieldOfStudy} />

      <label htmlFor="date-start">Date start:</label>
      <input type="date" id="date-start" value={dateStart} />

      <label htmlFor="date-end">Date end:</label>
      <input type="date" id="date-end" value={dateEnd} />
    </div>
  )
}

function EducationFormSection({educationInfo}) {

  return (
    <div className='education-list'>
      {
        educationInfo.map((info, index) => {
          return <EducationForm 
            key={index}
            {...info}
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
        practicalInfo.map((info, index) => {
          return (
            <PracticalForm 
              key={index}
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
  const [educationInfo, setEducationInfo] = useState(cvInfo.educationInfo);
  const [practicalInfo, setPracticalInfo] = useState(cvInfo.practicalInfo);

  function handleChange(e) {
    setGeneralInfo({...generalInfo, [e.target.id]: e.target.value});
  }

  return (
    <main className='main-container'>
      <form onSubmit={generateCV}>
        <fieldset className="general-info">
          <legend>General Information</legend>
          <GeneralFormSection 
            generalInfo={generalInfo}
            onChange={handleChange}
          />
        </fieldset>

        <fieldset className="education-exp">
          <legend>Education Experience</legend>
          <EducationFormSection 
            educationInfo={educationInfo}
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
          cvInfo={{generalInfo, educationInfo, practicalInfo}}
        />
      </div>
    </main>
  )
}

export default App
