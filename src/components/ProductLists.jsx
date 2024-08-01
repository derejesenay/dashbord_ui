import { Flex, Typography,Button,Card, Image } from "antd";
import React from "react";
import plantData from "../plantData";
const { Meta } = Card;
const ProductLists = () => {
  return (
    <>
      <Flex align="ceneter" justify="space-between">
        <Typography.Title level={3} strong className="Primary--color">
          My Listing
        </Typography.Title>
        <Button type="link" className="gray--color">
          {" "}
          View All{" "}
        </Button>
      </Flex>
      <Flex align="center" gap="large">
        {plantData.map((plant) => (
          <Card key={plant.id} hoverable className="plant-card">
            <Image src={plant.picture} style={{ width: "130px" }} />
            <Meta title ={plant.name} style={{marginTop:'1rem'}}/>
          </Card>
        ))}
      </Flex>
    </>
  );
};

export default ProductLists;
