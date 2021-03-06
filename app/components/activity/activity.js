import React, { Component } from 'react';
import { StyleSheet, WebView, ActivityIndicator } from 'react-native';
import { screenWidth, screenHeight } from '../../utils/Dimensions';

class Activity extends Component {
	constructor(props) {
		super(props);
		this.navigate = this.props.navigation.navigate;
	}

	render() {
		return (
			<WebView
				style={styles.webView_style}
				scrollEnabled={true}
				javaScriptEnabled={true}
				startInLoadingState={true}
				renderLoading={() => {
					return <ActivityIndicator />;
				}}
				onMessage={(event) => {
					switch (event.nativeEvent.data) {
						case 'signIn':
							this.navigate('SignIn');
							break;
						case 'invite':
							this.navigate('Inviting');
						default:
							break;
					}
				}}
				source={{ uri: 'http://www.truewallet.net/static/activities/20181024/index.html' }}
			/>
		);
	}
}

export default Activity;

const styles = StyleSheet.create({
	webView_style: {
		width: screenWidth,
		height: screenHeight
	}
});
