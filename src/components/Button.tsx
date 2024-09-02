import { ButtonHTMLAttributes } from "react"
import styled from "styled-components"

type ButtonPropsType = {

} & ButtonHTMLAttributes<HTMLButtonElement>

export function Button ({title, onChange, disabled, className}: ButtonPropsType) {
	return (
				<StyledButton onClick={onChange} disabled={disabled} className={className}>{title}</StyledButton>
	)
}

const StyledButton = styled.button`
	width: 200px;
	height: 50px;
	margin: 10px;
	border-radius: 10px;
	font-weight: 700;
	font-size: 45px;
	background-color: #63dbfd;
	`