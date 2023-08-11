import styled from 'styled-components';


export const Body = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    background-color: #ecf0f3;
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 1.4rem;

    h1 {
        font-size: 34px;
        margin-bottom: 1.5rem;
        text-align: center;
    }

    p {
        margin-bottom: 2.5rem;
        width: 20rem;
        text-align: center;
        color: #a9b0ba;
        font-size: 15px;
        margin-left: 0.7rem;
    }

    div {
        text-align: center;
    }

    button {
        width: 100px;
        height: 30px;
        margin-top: 2rem;
        border-radius: 1rem;
        font-size: 18px;
        border: none;
        background-color: #227fd5;
        color: #ecf0f3;
        box-shadow:
		8px 8px 16px #d1d9e6,
		-8px -8px 16px #f9f9f9;
        
        cursor: pointer;
		&:hover{
			box-shadow:
				6px 6px 10px #d1d9e6,
				-6px -6px 10px #f9f9f9;
			transform: scale(.985);
			transition: .25s;
		}
		&:active,
		&:focus{
			box-shadow:
				2px 2px 6px #d1d9e6,
				-2px -2px 6px #f9f9f9;
			transform: scale(.97);
			transition: .25s;
		};
    }
`

export const Input = styled.input`
    
    width: 350px;
    height: 40px;
    margin: 4px 0;

    padding-left: 25px;
    font-size: 13px;
    letter-spacing: .15px;
    border: none;
    outline: none;

    transition: .25s ease;
	border-radius: 8px;

    box-shadow:
		inset 2px 2px 4px #d1d9e6,
		inset -2px -2px 4px #f9f9f9;

    &:focus{
		box-shadow:
			inset 4px 4px 4px #d1d9e6,
			inset -4px -4px 4px #f9f9f9;
    }
`
