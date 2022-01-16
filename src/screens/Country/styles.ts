import styled from "styled-components/native";

export const Container = styled.View`
  background-color: #add8e6;
  height: 100%;
  width: 100%;
`;

export const DetailRow = styled.View`
  padding: 0 16px;
  align-items: center;
  flex-direction: row;
`;

export const Prefix = styled.Text`
  color: #007b80;
  font-size: 16px;
  font-weight: 700;
  margin-right: 8px;
`;

export const Detail = styled.Text`
  color: #469536;
  font-size: 16px;
  margin-right: 8px;
`;

export const Divider = styled.View`
  align-self: center;
  height: 2px;
  width: 90%;
  background-color: #aee9e8;
  margin: 6px auto;
`;

export const Flag = styled.Image`
  margin-bottom: 12px;
  margin-top: 12px;
  height: 100px;
  width: 150px;
`;

export const Row = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
  margin-bottom: 12px;
  width: 100%;
`;

export const Title = styled.Text`
  color: #170db3;
  font-size: 18px;
  font-weight: 700;
`;
