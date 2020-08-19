import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign, Ionicons } from '@expo/vector-icons';

import HomeScreen from './screens/Home';
import WalletScreen from './screens/Wallet';
import PayScreen from './screens/Pay';
import PayButton from './components/PayButton';

const { Navigator, Screen } = createBottomTabNavigator();

const icons: any = {
	home: 'home',
	wallet: 'creditcard',
	notifications: 'ios-notifications-outline',
	settings: 'setting',
};

const Navigation = () => {
	return (
		<Navigator
			screenOptions={({ route, navigation }) => ({
				tabBarIcon: ({ color, size, focused }) => {
					if (route.name === 'pay')
						return <PayButton onPress={() => navigation.navigate('pay')} focused={focused} />;

					return route.name === 'notifications' ? (
						<Ionicons name="ios-notifications-outline" size={size} color={color} />
					) : (
						<AntDesign name={icons[route.name]} size={size} color={color} />
					);
				},
			})}
			tabBarOptions={{
				style: {
					backgroundColor: '#131418',
					borderTopColor: 'rgba(255, 255, 255, 0.2)',
				},
				activeTintColor: '#fff',
				inactiveTintColor: '#92929c',
			}}
		>
			<Screen name="home" component={HomeScreen} options={{ title: 'Início' }} />
			<Screen name="wallet" component={WalletScreen} options={{ title: 'Carteira' }} />
			<Screen name="pay" component={PayScreen} options={{ title: '' }} />
			<Screen name="notifications" component={PayScreen} options={{ title: 'Notificações' }} />
			<Screen name="settings" component={PayScreen} options={{ title: 'Ajustes' }} />
		</Navigator>
	);
};

export default Navigation;
