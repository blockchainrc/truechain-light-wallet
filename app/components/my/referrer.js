import React, { Component } from 'react';
import { Text, View, Image, StyleSheet, TouchableHighlight, Alert } from 'react-native';
import { withNavigation } from 'react-navigation';
import { Input, Button } from 'react-native-elements';
import { screenWidth } from '../../utils/Dimensions';
import { setReferrer } from '../../api/loged';

export class Referrer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			referrer_code: null
		};
		this.navigate = this.props.navigation.navigate;
	}

	componentDidMount() {
		const { params } = this.props.navigation.state;
		this.setState({
			mobile: params.mobile
		});
	}
	_onChangeText(text) {
		this.setState({
			referrer_code: text
		});
	}

	_next() {
		if (this.state.referrer_code) {
			setReferrer({
				mobile: this.state.mobile,
				referrer_code: this.state.referrer_code
			}).then((res) => {
				console.log(res);
				if (res.status === 0) {
					this.navigate('My');
				} else {
					Alert.alert(null, '邀请码错误,请检查重试!');
				}
			});
		} else {
			Alert.alert(null, '请输入推荐人邀请码!');
		}
	}

	render() {
		return (
			<View style={styles.container}>
				<View
					style={{
						marginTop: 30,
						width: screenWidth * 0.7,
						alignItems: 'center'
					}}
				>
					<Input
						placeholder="输入邀请码"
						maxLength={6}
						inputStyle={styles.inputStyle}
						onChangeText={this._onChangeText.bind(this)}
					/>
				</View>

				<Button title="下一步" buttonStyle={styles.buttonStyle} onPress={this._next.bind(this)} />
				<TouchableHighlight
					style={{ marginTop: 50 }}
					onPress={() => {
						this.navigate('My');
					}}
				>
					<Text style={{ color: '#818181' }}>跳过</Text>
				</TouchableHighlight>
			</View>
		);
	}
}

export default withNavigation(Referrer);

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		backgroundColor: '#fff'
	},
	inputStyle: {
		textAlign: 'center'
	},
	buttonStyle: {
		height: 45,
		marginTop: 50,
		width: screenWidth * 0.8,
		backgroundColor: '#007AFF',
		borderRadius: 50
	}
});
