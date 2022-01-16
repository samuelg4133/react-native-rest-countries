import { Container, Text } from "./styles";

type HeaderProps = {
  title: string;
};

export default function Header({ title }: HeaderProps): JSX.Element {
  return (
    <Container>
      <Text>{title}</Text>
    </Container>
  );
}
