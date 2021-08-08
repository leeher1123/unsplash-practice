import React, {useState} from "react";
import styled from "styled-components";
import {useHistory} from 'react-router-dom';
import cn from 'classnames';

import {IconSearch} from "../../../../icons";
import {DefaultButton} from "../Button/Button.Styled";

const SearchBox = ({shape}) => {

  const [value, setValue] = useState('');
  const history = useHistory();

  const onSubmit = (e) => {
    e.preventDefault();
    history.push(`/search/photos/${value}`);
  }

  const onChange = (e) => {
    setValue(e.target.value);
  }

  return (
    <Container className={cn('SearchBox', shape)}>
      <Form onSubmit={onSubmit}>
        <Button><IconSearch/></Button>
        <Label>
          <Input type="text"
                 onChange={onChange}
                 value={value}
                 placeholder={'Search free high-resolution photos'}
          />
        </Label>
      </Form>
    </Container>
  )
}

const Container = styled.div`
  flex: 1;
`;

const Form = styled.form`
  width: 100%;
  padding: 0 14px;
  display: flex;
  align-items: center;

  .round & {
    background: #eee;
    height: 38px;
    border-radius: 19px;
    border: 1px solid transparent;
    transition: .2s;

    &:hover {
      border-color: #ccc;
    }
  }

  .square & {
    background: #fff;
    height: 54px;
    border-radius: 6px;
  }
`;

const Button = styled(DefaultButton)`
  svg {
    .round & {
      width: 20px;
      height: 20px;
    }
    .square & {
      width: 24px;
      height: 24px;
    }
  }
`;

const Label = styled.label`
  height: 100%;
  flex: 1;
`;

const Input = styled.input`
  display: block;
  font-size: 14px;
  padding: 0 8px;
  width: 100%;
  height: 100%;
  outline: 0;
  background: none;
  border: 0;
`;

export default SearchBox;