import styled from 'styled-components';
import { useEffect } from 'react';
import img from './ShareButton.png';

const WrapSocialShare = styled.div`
	#share_button {
		visibility: collapse;
	}
`;

const SocialShare = () => {
	useEffect(() => {
		document.title = 'Social Share Button';
	}, []);
	return (
		<WrapSocialShare>
			<input type="image" src={img} />
			<div class="fb-share-button" data-href="https://developers.facebook.com/docs/plugins/" data-layout="" data-size=""><a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2Fplugins%2F&amp;src=sdkpreparse" class="fb-xfbml-parse-ignore">シェアする</a></div>
			<div id="fb-root"></div>
			<script async defer crossorigin="anonymous" src="https://connect.facebook.net/ja_JP/sdk.js#xfbml=1&version=v20.0" nonce="gx9OgLdM"></script>
		</WrapSocialShare>
	);
};

export default SocialShare
