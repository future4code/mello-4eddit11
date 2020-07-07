import React, { useState } from "react";
import { Post } from '../../services/api';
import { PostPageContainer } from './styles';

import { 
  Form,
  Input,
  Col,
  Row,
  Button
}
from 'antd';

import 'antd/dist/antd.css';


function PostPage() {

  const [text, setText] = useState();
  const [title, setTitle] = useState();
  const [resp, setResp] = useState();
  const { TextArea } = Input;

  const token = window.localStorage.getItem('token');

  let key = {
    headers: {
        auth: token
    }
}

  const body = {
    text: text,
    title: title
  }

  const Postar = async() => {

    await Post('/posts', key, body)
    .then(response => {
      setResp(response.data.success)
      console.log(response)
    })
    .catch(error => {
      console.log(error)
    })
  }

  console.log(resp)
  
  return (

    <PostPageContainer>
    <Form onSubmitCapture={Postar}>
      <Row gutter={[16, 16]}>
        <Col span={8}>

          <Form.Item
          label="Título: "
          name="titulo"
          rules={[
            {
              required: true,
              message: 'Insira o título da publicação',
            },
          ]}
        >
          <Input />
        </Form.Item>

        </Col>
      </Row>

      <Row gutter={[16, 16]}>
        <Col span={8}>

          <Form.Item
            label="Mensagem: "
            name="mensagem"
            rules={[
              {
                required: true,
                message: 'Insira a mensagem da publicação',
              },
            ]}
          >
            <TextArea autoSize={{ minRows: 2, maxRows: 7 }}/>
          </Form.Item>

        </Col>
      </Row>

      <Row>
      <Col span={8}>
          <Button type="primary" htmlType="submit" >
            Comentar
          </Button>
        </Col>
      </Row>
    </Form>
    </PostPageContainer>
  );
}

export default PostPage;