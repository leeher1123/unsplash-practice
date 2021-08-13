import React from "react";
import styled from "styled-components";

const UserItem = ({item}) => {
    return (
        <Container>
          <img src={item.profile_image.medium} alt=""/>
        </Container>
    )
}

const Container = styled.div`

`;

export default UserItem;