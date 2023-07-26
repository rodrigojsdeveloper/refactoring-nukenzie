import { InputProps } from "../../interfaces";
import { Container } from "./style";

const Input = ({ label, register, name, placeholder, type }: InputProps) => {
  return (
    <Container>
      <label>{label}</label>

      <input
        type={type}
        required={true}
        autoComplete="off"
        {...register(name)}
        placeholder={placeholder}
      />
    </Container>
  );
};

export { Input };
