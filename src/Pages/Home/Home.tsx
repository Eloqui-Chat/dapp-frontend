import { Button, Col, Radio, RadioChangeEvent, Row, Typography } from "antd";
import { SizeType } from "antd/es/config-provider/SizeContext";
import { FunctionComponent as FC, useState } from "react";
import { IHome } from "./IHome";
import Illustration from "../../assets/icons/Layer 1.svg";

const Home: FC<IHome> = ({}) => {
  const [size, setSize] = useState<SizeType>("small");

  const onChange = (e: RadioChangeEvent) => {
    setSize(e.target.value);
  };
  return (
    <div style={{ backgroundColor: "white" }}>
      <Row
        justify="center"
        align="middle"
        style={{ minHeight: "500px", paddingTop: "70px" }}
        gutter={[32, 32]}
      >
        <Col xs={24} sm={24} md={22} lg={18}>
          <Row gutter={[32, 32]}>
            <Col xs={24} sm={24} md={12} style={{ padding: "20px" }}>
              <h1>Welcome</h1>
              <strong>
                <Typography.Title>Eloqui Chat</Typography.Title>
              </strong>
              <br />
              <br />
              <br />
              <p style={{ fontSize: "25px" }}>
                Get intuitive and decentralised messaging for free, available on
                web across all devices.
              </p>
              <Button type="primary">START WITH ELOQUICHAT</Button>
            </Col>
            <Col xs={24} sm={24} md={12} style={{ padding: "5px" }}>
              <img
                src={Illustration}
                style={{ width: "100%", height: "100%" }}
              />
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default Home;
