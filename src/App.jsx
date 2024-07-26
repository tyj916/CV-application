/* eslint-disable react/prop-types */
import { useState } from 'react';
import './App.css'
import { cvInfo } from './data';
import GeneralFormSection from './components/GeneralFormSection';
import EducationFormSection from './components/EducationFormSection';
import PracticalFormSection from './components/PracticalFormSection';
import GenerateCV from './components/GenerateCV';
import { v4 as uuidv4 } from 'uuid';

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
      <form>
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
