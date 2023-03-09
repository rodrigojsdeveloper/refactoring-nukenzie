import { ButtonLink } from "../ButtonLink";
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
          sizeInput="m"
          type="text"
          name="description"
          autoComplete="off"
          placeholder="Digite aqui sua descrição"
          register={register}
          label="Descrição"
          required={true}
        />

        <span>Ex: Compra de roupas</span>
      </div>

      <Input
        sizeInput="s"
        type="number"
        name="price"
        autoComplete="off"
        placeholder="1"
        register={register}
        label="Valor (R$)"
        required={true}
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
