import Slide from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styled from 'styled-components';
import tw from 'twin.macro';

const BannerSlide = () => {
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
	};

	return (
		<Container>
			<Slide {...settings}>
				<Banner>
					<img src="https://i.imgur.com/UkvxcPW.jpg" title="banner1.jpg" />
				</Banner>
				<Banner>
					<img src="https://i.imgur.com/Uj4XGAQ.jpg" title="banner2.jpg" />
				</Banner>
			</Slide>
		</Container>
	);
};

export default BannerSlide;

const Container = styled.div`
	${tw`
    w-full
    m-auto
  `}
`;

const Banner = styled.div`
	${tw`
    w-full
  `}
	img {
		${tw`
      w-full
      h-96
      object-fill
    `}
	}
`;
