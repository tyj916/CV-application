function General() {
  return (
    <section className="general-info">
      <h2>General Information</h2>

      <label htmlFor="name">Name: </label>
      <input type="text" id="name" required />

      <label htmlFor="email">Email: </label>
      <input type="email" id="email" />

      <label htmlFor="phone-number">Phone number: </label>
      <input type="tel" id="phone-number" />

    </section>
  )
}

export default General;