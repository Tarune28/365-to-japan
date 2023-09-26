import { Result, Button, Form, Input, Select, ConfigProvider, Modal } from "antd";
import React, { createContext, useState } from 'react';
import "../../../App.css";
import TextArea from "antd/es/input/TextArea";
import { Option } from "antd/es/mentions";
import { FrownOutlined } from "@ant-design/icons";
import "./Unsubscribe.css";
import RequestUtils from "../../../utils/RequestUtils";

function Unsubcribe() {

  const [form] = Form.useForm();
  const [modal, contextHolder] = Modal.useModal()
  let [showModal, setShowModal] = useState(false);

  const ReachableContext = createContext<string | null>(null);
const UnreachableContext = createContext<string | null>(null);

const config = {
  title: 'Unsubscribed',
  content: "Unsubscribed successfully!"
};

  function showEventModal() {
    setShowModal(true);
  }

  function hideEventModal() {
    window.location.reload();
    setShowModal(false);
  }


  function onFinish(values: any) {
    RequestUtils.post("/subscriber/remove", values)
    .then((response) => response.json())
        .then((data) => {
          if (!data.ok) {
            alert("Event could not be deleted!");
            return;
          }

            return (
              modal.success(config)
            )
          
        })
        .catch((error) => {
          alert("Something went wrong!");
          console.log(error);
        });

        showEventModal();
  }

  

  // RequestUtils.post("/subscriber/remove", {})
  // .then((response) => response.json())
  //     .then((data) => {
  //       if (!data.ok) {
  //         alert("Event could not be deleted!");
  //         return;
  //       }
  //     })
  //     .catch((error) => {
  //       alert("Something went wrong!");
  //       console.log(error);
  //     });

  return (
    <>
<Modal open={showModal} onCancel={hideEventModal} footer={null} centered>
        <Result status="success" title="Successfully Unsubscribed" />
      </Modal>
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#FF904D',
        },
      }}
    >
    <div
      style={{
        height: "90vh",
        display: "flex",
      }}
    >
      
      <div className="my-auto mx-auto" style={{width: "50%"}}>
        <div>

        
      <Result
    icon={<FrownOutlined className="icon"></FrownOutlined>}
    title="Come back later!"
    className="unsubscribe-result"
    
  /></div>
        <div>
        <h3 style={{fontFamily: "mukta, sans-serif"}}>Unsubcribe</h3>
        <p>Enter your email below to unsubscribe from the mailing list.</p>
        </div>
      
      <Form onFinish={onFinish}>
      <Form.Item name="email" rules={[{ required: true }]}>
          <Input placeholder="email" required/>
        </Form.Item>
        <Form.Item name="reason"  rules={[{ required: true }]}>
        <Select
          placeholder="Reason for unsubscribing"
          allowClear
        >
          <Option value="t1">Too many emails.</Option>
          <Option value="t2">Not interested in the content.</Option>
          <Option value="t3">Change in primary email.</Option>
          <Option value="t4">Other</Option>
        </Select>
        </Form.Item>
        <Button htmlType="submit">Submit</Button>
      </Form>
      </div>
      
    </div>
    </ConfigProvider></>
  );
}

export default Unsubcribe;
