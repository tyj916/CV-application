import { useState } from 'react';
import './App.css'
import { educationList, generalInfo, practicalExp } from './data';

function generateCV(e) {
  e.preventDefault();
  return false;
}

function General() {
  const {name, email, phoneNumber} = generalInfo;

  return (
    <>
      <label htmlFor="name">Name: </label>
      <input type="text" id="name" required defaultValue={name}/>

      <label htmlFor="email">Email: </label>
      <input type="email" id="email" defaultValue={email}/>

      <label htmlFor="phone-number">Phone number: </label>
      <input type="tel" id="phone-number" defaultValue={phoneNumber}/>
    </>
  )
}

function EducationInfo({schoolName, degree, fieldOfStudy, dateStart, dateEnd}) {
  return (
    <>
      <label htmlFor="school-name">School name: </label>
      <input type="text" id="school-name" required defaultValue={schoolName} />

      <label htmlFor="degree">Degree: </label>
      <input type="text" id="degree" defaultValue={degree} />

      <label htmlFor="field-of-study">Field of study: </label>
      <input type="text" id="field-of-study" defaultValue={fieldOfStudy} />

      <label htmlFor="date-start">Date start:</label>
      <input type="date" id="date-start" defaultValue={dateStart} />

      <label htmlFor="date-end">Date end:</label>
      <input type="date" id="date-end" defaultValue={dateEnd} />
    </>
  )
}

function EducationList() {
  return (
    <>
      {
        educationList.map((education, index) => {
          return <EducationInfo 
            key={index}
            {...education}
            onChange={()=>{}}
          />
        })
      }
    </>
  );
}

function Education() {

  return (
    <>
      <EducationList />
    </>
  )
}

function PracticalInfo({companyName, title, responsibility, dateStart, dateEnd}) {
  return (
    <>
      <label htmlFor="company-name">Company name: </label>
      <input type="text" id="company-name" required defaultValue={companyName}/>

      <label htmlFor="position-title">Position title: </label>
      <input type="text" id="position-title" defaultValue={title} />

      <label htmlFor="main-responsibilities">Main responsibilities: </label>
      <textarea name="main-responsibilities" id="main-responsibilities" defaultValue={responsibility}></textarea>

      <label htmlFor="date-start">Date start:</label>
      <input type="date" id="date-start" defaultValue={dateStart} />

      <label htmlFor="date-end">Date end:</label>
      <input type="date" id="date-end" defaultValue={dateEnd} />
    </>
  )
}

function PracticalLists() {
  return (
    <>
      {
        practicalExp.map((info, index) => {
          return (
            <PracticalInfo 
              key={index}
              {...info}
            />
          )
        })
      }
    </>
  );
}

function Practical() {
  return (
    <>
      <PracticalLists />
    </>
  )
}

function App() {
  return (
    <main className='main-container'>
      <form onSubmit={generateCV}>
        <fieldset className="general-info">
          <legend>General Information</legend>
          <General />
        </fieldset>

        <fieldset className="education-exp">
          <legend>Education Experience</legend>
          <Education />
        </fieldset>

        <fieldset className="practical-exp">
          <legend>Practical Experience</legend>
          <Practical />
        </fieldset>

        <button type="submit">Generate</button>
      </form>

      <div className="result">
        result
      </div>
    </main>
  )
}

export default App
