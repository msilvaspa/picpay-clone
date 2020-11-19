import React from 'react';

import { Container, Option, Img, Label, Tab, TabText, TextWrapper } from './styles';

import img1 from '../../images/01.png';
import img2 from '../../images/02.png';
import img3 from '../../images/03.png';
import img4 from '../../images/04.png';
import img5 from '../../images/05.png';
import img6 from '../../images/06.png';
import img7 from '../../images/07.png';

const items = [
	{
		key: String(Math.random()),
		img: img1,
		label: 'Recarga',
	},
	{
		key: String(Math.random()),
		img: img6,
		label: 'Pagar\nConta',
	},
	{
		key: String(Math.random()),
		img: img7,
		label: 'Cobrar',
	},
	{
		key: String(Math.random()),
		img: img2,
		label: '   Uber\nPré pago',
	},
	{
		key: String(Math.random()),
		img: img3,
		label: 'Ônibus',
	},
	{
		key: String(Math.random()),
		img: img4,
		label: 'TV',
	},
	{
		key: String(Math.random()),
		img: img5,
		label: 'Doações',
	},
];

const Suggestions = () => {
	return (
		<>
			<Tab>
				<TextWrapper>
					<TabText>Sugestões</TabText>
				</TextWrapper>
				<TextWrapper>
					<TabText>Favoritos</TabText>
				</TextWrapper>
			</Tab>
			<Container>
				{items.map(({ key, img, label }) => (
					<Option key={key}>
						<Img source={img} />
						<Label>{label}</Label>
					</Option>
				))}
			</Container>
		</>
	);
};

export default Suggestions;
