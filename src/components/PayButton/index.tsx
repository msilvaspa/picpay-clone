import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { TouchableWithoutFeedback, TouchableWithoutFeedbackProps } from 'react-native';

import { Button, Label } from './styles';

const PayButton = ({ onPress, focused }: TouchableWithoutFeedbackProps & any) => {
	return (
		<TouchableWithoutFeedback onPress={onPress}>
			<Button colors={focused ? ['#fff', '#ccc'] : ['#00fc6c', '#00ac4a']} start={[1, 0.2]}>
				<MaterialIcons name="attach-money" size={20} color={focused ? '#000' : '#fff'} />
				<Label focused={focused}>Pagar</Label>
			</Button>
		</TouchableWithoutFeedback>
	);
};

export default PayButton;
