const fetchUser = async () => {
  const url = "https://randomuser.me/api/";

  try {
    const resp = await fetch(url);

    if (!resp.ok) console.error("Error while fetching random user: Try again");

    const data = await resp.json();
    const person = data.results[0];

    const { name, email, phone, cell } = person;
    const { age } = person.dob;
    const { street, city, state, country } = person.location;
    const fullName = `${name.first} ${name.last}`;
    const contact = `${phone && `Phone: ${phone} <br>`}${
      cell && `Cell: ${cell}`
    }`;
    const address = `${street.number} ${street.name}, ${city},<br>${state}, ${country}`;
    const { large: img } = person.picture;
    const { password } = person.login;

    return { name: fullName, email, contact, age, address, img, password };
  } catch (error) {
    console.log(error);
    console.error("Error while fetching random user: Try again");
  }
};

export default fetchUser;
