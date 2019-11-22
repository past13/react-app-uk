export default class CategoryService {

    getCategories = async() => {
      try {
        return (await fetch(`http://localhost:5000/categories/`)).json();
      }
      catch (error) {
        console.log(error);
      }
    }
  }
  