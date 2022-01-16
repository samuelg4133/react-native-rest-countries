import styled from "styled-components/native";

export const Button = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  background-color: #1b48ff;
  border-radius: 12px;
  height: 32px;
  margin-top: 12px;
`;

export const ButtonText = styled.Text`
  color: #fff;
  font-size: 14px;
  font-weight: 700;
`;

export const Card = styled.View`
  background-color: #fff;
  border-radius: 12px;
  height: 248px;
  padding: 12px;
  margin-right: 12px;
`;

export const CardTitle = styled.Text`
  color: #05267b;
  font-size: 16px;
  font-weight: 700;
`;

export const Container = styled.View`
  background-color: #add8e6;
  height: 100%;
  width: 100%;
`;

export const DetailRow = styled.View`
  flex-direction: row;
`;

export const Detail = styled.Text`
  color: #1e4abb;
`;

export const Flag = styled.Image`
  margin-bottom: 12px;
  margin-top: 12px;
  height: 100px;
  width: 150px;
`;

export const Input = styled.TextInput`
  border-radius: 12px;
  color: #1e4abb;
  font-size: 16px;
  height: 64px;
  padding: 0 16px;
  width: 100%;
  background: #d6ffff;
`;

export const Row = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 0 16px;
  margin-bottom: 12px;
  width: 100%;
`;

export const Text = styled.Text`
  color: #1e4abb;
  font-size: 16px;
  font-weight: 700;
`;
