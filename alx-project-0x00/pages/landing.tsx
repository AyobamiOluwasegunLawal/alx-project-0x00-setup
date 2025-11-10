import Button from "@/components/Button";
import Card from "@/components/Card";
import React from "react";

const Landing: React.FC = () => {
  return (
    <div>
      <h1 className=" text-xl font-extralight">Landing Page</h1>
      <Card />
      <Button title="Click me" styles="w-lg rounded-lg"/>
      <Button title="Click me" styles="w-lg rounded-sm"/>
      <Button title="Click me" styles="w-lg rounded-full"/>
    </div>
  );
};

export default Landing;
