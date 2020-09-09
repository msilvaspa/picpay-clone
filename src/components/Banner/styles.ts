import styled from 'styled-components/native';

export const Container = styled.View`
	background: #6882bb;
	margin: 25px 16px;
	border-radius: 8px;
	height: 150px;
	/* width:250px; */
	flex-direction: row;
	align-items: center;
	padding: 15px;
	/* justify-content: space-between; */
`;

export const Details = styled.View`
	flex: 1;
`;

export const Image = styled.Image``;

export const Title = styled.Text`
	color: #fff;
	font-size: 18px;
	font-weight: bold;
`;

export const Description = styled.Text`
	color: #fff;
	font-size: 14px;
	margin-top: 15px;
`;
