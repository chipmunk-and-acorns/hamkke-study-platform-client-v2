import { useEffect, useRef } from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
interface IProps {
	handleIsProfileClick: () => void;
}

const DropDownMenu = ({ handleIsProfileClick }: IProps) => {
	const dropDownMenuModalRef = useRef<HTMLDivElement>(null);

	const handleClickOutside = (e: MouseEvent) => {
		const el = dropDownMenuModalRef?.current;

		if (!el || el.contains(e.target as Node)) {
			return;
		}
		handleIsProfileClick();
	};

	useEffect(() => {
		document.addEventListener('mousedown', handleClickOutside);

		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, []);

	return (
		<Container>
			<DropDownMenuContainer ref={dropDownMenuModalRef}>
				<ul>
					<li>내 작성글</li>
					<li>설정</li>
					<li>로그아웃</li>
				</ul>
			</DropDownMenuContainer>
		</Container>
	);
};

export default DropDownMenu;

const Container = styled.div`
	${tw`
			w-full
			h-full
			top-0
			left-0
			absolute
			flex
			justify-end
	`}
`;

const DropDownMenuContainer = styled.div`
	${tw`
	relative
    top-20
		right-10
		w-44
		h-40
    bg-gray-50
    p-4
    rounded
    shadow-xl
  `}

	li {
		${tw`
      mb-4
			cursor-pointer
    `}
	}
`;
