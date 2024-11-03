import { styled } from "styled-components";

export const AppLayout = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;
  background-color: #fafafa;

  .content {
    display: flex;
    flex-grow: 1;
  }
`;

export const HeaderWrapper = styled.div`
    background-color: white !important;
    color: #111517 !important;
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1);
`
export const HeaderContentWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #111517 !important;
`

export const SidebarWrapper = styled.div`
  margin-top: 5px;
  width: 650px;
  background-color: white;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);  
  padding: 20px; 
  border-radius: 8px;  
  margin-right: 30px;

`;

export const CountryListWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  overflow-y: auto;
  gap: 50px;
`;

export const MainContentWrapper = styled.div`
  display: flex;
  flex-grow: 1;
  margin-top: 50px;
  overflow-y: auto;

  .sidebar {
    width: 270px;
    flex-shrink: 1;
    overflow-y: auto;
  }

  .country-list {
    display: flex;
    flex-grow: 1;
    flex-wrap: wrap; 
    padding: 10px;
  }
`;

export const CountryCardWrapper = styled.div`
  width: 230px; 
  background-color: white;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);  
  border-radius: 8px;  
  overflow: hidden; 
  
  .country-img {
    width: 230px;
  }
`;

export const CountryCardTextWrapper = styled.div`
  padding: 25px 20px 50px;
`;

export const CountrySearchWrapper = styled.div`
  margin-top: 50px;
`

export const CountrySearchBar = styled.div`
  background-color: white;
`
