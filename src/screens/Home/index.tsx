import React from 'react';
import { Text } from 'react-native';
import { MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';

import { Wrapper, Header, BalanceContainer, BalanceTitle, Balance, Container } from './styles';
import Suggestions from '../../components/Suggestions';

const Home = () => {
	return (
		<Wrapper>
			<Container>
				<Header>
					<MaterialCommunityIcons name="qrcode-scan" size={30} color="#10c86e" />

					<BalanceContainer>
						<BalanceTitle>Meu saldo</BalanceTitle>
						<Balance>R$ 0,00</Balance>
					</BalanceContainer>
					<AntDesign name="gift" size={30} color="#10c86e" />
				</Header>
				<Suggestions/>
			</Container>
		</Wrapper>
	);
};

export default Home;
