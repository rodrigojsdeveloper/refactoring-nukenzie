import { useForm } from "react-hook-form";
import { IForm } from "../../interfaces";
import { Container } from "./style";
import { Input } from "../Input";
import { useState } from "react";

const Form = ({ addCard }: IForm) => {
  const [option, setOption] = useState<string>("Entradas");

  const { register, handleSubmit } = useForm();

  const onSubmitFunc = (data: any) => {
    const { description, price } = data;

    const newData = { description, price, option };

    addCard(newData);
  };

  return (
    <Container onSubmit={handleSubmit(onSubmitFunc)}>
      <div>
        <Input
          type="text"
          name="description"
          placeholder="Digite aqui sua descrição"
          register={register}
          label="Descrição"
        />

        <span>Ex: Compra de roupas</span>
      </div>

      <Input
        type="number"
        name="price"
        placeholder="1"
        register={register}
        label="Valor (R$)"
      />

      <div>
        <label>Tipo de valor</label>

        <select
          name="options"
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
            setOption(e.target.value)
          }
        >
          <option>Entradas</option>
          <option>Despesas</option>
        </select>
      </div>

      <button type="submit">Inserir valor</button>
    </Container>
  );
};

export { Form };
