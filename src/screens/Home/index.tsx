import React from 'react';
import { Text, View } from 'react-native';
import { MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';

import { Wrapper, Header, BalanceContainer, BalanceTitle, Balance, Container, GiftAndPercentContainer } from './styles';
import Suggestions from '../../components/Suggestions';
import Activities from '../../components/Activities';
import Tips from '../../components/Tips';
import Banner from '../../components/Banner';

const Home = () => {
	return (
		<Wrapper>
			<Container>
				<Header>
					<MaterialCommunityIcons name="qrcode-scan" size={30} color="#10c86e" />

					<BalanceContainer>
						<BalanceTitle>Meu saldo</BalanceTitle>
						<Balance>R$ 110.073,00</Balance>
					</BalanceContainer>

					<GiftAndPercentContainer>
						<AntDesign name="gift" size={30} color="#10c86e" />
						<MaterialCommunityIcons name="sack-percent" size={30} color="#10c86e" />
					</GiftAndPercentContainer>
				</Header>
				<Suggestions />
				<Activities />
				<Tips />
				<Banner />
			</Container>
		</Wrapper>
	);
};

export default Home;
