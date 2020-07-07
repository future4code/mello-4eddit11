import React, { useState } from "react";
import { Post } from '../../services/api';

import { 
  Form,
  Input,
  Col,
  Row
}
from 'antd';

import 'antd/dist/antd.css';


function PostPage() {

  const [text, setText] = useState();
  const [title, setTitle] = useState();

  const body = {
    text: text,
    title: title
  }

  return (
    <>
    <Row>
      <Col span={24}>Teste</Col>
    </Row>
    <Row>
      <Col span={24}>Teste2</Col>
    </Row>
      
    </>
  );
}

export default PostPage;
