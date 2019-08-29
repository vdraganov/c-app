import * as React from 'react';
import styled from 'styled-components';

interface OwnProps {
	className?: string;
}

class SearchField extends React.Component<OwnProps> {
	private searchLabelRef: React.RefObject<HTMLLabelElement>;

	constructor(props: any) {
		super(props);
		this.searchLabelRef = React.createRef();
	}

	inputFocused() {
		const node = this.searchLabelRef.current;

		if (node) node.classList.add('active');
	}

	inputBlur() {
		const node = this.searchLabelRef.current;

		if (node) node.classList.remove('active');
	}

	public render() {
		return (
			<StyledSearchField className={this.props.className}>
				<label ref={this.searchLabelRef} className="search" htmlFor="input_search">
					<input
						id="input_search"
						type="text"
						placeholder="Currently not available :("
						onFocus={this.inputFocused.bind(this)}
						onBlur={this.inputBlur.bind(this)}
						disabled
					/>
				</label>
			</StyledSearchField>
		);
	}
}

const StyledSearchField = styled.div`
	&.shrink {
		display: flex;
		align-items: center;
	}

	.search {
		display: inline-block;
		position: relative;
		height: 25px;
		width: 25px;
		box-sizing: border-box;
		margin: 0px 8px 7px 0px;
		padding: 0 10px;
		border: 3px solid #ff0;
		border-radius: 25px;
		transition: all 200ms ease;
		cursor: text;

		&:after {
			content: "";
			position: absolute;
			width: 3px;
			height: 10px;
			right: -3px;
			top: 16px;
			background: #ff0;
			border-radius: 3px;
			transform: rotate(-45deg);
			transition: all 200ms ease;
		}

		&.active,
		&.debug,
		&:hover {
			width: 200px;
			margin-right: 0px;

			&:after {
				height: 0px;
			}
		}

		input {
			width: 100%;
			border: none;
			box-sizing: border-box;
			font-size: 1em;
			line-height: 1.2em;
			color: inherit;
			background: transparent;
			outline-width: 0px;

			::placeholder {
				color: #fff;
			}
		}
	}
`;

export default SearchField;
