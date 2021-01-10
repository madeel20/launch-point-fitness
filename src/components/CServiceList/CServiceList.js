import React from 'react'
import { Button, Typography } from 'antd'
import Avatar from 'antd/lib/avatar/avatar'
import { List } from 'antd';
import sampleImage from '../../assets/images/images.png'
const data = [
  {
    title: 'Ant Design Title 1',
  },
  {
    title: 'Ant Design Title 2',
  },
  {
    title: 'Ant Design Title 3',
  },
  {
    title: 'Ant Design Title 4',
  },
];

function CServiceList({ buttonTitle, }) {
  return (
    <div>
      <Button>{buttonTitle}</Button>
      <List
        className="c-service-list"
        bordered
        dataSource={data}
        renderItem={item => (
          <List.Item>
          <List.Item.Meta
          avatar={<img src={sampleImage} />}
          title={<a href="https://ant.design">{item.title}</a>}
          description="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from "
        />
            {/* <img src={sampleImage} /> {item} */}
          </List.Item>  
        )}
      />
    </div>
  )
}

export default CServiceList
