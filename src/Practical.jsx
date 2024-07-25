function Practical() {
  return (
    <section className="practical-exp">
      <h2>Practical Experience</h2>
      <label htmlFor="company-name">Company name: </label>
      <input type="text" id="company-name" required />

      <label htmlFor="position-title">Position title: </label>
      <input type="text" id="position-title" />

      <label htmlFor="main-responsibilities">Main responsibilities: </label>
      <textarea name="main-responsibilities" id="main-responsibilities"></textarea>

      <label htmlFor="date-start">Date start:</label>
      <input type="date" id="date-start" />

      <label htmlFor="date-end">Date end:</label>
      <input type="date" id="date-end" />
    </section>
  )
}

export default Practical;