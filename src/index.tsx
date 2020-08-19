import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import Navigation from './Navigation';

export default function App() {
	return (
		<>
			<StatusBar barStyle="light-content" backgroundColor="#000"/>
			<NavigationContainer>
				<Navigation />
			</NavigationContainer>
		</>
	);
}
