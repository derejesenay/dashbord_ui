import { Typography, Flex, Button } from "antd";
import React from "react";

const SellerLists = () => {
  return (
    <Flex align="center" justify="space-between" gap="large">
      <Flex gap="small" className="top-seller">
        <Flex align="center" justify="space-between">
          <Typography.Title level={5} strong className="primary--color">
            Top Sellers
          </Typography.Title>
          <Button Type="link" className="gray--color">
            Veiw all
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default SellerLists;
