import { useState } from 'react';
import { Card, List } from 'antd';

const portfolioData = [
  {
    title: 'Project 1',
    description: 'A description of Project 1.',
    url: 'https://www.project1.com',
  },
  {
    title: 'Project 2',
    description: 'A description of Project 2.',
    url: 'https://www.project2.com',
  },
  // Add more projects here
];

function Portfolio() {
  const [portfolio] = useState(portfolioData);

  return (
    <List
      grid={{
        gutter: 16,
        xs: 1,
        sm: 2,
        md: 4,
        lg: 4,
        xl: 6,
        xxl: 3,
      }}
      dataSource={portfolio}
      renderItem={(item) => (
        <List.Item>
          <Card title={item.title}>
            <p>{item.description}</p>
            <a href={item.url} target="_blank" rel="noopener noreferrer">
              Visit Project
            </a>
          </Card>
        </List.Item>
      )}
    />
  );
}

export default Portfolio;
