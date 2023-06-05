import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Meal } from "../components/Meal";
import { RecipeInfo } from "../components/RecipeInfo";

export function MyRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Meal />} />
        <Route path="/:MealId" element={<RecipeInfo />} />
      </Routes>
    </Router>
  );
}
