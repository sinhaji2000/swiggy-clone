import { render, screen } from "@testing-library/react";
import RestaurantCard from "../RestaurantCard";
import MOCK_DATA from "../mockData/restCardmock.json";
import "@testing-library/jest-dom";

it("should render restaurants card with props Data", () => {
  render(<RestaurantCard resData={MOCK_DATA} />);
  const name = screen.getByText("A2B - Adyar Ananda Bhavan");
  expect(name).toBeInTheDocument();
});
