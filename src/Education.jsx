function Education() {
  return (
    <section className="education-exp">
      <h2>Education Experience</h2>

      <label htmlFor="school-name">School name: </label>
      <input type="text" id="school-name" placeholder="School name" required />

      <label htmlFor="degree">Degree: </label>
      <input type="text" id="degree" placeholder="Degree" />

      <label htmlFor="field-of-study">Field of study: </label>
      <input type="text" id="field-of-study" placeholder="Field of study" />

      <label htmlFor="date-start">Date start:</label>
      <input type="date" id="date-start" />

      <label htmlFor="date-end">Date end:</label>
      <input type="date" id="date-end" />
    </section>
  )
}

export default Education;