import * as React from 'react';
import styled from 'styled-components';

interface OwnProps {
	name: string;
	onClickHandler: (categoryName: string) => void;
	isActive: boolean;
}

export const CategoryItem: React.FunctionComponent<OwnProps> = ({ name, onClickHandler, isActive }: OwnProps) => (
	<StyledCategoryItem onClick={() => onClickHandler(name)} is-active={isActive}>
		{name}
	</StyledCategoryItem>
);

// prettier-ignore
const StyledCategoryItem = styled.li <{ 'is-active': boolean } >`
	background-color: ${(props) => (props['is-active'] ? '#ff0' : '#222')};
	color: ${(props) => (props['is-active'] ? '#222' : '#ff0')};
	padding: 10px;
	margin: 5px;
	border-width: 1px;
	border-style: solid;
	border-color: ${(props) => (props['is-active'] ? '#000' : '#ff0')};
	border-radius: 5px;
	white-space: nowrap;

	flex: 1;

	:hover {
		background-color: ${(props) => (props['is-active'] ? '#222' : '#ff0')};
		border-color: ${(props) => (props['is-active'] ? '#ff0' : '#222')};
		color: ${(props) => (props['is-active'] ? '#ff0' : '#222')};
		cursor: pointer;
	}
`;
