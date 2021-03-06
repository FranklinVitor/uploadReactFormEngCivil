import React, { useState, useEffect, useMemo } from "react";
import "./Form.css";
import InputMask from "react-input-mask";
import CurrencyInput from "react-currency-input";
import emailjs from "emailjs-com";

const fields = ["name", "phone", "city", "family_income", "ground"];

export function Form() {
  const [state, setState] = useState({});

  useEffect(() => {
    emailjs.init("user_BgXWqgkz0Ko8xjhnWrqGR");
  }, []);

  const formIsValid = useMemo(() => {
      console.log(state)
    for (const field of fields) {
      if (!state[field]) return false;
    }
    return true;
  }, [state]);

  function sendEmail() {
    console.log(state);
    emailjs
      .send("service_3uk7ay9", "template_35pua8e", {
        to_name: "André",
        from_name: "Franklin",
        message: "Oi",
        ...state,
        wallet: state.wallet ? "Sim" : "Não",
      })
      .then(
        function () {
          alert(
            "Formulário enviado com sucesso, em breve entraremos em contato."
          );
          window.location.reload();
        },
        function (error) {
          console.log("FAILED...", error);
        }
      );
  }

  return (
    <form className="form__group">
      <div className="form-input">
        <label htmlFor="name" className="form__group__label">
          <strong>Informe seu nome:* </strong>
        </label>
        <input
          type="text"
          id="name"
          className="form__group__input"
          value={state.name}
          onChange={({ target }) => setState({ ...state, name: target.value })}
          required
        />
      </div>

      <div className="form-input">
        <label htmlFor="numero" className="form__group__label">
          <strong>Número de telefone:* </strong>
        </label>
        <InputMask
          mask="(99) 9 9999-9999"
          id="numero"
          className="form__group__input"
          value={state.phone}
          onChange={({ target }) => setState({ ...state, phone: target.value })}
          required
        />
      </div>

      <div className="form-input">
        <label htmlFor="ramp-up" className="form__group__label">
          <strong>Em qual cidade deseja construir:* </strong>
        </label>
        <input
          type="text"
          id="ramp-up"
          className="form__group__input"
          value={state.city}
          onChange={({ target }) => setState({ ...state, city: target.value })}
          required
        />
      </div>

      <div className="ground-radio">
        <div>
          <p>
            {" "}
            <strong>Modalidade:*</strong>{" "}
          </p>
          <input
            type="radio"
            value="Construção em terreno próprio"
            id="not-buy"
            name="ramp"
            onChange={({ target }) =>
              setState({ ...state, ground: target.value })
            }
            required
            className="Carteira__Assinada"
          />
          <label
            className="radio"
            htmlFor="not-buy"
            className="Carteira__Assinada"
          >
            Construção em terreno próprio
          </label>
        </div>
        <div>
          <input
            type="radio"
            value="Compra de terreno e construção"
            name="ramp"
            id="buy"
            onChange={({ target }) =>
              setState({ ...state, ground: target.value })
            }
            className="Carteira__Assinada"
          />
          <label className="radio" htmlFor="buy" className="Carteira__Assinada">
            Compra de terreno e construção
          </label>
        </div>
      </div>

      <div className="income">
        <label htmlFor="family_income" className="form__group__label">
          <strong>Qual é sua renda familiar?* </strong>
        </label>
        <CurrencyInput
          id="family_income"
          className="form__group__input"
          decimalSeparator=","
          thousandSeparator="."
          value={state.family_income}
          onChange={(value) => setState({ ...state, family_income: value })}
          required
        />
        <p>
          <small>
            * Rendas maiores possibilitam um crédito maior, se sua renda for
            menor que dois salário mínimos você pode financiar com outra pessoa,
            mesmo sem nenhum vínculo com esse novo fiador.
          </small>
        </p>
      </div>

      <div className="Checkbox">
        <input
          type="checkbox"
          name="Checkbox"
          id="check"
          onChange={(value) => setState({ ...state, wallet: !value })}
          required
          className="Carteira__Assinada"
        />
        <label htmlFor="check" className="Carteira__Assinada">
          <strong>Carteira Assinada </strong>
        </label>
      </div>
      <small>* Todos os campos com ( * ) são obrigatórios</small>
      <button
        disabled={!formIsValid}
        type="button"
        className="submit-button btn"
        onClick={() => sendEmail()}
      >
        <strong> ENVIAR</strong>
      </button>
      
      <div></div>
    </form>
  );
}

export default Form;
