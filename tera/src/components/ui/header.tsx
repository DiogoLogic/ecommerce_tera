import {  MenuIcon, ShoppingCart, icons } from "lucide-react";
import { Button } from "./button";
import { Card } from "./card";

const Header = () => {
  return (
    <Card className="flex justify-between p-[1.875rem] items-center">
      <Button size="icon" variant="outline">
        <MenuIcon />
      </Button>

      <h1 className="font-semibold text-green-500">
        <span className="text-primary ">Ecommerce </span>Tera
        </h1>
      <Button size="icon" variant="outline">
        <ShoppingCart />
      </Button>

    </Card>
  );
};

export default Header;
