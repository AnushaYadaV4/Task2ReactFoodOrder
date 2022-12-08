import { Fragment } from "react";
import Meals from "./components/Meals/MealsSummary";
import Header from "./components/MealsLayout/Header";

function App() {
  return (
    <Fragment>
          <Header/>
          <main> 
            <Meals/>
        </main>
         
    </Fragment>
      
    
  );
}

export default App;
