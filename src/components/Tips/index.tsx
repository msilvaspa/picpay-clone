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
		title: 'Compre créditos para iFood',
		bgColor: '#4ecc7e',
	},
	{
		key: String(Math.random()),
		img: img9,
		title: 'Conheça nossas promoções',
		bgColor: '#f674a8',
	},
	{
		key: String(Math.random()),
		img: img10,
		title: 'Pague e receba com o Pix',
		bgColor: '#317245',
		color: '#FFF'
	},
	{
		key: String(Math.random()),
		img: img11,
		title: 'Pague suas contas sem sair de casa',
		bgColor: '#6882bb',
	},
	{
		key: String(Math.random()),
		img: img12,
		title: 'Pague suas contas sem sair de casa',
		bgColor: '#605dfd',
		color: '#FFF'
	},
];

const Tips = () => {
	return (
		<Container>
			{items.map(({ key, bgColor, title, img, color }) => (
				<Option key={key} bgColor={bgColor}>
					<Title color={color}>{title}</Title>
					<Img source={img} />
				</Option>
			))}
		</Container>
	);
};

export default Tips;
