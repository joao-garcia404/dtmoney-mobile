import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 25px;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const HeaderText = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: #363F5F;
`;

export const CloseModalButton = styled.TouchableOpacity``;

export const CloseIcon = styled.Image``;

export const Form = styled.View`
  margin-top: 14px;
`;

export const InputContainer = styled.View`
  width: 100%;
  height: 56px;
  border-radius: 5px;
  border-width: 2px;
  padding: 0 10px;
  margin-top: 10px;
  border-color: #D7D7D7;
  background: #E7E9EE;
`;

export const Input = styled.TextInput`
  flex: 1;
  font-size: 16px;
  color: #969CB2;
`;

export const TransactionTypeContainer = styled.View`
  margin-top: 10px;
  flex-direction: row;
  justify-content: space-between;
`;

interface TypeProps {
  isActive: boolean;
  activeColor: 'green' | 'red';
}

const colors = {
  green: 'rgba(51, 204, 149, 0.3)',
  red: 'rgba(229, 46, 77, 0.3)',
}

export const Type = styled.TouchableOpacity<TypeProps>`
  flex-direction: row;
  align-items: center;
  justify-content: center;

  width: 49%;
  height: 56px;
  border-radius: 5px;
  border-width: 2px;
  border-color: #D7D7D7;
  background: ${(props) => props.isActive 
    ? colors[props.activeColor]
    : 'transparent'
  };
`;

export const TypeIcon = styled.Image`
  width: 26px;
  height: 26px;
`;

export const TypeText = styled.Text`
  margin-left: 10px;
  font-size: 16px;
  color: #363F5F;
`;

export const CreateTransactionButton = styled.TouchableOpacity`
  width: 100%;
  height: 56px;
  margin-top: 10px;
  border-radius: 10px;
  background: #33CC95;

  align-items: center;
  justify-content: center;
`;

export const CreateTransactionButtonText = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #fff;
`;

