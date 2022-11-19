import { Button, Col, Radio, RadioChangeEvent, Row, Typography } from "antd";
import { SizeType } from "antd/es/config-provider/SizeContext";
import { FunctionComponent as FC, useState } from "react";
import { IHome } from "./IHome";
import Illustration from "../../assets/icons/Layer 1.svg";
import { MDBIcon } from "mdb-react-ui-kit";
import { useNavigate } from "react-router-dom";

const Home: FC<IHome> = ({ connect, status }) => {
  const [size, setSize] = useState<SizeType>("small");
  const navigate = useNavigate();

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
              {status === "connecting" ? (
                <MDBIcon icon="spinner" className="my-0" spin />
              ) : status === "notConnected" ? (
                <>
                  <Button type="primary" onClick={connect}>
                    LOGIN WITH METAMASK
                  </Button>
                </>
              ) : status === "unavailable" ? (
                <p className="text-danger my-0">
                  Please install Metamask to start
                </p>
              ) : (
                <Button onClick={() => navigate("/chats")} type="primary">
                  START CHATTING
                </Button>
              )}
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
