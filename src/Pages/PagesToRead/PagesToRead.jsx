import React from 'react';
import { useLoaderData } from 'react-router';
import { Bar, BarChart, CartesianGrid, Cell, Legend, Tooltip, XAxis, YAxis } from 'recharts';
import Container from '../../Components/Container/Container';

const colors = ['#0085F6', '#00C29C', '#FBB929', '#FC8042', '#FB0100'];

const getPath = (x, y, width, height) => {
  return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
  Z`;
};

const TriangleBar = (props) => {
  const { fill, x, y, width, height } = props;

  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};


const PagesToRead = () => {
    const data = useLoaderData();
    console.log(data)
    return (
       <Container>
         <div className='bg-[#13131308] rounded-3xl mb-10'>
           <BarChart width={1390} height={500} data={data}  margin={{
        top: 30,
        right: 30,
        left: 30,
        bottom: 30,
      }}>
        <CartesianGrid strokeDasharray="3 3"></CartesianGrid>
        <XAxis dataKey='bookName'></XAxis>
        <YAxis></YAxis>
        <Tooltip></Tooltip>
        <Legend></Legend>
              <Bar dataKey="totalPages" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
          {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
        ))}

        </Bar>
      </BarChart>
            
        </div>
       </Container>
    );
};

export default PagesToRead;