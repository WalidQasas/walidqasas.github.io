import { styled } from "styled-components";

export const AppLayout = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;

  .content {
    display: flex;
    flex-grow: 1;
  }
`;

export const HeaderWrapper = styled.div`
    background-color: white !important;
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1);
    padding: 0 70px;

    @media (max-width: 600px) {
      padding: 0 15px;
  }
`
export const HeaderContentWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const SidebarWrapper = styled.div`
  margin-top: 5px;
  background-color: white;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);  
  padding: 20px; 
  border-radius: 8px;  
  margin-right: 30px;
  height: 420px;

  @media (max-width: 600px) {
    display: none;
  }
`;

export const CountryListWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  overflow-y: auto;
  gap: 30px;
`;

export const MainContentWrapper = styled.div`
  display: flex;
  margin-top: 30px;
  overflow-y: auto;

  .sidebar {
    overflow-y: scroll;
    height: 360px;
  }

  .country-list {
    flex-grow: 1;
    flex-wrap: wrap; 
    padding: 10px;
    height: 450px;
  }
`;

export const CountryCardWrapper = styled.div`
  width: 310px; 
  background-color: white;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);  
  border-radius: 8px;  
  overflow: hidden; 
  
  .country-img {
    width: 310px;
    height: 190px;
  }

  @media (max-width: 600px) {
    width: 280px;
    .country-img {
      width: 280px;
      height: 160px;
    }
  }
`;

export const CountryCardTextWrapper = styled.div`
  padding: 25px 20px 30px;
`;

export const CountrySearchWrapper = styled.div`
  margin-top: 40px;

  @media (max-width: 600px) {
    width: 100%;
    margin-top: 20px;
  }
`

export const CountrySearchBar = styled.div`
  background-color: white;
`
