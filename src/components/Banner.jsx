import { Button, Card, Flex, Typography } from "antd";
import React from "react";

const Banner = () => {
  return (
    <Card style={{ height: 260, padding: "20px" }}>
      <Flex vertical gap="30px">
        <Flex vertical align="flex-start">
          <Typography.Title>Create and Sell Products</Typography.Title>
          <Typography.Text type="secondary" strong>
            Plants are the eukaryotes that form the kingdom Plantae; they are
            predominantly photosynthetic. This means that they obtain their
            energy from sunlight, using chloroplasts derived from endosymbiosis
            with cyanobacteria to produce sugars from carbon dioxide and water,
            using the green pigment chlorophyll.
          </Typography.Text>
        </Flex>
        <Flex gap="large">
          <Button type="primary" size="large">
            Explore More
          </Button>
          <Button size="large" padding="30px">Top Sellers</Button>
        </Flex>
      </Flex>
    </Card>
  );
};

export default Banner;
