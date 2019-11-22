export default class LocationService {

  getLocations = async() => {
    try {
      return (await fetch(`http://localhost:5000/locations/`)).json();
    }
    catch (error) {
      console.log(error);
    }
  }
}
