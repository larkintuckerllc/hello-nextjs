import styled from 'styled-components';
import Page from '../components/Page';

const StyledBodyDiv = styled.div`
  text-align: center;
`;
const StyledResponsiveImg = styled.img`
  width: 100%;
  height: auto;
`;

const Index = () => (
  <div>
    <Page>
      <StyledBodyDiv>
        <StyledResponsiveImg
          alt="cat"
          src="/static/cat.jpg"
        />
      </StyledBodyDiv>
    </Page>
  </div>
);

export default Index;
