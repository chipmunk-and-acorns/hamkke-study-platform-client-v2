import styled from 'styled-components';
import tw from 'twin.macro';

const DropDownMenu = () => {
	return (
		<Container>
			<ul>
				<li>내 작성글</li>
				<li>설정</li>
				<li>로그아웃</li>
			</ul>
		</Container>
	);
};

const Container = styled.div`
	${tw`
    absolute
    top-20
    right-12
    w-44
    bg-gray-50
    p-4
    rounded
    shadow-xl
  `}

	li {
		${tw`
      mb-4
    `}
	}
`;

export default DropDownMenu;
