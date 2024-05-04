import styled from 'styled-components'

export const RegisterContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: 'Roboto';
`

export const RegisterSubContainer = styled.div`
  display: flex;
  align-items: center;
`

export const RegisterImage = styled.img`
  width: 60%;
`
export const FormContainer = styled.form`
  padding: 5px;
  min-width: 30vw;
`

export const FormHeading = styled.h1`
  font-size: 50px;
  color: #334155;
`

export const LabelAndInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`

export const Label = styled.label`
  color: #475569;
  font-size: 15px;
  font-weight: bold;
`

export const Input = styled.input`
  border: 1px #cbd5e1 solid;
  width: 350px;
  height: 40px;
  padding: 5px;
  padding-left: 10px;
  margin-top: 10px;
  margin-bottom: 10px;
  font-size: 15px;
  border-radius: 5px;
`

export const Select = styled.select`
  border: 1px #cbd5e1 solid;
  width: 350px;
  height: 40px;
  padding: 5px;
  padding-left: 10px;
  margin-top: 10px;
  margin-bottom: 10px;
  font-size: 15px;
  background-color: transparent;
  cursor: pointer;
  outline: none;
  border-radius: 5px;
`

export const Option = styled.option`
  color: #000000;
`
export const RegisterNowButton = styled.button`
  border: none;
  width: 200px;
  height: 40px;
  padding: 5px;
  padding-left: 10px;
  margin-top: 10px;
  margin-bottom: 10px;
  font-size: 15px;
  background-color: transparent;
  cursor: pointer;
  outline: none;
  background-color: #3b82f6;
  color: #ffffff;
  border-radius: 5px;
  font-weight: bold;
`
export const ErrorMessage = styled.p`
  color: #ff0b37;
  font-size: 13px;
`
