function Home(props) {
  const countries = props.countries;
  return (
    <div>
      {countries.map((country, key) => {
        return (
          <div key={key}>
            <img src={country.flags.png} alt="country flags" />

            <p>{country.name.common}</p>
            <h4>{country.region}</h4>
          </div>
        );
      })}
    </div>
  );
}

export default Home;
