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
  margin-left: 5px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);  
  position: "sticky";
  top: 10px;
  padding: 20px; 
  border-radius: 8px;  
  margin-right: 30px;
  height: 420px;
  background-color: ${({ backgroundColorSecond }) => backgroundColorSecond};
  color: ${({ textColor }) => textColor};
  outline: ${({ isDragOver }) => (isDragOver ? "1px solid #27ae60" : "none")};

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
    height: 360px;
    position: sticky;
    top: 5px;
    flex-shrink: 0;
  }
`;

export const CountryCardWrapper = styled.div`
  width: 310px; 
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
  padding: 25px 20px 10px;

  .favourites {
    @media (max-width: 600px) {
      display: none;
    }
  }
`;

export const CountrySearchWrapper = styled.div`
  margin-top: 40px;

  @media (max-width: 600px) {
    width: 100%;
    margin-top: 20px;
  }
`