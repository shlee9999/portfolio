import styled from 'styled-components';
import { Title } from './Title';
import { useForm } from 'react-hook-form';

const Root = styled.div`
  height: 80vh;
  background-color: #252934;
  padding: 70px 20% 50px 20%;
  display: flex;
  flex-direction: column;
  gap: 60px;
`;
const HeaderTypo = styled.p`
  font-size: 20px;
  color: #04c2c9;
  text-align: center;
`;
const Form = styled.form`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  width: 50%;
  gap: 5px;
`;
const Input = styled.input`
  border: none;
  background-color: #1e242c;
  outline: none;
  color: white;
  padding: 5px 10px;
  font-size: 18px;
`;
const NameInput = styled(Input)`
  height: 40px;
`;
const EmailInput = styled(Input)`
  height: 40px;
`;
const MessageInput = styled(Input)`
  font-weight: 300;
  flex-grow: 4;
  height: 150px;
`;
const SubmitButton = styled.button`
  width: 125px;
  height: 40px;
  border: 2px solid white;
  text-transform: uppercase;
  font-size: 16px;
  font-weight: 600;
  background-color: transparent;
  color: white;
  letter-spacing: 0.7px;
  align-self: flex-end;
  cursor: pointer;
  transition-property: background-color, border;
  transition-duration: 0.2s;
  transition-timing-function: ease-in;
  &:hover {
    border: 1px solid #04c2c9;
    background-color: #04c2c9;
  }
`;
const ErrorMessage = styled.p`
  color: white;
`;
interface IForm {
  name: string;
  email: string;
  message: string;
}
export const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<IForm>();
  const onValid = (data: IForm) => {
    //요청 전송
    setValue('name', '');
    setValue('email', '');
    setValue('message', '');
  };
  console.log(errors);
  return (
    <Root onSubmit={handleSubmit(onValid)}>
      <Title textColor="white">Contact</Title>
      <HeaderTypo>Have a question or want to work together?</HeaderTypo>
      <Form>
        <NameInput
          {...register('name', { required: 'ㄴ Please write your name!' })}
          placeholder="Name"
        />
        {errors.name ? (
          <ErrorMessage>{errors.name.message}</ErrorMessage>
        ) : null}
        <EmailInput
          {...register('email', {
            required: 'ㄴ Please write your email!',
            validate: value =>
              value.includes('@') ? true : 'ㄴ Please enter in email format.',
          })}
          placeholder="Enter email"
        />
        {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
        <MessageInput
          as="textarea"
          {...register('message', {
            required: 'ㄴ Please write your message!',
          })}
          placeholder="Your Message"
        />
        {errors.message && (
          <ErrorMessage>{errors.message.message}</ErrorMessage>
        )}
        <SubmitButton>Submit</SubmitButton>
      </Form>
    </Root>
  );
};
