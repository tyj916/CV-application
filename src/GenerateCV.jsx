/* eslint-disable react/prop-types */
function GenerateGeneralInfo({name, email, phoneNumber, location}) {
  return (
    <section className='general-info'>
      <h1>{name}</h1>
      <div className="details">
        <p className="email">
          <span className="icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>email-outline</title><path d="M22 6C22 4.9 21.1 4 20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6M20 6L12 11L4 6H20M20 18H4V8L12 13L20 8V18Z" /></svg>
          </span>
          {email}
        </p>
        <p className="phone-number">
          <span className="icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>phone</title><path d="M6.62,10.79C8.06,13.62 10.38,15.94 13.21,17.38L15.41,15.18C15.69,14.9 16.08,14.82 16.43,14.93C17.55,15.3 18.75,15.5 20,15.5A1,1 0 0,1 21,16.5V20A1,1 0 0,1 20,21A17,17 0 0,1 3,4A1,1 0 0,1 4,3H7.5A1,1 0 0,1 8.5,4C8.5,5.25 8.7,6.45 9.07,7.57C9.18,7.92 9.1,8.31 8.82,8.59L6.62,10.79Z" /></svg>
          </span>
          {phoneNumber}
        </p>
        <p className="location">
          <span className="icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>map-marker</title><path d="M12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5M12,2A7,7 0 0,0 5,9C5,14.25 12,22 12,22C12,22 19,14.25 19,9A7,7 0 0,0 12,2Z" /></svg>
          </span>
          {location}
        </p>
      </div>
    </section>
  );
}

function GenerateEducationInfo({educationInfos}) {
  return (
    <section className='education-info'>
      <h2>Education Experience</h2>
      <hr />
      <ul className="education-list">
        {
          educationInfos.map((educationInfo, index) => {
            return (
              <li key={index}>
                <p className="timeframe">{(educationInfo.dateStart).slice(0, 7)} ~ {(educationInfo.dateEnd).slice(0, 7)}</p>
                <div className="details">
                  <h3>{educationInfo.degree}</h3>
                  <p className="school-name"><i>{educationInfo.schoolName}</i></p>
                  <p className="field-of-study">{educationInfo.fieldOfStudy}</p>
                </div>
              </li>
            );
          })
        }
      </ul>
    </section>
  );
}

function GeneratePracticalInfo({practicalInfos}) {
  return (
    <section className='practical-info'>
      <h2>Practical Experience</h2>
      <hr />
      <ul className="practical-list">
        {
          practicalInfos.map((info, index) => {
            return (
              <li key={index}>
                <p className="timeframe">{(info.dateStart).slice(0, 7)} ~ {(info.dateEnd).slice(0, 7)}</p>
                <div className="details">
                  <h3>{info.positionTitle}</h3>
                  <p className="company-name"><i>{info.companyName}</i></p>
                  <p className="responsibility">{info.responsibility}</p>
                </div>
              </li>
            );
          })
        }
      </ul>
    </section>
  );
}

export default function GenerateCV({cvInfo}) {
  return (
    <div className="cv">
      <GenerateGeneralInfo
        {...cvInfo.generalInfo}
      />

      <GenerateEducationInfo 
        educationInfos={cvInfo.educationInfos}
      />

      <GeneratePracticalInfo 
        practicalInfos={cvInfo.practicalInfos}
      />
    </div>
  );
}