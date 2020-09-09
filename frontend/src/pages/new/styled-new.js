import styled from "styled-components";

export const NewPost = styled.form`
  background: #fff;
  border: 1.5px solid #ddd;
  padding: 20px;
  min-width: 375px;

  display: flex;
  flex-direction: column;

  box-shadow: 0px 0px 30px -10px rgba(0, 0, 0, 0.75);
  margin: 30px 25%;
  -webkit-box-shadow: 0px 0px 30px -10px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 0px 30px -10px rgba(0, 0, 0, 0.75);
`;

export const InputFile = styled.label`
  width: 20%;
  min-width: 132px;
  background: #7159c1;
  color: #ddd;
  cursor: pointer;
  margin-bottom: 5px;
  border: 1px solid transparent;
  transition: all 270ms;
  padding: 10px 20px;

  flex: 1;

  :hover,
  :focus {
    border: 1px solid #7159c1;
    background: #9275f0;
    color: #fff;
  }
`;

export const Input = styled.input`
  margin: 5px 0px;
  border: 1px solid #ddd;
  padding: 10px 20px;
  font-size: 14px;
  flex: 1;
`;

export const Button = styled.input`
  margin-top: 5px;
  padding: 10px 20px;
  border-radius: 4px;
  border: 1px solid transparent;
  background: #7159c1;
  color: #ddd;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  transition: all 270ms;

  :disabled {
    cursor: not-allowed;
  }

  :hover,
  :focus {
    border: 1px solid #7159c1;
    background: #9275f0;
    color: #fff;
  }

  flex: 1;
`;
