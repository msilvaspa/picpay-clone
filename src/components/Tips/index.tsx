import React from 'react';

import { Container, Option, Title, Img } from './styles';

import img8 from '../../images/08.png';
import img9 from '../../images/09.png';
import img10 from '../../images/10.png';
import img11 from '../../images/11.png';
import img12 from '../../images/12.png';

const items = [
	{
		key: String(Math.random()),
		img: img8,
		title: 'Pague suas contas sem sair de casa',
		bgColor: '#172c4a',
	},
	{
		key: String(Math.random()),
		img: img9,
		title: 'Pague suas contas sem sair de casa',
		bgColor: '#6a0159',
	},
	{
		key: String(Math.random()),
		img: img10,
		title: 'Pague suas contas sem sair de casa',
		bgColor: '#4139c8',
	},
	{
		key: String(Math.random()),
		img: img11,
		title: 'Pague suas contas sem sair de casa',
		bgColor: '#00ab4b',
	},
	{
		key: String(Math.random()),
		img: img12,
		title: 'Pague suas contas sem sair de casa',
		bgColor: '#ba2f76',
	},
];

const Tips = () => {
	return (
		<Container>
			{items.map(({ key, bgColor, title, img }) => (
				<Option key={key} bgColor={bgColor}>
					<Title>{title}</Title>
					<Img source={img} />
				</Option>
			))}
		</Container>
	);
};

export default Tips;
