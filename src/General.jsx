function General() {
  return (
    <section className="general-info">
      <h2>General Information</h2>
      <label>
        Name:{' '}
        <input type="text" />
      </label>
      <label>
        Email:{' '}
        <input type="email" />
      </label>
      <label>
        Phone number:{' '}
        <input type="tel" />
      </label>
    </section>
  )
}

export default General;