import { InputProps } from "../../interfaces";
import { Container } from "./style";

const Input = ({ label, register, name, placeholder, type }: InputProps) => {
  return (
    <Container>
      <label>{label}</label>

      <input
        {...register(name)}
        autoComplete="off"
        placeholder={placeholder}
        type={type}
        required={true}
      />
    </Container>
  );
};

export { Input };
