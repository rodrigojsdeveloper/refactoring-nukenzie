import { ProductContext } from "../../contexts/product.context";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Container } from "./style";
import { Input } from "../Input";

const Form = () => {
  const { addCard } = useContext(ProductContext);

  const [option, setOption] = useState<string>("");

  const { register, handleSubmit, reset } = useForm();

  const onSubmitFunc = (data: any) => {
    const { description, price } = data;

    const newData = { description, price, option };

    addCard(newData);
    reset();
  };

  return (
    <Container onSubmit={handleSubmit(onSubmitFunc)}>
      <div className="description-input">
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

      <div className="value-type">
        <label htmlFor="value">Tipo de valor</label>

        <select
          id="value"
          name="options"
          required={true}
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
            setOption(e.target.value)
          }
          defaultValue=""
        >
          <option value="" disabled>
            Selecione o tipo
          </option>
          <option value="Entradas">Entradas</option>
          <option value="Despesas">Despesas</option>
        </select>
      </div>

      <button type="submit">Inserir valor</button>
    </Container>
  );
};

export { Form };
