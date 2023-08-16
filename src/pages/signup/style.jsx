import styled from 'styled-components';


export const Body = styled.div`
    width: 40%;
    height: 75vh;
    display: flex;
    justify-content: center;
    background-color: #fdffff;
    align-items: center;
    background-color: #fdffff;
    border-radius: 0.5rem;
    margin-top: 6rem;
    padding: 2rem 2rem;
    padding-top: 1rem;
    box-shadow:
		10px 10px 10px #d1d9e6,
		-10px -10px 10px #f9f9f9;
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

    div {
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

    span {
        text-align: center;
        margin-left: 1.3rem;
        margin-top: 1rem;
        margin-bottom: 0rem;
        width: 300px;
        font-size: 12px;
    }

    button {
        width: 100px;
        height: 30px;
        margin-top: 1.5rem;
        border-radius: 1rem;
        font-size: 18px;
        border-width: 0.001rem;
        background-color: #fdffff;
        color: #323232;
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
    caret-color: #404141;

    box-shadow:
		inset 2px 2px 4px #d1d9e6,
		inset -2px -2px 4px #f9f9f9;

    &:focus{
		box-shadow:
			inset 4px 4px 4px #d1d9e6,
			inset -4px -4px 4px #f9f9f9;
    }
`
