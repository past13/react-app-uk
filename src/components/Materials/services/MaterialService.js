export default class MaterialService {

  getMaterials = async() => {
    try {
      return (await fetch(`http://localhost:5000/materials/`)).json();
    }
    catch (error) {
      console.log(error);
    }
  }
}
