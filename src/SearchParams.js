import { useEffect, useState, useContext } from "react";
import ThemeContext from "./ThemeContext";
import Results from "./Results";
import useBreedList from "./useBreedList";

const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];


const SearchParams = () => {
  const [theme, setTheme] = useContext(ThemeContext)
  //   var location = "Seattle, WA"
  const [location, setLocation] = useState("");
  const [animal, setAnimal] = useState("");
  const [breed, setBreed] = useState("");
  const [pets, setPets] = useState([]);

  const [breeds] = useBreedList(animal);


  

  const handleChange = (e) => {
    console.log(e);
    setLocation(e.target.value);
    // location = e.target.value;
    // console.log(location);
  };

  useEffect(() => {
    requestPets();
   
  }, [animal]);

  async function requestPets() {
    const res = await fetch(
      `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&bteed=${breed}`
    );
    const json = await res.json();

    console.log(json);
    setPets(json.pets);

   
  }

  console.log(animal);
  return (
    <div className="search-params">
      <form 
      onSubmit={e => {
        e.preventDefault();
        requestPets();
      }}>
        <label htmlFor="location">
          location
          <input
            id="location"
            value={location}
            placeholder="Location"
            onChange={handleChange}
          />
        </label>

        <label htmlFor="animal">
          animal
          <select
            id="animal"
            value={animal}
            onChange={(e) => setAnimal(e.target.value)}
          >
            <option></option>
            {ANIMALS.map((animal) => (
              <option key={animal} value={animal}>
                {animal}
              </option>
            ))}
          </select>
        </label>

        <label htmlFor="breed">
          breed
          <select
            id="breed"
            value={breed}
            onChange={(e) => setBreed(e.target.value)}
          >
            <option></option>
            {breeds.map((breed) => (
              <option key={breed} value={breed}>
                {breed}
              </option>
            ))}
          </select>
        </label>

        {/* create a label and select, put 4 option indise select 
        And write value for each option as a valid color name
        write onChange event listener on select and set the value of select in theme context(setTheme)
        <option value="green">Green</option> */}

        <button style={{backgroundColor: theme}}>Submit</button>
        {/*H.W. ->  write map method to get all the pets */}
        {}
      </form>

     <Results pets={pets} />
    </div>
  );
};

export default SearchParams;
