import React from 'react';
import { Feather, MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';

import {
	Container,
	Header,
	Title,
	Card,
	Avatar,
	CardHeader,
	Description,
	Bold,
	CardBody,
	UserName,
	CardFooter,
	Details,
	Value,
	Divider,
	Date,
	Actions,
	Option,
	OptionLabel,
} from './styles';
import avatar from '../../images/avatar.png';

const Activities = () => {
	return (
		<Container>
			<Header>
				<Title>Atividades</Title>
			</Header>
			<Card>
				<CardHeader>
					<Avatar source={avatar} />
					<Description>
						<Bold>Você</Bold> pagou a <Bold>@alguem</Bold>
					</Description>
				</CardHeader>
				<CardBody>
					<UserName>Mateus Alves</UserName>
				</CardBody>
				<CardFooter>
					<Details>
						<Value>R$19,00</Value>

						<Divider />

						<Feather name="lock" color="#fff" />
						<Date>há 2 anos</Date>
					</Details>
					<Actions>
						<Option>
							<MaterialCommunityIcons name="comment-outline" size={14} color="#FFF" />
							<OptionLabel>0</OptionLabel>
						</Option>
						<Option>
							<AntDesign name="hearto" size={14} color="#FFF" />
							<OptionLabel>0</OptionLabel>
						</Option>
					</Actions>
				</CardFooter>
			</Card>
		</Container>
	);
};

export default Activities;
