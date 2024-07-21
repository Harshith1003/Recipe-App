import FoodItem from "./FoodItem";

export default function FoodList({ foodData, setFoodId }) {
  return (
    <div style={{ marginLeft: "150px" }}>
      {foodData.map((food) => (
        <FoodItem setFoodId={setFoodId} food={food} key={food.id} />
      ))}
    </div>
  );
}
