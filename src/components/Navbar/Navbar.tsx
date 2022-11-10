import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import tw from 'twin.macro';
import { HiOutlineBellAlert } from 'react-icons/hi2';
import DropDownMenu from 'components/DropDownMenu/DropDownMenu';

/**
 * 비로그인
 * 	- 새 글 쓰기(클릭 시 로그인 창)
 *  - 로그인
 *
 * 로그인
 *  - 새 글 쓰기(글 작성 창)
 *  - 알림
 *  - 프로필 (메뉴, 메뉴 클릭시 내 작성글/설정/로그아웃)
 *
 */
const Navbar = () => {
	/**
	 * TODO: login 관련 로직 작성하기
	 */
	const [isLogin] = useState<boolean>(true);
	const [isProfileClick, setIsProfileClick] = useState<boolean>(false);

	const handleIsProfileClick = () => {
		const isClick = !isProfileClick;
		setIsProfileClick(isClick);
	};

	return (
		<>
			<NavigationBar>
				<Link to="/">
					<NavbarLogoImg src="https://i.imgur.com/lCXmEsv.png" title="hamkke logo.png" />
				</Link>
				<NavbarLoginElementWrapper>
					{isLogin ? (
						<>
							<Link to="/write">새 글 쓰기</Link>
							<HiOutlineBellAlert className="alert-message" />
							<div onClick={handleIsProfileClick}>프로필</div>
							{isProfileClick && <DropDownMenu handleIsProfileClick={handleIsProfileClick} />}
						</>
					) : (
						<>
							<Link to="/login">새 글 쓰기</Link>
							<Link to="/login">로그인</Link>
						</>
					)}
				</NavbarLoginElementWrapper>
			</NavigationBar>
		</>
	);
};

export default Navbar;

const NavigationBar = styled.nav`
	${tw`
			flex
			justify-between
			items-center
			px-5
			py-4
		`}
`;

const NavbarLogoImg = styled.img`
	${tw`
		h-12
		w-36
	`}
`;

const NavbarLoginElementWrapper = styled.div`
	${tw`
			flex
			justify-evenly
			items-center
			[&>:nth-child(1)]:mr-7
			font-extrabold
			text-xl
			cursor-pointer
		`}
		.alert-message {
			${tw`
				mr-7
			`}
`;
